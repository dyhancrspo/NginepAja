import React, { useRef } from 'react'  
import PropTypes from 'prop-types'

import "./index.scss"

export default function File(props) {
        const { 
                name,
                value,
                placeholder,
                accept,
                append,
                prepend, 
                outerClassName, 
                inputClassName, 
        } = props

        const refInputFile = useRef(null)

        return (
                <div className={["input-text mb-3", outerClassName].join(" ")}>
                <div className="input-group">
                        { prepend && (
                                <div className="input-group-prepend bg-gray-900">
                                          <span className="input-group-text">
                                                  {prepend}
                                          </span>
                                  </div>
                                )}
                                <input 
                                accept={accept}
                                ref={refInputFile}
                                name={name}
                                className="d-none"
                                type="file"
                                value={value}
                                placeholder={placeholder}
                                onChange={props.onChange}
                                />
                                <input
                                onClick={() => refInputFile.current.click()}
                                defaultValue={value}
                                placeholder={placeholder}
                                className={["form-control", inputClassName].join(" ")}
                                />
                                { append && (
                                        <div className="input-group-append bg-gray-900">
                                                <span className="input-group-append">
                                                        {append}
                                                </span>
                                        </div>
                                )}
                </div>
        </div>
)}

File.defaultProps = {
        placeholder: "Browse a file...",
}

File.propTypes = {
        name: PropTypes.string.isRequired,
        accept: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired,
        onChange: PropTypes.func.isRequired,
        prepend: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
        append: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
        type: PropTypes.string,
        placeholder: PropTypes.string,
        outerClassName: PropTypes.string,
        inputClassName: PropTypes.string,
}
