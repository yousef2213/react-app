import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import logo from '../image/logo.jpg'
import {FaCartPlus} from 'react-icons/fa'
import {CameraConsumer} from '../context/context'
export default function Navbar() {
    return (
        <CameraConsumer>
            {value =>{
                const {handelSideCart,cartItem} = value
                return(
                    <NavBarWeapper>
                        <Link className="navbar-brand" to="/">
                            <img src={logo} alt="logo" className="img-logo" />
                        </Link>
                        <ul className="links">
                            <li className="link">
                                <Link className="text-capitalize" to="/" >Home</Link>
                            </li>
                            <li className="links">
                                <Link className="text-capitalize" to="/store" >store</Link>
                            </li>
                        </ul>
                        <div className="cart">
                            <FaCartPlus className="cart-link" onClick={handelSideCart} />
                            <span>{cartItem}</span>
                        </div>
                    </NavBarWeapper>
                )
            }}
        </CameraConsumer>
    )
}

const NavBarWeapper = styled.nav`
    display : flex;
    align-items: center;
    justify-content : space-between;
    height:60px;
    position: sticky;
    position: -webkit-sticky;
    width: 100%;
    top:0;
    background : #fff;
    padding-left :28px;
    z-index: 1;

    .links{
        display : flex;
        align-items: center;
        list-style: none;
        padding: 0;
        li{
            padding :38px 20px 20px 20px;
            display : inline-block;
            a {ط
                color : var(--primaryColor);
                font-family: 'Montserrat', sans-serif;
                &:hover{
                    text-decoration : none;
                }
            }
        }
    }
    .img-logo{
        width: 110px;
        height:60px;
    }
`