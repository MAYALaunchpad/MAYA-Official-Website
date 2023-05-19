import React, { useState } from 'react'
import './index.scss'
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import TimelinePC from '../../components/TimelinePC';
import TimelineMobile from '../../components/TimelineMobile'
import HomeIconOne from '../../assets/image/HomeIcon-one.png'
import HomeIconTwo from '../../assets/image/HomeIcon-two.png'
import Homecat from '../../assets/image/homecat.png'
import UIicon from '../../assets/image/EasyUIicon.png'
import proSettingIcon from '../../assets/image/Prosetting.png'
import tokenIcon from '../../assets/image/Localtoken.png'
import welfareIcon from '../../assets/image/Welfare.png'
import { useTranslation, Trans } from "react-i18next";
export default function Home() {
  const { t } = useTranslation();

  return (
    <div className='home'>
      {/* <Header /> */}
      <div className='home-area' id='home'>
        <div className='home-content'>
          <div className='homeIntro_top'>
            <div className='homeIntro_One'>
              <span className='maya-title'>{`${t("Maya是Arbitrum上最顶尖的发射平台项目！")}`}</span>
              <span className='maya-subtitle'>{`${t("Maya是一个去中心化的Coinlist发射平台，旨在改变用户发现新项目和使项目所有者/团队轻松启动其项目和代币的方式。我们的目标是简化项目启动过程，同时为创作者和投资者提供安全、用户友好和高效的平台。")}`}</span>
              <button className='lauch'>{`${t("启动APP")}`}</button>
              <img src={Homecat} alt="" className="maya-cat"/>
            </div>

            <div className='homeIntro_Two'>
              <img src={HomeIconOne} alt="" className='icon-one'/>
              <img src={HomeIconTwo} alt="" className='icon-two'/>
            </div>
          </div>

          <div className='homeIntro_func'>
            <div className='uifunc' id="easyui">
              <div className='uifunction'>
                <div className='uifunc_left'>
                  <div className='func-name'>
                      <span className='funcname'>{`${t("清洁简单的界面")}`}</span>
                      <span className='func-nameline' />
                  </div>
                  <span className='func-intro'>{`${t("通过简单直观的布局，使新用户和有经验的用户都可以轻松浏览和启动项目。")}`}</span>
                </div>
                <img src={UIicon} alt="" className='easyui-icon'/>
              </div>
            </div>
            <div className='homeIntrofunc_bottom'>
              <div className='settingfunc'>
                <div className='func-name'>
                  <span className='funcname'>{`${t("灵活的项目设置")}`}</span>
                  <div className='func-nameline' />
                </div>
                <span className='func-intro'>{`${t("Maya提供多种设置新项目的方式和模板。您可以选择拍卖您的代币，以固定价格分发代币，或动态设置代币认领。")}`}</span>
                <img src={proSettingIcon} alt="" className='func-icon'/>
              </div>
              <div className='tokenfunc'>
                <div className='func-name'>
                  <span className='funcname'>{`${t("本地代币")}`}</span>
                  <div className='func-nameline' />
                </div>
                <span className='func-intro'>{`${t("Maya将拥有自己的本地代币，其功能类似于$BNB。使用Maya的项目越多，Maya代币的价值就越高。")}`}</span>
                <img src={tokenIcon} alt="" className='func-icon'/>
              </div>
              <div className='welfarefunc'>
                <div className='func-name'>
                  <span className='funcname'>{`${t("代币质押福利")}`}</span>
                  <div className='func-nameline' />
                </div>
                <span className='func-intro'>{`${t("本地代币的质押者将享有对所有在Maya上启动的项目的平等分配权，为参与提供额外的激励。")}`}</span>
                <img src={welfareIcon} alt="" className='func-icon'/>
              </div>
            </div>
          </div>

          <div className='home-create'>
            <span className='create-left'>{`${t("加入我们，一起在Arbitrum上重塑项目启动的格局，使用Maya，最终的去中心化发射平台！")}`}</span>
            <button className='create-right'>{`${t("立即创建")}`}</button>
          </div>

          <span className='timeline-title' id="timeline">{`${t("时间线")}`}</span>
          <span className='timeline-subtitle'>{`${t("我们很高兴与您分享这个旅程，希望您为这些令人兴奋的即将到来的事件做好")}`}</span>

          <TimelinePC />
          <TimelineMobile />
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  )
}
