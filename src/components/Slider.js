import styled from "styled-components";
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
                    <img src={require('../images/photo1.jpg')} />
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                    <img src={require('../images/photo2.jpg')} />
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                    <img src={require('../images/photo8.jpg')} />
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                    <img src={require('../images/photo6.jpg')} />
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