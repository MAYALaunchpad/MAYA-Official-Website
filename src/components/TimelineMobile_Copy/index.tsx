import React, { useState } from 'react'
import { Progress } from 'antd';
import './index.scss'
import timelinelist from './timeline.json'
import { useTranslation, Trans } from "react-i18next";
export default function Index() {
    const { t } = useTranslation();
    const [checktime,setCheckTime]  = useState<number>(1)

    return (
        <div className='timeline-mobile'>
            {/* 左边显示数据信息 */}
            <div className='timelineMobLeft'>
            { timelinelist.map((item:any) => (
                    <div className='mobileLeft' key={item.id}>
                        <div
                            className='timeline-item'
                            onClick={() => { setCheckTime(item.id) }}
                        >
                            <span className='itemTime'>{`${t(item.time)}`}</span>
                            { checktime === item.id ? <span className='itemDesc'>{`${t(item.desc)}`}</span> : '' }
                            <div
                                className='progress-area'
                                style={{
                                    transform:item.id === checktime ? 'scale(1)' : 'scale(0.8)',
                                }}
                            >
                                { checktime === item.id
                                    ? <Progress size="default" type="circle" strokeColor="#F95192" percent={item.progressNumber} format={() => item.progressString} />
                                    : <Progress size="default" type="circle" strokeColor="#CCC" percent={item.progressNumber} format={() => item.progressString} />
                                }
                            </div>
                        </div>
                        <div className={['point ',checktime >= item.id ? 'time-selectpoint' : 'time-unselectpoint'].join('')}>
                            <div
                                className={['time-line ',checktime > item.id ? '' : 'time-unselectline'].join('')}
                                style={{
                                    display: item.id === timelinelist.length  ? 'none' : '',
                                    height: item.id === timelinelist.length  - 1 && item.id != checktime && timelinelist.length != checktime ? '130px' : '180px'
                                }}
                            >
                            </div>
                        </div>
                    </div>
                ) ) }

            </div >
        </div>
    )
}
