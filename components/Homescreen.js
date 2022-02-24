
import React from 'react'
import styled from 'styled-components'
import MrUbani from './Section'
import MrUbani2 from './SectionB'

const Homescreen = ()=> {
  return(
    <div>
      <Wrapper>
      <MrUbani/>

      <MrUbani2/>

      <MrUbani/>

      </Wrapper>
    </div>
  )
}

export default Homescreen

const Wrapper= styled.div`
background-color: aliceblue;
width: 100%;

`