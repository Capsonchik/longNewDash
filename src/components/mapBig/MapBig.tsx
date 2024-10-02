import {SyntheticEvent, useState} from "react";
import {setCurrentRegion} from "@/store/store.slice";
import {useDispatch} from "react-redux";
import {AppDispatch} from "@/store/store";
import {MAP_PATHS} from "@/mocks/mapPaths";
import {Tooltip, Whisper} from "rsuite";

type Props = {
  currentValue: string | null
}

export const MapBig = ({currentValue}: Props) => {
  const dispatch = useDispatch<AppDispatch>()

  const [hoverValue, setHoverValue] = useState<string | null>(null)

  const handleClick = (event: SyntheticEvent) => {
    const title: string | null = event.currentTarget.getAttribute('data-title');
    // dispatch(setCurrentPickValue(title))
    if (title) {
      dispatch(setCurrentRegion(title))
    }
  }

  // const ToolTip = (data: any) => {
  //   return (
  //     <div className={styles.tollTip}>
  //       <span>Дата тайтл: {data_title}</span>
  //       <span>Дата код: {data_code}</span>
  //     </div>
  //   )
  // }

  return (
    <div className="rf-map margin-top-20">
      {/* Баг линтера */}
      {/* @ts-ignore */}
      <svg xmlnsSvg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg"
           xmlnsXlink="http://www.w3.org/1999/xlink" version="1.2" baseProfile="tiny" x="0px" y="0px"
           viewBox="0 0 1000 600" xmlSpace="preserve" xmlnsXml="http://www.w3.org/XML/1998/namespace">
        {
          MAP_PATHS.map((path) => {
            return (
              <Whisper
                key={path.data_code}
                followCursor
                placement="auto"
                speaker={
                  <Tooltip style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem',
                    background: 'white',
                    color: "black",
                    width: 700,
                    height: 300,
                    border: '1px solid #ccc'
                  }}>
                    <div style={{
                      display: 'flex',
                      flexDirection: 'column',
                    }}>
                      <span style={{fontSize: 16}}>{path.data_title}</span>
                      <div style={{display: 'flex', alignItems: 'center', gap: '1rem'}}>
                        <span style={{color: 'green'}}>+0.55 п.п</span>
                        <span style={{color: '#ccc', fontSize: 12}}>Сентябрь 23 VS Сентябрь 24</span>
                      </div>
                      <span style={{
                        color: '#ccc',
                        fontSize: 12,
                        marginBottom: 8
                      }}>Динамика доли региона в общих продажах категории в РФ(в шт.) год к году, п.п</span>
                      <hr/>
                      <p style={{marginTop: 8, marginBottom: 8}}>974.08 ₽ <span style={{color: '#ccc', fontSize: 12}}>- Средняя цена(₽)</span>
                      </p>
                      <p style={{color: 'green', marginBottom: 8}}>+32.75% <span style={{color: '#ccc', fontSize: 12}}>- изменение средней цены(₽)</span>
                      </p>
                      <p>0.24% <span style={{color: '#ccc', fontSize: 12}}>доля региона в продажах в категории</span>
                      </p>
                    </div>
                  </Tooltip>
                }
              >
                <path
                  d={path.d}
                  data-title={path.data_title}
                  data-code={path.data_code}
                  style={{
                    fill: currentValue === path.data_title ? "#d1dbe4" : "#194a7a", // Подсвечиваем активный path
                  }}
                  onClick={(event) => handleClick(event)}
                  // onMouseEnter={(event) => {
                  //   const title = event.currentTarget.getAttribute('data-title');
                  //   setHoverValue(title);
                  // }}
                  // onMouseLeave={() => {
                  //   setHoverValue(null);
                  // }}
                />
              </Whisper>

            )
          })
        }
      </svg>
      <div className="district-links"></div>
    </div>
  );
};