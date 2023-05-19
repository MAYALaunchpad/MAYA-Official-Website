import React , { useState } from 'react'
import { Progress } from 'antd';
import './index.scss'
import timelinelist from './timeline.json'
import { useTranslation, Trans } from "react-i18next";
export default function Index() {
    const { t } = useTranslation();
    const [checktimeline,setCheckTimeLine] = useState<number>(1)

    const timelineItem_active = {
        width:"312px",
        padding:"60px 40px 20px",
    }

    const timelineItem = {
        width:"135px",
        padding:"50px 33px 20px",
    }

    return (
        <div className='timeline-areaPC'>
            <div className='timeline-top'>
                { timelinelist.map((item:any) => (
                    <div
                    className='timeline-item'
                    style={checktimeline === item.id ? timelineItem_active : timelineItem}
                    onClick={() => { setCheckTimeLine(item.id) }}
                    key={item.id}
                >
                    <span
                        className='time'
                        style={{
                            color:checktimeline === item.id ? 'rgba(0, 0, 0, 0.85)' : '#717171',
                            fontSize: checktimeline === item.id ? '24px' : '16px'
                    }}
                    >{`${t(item.time)}`}</span>
                    <span style={{display:checktimeline !== item.id ? 'none' : ''}}>{`${t(item.desc)}`}</span>
                    <div
                        className='progress-area'
                        style={{
                            width:item.id === checktimeline ? '80px' : '60px',
                            height:item.id === checktimeline ? '80px' : '60px'
                        }}
                    >
                        { checktimeline === item.id ? <Progress size="default" type="circle" strokeColor="#F95192" percent={item.progressNumber} format={() => item.progressString} />
                        : <Progress size="default" type="circle" strokeColor="#CCC" percent={item.progressNumber} format={() => item.progressString} />
                        }
                    </div>
                    <div className={ ['point', checktimeline >= item.id ?'select-point':'noselect-point'].join(' ') } >
                        <div
                            className='pointline'
                            style={{
                                opacity: item.id === 1 ? 0 : 1,
                                width: checktimeline === item.id || checktimeline === item.id - 1  ? '250px' : '145px',
                                background: checktimeline >= item.id ? '#F95192' : '',
                                // transform: checktimeline === item.id || checktimeline === item.id - 1  ? 'translateY(-50%)' : 'translateY(-25%)'
                            }}
                        />
                    </div>
                </div>
                )) }
            </div>
            <div className='timeline-bottom' />
        </div>
    )
}
