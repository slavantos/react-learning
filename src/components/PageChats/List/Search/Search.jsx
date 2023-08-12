import React from "react";
import { useTranslation } from 'react-i18next';

const Search = ({setSearchDialog}) => {

    const { t } = useTranslation();

    return (
        <div className="chat-user-list__search">
            <div className="search">
                <div className="search__input">
                    <i className="ico_search"></i>
                    <input type="search" name="search" placeholder={t('header.search')} onChange={(e) => setSearchDialog(e.target.value)}/>
                </div>
            </div>
        </div>
    )
}

export default Search;