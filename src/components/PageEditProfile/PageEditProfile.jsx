import React, { useRef, useState } from "react";

import "./PageEditProfile.css";
import { decryptData, encryptData } from "../HelperFunction/HelperFunction";

function PageEditProfile() {

    const userInfo = JSON.parse(localStorage.getItem('userInfo'));

    const [checkedSettings, setCheckedSettings] = useState({
        one: false,
        two: false,
        three: false
    });
    const [changePassword, setChangePassword] = useState({
        oldPassword: '',
        newPassword: '',
        confirmPassword: ''
    });
    const [changePasswordMessage, setChangePasswordMessage] = useState('');
    const [name, setFirstName] = useState(userInfo.name);
    const [surname, setSurname] = useState(userInfo.surname);
    const [email, setEmail] = useState(userInfo.email);
    const [username, setUsername] = useState(userInfo.username);
    const [bio, setBio] = useState(userInfo.bio);
    const [bannerProfileUrl, setBannerProfileUrl] = useState(userInfo.bannerProfileUrl);
    const [fileBanner, setFileBanner] = useState(null);
    const [userAvatarUrl, setUserAvatarUrl] = useState(userInfo.avatarUser);
    const [fileUserAvatar, setFileUserAvatar] = useState(null);

    const uploadAvatar = useRef(null);
    const uploadBanner = useRef(null);
    const bannerImg = useRef(null);
    const avatarUser = useRef(null);

    function handleChangePassword() {
        if(
            changePassword.oldPassword !== '' && 
            changePassword.newPassword !== '' &&
            changePassword.confirmPassword !== ''
        ) {
            if(changePassword.newPassword === changePassword.confirmPassword) {
                fetch(`${process.env.REACT_APP_BASE_URL}/change-user-password`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        userID: decryptData(JSON.parse(localStorage.getItem('userInfo')).id),
                        oldPassword: changePassword.oldPassword,
                        newPassword: changePassword.newPassword
                    })
                })
                    .then(data => data.json())
                    .then(res => {
                        if(res.message) {
                            setChangePasswordMessage(res.message);

                            setTimeout(() => {
                                setChangePasswordMessage('');
                            }, 5000);
            
                            setChangePassword({
                                oldPassword: '',
                                newPassword: '',
                                confirmPassword: ''
                            });
                        } else {
                            setChangePasswordMessage(res.error);
                        }
                    });
            } else {
                setChangePasswordMessage('Повторили пароль неверно...');
            }
        } else {
            setChangePasswordMessage('Все поля должны быть заполненны');
        }
    }

    function handleUploadBanner(e) {
        if(e.target.files[0]) {
            setFileBanner(e.target.files[0]);
            bannerImg.current.src = URL.createObjectURL(e.target.files[0]);
        }
    }

    function handleUploadAvatarUser(e) {
        if(e.target.files[0]) {
            setFileUserAvatar(e.target.files[0]);
            avatarUser.current.src = URL.createObjectURL(e.target.files[0]);
        }
    }

    function handleDeleteBanner(e) {
        e.stopPropagation();

        setBannerProfileUrl('');
        setFileBanner(null);
        
        bannerImg.current.src = '';
    }

    function updateUserProfile() {
        if(name === "" || email === "") {
            alert("Заполните обязательные поля помеченные *");
        } else {
            const formData = new FormData();
            formData.append('id', decryptData(userInfo.id));
            formData.append('name', name);
            formData.append('surname', surname);
            formData.append('email', email);
            formData.append('username', username);
            formData.append('bio', bio);
            formData.append('fileBanner', fileBanner);
            formData.append('bannerUrl', bannerProfileUrl);
            formData.append('fileAvatarUser', fileUserAvatar);
            formData.append('avatarUserUrl', userAvatarUrl);
            

            fetch(`${process.env.REACT_APP_BASE_URL}/update-user-profile`, {
                method: "POST",
                body: formData
            })
                .then(data => data.json())
                .then(res => {
                    if(!res.error) {
                        localStorage.setItem('userInfo', JSON.stringify({
                            id: encryptData(res.id),
                            name: res.name,
                            surname: res.surname,
                            email: res.email,
                            username: res.username,
                            bio: res.bio,
                            bannerProfileUrl: res.bannerProfileUrl,
                            avatarUser: res.avatarUser
                        }));

                        alert("Данные успешно обновлены");
                    } else {
                        alert("Заполните обязательные поля отмеченные *");
                    }
                })
                .catch(err => {
                    alert("Что-то пошло не так...");
                });
        }
    }

    return (
        <div className="edit-profile-page">
            <div className="group-field-info-user">
                <div className="settings-title_edit-profile">
                    <h3>Change your password</h3>
                    <p>We will email you a confirmation when changing your password, so please expect that email after submitting</p>
                </div>
                <div className="field-group_edit-profile">
                    <div className="main-filed_edit-profile">
                        <div className="row-field">
                            <label>Current password*</label>
                            <input 
                                type="text" 
                                value={changePassword.oldPassword}
                                onChange={(e) => setChangePassword({
                                    oldPassword: e.target.value.replace(/(<([^>]+)>)/gi, ''),
                                    newPassword: changePassword.newPassword,
                                    confirmPassword: changePassword.confirmPassword
                                })}
                            />
                        </div>
                        <div className="row-field">
                            <label>New password*</label>
                            <input 
                                type="text" 
                                value={changePassword.newPassword.replace(/(<([^>]+)>)/gi, '')}
                                onChange={(e) => setChangePassword({
                                    oldPassword: changePassword.oldPassword,
                                    newPassword: e.target.value,
                                    confirmPassword: changePassword.confirmPassword
                                })}
                            />
                        </div>
                        <div className="row-field">
                            <label>Confirm password*</label>
                            <input 
                                type="text" 
                                value={changePassword.confirmPassword.replace(/(<([^>]+)>)/gi, '')}
                                onChange={(e) => setChangePassword({
                                    oldPassword: changePassword.oldPassword,
                                    newPassword: changePassword.newPassword,
                                    confirmPassword: e.target.value
                                })}
                            />
                        </div>
                    </div>
                    <button 
                        type="submit" 
                        className="btn-update-profile"
                        onClick={handleChangePassword}
                    >Update password</button>
                    <p>{changePasswordMessage}</p>
                </div>
                <div className="settings-title_edit-profile">
                    <h3>Account Settings</h3>
                    <p>Update your account details</p>
                </div>
                <div className="field-group_edit-profile">
                    <div className="main-filed_edit-profile">
                        <div className="row-field">
                            <label>Name*</label>
                            <input 
                                type="text" 
                                value={name} 
                                required
                                onChange={(e) => setFirstName(e.target.value)}
                            />
                        </div>
                        <div className="row-field">
                            <label>Surname (Optional)</label>
                            <input type="text" value={surname} onChange={(e) => setSurname(e.target.value)}/>
                        </div>
                        <div className="row-field">
                            <label>Nick name (Optional)</label>
                            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)}/>
                        </div>
                        <div className="row-field">
                            <label>Email*</label>
                            <input 
                                type="email" 
                                name="email" 
                                value={email} 
                                required
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="row-field full banner" onClick={() => uploadBanner.current.click()}>
                            {
                                !fileBanner && !bannerProfileUrl ? 
                                    <p>Upload the top banner for your profile</p> : 
                                    <i className="icon-trash delete-banner" onClick={(e) => handleDeleteBanner(e)}></i>
                            }
                            <img src={bannerProfileUrl} alt="banner" ref={bannerImg}/>
                            <input 
                                type="file" 
                                accept=".jpg,.jpeg,.png" 
                                name="fileBanner" 
                                ref={uploadBanner} 
                                onChange={(e) => handleUploadBanner(e)}
                            />
                        </div>
                        <div className="row-field full">
                            <label>Bio (Optional)</label>
                            <textarea value={bio} onChange={(e) => setBio(e.target.value)}></textarea>
                        </div>
                    </div>
                </div>
                <div className="settings-title_edit-profile">
                    <h3>Social Links</h3>
                    <p>You can add links to other social networks</p>
                </div>
                <div className="field-group_edit-profile">
                    <div className="main-filed_edit-profile">
                        <div className="row-field">
                            <label>Facebook</label>
                            <input type="text" />
                        </div>
                        <div className="row-field">
                            <label>Twitter</label>
                            <input type="text" />
                        </div>
                        <div className="row-field">
                            <label>Instagram</label>
                            <input type="text" />
                        </div>
                        <div className="row-field">
                            <label>LinkedIn</label>
                            <input type="text" />
                        </div>
                        <div className="row-field">
                            <label>Youtube</label>
                            <input type="text" />
                        </div>
                    </div>
                    <button type="submit" className="btn-update-profile" onClick={updateUserProfile}>Update details</button>
                </div>
            </div>
            <div className="settings-user">
                <div className="card-user_edit-profile">
                    <div className="user-photo_edit-profile" onClick={() => uploadAvatar.current.click()}>
                        <img src={userAvatarUrl ? userAvatarUrl : "/images/user-4.png"} alt="user avatar" ref={avatarUser}/>
                        <div className="update-photo_edit-profile">
                            <i className="icon-pencil"></i>
                        </div>
                        <input 
                            type="file" 
                            className="upload-avatar" 
                            name="avatarUser"
                            accept=".jpg,.jpeg,.png"
                            onChange={(e) => handleUploadAvatarUser(e)} 
                            ref={uploadAvatar} 
                        />
                    </div>
                    <div className="user-name_edit-profile">{name}</div>
                    <div className="user-email_edit-profile">{email}</div>
                </div>
                <div className="checkbox-settings">
                    <ul>
                        <li>
                            <div>
                                <span>Notifications from your friends</span>
                            </div>
                            <label>
                                <input type="checkbox" checked={checkedSettings.one} onChange={() => setCheckedSettings({
                                    one: !checkedSettings.one,
                                    two: checkedSettings.two,
                                    three: checkedSettings.three
                                })}/>
                                <span className="slider"></span>
                            </label>
                        </li>
                        <li>
                            <div>
                                <span>Send notifications by email</span>
                            </div>
                            <label>
                                <input type="checkbox" checked={checkedSettings.two} onChange={() => setCheckedSettings({
                                    one: checkedSettings.one,
                                    two: !checkedSettings.two,
                                    three: checkedSettings.three
                                })}/>
                                <span className="slider"></span>
                            </label>
                        </li>
                        <li>
                            <div>
                                <span>Desktop Notification</span>
                            </div>
                            <label>
                                <input type="checkbox" checked={checkedSettings.three} onChange={() => setCheckedSettings({
                                    one: checkedSettings.one,
                                    two: checkedSettings.two,
                                    three: !checkedSettings.three
                                })}/>
                                <span className="slider"></span>
                            </label>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default PageEditProfile;