import React from 'react'
import { Footer, Header } from '../../shared'

const HeaderFooterLayout = ({ children }) => {
    return (
        <>
            <div className='sticky-top'>
                <Header />
            </div>
            {children}
            <Footer />
        </>
    )
}

export default HeaderFooterLayout
