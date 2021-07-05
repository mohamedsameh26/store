import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';
import ButtonContainer from './Button';
import styled from 'styled-components';
export default class Navbar extends Component {
    render() {
        return (
            <NavWrapper className="navbar navbar-expand-sm d-flex align-items-center justify-content-center navbar-dark px-sm-5">
                {/* https://www.iconfinder.com/icons/1243689/call_phone_icon
                    Creative Commons (Attribution 3.0 Unported);
                    https://www.iconfinder.com/Makoto_msk */}
                <Link to="/">
                    <img src={logo} alt="store" className="navbar-brand" />
                </Link>
                <div className="w-100 d-flex align-items-center justify-content-between">
                    <ul className="navbar-nav align-items-center">
                        <li className="nav-item ml-5">
                            <Link to="/" className="nav-link">
                                products
                            </Link>
                        </li>
                    </ul>
                    <Link to="/cart" className="mr-auto">
                        <ButtonContainer>
                            <span className="mr">
                                <i className="fas fa-cart-plus mr-2" />
                            </span>
                            my cart
                        </ButtonContainer>
                    </Link>
                </div>
            </NavWrapper>
        )
    }
}


const NavWrapper = styled.div`
    background: var(--mainBlue);
    .nav-link {
        color: var(--mainWhite) !important;
        font-size: 1.3rem;
        text-transform: capitalize;
    }
`