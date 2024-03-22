/* eslint-disable react/jsx-key */
import { Col, Row } from "react-bootstrap"
import VideoCard from "./VideoCard"
import { getUploadedVideoAPI } from "../services/allAPI"
import { useEffect, useState } from "react"

function View() {
    const [video, setvideo] = useState([])

    const getVideos = async () => {
        const response = await getUploadedVideoAPI()
        const { data } = response
        setvideo(data)
    }

    // console.log(video);
    useEffect(() => {
        getVideos()
    }, [])


    return (
        <>
            <Row className="w-100">
                {video?.length > 0 ?
                    video?.map((item) => (
                        <Col sm={12} md={6} lg={4} xl={3}>
                            <VideoCard displayVideo={item} />
                        </Col>
                    )) : <p className="text-warning ms-5 mt-3 fs-4">No video Uploaded yet</p>
                }
            </Row>
        </>
    )
}

export default View