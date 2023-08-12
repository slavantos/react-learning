import React, { useState } from "react";
import { useTranslation } from 'react-i18next';

const locales = {
    en: { title: 'English' },
    ru: { title: 'Русский' },
    es: { title: 'Español' },
};

const Language = () => {

    const { t, i18n } = useTranslation();

    const [isLanguage, setIsLanguage] = useState(false);

    function handleLangiage(e) {
        e.preventDefault();

        setIsLanguage(!isLanguage);
    }

    return (
        <ul className="uk-subnav uk-nav-lang  uk-subnav-pill uk-margin">
            <li>
                <a href="/" onClick={handleLangiage}>
                    <img src={"/images/"+i18n.resolvedLanguage+".png"} alt="lang" className="current-lang" />
                    {locales[i18n.resolvedLanguage].title}
                    <span className={isLanguage ? 'active' : ''}>
                        <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <polygon points="5 7 15 7 10 12"></polygon>
                        </svg>
                    </span>
                </a>
                <div className={isLanguage ? 'uk-dropdown uk-dropdown-bottom-left active' : 'uk-dropdown uk-dropdown-bottom-left'}>
                    <ul className="uk-nav uk-dropdown-nav variation-lang">
                    {Object.keys(locales).map((locale) => (
                        <li key={locale}>
                            <a href="/" onClick={() => i18n.changeLanguage(locale)}> 
                                <img src={"/images/"+locale+".png"} alt="profile" className="profile" />
                                {locales[locale].title}
                            </a>
                        </li>
                    ))}
                    </ul>
                </div>
            </li>
        </ul>
    )
}

export default Language;