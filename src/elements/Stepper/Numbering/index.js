import React from 'react'
import Fade from 'react-reveal/Fade'
import PropTypes from 'prop-types'

import "./index.scss"

export default function Numbering({style, className, data, current}) {

        const KeysOfDta = Object.keys(data)

        return (
                <Fade delay={300}>
                        <ol className={["stepper", className].join(" ")} style={style}>
                                {KeysOfDta.map((list, index) =>{
                                        let isActive = list === current ? "active" : ""
                                        if (index + 1 === KeysOfDta.length) {
                                                isActive = ""
                                                return null
                                        }

                                        
                                return (
                                        <li key={`list-${index}`} className={[isActive]}>
                                                {index + 1}
                                        </li>
                                        )
                                })}
                        </ol>
                </Fade>
             )
}

Numbering.propTypes = {
        className: PropTypes.string,
        data: PropTypes.object,
        current: PropTypes.string
}