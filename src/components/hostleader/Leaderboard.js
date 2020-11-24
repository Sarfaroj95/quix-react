import React, { Component } from 'react'
import tableData from "../../assets/fakedb/table.json"

export class Leaderboard extends Component {
    render() {

        return (
            <div>
                <div className="video-section">
                    <div className="d-flex justify-content-center align-items-center h-100">
                        <div className="main-leader bg-light">
                            <div className="table-header" style={{ "height": "60px" }}>
                                <p className="text-center pt-2 ">Leaderboard</p>
                            </div>
                            <table className="table table-striped main-table">

                                <thead className="">
                                    <tr>

                                        <th scope="col "></th>
                                        <th scope="col ">Rank</th>
                                        <th scope="col ">Name</th>
                                        <th scope="col ">Current Score</th>
                                        <th scope="col ">Time taken </th>

                                    </tr>
                                </thead>
                                <tbody className="">
                                    {tableData.map((tabledetails, index) => {
                                        return <tr>

                                            <th scope="row"><i style={{ "color": "#FF8C00" }} className="pl-1 fas fa-award fa-lg win-1"></i></th>
                                            <th scope="row">{tabledetails.id}</th>
                                            <td>{tabledetails.name}</td>
                                            <td>{tabledetails.current_score}</td>
                                            <td>{tabledetails.take_time}s</td>
                                        </tr>
                                    })}


                                    {/* <tr className="you">
                                        <th scope="row"><i style={{ "color": "#ffffff" }} className="pl-1 fas fa-award fa-lg win-3"></i></th>
                                        <th className="you-text" scope="row">3</th>
                                        <td className="you-text">Omar (You)</td>
                                        <td className="you-text">18</td>
                                        <td className="you-text">18s</td>


                                    </tr> */}












                                </tbody>

                            </table>

                            <div>
                                <hr />
                            </div>
                            <div className="d-flex justify-content-around">

                                <div>
                                    <p className="explain font-weight-bold">Total Participant: 120</p>
                                </div>
                                <div>
                                    <button className="button" style={{ "marginTop": "-8px" }}>Next Question </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Leaderboard
