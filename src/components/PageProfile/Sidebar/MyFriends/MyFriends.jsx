import React from "react";
import Item from "./Item/Item";

const MyFriends = () => {
    return (
        <section className="widget section-sidebar bg-light">
            <h3 className="widget-title bg-dark"><i className="ic icon-trophy"></i>My Friends</h3>
            <div className="widget-content">
                <div className="widget-inner">
                    <Item name="Kristen Oswalt" date="Dec 15, 2020" />
                    <Item name="Emma Stone" date="Dec 15, 2022" />
                    <Item name="Lester Barry" date="Dec 15, 2021" />
                    <button className="uk-button  uk-button-theme-color uk-width-1-1 uk-margin-small-bottom ">View All</button>
                </div>
            </div>
        </section>
    )
}

export default MyFriends;