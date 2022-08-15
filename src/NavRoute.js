import React from 'react'
import { Link } from 'react-scroll';

export default function NavRoute() {
    return (
        <>
            <Link style={{ marginLeft: 'auto' }} to='NavBar' spy={true} smooth={true} duration={100} className='ms-auto btn btn-lg btt link-dark mt-4 inline-block siteText text-right'>
                Back To Top
            </Link>
        </>
    )
}
