import React from "react";
import { useTranslation } from "react-i18next";

import './Item.css';

const Item = ({favorites, deleteFavorites}) => {

    const { t } = useTranslation();

    return (
        <div className="fl-gp-box">
            <div className="fl-cover-image">
                <i className="icon-minus remove-favorites-post" onClick={() => deleteFavorites(favorites._id)}></i>
                <img alt="group" src="images/gr1.jpg" />
                <div className="fl-gp-info-wrap">
                    <div className="fl-gp-info">
                        <div className="fl-gp-title"><a href="14_group.html" className="bp-gp-home-link season-of-the-witch-home-link">{favorites.text}</a></div>
                        <div className="fl-gp-meta">
                            <div className="group-status">
                                <i className="icon-people"></i><span>
                                    <a href="/link-author-page">Author name</a>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="fl-gp-footer">
                <div className="fl-gp-cells">
                    <div className="fl-gp-cell-left">
                        <strong>{favorites.likes.length}</strong>
                        <span>{t('post.like')}</span>
                    </div>
                    <div className="fl-gp-cell-right">
                        <strong>{favorites.comments.length}</strong>
                        <span>{t('post.comment')}</span>
                    </div>
                </div>
                <div className="fl-gp-action">
                    <div className="fl-gp-button">
                        <a className="fl-gp-button fl-join-group" rel="join" href="14_group.html"><i className="gg-icon gg-log-in"></i> Join Group</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Item;