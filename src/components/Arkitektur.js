import React from 'react';
import styled from "styled-components";

const Arkitektur = () => {
    return (
        <Wrapper>
            <div className="container">
                <div className="col-left">
                    <div className="image-wrapper">
                        <img src={require('../images/photo6.jpg')}/>
                    </div>
                </div>
                <div className="col-right">
                    <h1>Arkitektur</h1>
                    <p>Vi bidrar i alle ledd i byggeprosessen og har lang erfaring med mulighetsstudier,
                        prosjektering av små og store bygg og videre oppfølging. Alle prosjekter og situasjoner
                        er ulike og arbeidet vårt har stort spenn i skala og omfang.
                    </p>
                    <div className="bottom-box">
                        <div className="col-left-list">
                            <ul>
                                <li>Konsepter</li>
                                <li>Offentlig og privat prosjekter</li>
                                <li>Interiørprosjekter</li>
                                <li>Industrielle prosjekter</li>
                                <li>Modellering av arkitektoniske objekter</li>
                                <li>Visualisering og animasjoner</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
};

export default Arkitektur;



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
    @media (max-width: 768px) {
      flex: 0;
    }
    .image-wrapper {
      padding: 30px 30px 0 0;
      height: 80%;

      @media (max-width: 768px) {
        height: 330px;
        padding: 0;
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
        margin-bottom: 45px;
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

