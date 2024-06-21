import React, { useState } from 'react'

export default function Navbar() {


  const [Darkmode, setDarkmode] = useState({
    color: 'pink',
    background: 'white'
  })

  const dmclick = () => {
    if (Darkmode.color == 'black') {
      setDarkmode({
        background: 'black',
        textColor:'white'
      })
    }
  }

  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg" style={Darkmode}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/#">Navbar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link active" aria-current="page" href="/">Home</a>
              <a className="nav-link" href="/">Features</a>
              <a className="nav-link" href="/">Pricing</a>
            </div>
          </div>
          <button onClick={dmclick} type="button" className="btn btn-light">Light</button>
        </div>
      </nav>
    </div>
  )
}
