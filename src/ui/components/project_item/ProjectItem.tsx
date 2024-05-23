import style from './style.module.scss'
import Image from "next/image";
import React from "react";
import Button from "@/ui/components/button/Button";
import {LanguageContext} from "@/utils/language/LanguageContext";
import {useContext} from "react";

interface props {
    imageUrl: string,
    title: string,
    description: string
}

export default function ProjectItem({imageUrl, title, description}: props) {

    const {translations} = useContext(LanguageContext)!

    return (
        <div className={style.item}>
            <Image width={300} height={300} src={imageUrl} alt={"image"} className={style.image}/>
            <h2 className={style.title}>{title}</h2>
            <p className={style.description}>{description}</p>
            <Button customStyle={style.button} type={"outline"} text={translations.projects.detail} onClick={() => {
            }}/>
        </div>
    )
}