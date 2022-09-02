import styled from "styled-components";
import {team} from "../data";

const OmOss = () => {
    return (
        <Wrapper>
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
  width: 100vw;
  height: 90vh;
  position: absolute;
  top: 10%;

  @media (max-width: 768px) {
    top: 20%;
    margin-bottom: 50vh;
    display: flex;
    justify-content: center;
  }

  .container {
    display: flex;
    height: 100%;

    @media (max-width: 768px) {
      flex-direction: column;
      justify-content: space-between;
      height: 130%;
    }
  }

  .container-item {
    display: flex;
    align-items: center;
    width: 90vw;
    @media (max-width: 768px) {
      margin-bottom: 25vh;
    }
  }

  .item-wrapper {
    height: 10vh;
    width: 100%;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }

    .item-text {
      font-size: 12px;
      text-align: center;

      .first-text-item {
        font-weight: 800;
        margin: 10px 0 10px;
      }

      .phone-text-item {
        margin: 10px 0 10px;
      }
    }
  }
`;
