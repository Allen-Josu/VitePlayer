/* eslint-disable react/prop-types */
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

function VideoCard({ displayVideo }) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    console.log(displayVideo?.caption);

    return (
        <>
            <Card style={{ width: '100%' }} className='mt-4'>
                <Card.Img height={"350px"} onClick={handleShow} variant="top" src={`${displayVideo?.image_url}`} />
                <Card.Body className='d-flex justify-content-between'>
                    <Card.Text>{displayVideo?.caption.slice(0, 20)}</Card.Text>
                    <Button variant="danger"><i className="fa-solid icon fa-trash"></i></Button>
                </Card.Body>
            </Card>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{displayVideo?.caption.slice(0, 20)}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <iframe width="100%" height="315" src={`${displayVideo?.url}?autoplay=1`} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default VideoCard