import React from "react";
import { useTranslation } from 'react-i18next';

const Filters = () => {

    const { t } = useTranslation();

    return (
        <div className="widjet --filters">
            <div className="widjet__head">
                <h3 className="uk-text-lead">{t('header.search')}</h3>
            </div>
            <div className="widjet__body">
                <div className="uk-grid uk-child-width-1-4@xl uk-child-width-1-2@s uk-flex-middle uk-grid-small data-uk-grid">
                    <div className="uk-width-1-1">
                        <div className="search">
                            <div className="search__input"><i className="ico_search"></i><input type="search" name="search" placeholder={t('header.search')}/></div>
                        </div>
                    </div>
                    <div className="uk-grid-margin">
                        <select className="js-select">
                            <option value>Sort By: Price</option>
                            <option value="Price 1">Price 1</option>
                            <option value="Price 2">Price 2</option>
                            <option value="Price 3">Price 3</option>
                        </select>
                    </div>
                    <div className="uk-grid-margin">
                        <select className="js-select">
                            <option value>Category: All</option>
                            <option value="Category 1">Category 1</option>
                            <option value="Category 2">Category 2</option>
                            <option value="Category 3">Category 3</option>
                        </select>
                    </div>
                    <div className="uk-grid-margin">
                        <select className="js-select">
                            <option value>Platform: All</option>
                            <option value="Platform 1">Platform 1</option>
                            <option value="Platform 2">Platform 2</option>
                            <option value="Platform 3">Platform 3</option>
                        </select>
                    </div>
                    <div className="uk-text-right uk-grid-margin"><a href="#!">15 items</a></div>
                </div>
            </div>
        </div>
    )
}

export default Filters;