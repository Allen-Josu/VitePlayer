import { Link } from "react-router-dom"
import Add from "../components/Add"
import View from "../components/View"
import Category from "../components/Category"
import { useState } from "react"

function Home() {
    const [uploadVideoStatus, setUploadVideoStatus] = useState({})
    return (
        <>
            <div className="container mt-5 d-flex justify-content-between align-items-center">
                <Add setUploadVideoStatus={setUploadVideoStatus} />
                <Link to={"/watchHistory"} className="fs-5" style={{ textDecoration: "none", color: "white" }}>Watch History</Link>
            </div>
            <div className="row">
                <div className="col-md-9 ">
                    <h4 className="mt-4">All vedios</h4>
                    <View uploadVideoStatus={uploadVideoStatus} />
                </div>
                <div className="col-md-3 px-5">
                    <Category />
                </div>
            </div>
        </>
    )
}

export default Home