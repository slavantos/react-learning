const Item = ({post, userInfo}) => {
    
    const [user] = userInfo;

    return (
        <li>
            <article className="uk-comment uk-visible-toggle">
                <header className="uk-comment-header uk-position-relative">
                    <div className="uk-grid-medium uk-flex-top uk-grid">
                        <div className="uk-width-auto">
                            <img className="uk-comment-avatar" src="/images/user-4.png" width="80" height="80" alt="avatar" />
                        </div>
                        <div className="uk-width-expand">
                            <h4 className="uk-comment-title uk-margin-remove"><a className="uk-link-reset" href="/">{user.name}</a></h4>
                            <p className="uk-comment-meta uk-margin-remove-top"><a className="uk-link-reset" href="/">{post.createdAt}</a></p>
                            <div className="uk-comment-body">
                                <p>{post.text}</p>
                            </div>
                        </div>
                    </div>
                </header>
            </article>
        </li>
    )
}

export default Item;