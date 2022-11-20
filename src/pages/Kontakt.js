import styled from "styled-components";

const Kontakt = () => {
  return (

    <MapWrapper>
      <div className="map">
        <div className="google-map-code">
          <div className="mapouter">
            <div className="gmap_canvas">
              <iframe width="1820" height="600" id="gmap_canvas"
                // src="https://maps.google.com/maps?q=Stasjonsvegen%201,%202322%20Ridabu&t=&z=15&ie=UTF8&iwloc=&output=embed"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1944.8853504243664!2d11.344686416424617!3d60.8260889822073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4641fd6d41dcd669%3A0x63ea7bdfa78ebea9!2sMeierivegen%2065%2C%202340%20L%C3%B8ten!5e0!3m2!1sno!2sno!4v1668954568707!5m2!1sno!2sno" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
                frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" style={{ marginBottom: -5, width: "100%" }}></iframe>
            </div>
          </div>
        </div>
      </div>
      <div className="address-wrapper">
        <ul>
          <h1>Skan-LAB AS</h1>
          <li>Meirivegen 65, 2340 Løten</li>
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
  height: 89vh;
  position: absolute;
  top: 11%;
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
    width: 100%;
    height: 30%;
    @media (max-width: 768px) {
      width: 100%;
    }
    h1 {
      font-size: 20px;
      color: #000;
      margin-bottom: 25px;
      //margin-right: 0;
      @media (max-width: 768px) {
        margin-bottom: 10px;
      }
    }
  }
`;