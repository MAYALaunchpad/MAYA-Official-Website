import React, { useEffect, useState } from 'react'
import './index.scss'
import HeaderLogo from '../../assets/image/HeaderLogo.png'
import Twitter from '../../assets/image/Twitter.png'
import Discord from '../../assets/image/Discord.png'
import Youtube from '../../assets/image/Youtube.png'
import International from '../International'
import DrawerToBeOpen from '../../assets/image/drawerToBeOpen.png'
import DrawerToBeClose from '../../assets/image/drawerToBeClose.png'
import { useTranslation, Trans } from "react-i18next";
import { Drawer } from 'antd'
import i18n from '../../i18n'
export default function Header(props:any) {

    useEffect(() => {
        if(localStorage.getItem("lang")){
            i18n.changeLanguage(localStorage.getItem("lang") as string )
        } else {
            i18n.changeLanguage("zh-CN")
        }
    },[])

    const [selectbtn,setSelectBtn] = useState<number>(1)

    const [drawershow,setDrawerShow] = useState<boolean>(false)

    const { t } = useTranslation();

    const handleDrawerShow = () => { setDrawerShow(!drawershow) }

    const headerbtnhandle = (id:number,anchor:string) => {
        setSelectBtn(id)
        props.scrollToAnchor(anchor)
    }

    return (
        <div className='Header'>
            {/* PC端显示 */}
            <div className='PCHeader'>
                {/* 左侧显示图标 */}
                <img src={ HeaderLogo } alt="" className='header_left'/>
                {/* 中间显示按钮区域 */}
                <div className='header_middle'>
                    <span
                        style={{color:selectbtn === 1 ? '#F95192' : '#FFD5E5'}}
                        onClick={() => { headerbtnhandle(1,'home') }}
                    >{`${t("首页")}`}</span>
                    <span
                        className='main_func'
                        style={{color:selectbtn === 2 ? '#F95192' : '#FFD5E5'}}
                        onClick={() => { headerbtnhandle(2,'easyui') }}
                        >{`${t("主要功能")}`}</span>
                    <span
                        style={{color:selectbtn === 3 ? '#F95192' : '#FFD5E5'}}
                        onClick={() => { headerbtnhandle(3,'timeline') }}
                    >{`${t("时间线")}`}</span>
                </div>
                {/* 右侧 */}
                <div className='header_right'>
                    <a href="https://twitter.com/MAYA_Office_" target="blank">
                        <img src={Twitter} alt="" className='mediaIcon'/>
                    </a>
                    <a href="https://support.discord.com/hc/en-us/profiles/13506720748439" target="blank">
                        <img src={Discord} alt="" className='mediaIcon telegramIcon'/>
                    </a>
                    <a href="https://www.youtube.com/channel/UCyWpVoDi2SVD77FVMhZaaxg" target="blank">
                        <img src={Youtube} alt="" className='mediaIcon youtubeIcon'/>
                    </a>
                    <International />
                </div>
            </div>
            {/* 移动端显示 */}
            <div className='MobileHeader'>
                <div className='mobHeader_left'>
                    <img src={DrawerToBeOpen} alt="" onClick={() => { handleDrawerShow() }}/>
                </div>
                <International />
                <Drawer
                    title={
                        <div className='drawer_title'>
                            <img src={DrawerToBeClose} alt="" onClick={() => { handleDrawerShow() }}/>
                        </div>
                    }
                    placement="left"
                    onClose={handleDrawerShow}
                    open={drawershow}>
                    <div className='drawer_button'>
                        <span
                            className='drawer_buttonitem'
                            onClick={() => { headerbtnhandle(1,'home') }}
                            style={{color:selectbtn === 1 ? '#F95192' : '#FFD5E5'}}
                        >{`${t("首页")}`}</span>
                        <span
                            className='drawer_buttonitem'
                            onClick={() => { headerbtnhandle(2,'easyui') }}
                            style={{color:selectbtn === 2 ? '#F95192' : '#FFD5E5'}}
                        >{`${t("主要功能")}`}</span>
                        <span
                            className='drawer_buttonitem'
                            onClick={() => { headerbtnhandle(3,'timeline') }}
                            style={{color:selectbtn === 3 ? '#F95192' : '#FFD5E5'}}
                        >{`${t("时间线")}`}</span>
                    </div>
                    <div className='drawer_footer'>
                        <a href="https://twitter.com/MAYA_Office_" target="blank">
                            <img src={Twitter} alt="" />
                        </a>
                        <a href="https://support.discord.com/hc/en-us/profiles/13506720748439" target="blank">
                            <img src={Discord} alt="" />
                        </a>
                        <a href="https://www.youtube.com/channel/UCyWpVoDi2SVD77FVMhZaaxg" target="blank">
                            <img src={Youtube} alt="" />
                        </a>
                    </div>
                </Drawer>
            </div>
        </div>
    )
}
