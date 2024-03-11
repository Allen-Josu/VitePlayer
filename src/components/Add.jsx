import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

function Add() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
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
              <Form.Control type="text" placeholder="Enter the vedio ID" />
            </Form.Group>

            <Form.Group className='mb-3'>
              <Form.Control type="text" placeholder="Enter the Vedio Caption" />
            </Form.Group>

            <Form.Group className='mb-3'>
              <Form.Control type="text" placeholder="Enter the Image URL" />
            </Form.Group>

            <Form.Group className='mb-3'>
              <Form.Control type="text" placeholder="Enter the Youtube Link" />
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