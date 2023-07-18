import React from 'react'

export default function Content(props) {
  //  const topic = "my favorite food is kotthu";
  //  const item="and rice";
  return (
   // <div>
     //   <span className='text'>{topic}</span>
      // <div className='hq'>{item}</div>
      //  <div className='hq'>{alert("wellcome meghz")}</div>
    //</div>
    <div>
        <h2 className='text'>my favourite food is{props.food}and it was {props.type}.</h2>
    </div>
  )
}
