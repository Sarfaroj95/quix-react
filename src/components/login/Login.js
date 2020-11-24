import React, { Component } from 'react'
import Logo from "../../assets/qilin.png"
import Iconlog from "../../assets/undraw_exams_g4ow.svg"


export class Login extends Component {
    render() {
        return (
            <div>
                <div className="main-section">
                    <div class="d-flex justify-content-center align-items-center h-100">

                        <div className="container">
                            <div className="jumbotron" style={{ "padding": "0px", "margin": "0px;" }}>
                                <div class="full-section login-page">
                                    <div class="left-section">
                                        <div>
                                            <img className="logo" src={Logo} />
                                        </div>
                                        <h1 className="title">Quiz Application</h1>
                                        <div>
                                            <p className="sub-title">Please login right credentials</p>
                                        </div>
                                        <div className="form-section">
                                            <form>
                                                <div className="form-group">
                                                    <input type="text" className="form-control" required placeholder="Enter Your Name" />
                                                </div>
                                                <div className="form-group">
                                                    <input type="text" className="form-control" required placeholder="Enter Your Pin" />
                                                </div>
                                                <div>
                                                    <button herf="quiz.html" className="button">Join &#62;&#62;</button>
                                                </div>

                                            </form>
                                        </div>
                                    </div>

                                    <div className="right-section">
                                        <div className="d-flex justify-content-center align-items-center h-100">
                                            <img className="icon" src={Iconlog} />
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

export default Login
