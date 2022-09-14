

import React from 'react'

 const HelloWorld = (props) =>{
    const {
        greetee = 'World'
    } = props

    return (
        <div>Hello, {greetee}!</div>
    )
}

export default HelloWorld