import React from 'react'
import "../../assets/sass/contentwrapper.scss"

const ContentWrapper = ({ children }) => {
    return <div className="contentWrapper">{children}</div>;
}

export default ContentWrapper

