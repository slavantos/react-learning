import React from "react";

const Sidebar = () => {
    return (
        <div className="page-header__sidebar">
            <div className="page-header__menu-btn">
                <button className="menu-mobile-button visible-xs-block js-toggle-mobile-slidebar toggle-menu-button menu-btn">
                    <span className="toggle-menu-button-icon">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </span>
                </button>
            </div>
            <div className="page-header__logo"><img src="/images/logo.png" alt="logo" /><span className="page-header__logo_text">TEAMHOST</span></div>
        </div>
    )
}

export default Sidebar;