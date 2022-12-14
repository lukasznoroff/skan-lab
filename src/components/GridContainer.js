// import {container} from "../data";
import {gridPotos} from "../data";
import styled from "styled-components";
import {Link} from "react-router-dom";

const GridContainer = () => {
    return (
        <div>
            <GridWrapper>
                {gridPotos.map((item) => {
                    return (
                        <div className="grid-item" key={item.id}>
                            <Link to={item.link}>
                            <img src={item.img} alt={item.title}/>
                            <div className="text-item-wrapper">
                                <p className="text-item">{item.title}</p>
                                {/*<div className="button-wrapper" onClick={()=>window.scrollTo(0, 0)}>*/}
                                {/*    <Link to={item.link} className="btn">vis mer</Link>*/}
                                {/*</div>*/}
                            </div>
                            </Link>
                        </div>
                    )
                })
                }

            </GridWrapper>
        </div>
    );
};

export default GridContainer;

const GridWrapper = styled.div`
  width: 100vw;
  height: 89vh;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 5px;
  position: absolute;
  top: 11%;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));

    top: 22%;
  }
  
  .grid-item {
    position: relative;
    display: inline-block;
    overflow: hidden;
    max-width: 100%;
    height: auto;



    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    @media (max-width: 768px) {
      min-height: 300px;
      display: block;
    }
  }

  .text-item-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-size: 18px;
    font-weight: bold;
  }

  .grid-item .text-item-wrapper {
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(rgba(0, 0, 0, .75), rgba(0, 0, 0, .3), rgba(0, 0, 0, .75));
    color: #fff;
    padding: 45px;
    -moz-transition: all 0.4s ease-in-out 0s;
    -webkit-transition: all 0.4s ease-in-out 0s;
    -ms-transition: all 0.4s ease-in-out 0s;
    transition: all 0.4s ease-in-out 0s;
  }

  .grid-item:hover .text-item-wrapper,
  .grid-item.active .text-item-wrapper,
  .grid-item:hover::before {
    opacity: 1;
  }
`;
