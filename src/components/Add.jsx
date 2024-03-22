import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

function Add() {
  const [show, setShow] = useState(false);
  const [video, setVideo] = useState({
    id: "",
    caption: "",
    url: "",
    image_url: ""
  })

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const getEmbedLink = (e) => {
    const text = e.target.value
    if (text.endsWith("shared")) {
      const link = `https://www.youtube.com/embed/${text.slice(-26, -15)}`
      setVideo({...video, url: link})
    }
    else {
      const link = `https://www.youtube.com/embed/${text.slice(-11)}`
      setVideo({...video, url: link})
    }
  }
  console.log(video);

  return (
    <>
      <div className="d-flex ">
        <h5 className="me-2 mt-2">Upload New Vedio <button onClick={handleShow} className="btn "><i className="fa-solid icon  fa-2x fa-cloud-arrow-up"></i> </button> </h5>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className='d-flex align-items-center p-3'>
            <i className="text-warning fa-solid icon fa-film"></i>
            <span className='ms-2'>Upload Videos</span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Please fill the following details</p>
          <Form className='border rounded p-3 border-secondary'>
            <Form.Group className='mb-3'>
              <Form.Control type="text" placeholder="Enter the vedio ID" onChange={(e) => setVideo({ ...video, id: e.target.value })} />
            </Form.Group>

            <Form.Group className='mb-3'>
              <Form.Control type="text" placeholder="Enter the Vedio Caption" onChange={(e) => setVideo({ ...video, caption: e.target.value })} />
            </Form.Group>

            <Form.Group className='mb-3'>
              <Form.Control type="text" placeholder="Enter the Image URL" onChange={(e) => setVideo({ ...video, image_url: e.target.value })} />
            </Form.Group>

            <Form.Group className='mb-3'>
              <Form.Control type="text" placeholder="Enter the Youtube Link" onChange={(e) => getEmbedLink(e)} />
            </Form.Group>

          </Form>
        </Modal.Body>
        <Modal.Footer>
          <button className="btn btn-danger" onClick={handleClose}>Cancel</button>
          <button className="btn btn-warning">Upload</button>
        </Modal.Footer>
      </Modal>

    </>
  )
}

export default Add