'use client'

import LanguageSwitcher from "@/ui/components/language_switcher/LanguageSwitcher";
import style from "./style.module.scss"
import Email from "@/../public/svg/email.svg"
import Logo from "@/../public/svg/logo_white.svg"
import Facebook from "@/../public/svg/ic_facebook.svg"
import Instagram from "@/../public/svg/ic_instagram.svg"
import Telegram from "@/../public/svg/ic_telegram.svg"
import Artevide from "@/../public/svg/artevide.svg"
import {email, mainPageIds} from "@/utils/Const";
import {useContext} from "react";
import {LanguageContext} from "@/utils/language/LanguageContext";

export default function Footer() {

    const {translations} = useContext(LanguageContext)!

    return (
        <div className={style.container}>
            <div className={style.logo}>
                <Logo/>
            </div>
            <div className={style.info}>
                <div className={style.section_first}>
                    <h2>
                        {translations.main.subtitle}
                    </h2>
                    <div className={style.items}>
                        <a href={`/#${mainPageIds.main}`}>{translations.footer.home}</a>
                        <a href={`/#${mainPageIds.history}`}>{translations.header_menu.history.submenu.history}</a>
                        <a href={`/#${mainPageIds.mission}`}>{translations.header_menu.history.submenu.mission}</a>
                        <a href={`/#${mainPageIds.work}`}>{translations.header_menu.history.submenu.methods}</a>
                        <a href={`/#${mainPageIds.project.ready}`}>{translations.header_menu.projects.name}</a>
                        <a href={`/#${mainPageIds.donate}`}>{translations.donate}</a>
                        <a href={`/#${mainPageIds.gallery}`}>{translations.header_menu.gallery}</a>
                        <a href={`/#${mainPageIds.partners}`}>{translations.header_menu.partner}</a>
                    </div>
                    <div className={style.buttons}>
                        <div className={style.email_full}>
                            <Email fill={"#797979"}/>
                            <p>{email}</p>
                        </div>
                        <LanguageSwitcher theme={"secondary"} type={"compact"}/>
                    </div>
                </div>
                <div className={style.section_second}>
                    <p>{translations.partners.info}</p>
                    <div className={style.social_buttons}>
                        <div className={style.social_container}>
                            <Instagram/>
                        </div>
                        <div className={style.social_container}>
                            <Facebook/>
                        </div>
                        <div className={style.social_container}>
                            <Telegram/>
                        </div>
                    </div>
                </div>
            </div>
            <div className={style.promo}>
                <p>
                    Design & Dev:
                </p>
                <Artevide/>
            </div>
        </div>
    )
}