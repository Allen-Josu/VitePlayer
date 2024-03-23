/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import { Col, Row } from "react-bootstrap"
import VideoCard from "./VideoCard"
import { getCategoryAPI, getUploadedVideoAPI, updateCategory } from "../services/allAPI"
import { useEffect, useState } from "react"

function View({ uploadVideoStatus }) {
    const [video, setvideo] = useState([])
    const [deleteVideoStatus, setDeleteVideoStatus] = useState(false)

    const getVideos = async () => {
        const response = await getUploadedVideoAPI()
        const { data } = response
        setvideo(data)
    }

    const dragOver = (e) => {
        e.preventDefault()
    }

    const videoDrop = async (e) => {
        const { categoryId, videoId } = e.dataTransfer.getData("dataShared")

        const { data } = await getCategoryAPI()
        let selectedCategory = data.find(item => item.id == categoryId)

        let newCategory = selectedCategory.allVideos.filter((item) => item.id != videoId)

        await updateCategory(categoryId,newCategory )

    }

    useEffect(() => {
        getVideos(), setDeleteVideoStatus(false)
    }, [uploadVideoStatus, deleteVideoStatus])


    return (
        <>
            <Row className="w-100" droppable="true" onDragOver={(e) => dragOver(e)} onDrop={(e) => videoDrop(e)}>
                {video?.length > 0 ?
                    video?.map((item) => (
                        <Col sm={12} md={6} lg={4} xl={3}>
                            <VideoCard setDeleteVideoStatus={setDeleteVideoStatus} displayVideo={item} />
                        </Col>
                    )) : <p className="text-warning ms-5 mt-3 fs-4">No video Uploaded yet</p>
                }
            </Row>
        </>
    )
}

export default View