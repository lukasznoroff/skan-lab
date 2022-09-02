import React from 'react';
import styled from "styled-components";



const Landskap = () => {
    return (
        <Wrapper>
            <div className="container">
                <div className="col-left">
                    <div className="image-wrapper">
                        <img src={require('../images/photo9.jpg')}/>
                    </div>
                </div>
                <div className="col-right">
                    <h1>Landskap</h1>
                    <p>Bearbeidelse av større og mindre prosjekter, både infrastruktur og byggprosjekter i
                        tidligfaser som mulighetsstudie, faser i prosjektet fra skisseprosjekt, forprosjekt,
                        detaljprosjekt og oppfølging i byggetid.
                    </p>
                    <div className="bottom-box">
                        <div className="col-left-list">
                            <ul>
                                <li>3D-modellering av arkitektoniske objekter</li>
                                <li>3D-visualisering av infrastruktur og framtidig bebyggelse</li>
                                <li>Detaljprosjektering, teknisk tegning</li>
                                <li>Masseberegning, mengdeberegning</li>
                                <li>Vegprosjektering</li>
                                <li>3D-animasjoner</li>
                                <li>Arealplanlegging:</li>
                                <li>- reguleringsplaner, situasjonsplaner, landskapsplaner</li>
                                <li>- planteplaner, illustrasjonsplaner</li>
                                <li>Landskapsanalyser:</li>
                                <li>- solanalyser, helningsanalyser, høydeanalyser</li>
                                <li>- trafikkanalyser, flomanalyser</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
};

export default Landskap;


const Wrapper = styled.div`
  width: 50vw;
  height: 90vh;
  position: relative;

  @media (max-width: 768px) {
    height: 105vh;
  }

  .container {
    display: flex;
    position: absolute;
    top: 10vh;
    background-color: #fff;
    left: 0%;
    height: 100%;
    width: 103vw;
    overflow: scroll;
    @media (max-width: 768px) {
      flex-direction: column;
      top: 16%;
      height: 106%;
    }
  }

  .col-left {
    flex: 1;

    .image-wrapper {
      padding: 30px 30px 0 0;
      height: 80%;

      @media (max-width: 768px) {
        padding: 0;
        height: 330px;
      }

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }

  .col-right {
    line-height: 1.6;
    flex: 1;
    padding: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (max-width: 768px) {
      padding: 0;
    }
      h1 {
        font-size: 25px;
      }
      p {
        max-width: 85%;
        margin: 20px 0 100px;
        font-size: 15px;
        @media (max-width: 768px) {
          margin-bottom: 40px;
        }
      }

    .bottom-box {
      max-width: 85%;
      width: 100%;
      @media (max-width: 768px) {
        flex-direction: column;
        font-size: 15px;
      }
      .col-left-list {
        ul > li {
          font-size: 15px;
        }
      }
    }
  }
`;