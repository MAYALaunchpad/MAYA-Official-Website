import React from "react";
import { useTranslation } from "react-i18next";
import './index.scss'
import timelist from './timeline.json'
import timeMask from '../../assets/image/functionMaskBg.png'

export default function MobileSchedule(){

    const { t } = useTranslation();

    return (
        <div className="mobile_schedule">
            { timelist.map((item:any) =>
                <div className="time_item" key={item.id}>
                    <span className="time">{`${t(item.time)}`}</span>
                    <span className="announce">{`${t(item.desc)}`}</span>
                    <span className="timeImg">{item.progressString}</span>
                </div>
            ) }
            <img alt="" src={timeMask} className="mobile_scheduleMask" />
        </div>
    )
}