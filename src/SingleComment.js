/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'

const SingleComment = props => {
  return (
    <div className='comment'>
      <a href='/' className='avatar'>
        <img alt='profile' src={props.avatar} />
      </a>
      <div className='content'>
        <a href='/' className='author'>
          {props.name}
        </a>
      </div>
      <div className='metadata'>
        <span className='date'>{props.date}</span>
      </div>
      <div className='text'>{props.text}</div>
    </div>
  )
}
export default SingleComment
