import React from 'react'
import NavRoute from './NavRoute.js'

const OngoingProjects = () => {
    return (
        <>
            <div className="">
            <h1 style={{ marginTop: '160px'}} className='nameText'>Ongoing Projects!</h1>
            <hr/>
                <div className="siteText row featurette">
                    <div className="col-md-7 order-md-2">
                        <h2 className="nameText display-6 text-decoration-underline">First featurette heading. <span className="text-muted">It'll blow your mind.</span></h2>
                        <p className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                    </div>
                    <div className="col-md-5 order-md-1">
                        <svg className="grow bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#eee"></rect><text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text></svg>
                    </div>
                </div>
                <hr className="featurette-divider" />
                <div className="siteText row featurette">
                    <div className="col-md-7 order-md-1">
                        <h2 className="nameText display-6 text-decoration-underline">Oh yeah, it's that good. <span className="text-muted">See for yourself.</span></h2>
                        <p className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                    </div>
                    <div className="col-md-5 order-md-2">
                        <svg className="grow bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#eee"></rect><text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text></svg>
                    </div>
                </div>
                <hr className="featurette-divider" />
                <div className="siteText row featurette">
                    <div className="col-md-7 order-md-2">
                        <h2 className="nameText display-6 text-decoration-underline">And lastly, this one. <span className="text-muted">Checkmate.</span></h2>
                        <p className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                    </div>
                    <div className="col-md-5 order-md-1">
                        <svg className="grow bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#eee"></rect><text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text></svg>
                    </div>
                </div>
                <NavRoute />
                <hr className="featurette-divider" />
            </div>
        </>
    )
}

export default OngoingProjects