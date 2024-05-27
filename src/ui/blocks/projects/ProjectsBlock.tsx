'use client'

import style from "./style.module.scss"
import ProjectItem from "@/ui/components/project_item/ProjectItem";
import Button from "@/ui/components/button/Button";
import { mainPageIds } from "@/utils/Const";
import { useRouter } from 'next/navigation';
import {LanguageContext} from "@/utils/language/LanguageContext";
import {useContext} from "react";

export default function ProjectsBlock() {

    const {translations} = useContext(LanguageContext)!
    const router = useRouter()

    return (
        <div className={style.container} id={mainPageIds.project.ready}>
            <h3>
                {translations.projects.title}
            </h3>
            <div className={style.buttons_type_layout}>
                <Button
                    text={translations.projects.ready}
                    customStyle={style.buttons_type}
                    onClick={() => { router.push("/projects") }}
                />
                <Button
                    text={translations.projects.current}
                    type={"primary_dark"}
                    customStyle={style.buttons_type}
                    onClick={() => { router.push("/projects") }}
                />

                <Button
                    text={translations.projects.regular}
                    type={"primary_dark"}
                    customStyle={style.buttons_type}
                    onClick={() => { router.push("/projects") }}
                />

            </div>
            <div className={style.grid_container}>
                {
                    Projects()
                }
            </div>
            {/*<div className={style.all_button}>*/}
            {/*    <Button*/}
            {/*        text={"Дивитись усі проєкти"}*/}
            {/*        customStyle={style.buttons_type}*/}
            {/*        onClick={() => {*/}
            {/*        }}/>*/}
            {/*</div>*/}
        </div>
    )
}

function Projects() {
    return (
        <div className={style.list}>
            <ProjectItem
                imageUrl={"https://placehold.co/600x400.png"}
                title={"Lorem ipsum"}
                description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"}
            />
            <ProjectItem
                imageUrl={"https://placehold.co/600x400.png"}
                title={"Lorem ipsum"}
                description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"}
            />
            <ProjectItem
                imageUrl={"https://placehold.co/600x400.png"}
                title={"Lorem ipsum"}
                description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"}
            />
            <ProjectItem
                imageUrl={"https://placehold.co/600x400.png"}
                title={"Lorem ipsum"}
                description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"}
            />
            <ProjectItem
                imageUrl={"https://placehold.co/600x400.png"}
                title={"Lorem ipsum"}
                description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"}
            />
            <ProjectItem
                imageUrl={"https://placehold.co/600x400.png"}
                title={"Lorem ipsum"}
                description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"}
            />
            <ProjectItem
                imageUrl={"https://placehold.co/600x400.png"}
                title={"Lorem ipsum"}
                description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"}
            />
            <ProjectItem
                imageUrl={"https://placehold.co/600x400.png"}
                title={"Lorem ipsum"}
                description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"}
            />
        </div>
    )
}

function Skeleton() {
    return (
        <div>

        </div>
    )
}