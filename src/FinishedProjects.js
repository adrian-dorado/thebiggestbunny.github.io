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
                            - PostgresSQL Database <br/>
                            - Django Backend <br/>
                            - React Frontend <br/>
                            - Bootstrap CSS <br/>
                            - Vanilla CSS3 <br/>
                        </p>
                        <p className=''>
                            Impulse was born from our group's collective desire to own a bunch of random items, but not want
                            to pay top-dollar for those items. We figured a site that would allow you to get a subscription box
                            of random, fun items or clothes would be a great site, so we decided to build it! <br />
                            <br/>
                            Functionality of the app is simple and boils down to two things: <br/>
                            - Making sure the user can easily navigate to the signup page <br/>
                            - Making sure the user can see any of the items they could possibly receive in their subscription box. <br/>
                            <br/>
                            The site as it sits now is in MVP state and will be eventually gain more functionality but, as of now, it is finished.
                        </p>
                        <a className='link-dark' href='https://gitlab.com/mean-coders/module-three-project'>Gitlab Repo Link with Full Instructions For Use!</a>
                    </div>
                    <div style={{ paddingTop: '40px'}} className="col-md-5">
                        <img className="b_proj grow bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" src='./squareimpulse.png' aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"></img>
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
                    <div style={{ paddingTop: '40px'}} className="pb-5 col-md-5 order-md-1">
                        <img className="grow b_proj bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" src='./conf_go.png' aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"></img>
                    </div>
                </div>
                <hr className="featurette-divider" />
                <div className="siteText row featurette">
                    <div className="col-md-7">
                        <h2 className="nameText display-6 text-decoration-underline">CarCar <span>||</span> <span className="text-muted">Vroom Vroom.</span></h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                    </div>
                    <div className="pt-5 col-md-5">
                        <img className="grow b_proj bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" src='./carcar.png' aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"></img>
                    </div>
                </div>
                <NavRoute />
                <hr className="featurette-divider" />
            </div>
        </>
    )
}

export default FinishedProjects