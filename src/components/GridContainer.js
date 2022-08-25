import {container} from "../data";
import styled from "styled-components";
import {motion} from "framer-motion";
import {Link} from "react-router-dom";

const GridContainer = () => {
    return (
        <div>
            <GridWrapper>
                {container.map((item) => {
                    return (
                        <div className="grid-item">
                            <img src={item.img} alt={item.title}/>
                            <div className="text-item-wrapper">
                                <p className="text-item">{item.title}</p>
                                <div className="button-wrapper">
                                    <Link to={item.link} className="btn">vis mer</Link>
                                </div>
                            </div>
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

  .grid-item {
    //position: relative;

    position: relative;
    display: inline-block;
    overflow: hidden;
    max-width: 100%;
    height: auto;


    //&:after {
    //content: "";
    //opacity: 0;
    //position: absolute;
    ////left: 0;
    ////top: 0;
    //width: 100%;
    //height: 100%;
    //}

    :before {
      opacity: 0;
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      z-index: 10;
      width: 0;
      height: 0;
      border-top: 13px solid transparent;
      border-bottom: 13px solid transparent;
      border-right: 13px solid #fff;
      transform: rotate(45deg);
      margin-left: -2px;
      margin-top: -9px;
    }


    img {
      width: 100%;
      //background-image: linear-gradient(rgba(0, 0, 0, .75), rgba(0, 0, 0, .3), rgba(0, 0, 0, .75));
      //transition: opacity .25s ease-in-out .05s;
      height: 100%;
      object-fit: cover;

      //&:hover {
      //  opacity: 0.4;
      //}
    }

    //.text-item {
    //  position: absolute;
    //  left: 0;
    //  top: 0;
    //  opacity: 0;
    //
    //}
  }

  .text-item-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .button-wrapper {
      display: flex;

      .btn {

        padding: 6px 20px 6px 9.6px;
        background-color: #ffffffb3;
        border: none;
        outline: none;
        cursor: pointer;
        font-weight: 300;
        font-size: 0.85rem;
        color: #262626;

        &:after {
          content: "▸";
          position: absolute;
          margin-left: 4px;
          //bottom: 1.2rem;
          //z-index: 10;
          font-size: .85rem;
          //padding: 0.2rem 0.9rem 0.3rem 0.6rem;
          //opacity: 0;
          transition: opacity .3s ease-in .15s;
        }

      }
    }
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
    //background: rgba(0, 0, 0, 0.6);
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

// const Grid = styled.div`
//   display: grid;
//   margin: 0 auto;
//   display: grid;
//   grid-template-columns: repeat(3,1fr);
//   grid-gap: 5px;
//   img{
//     width: 100%;
//     height: 100%;
//     object-fit: cover;
//
//   }
// `;