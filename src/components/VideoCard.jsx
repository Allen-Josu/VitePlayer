/* eslint-disable react/prop-types */
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { addToHistoy, deleteVideoAPI } from "../services/allAPI";

function VideoCard({ displayVideo, setDeleteVideoStatus, isPresent }) {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);

    //function to add to History
    const handleShow = async () => {
        setShow(true);
        let caption = displayVideo?.caption;
        let url = displayVideo.url;
        let time = new Date();
        let timeStamp = new Intl.DateTimeFormat("en-GB", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
        }).format(time);
        const reqBody = { caption, url, timeStamp };
        await addToHistoy(reqBody);
    };

    //function to delete a video
    const handleDeleteVideo = async (id) => {
        await deleteVideoAPI(id);
        setDeleteVideoStatus(true);
    };

    //function to drag the video
    const videoDrag = (e, id) => {
        e.dataTransfer.setData("videoId", id)
    }

    return (
        <>
            <Card style={{ width: "100%" }} className="mt-4" draggable onDragStart={(e) => videoDrag(e, displayVideo.id)}>
              { !isPresent&& <Card.Img

                    height={"250px"}
                    onClick={handleShow}
                    variant="top"
                    src={`${displayVideo?.image_url}`}
                />}
                <Card.Body className="d-flex justify-content-between">
                    <Card.Text>{displayVideo?.caption.slice(0, 20)}</Card.Text>
                    {!isPresent && <Button
                        variant="danger"
                        onClick={() => handleDeleteVideo(displayVideo?.id)}
                    >
                        <i className="fa-solid icon fa-trash"></i>
                    </Button>}
                </Card.Body>
            </Card>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        {displayVideo?.caption.slice(0, 20)}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <iframe
                        width="100%"
                        height="315"
                        src={`${displayVideo?.url}?autoplay=1`}
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    ></iframe>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default VideoCard;
