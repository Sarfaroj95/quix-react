import React, { Component } from 'react'
import clock from "../../assets/clock.svg"
import A from "../../assets/uyZWW7-broad-winged-albatross-png-free-download.png"
import B from "../../assets/032060_P004_Peregrine.png"
import C from "../../assets/download.jpg"
import D from "../../assets/d03b846e0d53bca1a9070ac0c79964f0.png"


export class Quiz extends Component {
    render() {
        return (
            <div>
                <div className="video-section">
                    <div className="d-flex justify-content-center align-items-center h-100">
                        <div className="jumbotron-video">
                            <div className="full-section">
                                <div className="left-section-quiz mobile-2">

                                    <div className="d-flex justify-content-center">
                                        <img className="icon-quiz" src={clock} />
                                    </div>
                                    <div className="user-contain">
                                        <p className="student-name">Current Score </p>
                                        <p className="student-name-bold">03</p>
                                        <p className="student-name">Current Rank </p>
                                        <p className="student-name-bold">02/120</p>
                                    </div>
                                </div>

                                <div className="right-section-quiz">
                                    <div className="top-section-quiz">
                                        <div className="top-left-quiz">
                                            <div className="d-flex">
                                                <div className="question-top">
                                                    <p className="question-no">4</p>
                                                </div>
                                                <div className="question-q">
                                                    <p className="question-tag">/&nbsp; 30</p>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="top-right-quiz">
                                            <h1 className="time-quiz" id="demo"></h1>

                                        </div>
                                    </div>

                                    <div className="mobile">
                                        <p style={{ "marginTop": "-20px", "textAlign": "center" }}>Rank : 02/120 | Score : 03</p>
                                    </div>

                                    <div className="audio-section-question">
                                        <form>
                                            <div>
                                                <h1 className="questions-quiz">Listen to the audio and answer !</h1>
                                            </div>



                                            <div className="palyer">

                                                <audio preload="none" style={{ "backgroundColor": "#e8ecf0" }} controls
                                                    controlsList="nodownload">
                                                    <source src="https://happyloan.qilinlab.com/assets/images/audio.mp4"
                                                        type="audio/mp3" />
                                                </audio>
                                            </div>

                                            <div className="form-group mt-3">

                                                <div className="answer-section-video">
                                                    <div className="anser-pic">
                                                        <div className="pb-3">
                                                            <h6 className="select-ans">Please select your answer.</h6>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-lg-6 col-md-6">
                                                                <label className="radio-quiz">
                                                                    <div className="img-ans-section">
                                                                        <img className="img-thumb"
                                                                            src={A} />
                                                                    </div><span className="list-dec">(A)</span>
                                                                    <input type="radio" name="radio" />
                                                                    <span className="checkmark"></span>
                                                                </label>
                                                            </div>
                                                            <div className="col-lg-6 col-md-6 ">
                                                                <label className="radio-quiz">
                                                                    <div className="img-ans-section">
                                                                        <img className="img-thumb"
                                                                            src={B} />

                                                                    </div><span className="list-dec">(B)</span>
                                                                    <input type="radio" name="radio" />
                                                                    <span className="checkmark"></span>
                                                                </label>
                                                            </div>
                                                            <div className="col-lg-6 col-md-6 ">
                                                                <label className="radio-quiz">
                                                                    <div className="img-ans-section">
                                                                        <img className="img-thumb" src={C} />
                                                                    </div><span className="list-dec">(C)</span>
                                                                    <input type="radio" name="radio" />
                                                                    <span className="checkmark"></span>

                                                                </label>
                                                            </div>
                                                            <div className="col-lg-6 col-md-6 ">
                                                                <label className="radio-quiz">
                                                                    <div className="img-ans-section">
                                                                        <img className="img-thumb"
                                                                            src={D} />
                                                                    </div><span className="list-dec">(D)</span>
                                                                    <input type="radio" name="radio" />
                                                                    <span className="checkmark"></span>
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <div className="btn-quiz-section">
                                                                    <hr className="pb-2" />
                                                                    <button className="button-quiz">Submit</button>
                                                                </div> */}

                                        </form>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}

export default Quiz
