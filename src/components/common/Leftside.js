import React, { Component } from 'react'
import clock from "../../assets/clock.svg"


export class Leftside extends Component {
    render() {
        return (
            <div>
                <div className="d-flex justify-content-center">
                    <img className="icon-quiz" src={clock} />
                </div>
                <div className="user-contain">

                    <p className="student-name">Current Score </p>
                    <p className="student-name-bold">03</p>
                    <p className="student-name">Current Rank </p>
                    <p className="student-name-bold">02/120</p>
                    <h2>hgh gh hg jh</h2>
                </div>
            </div>
        )
    }
}

export default Leftside
