// import React from 'react'
// import styled from 'styled-components'
// import Button from './Button'

// function Section (Props){
// return(
//     <Container>
//         <ContainAll>
//             <Hold direc= {Props.direc}>
//                 <Image src= {Props.Parents}/>
//                 <Text>
//                     <H1>{Props.title}</H1>
//                     <P>{Props.description}</P>
//                     <P>{Props.desc}</P>
//                     <P>{Props.des}</P>
//                     <Button/> 
//                 </Text>
//             </Hold>
//         </ContainAll>
//     </Container>
// );
    
// };

// export default Section;

// const Container= styled.div``

// const ContainAll= styled.div`
// width: 100%;
// padding-top: 50px;
// display: flex;
// justify-content: center;
// background-color: #EBFCFF;
// `
// const Hold= styled.div`
// width: 80%;
// justify-content: space-between;
// align-items: center;
// display: flex;
// flex-direction: ${({direc}) => direc};
// `
// const Image= styled.img`
// width: 40%;
// display: flex;
// `
// const Text= styled.div`
// width: 50%;
// display: flex;
// flex-direction: column;
// `
// const H1 = styled.h1`

// `
// const P = styled.p`
// font-size: 17px;
// width: 95%;
// color: #484C4D;
// `


import React from 'react'
import styled from 'styled-components'

const Prices= (Props)=>{
    return(
        <div>
            <Container>
            <Price>
                <P>
                {Props.des1}
                </P>
                <P>
                {Props.des2}
                </P>
                <P>
                {Props.des3}
                </P>

            </Price>


            </Container>
        </div>
    )
}

export default Prices

const Container= styled.div`
width: 80px;
display: flex;

/* background-color:red; */
`
const Price= styled.div`
width: 100%;
height: 80px;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
padding: 5px;
background-color:black;
    color: white;
    font-size: 15px;
border-radius: 5px;
cursor: pointer;
:hover{
    width: 120px;
    background-color:red;
}
`

const P = styled.div`
`