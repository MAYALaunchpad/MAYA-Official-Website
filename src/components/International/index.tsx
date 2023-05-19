import { useState , useEffect} from "react";
import type { MenuProps } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { Button, Dropdown, Space } from "antd";
import TransIcon from "../../assets/image/translationIcon.png";
import "./index.scss";
import i18n from '../../i18n'

const International = () => {
  const [language, setLanguage] = useState("繁體中文");

  // 更改字体样式
  const changeFontFamily = (fontfamily:string) => {
    const root = document.querySelector('body');
    const rootStyles = window.getComputedStyle(root as HTMLBodyElement);
    const fontFamily = rootStyles.getPropertyValue('font-family');
    const fontSize = rootStyles.getPropertyValue('font-size');
    (root as HTMLBodyElement).style.setProperty('font-family',fontfamily,'important');
  }

  useEffect(() => {

    const langObject = {
      "zh-CN":"繁體中文",
      "en":"English",
      "ko-KP":"한글"
    }

    if(localStorage.getItem("lang")){
        const lang = localStorage.getItem("lang") as string
        if(lang === "zh-CN" || lang ==="ko-KP"){
          changeFontFamily('Poppins')
        } else {
          changeFontFamily('Noto Sans HK')
        }
        i18n.changeLanguage(lang)
        setLanguage(langObject[lang])
    } else {
        i18n.changeLanguage("zh-CN")
        setLanguage('繁體中文')
    }
  },[])

  const Languagelist = [
    {
      label: "繁體中文",
      key: "1",
    },
    {
      label: "English",
      key: "2",
    },
    {
      label: "한글",
      key: "3",
    }
  ];

  

  const handleMenuClick: MenuProps["onClick"] = (e) => {

    // 设置前端显示内容
    setLanguage(Languagelist[Number(e.key) - 1].label);

    if (e.key === "1") {
      localStorage.setItem("lang","zh-CN")
      i18n.changeLanguage("zh-CN")
      changeFontFamily('Poppins')
      // root.style.setProperty('font-family','Poppins','important');
      console.log()
    } else if (e.key === "2"){
      localStorage.setItem("lang","en")
      i18n.changeLanguage("en")
      changeFontFamily('Noto Sans HK')
      // root.style.setProperty('font-family','Noto Sans HK','important');
    } else {
      localStorage.setItem("lang","ko-KP")
      i18n.changeLanguage("ko-KP")
      changeFontFamily('Poppins')
      // root.style.setProperty('font-family','Poppins','important');
    }
  };
  const items: MenuProps["items"] = [
    {
      label: "繁體中文",
      key: "1",
    },
    {
      label: "English",
      key: "2",
    },
    {
      label: "한글",
      key: "3",
    }
  ];

  return (
    <div className="international">
      <div className="inter">
        <Dropdown
          menu={{ items, onClick: handleMenuClick }}
          placement="bottom"
          arrow={{ pointAtCenter: true }}
        >
          <Button>
            <Space>
              <div className="interSpace">
                <img src={TransIcon} alt="" />
                <div className="interRight">
                  <span className="lang">{ language }</span>
                  <DownOutlined style={{ fontSize: "15px" }} />
                </div>
              </div>
            </Space>
          </Button>
        </Dropdown>
      </div>
    </div>
  );
};

export default International;
