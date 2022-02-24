// import React from 'react';
// import styled from 'styled-components'
// // import './App.css'
// import Section from './components/Section'
// import Parent from './for-parents.webp'
// import Teacher from './for-teachers.webp'
// function App () { 
//   return (
//     <Hold>

//       <Section 
//        title= "Parents" 
//        Parents= {Parent}
//        description = "Coding is quickly becoming an essential skill, one that will prepare your kids to succeed in an increasingly digital world. "
//        desc= " Tynker offers a range of options to learn coding: Your children can learn to code with our self-paced, immersive game-like courses  and then advance to learning real-world Python and JavaScript"
//       //  col= " "
//        des= "Select the option that’s best for your child!"
//        />
      
//       {/* The second Section */}

//       <Section 
//        direc = {"row-reverse"}
//        title= "Teacher" 
//        Parents= {Teacher}
//        description = "Join over 100,000 schools that use Tynker to engage students with coding and connect with other educators who love to code!"
//        desc= " Teaching coding with Tynker is as easy as 1-2-3. In just minutes, you can create a free account, set up your virtual classroom, and assign ready-made lesson plans!"
//        des= "Tynker empowers K-12 educators with free PD, standards-aligned curricula, cross-curricular STEM coding, AP Computer Science courses, and many great coding resources."

//        />
//     </Hold>
//   );
// };

// export default App;

// const Hold = styled.div`

// `


import React from 'react'
import Homescreen from './components/Homescreen'
const App = ()=> {
  return(
    <div>
      <Homescreen/>

    </div>
  )
}

export default App

