import styled from "styled-components";
import {Link} from "react-router-dom";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import {EffectFade, Autoplay} from "swiper";
import "swiper/css/effect-fade";
import "swiper/css/navigation"

const Slider = () => {
    return (
        <SliderContainer>
            <Swiper className="swiper"
                    modules={[EffectFade, Autoplay]}
                    effect={"fade"}
                    speed={4000}
                    slidesPerView={1}
                    loop={true}
                    autoplay={true}
                    loop={true}
                    autoplay={{
                        delay: 4000,
                        disableOnInteraction: true
                    }}

            >

                <SwiperSlide className="swiper-slide">
                    <Link to="/tjenester/Skanning">
                        <img src={require('../images/photos1.jpg')}/>
                    </Link>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                    <Link to="/tjenester/Arkitektur">
                        <img src={require('../images/photos2.jpg')}/>
                    </Link>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                    <Link to="/tjenester/Arkitektur">
                        <img src={require('../images/photos3.jpg')}/>
                    </Link>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                    <Link to="/tjenester/Landskap">
                        <img src={require('../images/gphoto4.jpeg')}/>
                    </Link>
                </SwiperSlide>

            </Swiper>
        </SliderContainer>
    );
};

export default Slider;

const SliderContainer = styled.div`
  //position: absolute;
  //left: 0;
  //right: 0;
  //z-index: 999;
  .swiper {
    width: 100%;
    height: 100vh;


    .swiper-slide {
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }

`;