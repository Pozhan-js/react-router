import React from 'react'

export default function Home(props) {
  return (
    <div>
      <span>Home组件</span>
      <button onClick={() => {
        props.history.push('/son')
      }}>to Son组件</button>
    </div>
  )
}
