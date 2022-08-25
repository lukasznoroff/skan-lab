import styled from "styled-components";

const Kontakt = () => {
    return (

        <MapWrapper>
            <div className="map">
                <div className="google-map-code">
                    <div className="mapouter">
                        <div className="gmap_canvas">
                            <iframe width="1820" height="500" id="gmap_canvas"
                                    src="https://maps.google.com/maps?q=Stasjonsvegen%201,%202322%20Ridabu&t=&z=15&ie=UTF8&iwloc=&output=embed"
                                    frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" style={{marginBottom:-5, width:"100%"}}></iframe>
                        </div>
                    </div>
                </div>
            </div>
            <div className="address-wrapper">
                <ul>
                <h1>Skan-LAB AS</h1>
                    <li>Stasjonsvegen 1, 2322 Ridabu</li>
                    <li>kontakt@skan-lab.no</li>
                    <li>tel: 966 74 011</li>
                </ul>
            </div>

        </MapWrapper>

    );
};

export default Kontakt;

const MapWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 10%;
  .map {
    border-top: 1px solid #000;
    border-bottom: 1px solid #000;
    padding: 0;
    margin: 0;
    filter: grayscale(1);
    
  }

  .address-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
   
    width: 50%;
    height: 30%;
    h1 {
      font-size: 20px;
      color: #000;
      margin-bottom: 30px;
      margin-right: 0;
    }
  }
`;