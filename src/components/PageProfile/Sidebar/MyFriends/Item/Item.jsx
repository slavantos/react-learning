import React from "react";

const Item = (props) => {
    return (
        <section className="post-widget clearfix">
            <div className="post-widget__media"><a href="16_post.html"><img className="img-fluid" src="/images/user-1.png" alt="foto" /></a></div>
            <div className="post-widget__inner">
                <h2 className="post-widget__title"><a href="16_post.html">{props.name}</a></h2>
                <div className="post-widget__date">
                    <time>{props.date}</time>
                </div>
            </div>
        </section>
    )
}

export default Item;