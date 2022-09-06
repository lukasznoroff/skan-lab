import styled from "styled-components";
import {team} from "../data";

const OmOss = () => {
    return (
        <Wrapper>
            <div className="header-wrapper">
                <h1>Vi er Skan-LAB</h1>
                <p>I 2021 tre av oss, Rune Adam og Piotr satt sammen på en kaffe og tenkte at vi jobber i forskjellige
                    bransjer som enkelt kan samarbeide sammen.
                    I 2022 begynte &quot;eventyret&quot;, vi bestemte oss for og utvide firma fra bare land oppmåling til flere
                    tjenester. Vi har nå endret navn til Skan-LAB og med det mener vi: Skanning, oppmåling til landskap,
                    Arkitektur og BIM.
                    Vi kan supportere deres prosjekter som kreves 3D Laser skanning opp til 400 LOD, BIM, prosjektering
                    av landskap arkitektur, oppmåling og utstykking, AS Build.
                </p>
            </div>
            <div className="container">
                {team.map((item) => {
                    return (
                        <div className="container-item" key={item.id}>
                            <div className="item-wrapper">
                                <img src={item.img} alt={item.text1}/>
                                <ul className="item-text">
                                    <li className="first-text-item">{item.title}</li>
                                    <li>{item.text1}</li>
                                    <li>{item.text2}</li>
                                    <li>{item.text3}</li>
                                    <li className="phone-text-item">{item.phone}</li>
                                    <li>{item.email}</li>
                                </ul>
                            </div>
                        </div>
                    )
                })
                }
            </div>
        </Wrapper>
    );
};

export default OmOss;

const Wrapper = styled.div`

  .header-wrapper {
    max-width: 39.5%;
    margin: auto;
    margin-bottom: 80px;
    @media (max-width: 768px) {
      max-width: 100vw;
    }

    h1 {
      font-size: 20px;
      margin-bottom: 25px;
    }

    p {
      font-size: 15px;
    }
  }

  position: absolute;
  top: 10%;
  top: 20%;
  top: 14%;

  @media (max-width: 768px) {
    top: 10%;
    margin-bottom: 50vh;
    display: flex;
    justify-content: center;
    flex-direction: column;
    max-width: 100vw;
    padding: 20px;
  }

  .container {
    height: 100%;
    height: 55vh;
    width: 50vw;
    display: grid;
    margin: auto;
    grid-template-columns: repeat(3, 1fr);
    justify-content: stretch;
    justify-items: center;
    text-align: center;

    @media (max-width: 768px) {
      display: block;
      width: auto;
    }
  }

  .container-item {
    //width: 155px;
    //height: 100px;
    width: 218px;
    height: 100px;
    display: flex;
    align-items: center;
    @media (max-width: 768px) {
      margin-bottom: 18vh;
    }
  }

  .item-wrapper {
    height: 12vh;
    width: 100%;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }

    .item-text {
      font-size: 12px;
      font-size: .67vw;
      text-align: center;
      @media (max-width: 768px) {
        font-size: 12px;
      }

      .first-text-item {
        font-weight: 800;
        margin: 10px 0 3px;
      }

      .phone-text-item {
        margin: .2vw 0 .2vw;
      }
    }
  }
`;
