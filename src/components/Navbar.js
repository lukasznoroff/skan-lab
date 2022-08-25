import {Link, NavLink, useLocation} from "react-router-dom";
import styled from "styled-components";
import LogoWhite from "../images/logo-white.png";
import LogoBlack from "../images/logo-black.png";


const Navbar = () => {
    const location = useLocation();

    return (
        <StyledNavbar>
            <Link to="/">
                <img className="logo" src={window.location.pathname === "/" ? LogoWhite : LogoBlack}/>
            </Link>
            <StyledNav className={window.location.pathname === "/" ? "gradient" : ""}>
                <StyledUl>
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
  }


  @media (max-width: 768px) {
  }

  h1 {
    font-size: 30px;
    //padding: 0 2.25rem 0.3125rem 0.625rem;
    padding-left: 22px;
  }


  .logo {
    display: flex;
    align-items: center;
    padding: 10px;
    width: 80%;
    height: 80%;
  }
`;


const StyledNav = styled.nav`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 75%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;


const StyledUl = styled.ul`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 75%;

  a.active .nav-link {
    color: #262626;
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    z-index: 2;
    position: absolute;
    background-color: #f9f8f6;
    top: 8vh;
    width: 100%;
    height: 100%;
    transition: transform 0.5s ease-in-out;
    transform: ${({hamburger}) => hamburger ? "translateX(5%)" : "translateX(-100%)"};
  }

  .nav-link {
    padding: 5px 20px;
    padding: 5px 1.3vw;
    //padding: 0 2.25rem 0.3125rem 0.625rem;
    text-transform: lowercase;
    transition: 0.3s ease-in-out;
  }

  &:last-child {
    padding-right: 22px;
  }

  .white-link, .dark-link {
    color: #fff;
    //padding: 5px 20px;
    //padding: 5px 1.3vw;
    //padding: 0 2.25rem 0.3125rem 0.625rem;
    text-transform: lowercase;
    //transition: 0.3s ease-in-out;
  }

  .dark-link {
    color: #c0c0c0;
    transition: color .3s ease-in-out;
    &:hover {
      color: #262626;
  }

  @media (max-width: 768px) {
    padding-bottom: 30px;
    margin: 20px;
  }
}
`;

// const StyledHamburger = styled.button`
//   display: none;
//   @media (max-width: 768px) {
//     display: block;
//     border: none;
//     background-color: #f9f8f6;
//   }
//   .fas {
//     font-size: 25px;
//     color: #000;
//   }
// `;