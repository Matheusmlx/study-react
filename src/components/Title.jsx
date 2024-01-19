
import React from 'react'
import PropsType from 'prop-types'
function Title(props) {
    
    return (
        <>
            {props.children}
        </>
    )
}

Title.PropsType = {
    children: PropsType.node,
    otherProp: PropsType.any
}

export default Title