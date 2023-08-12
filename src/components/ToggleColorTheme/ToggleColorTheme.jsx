import React from 'react';

function ToggleTheme() {
    document.getElementsByTagName('body')[0].classList.toggle("dark-theme");
}

const ToggleColorTheme = () => {
    return (
        <input id="toggle" type="checkbox" onClick={ToggleTheme} />
    )
}

export default ToggleColorTheme;