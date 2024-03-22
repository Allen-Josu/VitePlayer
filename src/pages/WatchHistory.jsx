import { Link } from "react-router-dom"

function WatchHistory() {
    return (
        <>
            <div className="mt-5 d-flex justify-content-between p-5 align-items-center">
                <h3>Watch History</h3>
                <Link to={"/home"} style={{ textDecoration: "none", color: "white" }}><i className="fa-solid fa-arrow-left pe-2"></i> Back to home</Link>
            </div>


            <div className=" d-flex justify-content-center align-items-center m-5 p-5">
                <table className="table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Caption</th>
                            <th> URL</th>
                            <th>Time Stamp</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Caption</td>
                            <td>www.google.com</td>
                            <td>21-10-2024</td>
                            <td><button className="btn btn-danger"><i className="fa-solid fa-trash"></i></button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default WatchHistory