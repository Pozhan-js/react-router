import React from 'react'

export default function Son(props) {
  return (
    <div>
      <span>Son组件</span>
      <button onClick={() => {
        props.history.push('/home')
      }}>to Home组件</button>
    </div>
  )
}
