import React from 'react'
import styled from 'styled-components'
import Button from './Button'

function Section2 (Props){
return(
    <Container>
        <ContainAll>
            <Hold>
                <Image src= {Props.Parents}/>
                <Text>
                    <H1 >{Props.title}</H1>
                    <P>{Props.description}</P>
                    <P>{Props.desc}</P>
                    <P>Select the option that’s best for your child!</P>
                    <Button/>
                </Text>
            </Hold>
        </ContainAll>
    </Container>
);
    
};

export default Section2;

const Container= styled.div``

const ContainAll= styled.div`
width: 100%;
padding-top: 50px;
display: flex;
justify-content: center;
background-color: #EBFCFF;
`
const Hold= styled.div`
width: 80%;
justify-content: space-between;
align-items: center;
display: flex;
flex-direction: row;
`
const Image= styled.img`
width: 50%;
/* border-radius: 100%; */
display: flex;
/* border-radius: 100%; */
`
const Text= styled.div`
width: 50%;
display: flex;
flex-direction: column;
`
const H1 = styled.h1`

`
const P = styled.p`
font-size: 17px;
width: 100%;
`
// const Ps = styled.p`
// color: #1699A9;
// `