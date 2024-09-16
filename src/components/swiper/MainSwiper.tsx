'use client'

import styles from './styles.module.scss'
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
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
        // spaceBetween={50}
        slidesPerView={3}
        // onSlideChange={() => console.log('slide change')}
        // onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <SliderBlock
            title={'Индекс свободных денег'}
            percent={60.5}
            date={'август 2024'}
            up={3.4} upStatus={'up'}
            down={19.1}
            downStatus={'down'}
            change={'п.п'}
          />
        </SwiperSlide>
        <SwiperSlide>
          <SliderBlock
            title={'Индекс благосостояния'}
            percent={30.2}
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
            percent={227.5}
            date={'август 2024'}
            up={2.3} upStatus={'up'}
            down={21.2}
            downStatus={'up'}
            change={'%'}
          />
        </SwiperSlide>
        <SwiperSlide>
          <SliderBlock
            title={'Недельный средний чек'}
            percent={816}
            date={'2-8 сентября'}
            up={2.9}
            upStatus={'down'}
            down={11.2}
            downStatus={'up'}
            change={'%'}
          />
        </SwiperSlide>
        <SwiperSlide>
          <SliderBlock
            title={'Недельные расходы'}
            percent={60.5}
            date={'2-8 сентября'}
            up={2.4}
            upStatus={'up'}
            down={23.2}
            downStatus={'up'}
            change={'%'}/>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};