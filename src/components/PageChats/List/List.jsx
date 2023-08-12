import React, { useEffect, useState } from "react";
import Head from "./Head/Head";
import Search from "./Search/Search";
import Item from "./Item/Item";
import { useTranslation } from "react-i18next";

import dialogsLoading from "../../../../src/dialogs-loader.svg";

const List = ({userDialogs, setUserDialogs, isLoadingDialogs}) => {

    const { t } = useTranslation();

    const [searchDialog, setSearchDialog] = useState('');

    const filterDialogs = userDialogs.filter(user => user.participants.some(p => p.name.toLowerCase().includes(searchDialog.toLowerCase())));

    return (
        <div className="chat-user-list">
            <div className="chat-user-list__box">
                <Head />
                <Search setSearchDialog={setSearchDialog} />
                <div className="chat-user-list__body">
                    {!isLoadingDialogs ? <div className="loading-dialogs"><img src={dialogsLoading} alt="Loading..." /></div> : ''}
                    <ul>
                    {
                        filterDialogs.length ? 
                            filterDialogs.map((dialog, idx) => <Item key={idx} dialogs={dialog} setUserDialogs={setUserDialogs} userDialogs={userDialogs}/>) :
                            <p className="dialogs-not-found">{t('chat.dialogNotFound')}</p>
                    }
                    </ul>
                </div>
            </div> 
        </div>
    )
}

export default List;