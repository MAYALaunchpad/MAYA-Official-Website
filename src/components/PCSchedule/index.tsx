import React from "react";
import { useTranslation } from "react-i18next";
import timelist from './timeline.json'
import './index.scss'
import Centerline from '../../assets/image/PCScheduleCenterline.png'
import timeMask from '../../assets/image/functionMaskBg.png'

export default function PCSchedule(){

    const { t } = useTranslation();

    return (
        <div className="PCSchedule">
            <div className="PCSchedule_content">
                <div className="PCSchedule_Left">
                    { timelist.map((item:any) => <>
                        { item.id % 2 === 1 ? <div className="schedule_item">
                        <div className="schedule_item_time">{`${t(item.time)}`}</div>
                        <div className="schedule_item_desc">
                        {`${t(item.desc)}`}
                        </div>
                        <div className="schedule_item_timeImg">{item.progressString}</div>
                    </div> : ''}
                    </>) }
                </div>
                <img src={Centerline} alt="" className="centerline" />
                <div className="PCSchedule_Right">
                    { timelist.map((item:any) => <>
                        { item.id % 2 === 0 ? <div className="schedule_item">
                            <div className="schedule_item_time">{`${t(item.time)}`}</div>
                            <div className="schedule_item_desc">
                            {`${t(item.desc)}`}
                            </div>
                            <div className="schedule_item_timeImg">{item.progressString}</div>
                        </div> : ''}
                    </>) }
                </div>
                <img src={timeMask} className="PCScheduleMask" alt=""/>
            </div>
        </div>
    )
}