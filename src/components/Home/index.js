import React from 'react'
import { Link } from 'react-router-dom'
import {Component} from 'react'
import './index.css'

class Home extends Component {
    render(){
        return(
            <div className='background-color'>
                <nav class="navbar navbar-expand-lg navbar-light bg-text-primary color" >
                    <a class="navbar-brand" href="#" className='white'>MYPORTFOLIO</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav ms-auto">
                        <li class="nav-item active">
                            <Link to="/home" className='rightmargin'>Home </Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/home" className='rightmargin'>About Me </Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/home" className='rightmargin'>MySkills </Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/home" className='rightmargin'>MyProjects </Link>
                        </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Home