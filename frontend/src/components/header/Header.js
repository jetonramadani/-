import React from 'react'
import DesktopHeader from "./DesktopHeader";
import MobileHeader from "./MobileHeader";
const Header = (props) => {
    return (
        <>
            <DesktopHeader onClick={props.onClick} />
            <MobileHeader onClick={props.onClick} />
        </>
    )
}

export default Header
