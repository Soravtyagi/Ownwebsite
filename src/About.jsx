import React from 'react';
import Common from './Common';
import pic from './images/pic.jpg';

const About = () => {
  return (
   <>
   <Common name='Welcome to About page' imgsrc={pic}  visit='/contact' btname='Contact Now' />
   </>
  )
}

export default About