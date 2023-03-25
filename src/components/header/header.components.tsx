import React from 'react'
import { } from 'react-router-dom'
import './header.styles.css';

const Header = () => {
    return (
        <div className='header'>
            <div className="head-left">
                <h3>GRAPHIEE</h3>
            </div>
            <div className="head-mid">
                <ul>
                    <li>
                        <a href='/dashboard'>
                            Dashboard
                        </a>
                    </li>
                    <li>
                        <a href='/solution'>
                            Solution
                        </a>
                    </li>
                    <li>
                        <a href='/about'>
                            About
                        </a>
                    </li>
                </ul>
            </div>
            <div className="head-right">
                <p>Register Now →</p>
            </div>
        </div>
    )
}

export default Header;