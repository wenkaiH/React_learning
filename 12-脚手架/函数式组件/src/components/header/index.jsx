import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Header() {
  const navgite=useNavigate()
  function forward(){
    navgite(1)
  }
  function back(){
    navgite(-1)
  }
  return (
    <div className="page-header">
      <h2>这是Header头部</h2>
      <button style={{margin:'10px'}} onClick={forward}>前进</button>
      <button onClick={back}>后退</button>
    </div>
  )
}

