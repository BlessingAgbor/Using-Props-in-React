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
import Course from './Price'
import Date from './date'
import New from './New'
import Butt from './Button'
import Butt2 from './Button2'



// const date= new Date(2022, 12, 8)
// const course= "Python"
// const price= '$30.0'
const data= {
    course: "Cloud-computing",
    price: '$100.0'
}

const mrUbani= (Props)=> {
    return(
        <Contain>
           <Wrapper>
           <Course 
            des1="December"
            des2="25"
            des3="1997"

            />
            <Date
            desc= {data.course}
             />
             <New
            price= {data.price}
              />

           </Wrapper>

        </Contain>
    )
}

export default mrUbani

const Contain= styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content:center;
/* background-color:black; */
margin-bottom: 10px;
box-sizing: border-box;

`
const Wrapper= styled.div`
width: 50%;
height: 150px;
justify-content: space-evenly;
align-items: center;
margin: 10px;
border-radius: 4px;
padding-left: 15px;
 flex-direction: row-reverse;

background-color: chartreuse;
display: flex;
box-shadow: 2px 2px 2px 2px rgb(2 4 8);
`


