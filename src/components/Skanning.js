import React from 'react';
import styled from "styled-components";

const Skanning = () => {
    return (
        <Wrapper>
            <div className="container">
                <div className="col-left">
                    <div className="image-wrapper">
                        <img src={require('../images/photo7.jpg')}/>
                    </div>
                </div>
                <div className="col-right">
                    <h1>3D-skanning og oppmåling</h1>
                    <p>Dagens 3D skannere er et unikt verktøy som har presisjon på millimeternivå. 3D-skannere
                        er svært egnet til å måle og fremstille fysiske objekter i en digital tredimensjonal versjon. Vi
                        kan skape modeller opp til 400 LOD. Vår aktivitet er også oppmåling av små og store
                        byggeprosjekter. Vi retter oss mot kommuner, Statens vegvesen, e-verk, entreprenører
                        med vårt produktspekter. Vårt avansert utstyr som 3D-skannere, totalstasjoner, GPS,
                        droner og et stort utvalg av oppmålingsverktøy, gir oss muligheten til å delta i mellomstore
                        og større prosjekter.
                    </p>
                    <div className="bottom-box">
                        <div className="col-left-list">
                            <h2>3D-skanning</h2>
                            <ul>
                                <li>Bygg og anlegg</li>
                                <li>Landskap</li>
                                <li>Industri</li>
                                <li>Rekonstruksjon av eksisterende objekter</li>
                                <li>Maritime anlegg</li>
                                <li>Veg, vann og avløp</li>
                                <li>Broer, tunneler, grotter</li>
                                <li>3D-tank inspeksjon</li>
                                <li>Kulturminner</li>
                                <li>Detaljer</li>
                            </ul>
                        </div>
                        <div className="col-right-list">
                            <h2>Oppmåling</h2>
                            <ul>
                                <li>Byggstykking</li>
                                <li>Vegstykking</li>
                                <li>Utstikking og oppmåling av hus og hytter</li>
                                <li>Grensepåvisning</li>
                                <li>3D-terrengmodellering</li>
                                <li>Innmåling og registrering av:</li>
                                <li>-fiber, tele, kraftledninger</li>
                                <li>-fjernvarmerør og annen infrastruktur</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
};

export default Skanning;

const Wrapper = styled.div`

  //width: 50vw;
  ////width: 100%;
  //height: 100vh;
  //position: relative;
  //
  //.container {
  //  position: absolute;
  //  top: 7vh;
  //  background-color: #fff;
  //  left:  -100%;
  //  //width: 100%;
  //  height: 100%;
  //  width: 100vw;
  //}

  width: 50vw;
  //width: 100%;
  height: 90vh;
  position: relative;

  .container {

    position: absolute;
    top: 10vh;
    background-color: #f9f8f6;
    left: 0%;
    //width: 100%;
    height: 100%;
    width: 100vw;

    display: flex;

  }

  .col-left {
    //width: 50%;
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
      h2 {
        margin-bottom: 20px;
      }

      max-width: 85%;
      display: flex;
      justify-content: space-between;
      width: 100%;
    }
  }
`;

