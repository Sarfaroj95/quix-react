import React, { Component } from 'react'
import clock from "../../assets/clock.svg"
import DecImage from "../../assets/032060_P004_Peregrine.png"




export class Rightans extends Component {
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
                                        <p style={{ "marginTop": "-20px", "textAlign": "right" }}>Rank : 02/120 | Score : 03</p>
                                    </div>






                                    <div className="audio-section-question">
                                        <form>
                                            <div>
                                                <h1 className="questions-quiz">Which is the fastest flying bird in the world, please
                                        select the correct option ?</h1>
                                            </div>


                                            <div>
                                                <p className="ans-tag">Great! You choose the correct option.</p>
                                            </div>





                                            <div className="mt-3">
                                                <p className="dec">The peregrine falcon (Falco peregrinus), also known as the
                                                peregrine,and historically as the duck hawk in North
                                                America,is a widespread bird of prey (raptor) in the family Falconidae. A large,
                                                crow-sized falcon, it has a blue-grey
                                                back, barred white underparts, and a black head. The peregrine is renowned for
                                                its speed, reaching over 320 km/h (200
                                                mph) during its characteristic hunting stoop (high-speed dive), making it the
                                                fastest bird in the world, as well as the
                                                fastest member of the animal kingdom. According to a National Geographic TV
                                                program, the highest measured speed of a
                                                peregrine falcon is 389 km/h (242 mph). As is typical for bird-eating raptors,
                                                peregrine falcons are sexually dimorphic,
                                                with females being considerably larger than males. Peregrine falcons have a
                                                flicker fusion frequency of 129 Hz (cycles
                                        per second), very fast for a bird of its size, and much faster than mammals.</p>
                                            </div>
                                            <div className="palyer">
                                                <img className="img-question" src={DecImage} />

                                            </div>
                                            <div className="btn-quiz-section-video">
                                                <hr className="" />
                                                <button className="button-quiz">Next</button>
                                            </div>
                                        </form>

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

export default Rightans
