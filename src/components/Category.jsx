import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import VideoCard from "./VideoCard"

function Category() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className='d-flex me-3'>
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
              <Form.Control type="text" placeholder="First name" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <button className='btn'>Cancel</button>
          <button className="btn btn-warning">Add</button>
        </Modal.Footer>
      </Modal>

      <div className="border border-secondary w-100 p-3 rounded mt-5">
        <div className="d-flex justify-content-between align-items-center">
          <p>Categoryy Name</p>
          <button className="btn btn-danger ms-auto"><i className="fa-solid icon fa-trash"></i></button>
        </div>

        <VideoCard />
      </div>
    </>
  )
}

export default Category