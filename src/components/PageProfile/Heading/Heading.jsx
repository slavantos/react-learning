import React from "react";

const Heading = ({userInfo}) => {

    return (
        <div className="uk-page-heading uk-page-heading-style-a uk-height-medium uk-height-max-medium uk-flex uk-flex-column uk-flex-center uk-flex-middle uk-background-cover uk-light" data-src="assets/img/heading3.jpg" uk-parallax="bgy: -20">
            <div className="fl-hd-cover fl-hd-cover-02">
                <span className="decore-lt"></span>
                <span className="decore-lb"></span>
                <span className="decore-rt"></span>
                <span className="decore-rb"></span>
            </div>
            <div className="fl-hd-avatar">
                <a href="04_profile.html" className="item-avatar">
                    <img className="avatar" width="100" height="100" alt="Profile" src="/images/user-4.png" />
                </a>
            </div>
            <h1 className="uk-page-heading-h">{userInfo.length && userInfo[0].name}</h1>
            <p className="uk-heading-text">4 YEARS, 6 MONTHS AGO</p>
        </div>
    )
}

export default Heading;