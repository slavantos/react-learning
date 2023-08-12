import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const Filter = ({setSearch}) => {

    const { t } = useTranslation();

    return (
        <div className="widjet --filters">
            <div className="widjet__head">
                <h3 className="uk-text-lead ">Friend Requests</h3>
            </div>
            <div className="widjet__body">
                <div className="uk-grid uk-flex-middle uk-grid-small data-uk-grid">
                    <div className="uk-width-expand@s">
                        <div className="search">
                            <div className="search__input">
                                <i className="ico_search"></i>
                                <input
                                    type="search"
                                    name="search"
                                    placeholder={t('header.search')}
                                    onChange={(e) => setSearch(e.target.value)}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Filter;