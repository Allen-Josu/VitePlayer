/* eslint-disable react/jsx-key */
import { Link } from "react-router-dom"
import { deleteVideoHistory, getVideoFromHistory } from "../services/allAPI"
import { useEffect, useState } from "react"

function WatchHistory() {
    const [history, setHistory] = useState([])
    const [deleteHistoryStatus, setDeleteHistoryStatus] = useState(false)

    const getHistory = async () => {
        let response = await getVideoFromHistory()
        setHistory(response.data)
    }



    useEffect(() => {
        getHistory()
        setDeleteHistoryStatus(false)
    }, [deleteHistoryStatus])

    const handleDelete = async (id) => {
        const response = await deleteVideoHistory(id)
        if (response.status >= 200 && response.status < 300) {
            setDeleteHistoryStatus(true)
        }
        else {
            alert("An Error has been occured")
        }
    }

    return (
        <>
            <div className="mt-5 d-flex justify-content-between p-5 align-items-center">
                <h3>Watch History</h3>
                <Link to={"/home"} style={{ textDecoration: "none", color: "white" }}><i className="fa-solid fa-arrow-left pe-2"></i> Back to home</Link>
            </div>


            <div className=" d-flex justify-content-center align-items-center m-5 p-5">
                {history?.length > 0 ?
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
                            {
                                history?.map((item, index) => (
                                    <tr>
                                        <td>{index + 1}</td>
                                        <td>{item.caption}</td>
                                        <td><a href={`${item.url}`} target="_blank">{item.url}</a> </td>
                                        <td>{item.timeStamp}</td>
                                        <td><button className="btn btn-danger" onClick={() => handleDelete(item.id)} ><i className="fa-solid fa-trash"></i></button></td>
                                    </tr>
                                ))
                            }

                        </tbody>
                    </table>
                    : <p className="text-warning fs-3">No History</p>
                }
            </div>
        </>
    )
}

export default WatchHistory