import React, { useState } from "react";
import { useTranslation } from 'react-i18next';

const Filters = ({favoritesPosts}) => {

    const [searchValue, setSearchValue] = useState('');

    const { t } = useTranslation();

    // const favoriteSearch = favoritesPosts.filter(favoritePost => {
    //     return favoritePost.title.toLowerCase().includes(searchValue.toLowerCase())
    // });

    return (
        <div className="widjet --filters">
            <div className="widjet__head">
                <h3 className="uk-text-lead">My Favourites</h3>
            </div>
            <div className="widjet__body">
                <div className="uk-grid uk-child-width-1-4@xl uk-child-width-1-2@s uk-flex-middle uk-grid-small data-uk-grid">
                    <div className="uk-width-1-1">
                        <div className="search">
                            <div className="search__input">
                                <i className="ico_search"></i>
                                <input type="search" name="search" placeholder={t('header.search')} onChange={(e) => setSearchValue(e.target.value)}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Filters;