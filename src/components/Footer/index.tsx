import React from 'react'
import './index.scss'
import HeaderLogo from '../../assets/image/HeaderLogo.png'
import Twitter from '../../assets/image/Twitter.png'
import Discord from '../../assets/image/Discord.png'
import Youtube from '../../assets/image/Youtube.png'
import footerBottomImage from '../../assets/image/footerBottomImg.png'
import { useTranslation, Trans } from "react-i18next";

export default function Footer() {
    const { t } = useTranslation();

    return (
        <div className='footer'>
            {/* 上面部分 */}
            <div className='footer_top'>
                <div className="footer_top_content">
                    <div className='footer_left'>
                        <img src={HeaderLogo} alt="" className='footer_LeftLogo'/>
                        <div className="footergoal">
                            {`${t("我们的目标是简化项目启动过程，同时为创作者和投资者提供一个安全、用户友好和高效的平台。")}`}
                        </div>
                    </div>

                    <div className='footer_right'>
                        <div className='footerRow'>
                            <span className='footerRow-title'>{`${t("资源")}`}</span>
                            <span className='footerRow-item'>{`${t("审计")}`}</span>
                            <span className='footerRow-item'>{`${t("联系我们")}`}</span>
                            <span className='footerRow-item'>{`${t("合约")}`}</span>
                            <span className='footerRow-item'>{`${t("文档")}`}</span>
                        </div>
                        <div className='footerRow'>
                            <span className='footerRow-title'>{`${t("帮助")}`}</span>
                            <span className='footerRow-item'>{`${t("常问问题")}`}</span>
                            <span className='footerRow-item'>{`${t("导游")}`}</span>
                            <span className='footerRow-item'>{`${t("支持")}`}</span>
                        </div>
                        <div className='footerRow'>
                            <span className='footerRow-title'>{`${t("工具")}`}</span>
                            <span className='footerRow-item'>{`${t("分析")}`}</span>
                            <span className='footerRow-item'>{`${t("桥")}`}</span>
                            <span className='footerRow-item'>{`${t("币虎")}`}</span>
                            <span className='footerRow-item'>{`${t("Dex工具")}`}</span>
                            <span className='footerRow-item'>{`${t("壁虎终端")}`}</span>
                            <span className='footerRow-item'>{`${t("治理")}`}</span>
                        </div>
                        <div className='footerRow'>
                            <span className='footerRow-title'>{`${t("生态系统")}`}</span>
                            <span className='footerRow-item'>{`${t("创建硝基池")}`}</span>
                            <span className='footerRow-item'>{`${t("我的氮气池")}`}</span>
                        </div>
                    </div>
                </div>
            </div>
            {/* 下面部分 */}
            <div className="footer_bottom">
                <div className="footer_bottom_content">
                    <span className="footer_copyright">Copyright ©2023 maya, All rights reserved.</span>
                    <div className='footer_socialMedia'>
                        <a href="https://twitter.com/MAYA_Office_" target="blank">
                            <img src={Twitter} alt="" className='mediaIcon'/>
                        </a>
                        <a href="https://support.discord.com/hc/en-us/profiles/13506720748439" target="blank">
                            <img src={Discord} alt="" className='mediaIcon'/>
                        </a>
                        <a href="https://www.youtube.com/channel/UCyWpVoDi2SVD77FVMhZaaxg" target="blank">
                            <img src={Youtube} alt="" className='mediaIcon'/>
                        </a>
                    </div>
                </div>
            </div>
            <img src={footerBottomImage} alt="" className='footer_bottomImg' />
        </div>
    )
}
