import React, { Component } from 'react'
import Logo from "../../assets/qilin.png"
import Leader from "../../assets/profer.svg"


export class Hostleader extends Component {
    render() {
        return (
            <div>
                {/* leader score section */}
                <nav class="menu menu-top">
                    <div class="">
                        <a href="#" class="backBtn">&#8592;&nbsp;</a>
                        <div>
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Rank</th>
                                        <th>Name</th>
                                        <th>Current Score</th>
                                        <th>Time Taken</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th><i style={{ "color": "#fcc719" }} class="pl-1 fas fa-award fa-lg win-1"></i></th>
                                        <th>1</th>
                                        <td>Doe</td>
                                        <td>20</td>
                                        <td>10s</td>
                                    </tr>
                                    <tr>
                                        <th><i style={{ "olor": "#78fc74" }} class="pl-1 fas fa-award fa-lg win-1"></i></th>
                                        <th>2</th>
                                        <td>Moe</td>
                                        <td>19</td>
                                        <td>13s</td>
                                    </tr>
                                    <tr>
                                        <th><i style={{ "color": "#3a4a64" }} class="pl-1 fas fa-award fa-lg win-1"></i></th>
                                        <th>3</th>
                                        <td>Dooley</td>
                                        <td>18</td>
                                        <td>15s</td>
                                    </tr>
                                    <tr>
                                        <th><i style={{ "color": "#e9e4de" }} class="pl-1 fas fa-award fa-lg win-1"></i></th>
                                        <th>4</th>
                                        <td>Dooley</td>
                                        <td>17</td>
                                        <td>15s</td>
                                    </tr>
                                    <tr>
                                        <th><i style={{ "color": "#e9e4de" }} class="pl-1 fas fa-award fa-lg win-1"></i></th>
                                        <th>5</th>
                                        <td>Dooley</td>
                                        <td>15</td>
                                        <td>15s</td>
                                    </tr>
                                    <tr>
                                        <th><i style={{ "color": "#e9e4de" }} class="pl-1 fas fa-award fa-lg win-1"></i></th>
                                        <th>6</th>
                                        <td>Dooley</td>
                                        <td>15</td>
                                        <td>14s</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </nav>
                <div class="main-section">
                    <div class="d-flex justify-content-center align-items-center h-100">
                        <div class="container">
                            <div class="jumbotron" style={{ "padding": "0px", "margin": "0px" }}>
                                <div class="full-section">
                                    <div class="left-section-host">
                                        <div class="d-flex justify-content-center align-items-center h-100">
                                            <img class="icon-2" src={Leader} />
                                        </div>
                                    </div>
                                    <div class="right-section-host">
                                        <div>
                                            <img class="logo" src={Logo} />
                                        </div>
                                        <div class="top-section-quiz">
                                            <div class="top-left-quiz">
                                                <div class="d-flex">
                                                    <div class="question-top">
                                                        <p class="question-no">4</p>
                                                    </div>
                                                    <div class="question-q">
                                                        <p class="question-tag">of&nbsp; 30</p>
                                                    </div>
                                                </div>

                                            </div>
                                            <div class="top-right-quiz">
                                                <h1 class="time-quiz" id="demo"></h1>

                                            </div>
                                        </div>
                                        <div class="pt-3">
                                            <h1 class="questions-quiz">Which is the fastest flying bird in the world, please
                                    select the correct option ?</h1>
                                        </div>
                                        <div class="">
                                            <button herf="quiz.html" class="button">Next Question</button>
                                            <a href="#" id="showTop" class="btn">Leader Board</a>
                                            <h3>Total Participant: 120</h3>

                                        </div>


                                    </div>



                                </div>


                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default Hostleader
