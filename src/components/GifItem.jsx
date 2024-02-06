import React from 'react'

const GifItem = ({ title, url}) => {

  return (
    <div className='card' style={{ width:'25rem'}}>
        <img src={ url } alt= { title } style={{ height: '200px'}}/>
        <div className='card-body bg-transparent' style={{ width: '100%'}}>
            <p className='card-title' style={{ height: '80px'}}>{ title }</p>
            <button className='btn btn-primary' style={{width: '25%'}}> View </button>
        </div>
    </div>
  )

}


export default GifItem