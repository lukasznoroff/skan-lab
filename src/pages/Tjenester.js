import {Link, NavLink, Outlet} from "react-router-dom";
import GridContainer from "../components/GridContainer";
import styled from "styled-components";

const Tjenester = () => {
    return (
        <>
            <Container>
                <GridContainer/>
                <nav className="sub-link-menu">
                    <NavLink className="sub-link" to="Skanning">3D-skanning</NavLink>
                    <NavLink className="sub-link" to="Landskap">landskap</NavLink>
                    <NavLink className="sub-link" to="Arkitektur">arkitektur</NavLink>
                    <NavLink className="sub-link" to="Bim">BIM</NavLink>
                </nav>
                <Outlet/>
            </Container>
        </>

    );
};

export default Tjenester;

const Container = styled.div`
  .sub-link-menu {
    z-index: 999;
    position: absolute;
    right: 5.88%;
    right: 3.5%;
    margin-right: 2.3vw;
    top: 5.5%;
    margin-top: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 768px) {
      top: 10%;
      left: 10%;
      z-index: 89;
    }

    .sub-link {
      font-size: 14px;
      margin-right: 8px;
      margin-right: 18px;
      font-weight: 400;
      color: #c0c0c0;
      transition: color .3s ease-in-out;
      //margin-right: 1vw;
      &:hover {
        color: #262626;
      }
    }
    
    a.active {
      color: #262626;
    }
  }
`;