'use client'

import 'swiper/css';
import styles from './styles.module.scss'
import {Swiper, SwiperSlide} from 'swiper/react';
import {SliderBlock} from "@/components/slider/sliderBlock/SliderBlock";
import {Autoplay} from 'swiper/modules';

export const MainSwiper = () => {
  return (
    <div className={styles.container}>
      <Swiper
        modules={[Autoplay]}
        autoplay={{
          delay: 0, // время задержки между слайдами
          disableOnInteraction: false, // продолжать автоплей даже после взаимодействия
        }}
        speed={3000}
        loop={true}
        className={styles.swiper}
        spaceBetween={20}
        slidesPerView={3}
        // onSlideChange={() => console.log('slide change')}
        // onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <SliderBlock
            title={'Индекс свободных денег'}
            percent={"60.5%"}
            date={'август 2024'}
            up={3.4}
            upStatus={'up'}
            down={19.1}
            downStatus={'down'}
            change={'п.п'}
          />
        </SwiperSlide>
        <SwiperSlide>
          <SliderBlock
            title={'Индекс благосостояния'}
            percent={"30.2%"}
            date={'август 2024'}
            up={0.5}
            upStatus={'down'}
            down={0.8}
            downStatus={'up'}
            change={'п.п'}
          />
        </SwiperSlide>
        <SwiperSlide>
          <SliderBlock
            title={'Дефлятор FMCG'}
            percent={"227.5%"}
            date={'август 2024'}
            up={0.1} upStatus={'up'}
            down={21.6}
            downStatus={'up'}
            change={'%'}
          />
        </SwiperSlide>
        <SwiperSlide>
          <SliderBlock
            title={'Недельный средний чек'}
            percent={'816 руб.'}
            date={'9-15 сентября'}
            up={4.0}
            upStatus={"up"}
            down={21.6}
            downStatus={'up'}
            change={'%'}
          />
        </SwiperSlide>
        <SwiperSlide>
          <SliderBlock
            title={'9-15 сентября'}
            percent={"7764 руб."}
            date={'2-8 сентября'}
            up={2.4}
            upStatus={'up'}
            down={21.6}
            downStatus={'up'}
            change={'%'}/>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};