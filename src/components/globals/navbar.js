import React, { Component } from 'react';
import { Link } from 'gatsby';
import logo from '../../images/logo.png';
import './navbar.css';
import './login';
import { FaCartArrowDown } from 'react-icons/fa';


export default class Navbar extends Component {

    state ={
        navbarOpen:false,
        css:'collapse navbar-collapse',
        links:[
            {
                id:1,
                path:'/',
                text:'Home'
            },
            {
                id:2,
                path:'/about/',
                text:'About'
            },
            {
                id:3,
                path:'/service/',
                text:'Service'
            },
            {
                id:4,
                path:'/blog/',
                text:'Blog'
            },
            {
                id:5,
                path:'/contact/',
                text:'Contact'
            }
        ]
    };
    navbarHandler = () => {
        this.state.navbarOpen ? this.setState({
            navbarOpen: false, css: "collapse navbar-collapse"
        })
        : this.setState({
            navbarOpen: true,
            css: "collapse navbar-collapse show"
        });
    };


    render() {
        return (
        <div className="header">
          <div className="container">
            <nav className="navbar navbar-expand-sm bg-cust navbar-light">
                <Link to="/" className="navbar-brand">
                        <img src={logo} alt="logo" />
                </Link>


                <button
                        className="navbar-toggler"
                        type="button"
                        onClick={this.navbarHandler}
                        >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className={this.state.css}>
                        <ul className="navbar-nav ml-auto">
                            {this.state.links.map(link => {
                                return(
                                    <li key={link.id} className="nav-item">
                                    <Link to={link.path}
                                    className="nav-link text-capitalize">
                                        {link.text}
                                        </Link>
                                    </li>
                                );
                            })}
                            <li className="nav-item float-right ml-sm-5">
                                <Link to="/login/">
                                    <button name="login" className="btn primary cus_login">Login</button>
                                </Link>
                            </li>
                        </ul>
                    </div>

            </nav>
        </div>
    </div>
        )
    }
}
