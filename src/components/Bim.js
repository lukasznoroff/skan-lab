import React from 'react';
import styled from "styled-components";

const Bim = () => {
    return (
        <Wrapper>
            <div className="container">
                <div className="col-left">
                    <div className="image-wrapper">
                        <img src={require('../images/photo5.jpg')}/>
                    </div>
                </div>
                <div className="col-right">
                    <h1>BIM</h1>
                    <p>Building Information Modelling (BIM) er en prosess som innebærer å lage og bruke
                        intelligente 3D-modeller for å informere og kommunisere både i prosjekteringsfase,
                        byggefase og driftsfase. Disse modellene kan brukes for kalkyler, analyser, visualisering,
                        mengdeuttrekk, arbeidstegninger, søknadstegninger og koordineringskontroll mellom
                        de forskjellige fagdisipliner.
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

export default Bim;


const Wrapper = styled.div`
  width: 50vw;
  height: 90vh;
  position: relative;

  .container {
    display: flex;
    position: absolute;
    top: 10vh;
    background-color: #f9f8f6;
    left: 0%;
    height: 100%;
    width: 100vw;
  }

  .col-left {
    flex: 1;

    .image-wrapper {
      padding: 30px 30px 0 0;
      height: 80%;

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

    p {
      max-width: 85%;
      margin: 20px 0 100px;
    }

    .bottom-box {
      max-width: 85%;
      width: 100%;
    }
  }
`;
