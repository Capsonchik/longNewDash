import styles from './styles.module.scss'
import {SliderBlock} from "@/components/slider/sliderBlock/SliderBlock";

export const MainSlider = () => {

  return (
    <div className={styles.slider}>
      <div className={styles.sliderContent}>
        <SliderBlock title={'Индекс свободных денег'} percent={60.5} date={'август 2024'} up={3.4} upStatus={'up'}
                     down={19.1} downStatus={'down'} change={'п.п'}/>
        <SliderBlock title={'Индекс благосостояния'} percent={30.2} date={'август 2024'} up={0.5} upStatus={'down'}
                     down={0.8} downStatus={'up'} change={'п.п'}/>
        <SliderBlock title={'Дефлятор FMCG'} percent={227.5} date={'август 2024'} up={2.3} upStatus={'up'} down={21.2}
                     downStatus={'up'} change={'%'}/>
        {/*<SliderBlock title={'Недельный средний чек'} percent={816} date={'2-8 сентября'} up={2.9} upStatus={'down'}*/}
        {/*             down={11.2} downStatus={'up'} change={'%'}/>*/}
        {/*<SliderBlock title={'Недельные расходы'} percent={60.5} date={'2-8 сентября'} up={2.4} upStatus={'up'}*/}
        {/*             down={23.2} downStatus={'up'} change={'%'}/>*/}
      </div>
    </div>
  );
};