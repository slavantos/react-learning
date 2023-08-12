import React from "react";

const Subnav = () => {
    return (
        <div className="fl-subnav">
            <ul className="uk-subnav uk-subnav-pill">
                <li className="uk-active"><a href="/"><i className="ico_home"></i>Overview</a></li>
                <li><a href="/"><i className="ico_report"></i>Info</a></li>
                <li><a href="/"><i className="icon-speedometer"></i>Activity </a></li>
                <li><a href="/"><i className="icon-user-following"></i>Friends</a></li>
                <li><a href="/"><i className="icon-game-controller"></i>Groups</a></li>
            </ul>
        </div>
    )
}

export default Subnav;