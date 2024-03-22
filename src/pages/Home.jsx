import { Link } from "react-router-dom"
import Add from "../components/Add"
import View from "../components/View"
import Category from "../components/Category"
// import { useState } from "react"

function Home() {
    // const [uploadVediosStatus,setUploadVideoStatus]=useState()
    return (
        <>
            <div className="container mt-5 d-flex justify-content-between align-items-center">
                <Add />
                <Link to={"/watchHistory"} className="fs-5" style={{ textDecoration: "none", color: "white" }}>Watch History</Link>
            </div>
            <div className="d-flex p-2 row justify-content-center align-items-center w-100">
                <div className="col-md-9 ">
                    <h4>All vedios</h4>
                    <View />
                </div>
                <div className="col-md-3">
                    <Category />
                </div>
            </div>
        </>
    )
}

export default Home