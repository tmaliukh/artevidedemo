'use client'

import Header from '@/ui/components/header/Header'
import styles from './page.module.scss'
import Footer from '@/ui/components/footer/Footer';
import Button from "@/ui/components/button/Button";
import {Checkbox, CheckboxProps} from 'antd';
import {useContext} from "react";
import {LanguageContext} from "@/utils/language/LanguageContext";

export default function Page() {

    const {translations} = useContext(LanguageContext)!

    const onChange: CheckboxProps['onChange'] = (e) => {
        console.log(`checked = ${e.target.checked}`);
    };

    return (
        <main className={styles.main}>
            <div className={styles.container}>
                <Header/>
                <div className={styles.partners_container}>
                    <div className={styles.header}>
                        <h1>{translations.header_menu.partner}</h1>
                        <p>{translations.partners_page.info}</p>
                    </div>
                    <div className={styles.fields_container}>
                        <div className={styles.blocks}>
                            <div className={styles.fields_first}>
                                <TextField
                                    title={translations.partners_page.company_name}
                                    hint={translations.partners_page.company_name_hint}
                                    type={"string"}
                                    onTextChange={(text) => {

                                    }}/>
                                <div className={styles.spacer}/>
                                <TextField
                                    title={translations.partners_page.name}
                                    hint={translations.partners_page.name_hint}
                                    type={"string"}
                                    onTextChange={(text) => {

                                    }}/>
                                <div className={styles.spacer}/>
                                <TextField
                                    title={"Пропозиція"}
                                    hint={"Ваша пропозиція"}
                                    type={"string"}
                                    onTextChange={(text) => {

                                    }}/>
                            </div>
                            <div className={styles.fields_second}>
                                <TextField
                                    title={translations.partners_page.partnership}
                                    hint={translations.partners_page.partnership_hint}
                                    type={"string"}
                                    onTextChange={(text) => {

                                    }}/>
                                <div className={styles.spacer}/>
                                <TextField
                                    title={"Email"}
                                    hint={translations.partners_page.email_hint}
                                    type={"string"}
                                    onTextChange={(text) => {

                                    }}/>
                                <div className={styles.spacer}/>
                            </div>
                        </div>
                        <div className={styles.spacer}/>
                        <Button text={"Відправити"} type={"primary"} onClick={() => {
                        }} customStyle={styles.button}/>
                    </div>
                </div>
                <Footer/>
            </div>
        </main>
    )
}

interface props {
    title: string;
    hint: string;
    pattern?: string;
    type: string;
    customClass?: string;
    value?: string;
    onTextChange: (text: string) => void
}

const TextField: React.FC<props> = ({
                                        title,
                                        customClass,
                                        hint,
                                        pattern = "",
                                        type,
                                        value = "",
                                        onTextChange
                                    }) => {

    const classes = `${styles.field_wrapper} ${customClass || ''}`;

    return (
        <div className={classes}>
            <p className={styles.field_title}>{title}</p>
            <input
                type={type}
                name="name"
                className={styles.field}
                placeholder={hint}
                pattern={pattern}
                value={value}
                onChange={(event) => {
                    onTextChange(event.target.value)
                }}
            />
        </div>
    )
}
