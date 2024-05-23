"use client"

import {Image} from 'antd';
import style from './style.module.scss';
import {mainPageIds} from "@/utils/Const";
import {useContext} from "react";
import {LanguageContext} from "@/utils/language/LanguageContext";

export default function GalleryBlock() {

    const {translations} = useContext(LanguageContext)!

    const urls = [
        "https://placehold.co/600x400.png",
        "https://placehold.co/600x400.png",
        "https://placehold.co/600x400.png",
        "https://placehold.co/600x400.png",
        "https://placehold.co/600x400.png",
        "https://placehold.co/600x400.png",
        "https://placehold.co/600x400.png",
        "https://placehold.co/600x400.png",
        "https://placehold.co/600x400.png",
        "https://placehold.co/600x400.png",
        "https://placehold.co/600x400.png",
        "https://placehold.co/600x400.png",
    ]

    return (
        <div>
            <Image.PreviewGroup preview={{
                movable: false
            }}>
                <div className={style.container} id={mainPageIds.gallery}>
                    <h3>
                        {translations.header_menu.gallery}
                    </h3>
                    <div className={style.content}>
                        <div className={style.images}>
                            {
                                urls.map((url, index) => (
                                    <Image
                                        preview={{
                                            mask: (<div/>),
                                            maskClassName: style.image
                                        }}
                                        className={style.image}
                                        src={url}
                                        key={index}/>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </Image.PreviewGroup>
        </div>
    )
}