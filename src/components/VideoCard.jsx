import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

function VideoCard() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Card style={{ width: '100%' }} className='mt-4'>
                <Card.Img height={"350px"} onClick={handleShow} variant="top" src="https://m.media-amazon.com/images/M/MV5BYzFmODBhMjQtNjE0ZC00ZjczLTg5ZjktNTZhYzA0YmVkNzZjXkEyXkFqcGdeQXVyMTYwMjkzMjkx._V1_FMjpg_UX1000_.jpg" />
                <Card.Body className='d-flex justify-content-between'>
                    <Card.Text>movie</Card.Text>
                    <Button variant="danger"><i className="fa-solid icon fa-trash"></i></Button>
                </Card.Body>
            </Card>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Movie</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <iframe width="100%" height="315" src="https://www.youtube.com/embed/WWr9086eWtY?si=uKviGiSMIOYDcmtm?autoplay=1" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default VideoCard