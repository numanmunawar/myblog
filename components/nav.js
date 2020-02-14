import React from 'react'
import Link from 'next/link'

<link rel="stylesheet" href="https://bootswatch.com/4/cerulean/bootstrap.min.css"/>

const Nav = () => (
<nav class="navbar navbar-expand-lg navbar-dark bg-primary">
  <a class="navbar-brand" href="#"><h2>CS Blog</h2></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarColor01">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <Link href="/about"><a className="nav-link">About</a></Link>
      </li>
    </ul>
  </div>
</nav>
)

export default Nav
