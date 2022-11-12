import { Link, NavLink, Outlet } from "react-router-dom";
import GridContainer from "../components/GridContainer";
import styled from "styled-components";

const Tjenester = () => {
  return (
    <>
      <Container>
        <GridContainer />
        <div className="navbar"></div>
        <nav className="sub-link-menu">
          <NavLink className="sub-link" to="Skanning">3D-skannin og oppmåling</NavLink>
          <NavLink className="sub-link" to="Landskap">landskap</NavLink>
          <NavLink className="sub-link" to="Arkitektur">arkitektur</NavLink>
          <NavLink className="sub-link" to="Bim">BIM</NavLink>
        </nav>
        <Outlet />
      </Container>
    </>

  );
};

export default Tjenester;

const Container = styled.div`
  

  .sub-link-menu {
    z-index: 999;
    //position: absolute;
    ////right: 5.88%;
    //right: 3.5%;
    right: 0%;
    //margin-right: 2.3vw;
    top: 5.5%;
    top: 5.1%;
    margin-top: 15px;
    //display: flex;
    //justify-content: space-between;
    //align-items: center;

    //display: flex;
    justify-content: flex-end;
    align-items: end;
    //height: 8.6vh;
    //z-index: 99999;
    //position: relative;
    position: absolute;


    position: fixed;
    z-index: 99999;
    
    @media (max-width: 768px) {
      top: 8%;
      /* left: 10%; */
      z-index: 89;
      background-color: #f7f5f5;
      text-align: center;
      width: 100%;
      padding-bottom: 2vw;
      display: flex;

    }
    
    .sub-link {
      font-size: 14px;
      font-size: 12px;
      margin-right: 8px;
      margin-right: 18px;
      font-weight: 400;
      color: #c0c0c0;
      transition: color .3s ease-in-out;
      //margin-right: 1vw;
      margin-top: 2px;
      &:last-child {
        padding-right: 33px;
      }
      &:hover {
        color: #262626;
      }
    }

    a.active {
      color: #262626;
    }
  }

  .navbar {
    width: 100%;
    height: 10vh;
    background-color: #ffffff;
    position: fixed;
    top: 0;
    left: 0;

  }
`;