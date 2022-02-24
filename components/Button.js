import React from 'react'
import styled from 'styled-components'

const Button = ()=> {
    return(
        <div>
            {/* <Butt>
                LEARN MORE
            </Butt> */}

            <Butt>
                Click to buy
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
font-size: 13px;
border-radius: 5px;
border: none;
background-color: black;
    width: 90px;
color: white;
cursor: pointer;
font-weight: bold;

:hover{
    background-color: black;
    width: 110px;
font-size: 17px;

}
`