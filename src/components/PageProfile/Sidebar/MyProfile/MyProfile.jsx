import React from "react";

const MyProfile = () => {
    return (
        <div className="fl-gp-box fl-gp-box-single">
            <div className="fl-cover-single">
                <div className="fl-gp-info">
                    <div className="fl-gp-avatar"> <a href="04_profile.html" className="item-avatar">
                        <img className="avatar" width="100" height="100" alt="Profile" src="/images/user-4.png" />
                    </a> </div>
                    <div className="fl-gp-title"><a href="15_group.html" className="bp-gp-home-link season-of-the-witch-home-link">Lester Barry</a></div>
                    <div className="fl-gp-meta">
                        <div className="group-status"> @username</div>
                    </div>
                </div>
            </div>
            <div className="fl-gp-footer">
                <div className="fl-gp-cells">
                    <div className="fl-gp-cell-left">
                        <strong>24</strong>
                        <span>Followers</span>
                    </div>
                    <div className="fl-gp-cell-right">
                        <strong>12</strong>
                        <span>Posts</span>
                    </div>
                </div>
                <div className="fl-gp-action">
                    <a className="fl-view-profile" rel="profile" href="04_profile.html"> View my profile</a>
                </div>
            </div>
        </div>
    )
}

export default MyProfile;