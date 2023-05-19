import React, { useState } from 'react'
import './index.scss'
import HomeIconOne from '../../assets/image/HomeIcon-one.png'
import HomeIconTwo from '../../assets/image/HomeIcon-two.png'
import Homecat from '../../assets/image/homecat.png'
import UIicon from '../../assets/image/EasyUIicon.png'
import proSettingIcon from '../../assets/image/Prosetting.png'
import tokenIcon from '../../assets/image/Localtoken.png'
import welfareIcon from '../../assets/image/Welfare.png'
import functionMask from '../../assets/image/functionMaskBg.png'
import { useTranslation } from "react-i18next";
import Functionlist from './Functionlist.json'
import MobileSchedule from '../../components/MobileSchedule'
import PCSchedule from '../../components/PCSchedule'

export default function Home() {
  const { t } = useTranslation();

  // 选择查看的function
  const [functionindex,setFunctionIndex] = useState<number>(1)

  return (
    <div className='home'>
      {/* <Header /> */}
      <div className='home-area' id='home'>
        <div className='home-content'>
          <div className='homeIntro_top'>
            <div className='homeIntro_One'>
              <span className='maya-title'>{`${t("Maya是Arbitrum上最顶尖的发射平台项目！")}`}</span>
              <button className='lauch'>{`${t("启动APP")}`}</button>
              <img src={Homecat} alt="" className="maya-cat"/>
            </div>

            <div className='homeIntro_Two'>
              <div className='homeIntro_Two_content'>
                <img src={HomeIconOne} alt="" className='icon-one'/>
                <img src={HomeIconTwo} alt="" className='icon-two'/>
              </div>
              <span className='maya-subtitle'>{`${t("Maya是一个去中心化的Coinlist发射平台，旨在改变用户发现新项目和使项目所有者/团队轻松启动其项目和代币的方式。我们的目标是简化项目启动过程，同时为创作者和投资者提供安全、用户友好和高效的平台。")}`}</span>
            </div>
          </div>

          { Functionlist.map((item:any) =>
            <>
              { item.id === functionindex ?
              <div className='homeIntro_func' id="easyui" key={item.id}>
                
                <div className="homeIntro_func_left">
                <img src={functionMask} className="funcMask" />
                  <div className='func-name'>
                    <span className='funcname'>{`${t("主要功能")}`}</span>
                    <span className='func-nameline' />
                  </div>
                  <div className="function_title">{`${t(item.title)}`}</div>
                  <div className="function_desc">{`${t(item.description)}`}</div>
                  <div className="createnow">
                    Create Now
                  </div>
                </div>
                <div className="homeIntro_func_right">
                  { item.id === 1 ? <img src={UIicon} alt="" className='easyui-icon'/> : <>
                    { item.id === 2 ? <img src={proSettingIcon} alt="" className='easyui-icon'/> : <>
                      { item.id === 3 ? <img src={tokenIcon} alt="" className='easyui-icon'/> : <>
                        { item.id === 4 ? <img src={welfareIcon} alt="" className='easyui-icon'/> : '' }
                      </> }
                    </> }
                  </>}
                </div>
          </div> : '' }
            </>
          ) }

          <div className='functionSelect'>
            <div className="select_function_timeline">

              <div className="functimeline pass_timeline" />
              {/* 第一个节点 */}
              <div className="functime_point select_point" onClick={() => { setFunctionIndex(1) }}>
                <div className="functime_pointdesc select_pointdesc">Clean and simple interface</div>
              </div>

              <div className={ ['functimeline', functionindex >= 2 ?'pass_timeline':'unpass_timeline'].join(' ') } />
              {/* 第二个节点 */}
              <div
                className={ ['functime_point', functionindex >= 2 ?'select_point':'unselect_point'].join(' ') }
                onClick={() => { setFunctionIndex(2) }}
                >
                <div
                  className={ ['functime_pointdesc', functionindex >= 2 ?'select_pointdesc':null].join(' ') }
                >Flexible project setup</div>
              </div>

              <div className={ ['functimeline', functionindex >= 3 ?'pass_timeline':'unpass_timeline'].join(' ') } />

              {/* 第三个节点 */}
              <div
                className={ ['functime_point', functionindex >= 3 ?'select_point':'unselect_point'].join(' ') }
                onClick={() => { setFunctionIndex(3) }}
                >
                <div
                  className={ ['functime_pointdesc', functionindex >= 3 ?'select_pointdesc':null].join(' ') }
                >Native token</div>
              </div>

              <div className={ ['functimeline', functionindex >= 4 ?'pass_timeline':'unpass_timeline'].join(' ') } />

              {/* 第四个节点 */}
              <div
                className={ ['functime_point', functionindex >= 4 ?'select_point':'unselect_point'].join(' ') }
                onClick={() => { setFunctionIndex(4) }}
                >
                <div
                  className={ ['functime_pointdesc', functionindex >=4 ?'select_pointdesc':null].join(' ') }
                >Token staking benefits</div>
              </div>

              <div className={ ['functimeline', functionindex >= 5 ?'pass_timeline':'unpass_timeline'].join(' ') } />
            </div>
          </div>


          <div className='timeline-content'>
            <div className='timeline'>
              <span className='timeline-title'>{`${t("时间线")}`}</span>
            </div>
          </div>
          <span className='timeline-subtitle'>{`${t("我们很高兴与您分享这个旅程，希望您为这些令人兴奋的即将到来的事件做好")}`}</span>
          <MobileSchedule/>
          <PCSchedule />
        </div>
      </div>
    </div>
  )
}
