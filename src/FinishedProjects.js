import React from 'react';
import NavRoute from './NavRoute.js'


const FinishedProjects = () => {
    return (
        <>
            <div style={{ marginTop: '60px' }} className="">
                <h1 className='nameText'>Finished Projects!</h1>
                <hr className="featurette-divider" />
                <div className="siteText row featurette">
                    <div className="col-md-7">
                        <h2 className="nameText display-6 text-decoration-underline">Impulse <span>||</span> <span className="text-muted">Act on it.</span></h2>
                        <p className="">
                            A fun little storefront made by a team of four! Our goal with Impulse
                            was to have fun and make a site that gave the user
                            fun little surprises in monthly subscription boxes. <br />
                            <br />
                            The techstack we used for this site was: <br/>
                            &emsp; - PostgresSQL Database
                            &emsp; &emsp; - Django Backend
                            &emsp; &emsp; - React Frontend
                            &emsp; &emsp; - Bootstrap CSS
                            &emsp; &emsp; - Vanilla CSS3
                        </p>
                        <p className=''>
                            Impulse was born from our group's collective desire to own a bunch of random items, but not want
                            to pay top-dollar for those items. We figured a site that would allow you to get a subscription box
                            of random, fun items or clothes would be a great site, so we decided to build it! <br />
                            Functionality of the app is simple and boils down to two things: <br/>
                            &emsp; - Making sure the user can easily navigate to the signup page <br/>
                            &emsp; - Making sure the user can see any of the items they could possibly receive. <br/>
                            <br/>
                            The site as it sits now is in MVP state and will be eventually gain more functionality but, as of now, it is finished.
                        </p>
                    </div>
                    <div className="col-md-5">
                        <svg className="grow bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#eee"></rect><text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text></svg>
                    </div>
                </div>
                <hr className="featurette-divider" />
                <div className="siteText row featurette">
                    <div className="col-md-7 order-md-2">
                        <h2 className="nameText display-6 text-decoration-underline">Conference Go! <span>||</span> <span className="text-muted">Get there.</span></h2>
                        <p className="">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                        </p>
                    </div>
                    <div className="col-md-5 order-md-1">
                        <svg className="grow bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#eee"></rect><text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text></svg>
                    </div>
                </div>
                <hr className="featurette-divider" />
                <div className="siteText row featurette">
                    <div className="col-md-7">
                        <h2 className="nameText display-6 text-decoration-underline">CarCar <span>||</span> <span className="text-muted">Vroom Vroom.</span></h2>
                        <p className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                    </div>
                    <div className="col-md-5">
                        <svg className="grow bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#eee"></rect><text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text></svg>
                    </div>
                </div>
                <NavRoute />
                <hr className="featurette-divider" />
            </div>
        </>
    )
}

export default FinishedProjects