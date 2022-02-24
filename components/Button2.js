import React from 'react'
import styled from 'styled-components'

const Button = ()=> {
    return(
        <div>
            {/* <Butt>
                LEARN MORE
            </Butt> */}

            <Butt>
                Get Now
            </Butt>
        </div>
    )
}

export default Button

// const Butt = styled.button`
// width: 150px;
// height: 40px;
// outline: none;
// font-size: 15px;
// border-radius: 5px;
// border: none;
// background-color: #FD7F00;
// color: white;
// cursor: pointer;
// font-weight: bold;
// `

const Butt = styled.button`
height: 40px;
outline: none;
font-size: 15px;
border-radius: 5px;
border: none;
background-color: white;
    width: 100px;
color: white;
cursor: pointer;
font-weight: bold;

:hover{
    background-color: black;
    width: 110px;
font-size: 17px;

}
`