import React from 'react'
import DesktopHeader from "./DesktopHeader";
import MobileHeader from "./MobileHeader";
const Header = (props) => {
    return (
        <>
            <DesktopHeader />
            <MobileHeader />
        </>
    )
}

export default Header
