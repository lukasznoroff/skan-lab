import React from "react";

import {Link, NavLink, useLocation, useNavigate} from "react-router-dom";
import styled from "styled-components";
import LogoWhite from "../images/logo-white.png";
import LogoBlack from "../images/logo-black.png";
import {useState} from "react";

import useMediaQuery from "../hooks/useMediaQuery";

const Navbar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false);
    const isDesktop = useMediaQuery('(max-width: 768px)');
    function showSidebar(){
        setIsOpen(!isOpen);
        // e.ontouchstart.preventDefault()
    }

    React.useEffect(() => {
        if (isDesktop) {
            navigate('/Tjenester');
        }else if(!isDesktop){
            navigate("/")
        }
    },[isDesktop, setIsOpen])


    return (


        <StyledNavbar>
        {/*{isDesktop ? StyledNavbar: null}*/}
        {/*{isDesktop ? window.location.pathname === "/Tjenester" :  "/" }*/}
        {/*{isDesktop ? navigate("/Tjenester") :  "/" }*/}

            <HamburgerWrapper isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </HamburgerWrapper>
            <Link to="/" alt="logo">
                <img className="logo" src={window.location.pathname === "/" ? LogoWhite : LogoBlack}/>
            </Link>
            <StyledNav  onClick={showSidebar} className={window.location.pathname === "/" ? "gradient" : ""}>
                <StyledUl  isOpen={isOpen}>
                    <NavLink to="tjenester">
                        <li className={window.location.pathname === "/" ? "white-link nav-link" : "dark-link nav-link"}>tjenester</li>
                    </NavLink>
                    <NavLink to="omoss">
                        <li className={window.location.pathname === "/" ? "white-link nav-link" : "dark-link nav-link"}>om oss</li>
                    </NavLink>
                    <NavLink to="kontakt">
                        <li className={window.location.pathname === "/" ? "white-link nav-link" : "dark-link nav-link"}>kontakt</li>
                    </NavLink>
                </StyledUl>
            </StyledNav>
        </StyledNavbar>
    );
};


export default Navbar;


const StyledNavbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  padding: 1rem;
  min-height: 10vh;
  position: absolute;
  left: 0;
  right: 0;
  z-index: 999;
  margin: 0 auto;
  img {
    width: 100px;
    height: 100px;
  }

  .gradient {
    background-image: linear-gradient(rgba(0, 0, 0, .4), rgba(0, 0, 0, 0));
    width: 100vw;
    min-height: 10vh;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 99999;
  }

 

  @media (max-width: 768px) {
    padding: 0;
    //min-height: 15vh;
    //position: fixed;
    //left: 0;top: 0;
    
  }

  h1 {
    font-size: 30px;
    padding-left: 22px;
  }

  .logo {
    display: flex;
    align-items: center;
    padding: 10px;
    width: 80%;
    height: 80%;
    z-index: 99999;
    position: relative;
  }
`;


const StyledNav = styled.nav`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 75%;
  
  @media (max-width: 768px) {
    width: 100%;
    transition: transform ease-in-out 0.4s;
    transform: translateX(${({isOpen}) => isOpen ? "0" : "-100%"});
    width: 100vw;
    position: absolute;

    position: fixed !important;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;


const StyledUl = styled.ul`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 75%;
  z-index: 9999;

  a.active .nav-link {
    color: #262626;
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    z-index: 2;
    position: absolute;
    z-index: 9999;
    top: 5vh;
    transition: transform 0.5s ease-in-out;
    transform: ${({hamburger}) => hamburger ? "translateX(5%)" : "translateX(100%)"};
    transform: translateX(${({isOpen}) => isOpen ? "100%" : "-100%"});
    background-color: #f7f5f5;
    width: 100%;
    height: 100vh;
    position: fixed !important;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

  }


  .nav-link {
    padding: 5px 20px;
    padding: 5px 1.3vw;
    text-transform: lowercase;
    transition: 0.3s ease-in-out;
  }

  &:last-child {
    padding-right: 22px;
  }

  .white-link, .dark-link {
    color: #fff;
    text-transform: lowercase;
  }

  .dark-link {
    color: #c0c0c0;
    transition: color .3s ease-in-out;
    @media (max-width: 768px) {
      color: #000;

    }

    &:hover {
      color: #262626;
    }

    @media (max-width: 768px) {
      padding-bottom: 30px;
      margin: 20px;
    }
  }
`;

const HamburgerWrapper = styled.div`
  position: absolute;
  cursor: pointer;
  z-index: 99;
  display: none;
  @media (max-width: 800px) {
    display: block;
    top: 30%;
    left: 90%;
  }
  @media (max-width: 500px) {
    left: 85%;
  }

  > * {
    display: block;
    width: 35px;
    height: 3px;
    margin: 5px;
    margin-top: 0;
    background-color: #1B1c1C;
    transition: 0.3s all;
    transform-origin: 6px center;
  }
  .line1 {
    transform: ${({isOpen})=> isOpen ? "rotate(45deg)" : 0};
  }
  .line2 {
    opacity: ${({ isOpen }) => isOpen ? '0' : '1'};
  }
  .line3 {
    transform: ${({isOpen})=> isOpen ? "rotate(-45deg)" : 0};
  }
`;
