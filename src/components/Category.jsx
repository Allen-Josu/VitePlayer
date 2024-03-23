/* eslint-disable react/jsx-key */
import { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { Col, Row } from "react-bootstrap"
import VideoCard from "./VideoCard"
import { addCategoryAPI, deleteCategoryAPI, getAVideos, getCategoryAPI, updateCategory } from '../services/allAPI';

function Category() {
  const [show, setShow] = useState(false);
  const [categoryName, setCategoryName] = useState("")
  const [allCategory, setAllCategory] = useState([])
  const [addCategoryStatus, setAddCategoryStatus] = useState(false)
  const [deleteCategoryStatus, setDeleteCategoryStatus] = useState(false)

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleCategoryAdd = async () => {
    if (categoryName) {
      let reqBody = {
        category: categoryName,
        allVideos: []
      }
      const response = await addCategoryAPI(reqBody)
      if (response.status >= 200 && response.status < 300) {
        handleClose()
        alert("Category Added Succesfully")
        setAddCategoryStatus(true)
      }
      else {
        alert("An error has been occured")

      }
    }
    else {
      alert("Enter a Category Name")
    }
  }

  //funtction to  get all category
  const getAllCategory = async () => {
    const response = await getCategoryAPI()
    setAllCategory(response.data)
  }

  //function to detelet a category
  const deleteCategory = async (id) => {
    await deleteCategoryAPI(id)
    setDeleteCategoryStatus(true)
  }

  //function to prevent the data lost on drag
  const dragVideoOver = (e) => {
    e.preventDefault()
  }

  //function for drop
  const dropVideo = async (e, categoryid) => {
    console.log(categoryid);
    const videoid = e.dataTransfer.getData("videoId")
    console.log(videoid);

    const { data } = await getAVideos(videoid)
    console.log(data);

    const selectedCategory = allCategory.find((item) => item.id === categoryid)
    console.log(selectedCategory);
    selectedCategory.allVideos.push(data)

    await updateCategory(categoryid, selectedCategory)

    getAllCategory()
  }


  const dragStart = (e, categoryid, videoid) => {
      console.log(`Category id is ${categoryid}`);
      console.log(`Video id is ${videoid}`);

      let dataShared = {categoryid,videoid}
      e.dataTransfer.setData("dataShared",JSON.stringify(dataShared))

  }


  useEffect(() => {
    getAllCategory()
    setAddCategoryStatus(false)
    setDeleteCategoryStatus(false)
  }, [addCategoryStatus, deleteCategoryStatus])

  return (
    <>
      <div className='d-flex me-3 mt-5'>
        <button onClick={handleShow} className="btn btn-warning w-100">Add New Category</button>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className='d-flex alifn-items-center'>
            <i className="fa-solid icon text-warning fa-pencil"></i> <span className='ms-2'>Add New Category</span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form className='border rounded border-secondary p-3'>
            <p>Category Name</p>
            <Form.Group>
              <Form.Control type="text" placeholder="Enter Category Name" onChange={(e) => setCategoryName(e.target.value)} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <button className='btn' onClick={handleClose}>Cancel</button>
          <button className="btn btn-warning" onClick={handleCategoryAdd}>Add</button>
        </Modal.Footer>
      </Modal>

      {allCategory?.length > 0 ? allCategory.map((item) => (
        <div className="border border-secondary w-100 p-3 rounded mt-3" droppable onDragOver={(e) => dragVideoOver(e)} onDrop={(e) => dropVideo(e, item.id)}>
          <div className="d-flex justify-content-between align-items-center">
            <p>{item.category}</p>
            <button className="btn btn-danger ms-auto" onClick={() => deleteCategory(item.id)}><i className="fa-solid icon fa-trash"></i></button>
          </div>
          <Row>
            {item.allVideos.length > 0 ?
              item.allVideos.map((card) => (
                <Col sm={12} draggable onDragStart={(e) => dragStart(e, item.id, card.id)}>
                  <VideoCard displayVideo={card} isPresent={true} />
                </Col>
              ))
              : null
            }

          </Row>
        </div>
      )) : <p className='text-danger mt-5'>NO Category Added Yet</p>
      }

    </>
  )
}

export default Category