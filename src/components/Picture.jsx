import React from 'react'
import './Picture.css'

const Picture = () => {
  return (
   <>
   <div className='mainh1'>
   <h1 className='roboto-bold'><span>I design products </span> <br />that delight and <br /> inspire people</h1>
    <p>Hi! I’m Jake, a product designer based in Berlin. I create <br /> user-friendly interfaces for fast-growing startups.</p>
</div>
   <div className='mainimg'>
        <img src="./public/assets/images/man.svg" alt="" />
        <a href="" class="book-a-call">Book a call</a>
<a href="" class="upload">Download CV <img src="./public/assets/images/sagox.svg" alt=""/> </a>
   </div>
   </>
  )
}

export default Picture






