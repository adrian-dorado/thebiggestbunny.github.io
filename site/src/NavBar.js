import { NavLink } from 'react-router-dom';
import { Link } from 'react-scroll';

export default function NavBar() {
    return (
        <>
            <div href="/" className="collapse navbar-collapse d-flex align-items-center pb-3 mb-3 link-dark text-decoration-none border-bottom ">
                <NavLink className="link-dark text-decoration-none" to="/">
                    <div>
                        <img className="pt-2 ms-4" src="./bun.png" width="" height="70" alt="no bun :(" />
                    </div>
                </NavLink>
                <span className="ms-3 mb-2 fs-2 fw-semibold nameText">Adrian Dorado</span>
                <span className="ms-1 fs-1 fw-semibold nameText csep">||</span>
                <span className="ms-1 mt-2 fs-4 fw-semibold nameText">Full-Stack Software Engineer</span>
                <Link to='skills' spy={true} smooth={true} duration={180} className="ms-auto btn btn-toggle rounded border-0 collapsed fs-2 fw-semibold nameText">
                        Skills
                </Link>
                <div className="dropdown">
                    <button className="btn btn-toggle rounded border-0 dropdown-toggle fs-2 fw-semibold nameText" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                        Projects
                    </button>
                    <div className="dropdown-menu dropdown-menu-light" aria-labelledby="dropdownMenuButton2">
                        <li>
                            <Link to='finished-projects' spy={true} smooth={true} duration={180}
                                className="fs-4 dropdown-item nameText" aria-current="page">
                                Finished Projects
                            </Link>
                        </li>
                        <li>
                            <Link to='ongoing-projects' spy={true} smooth={true} duration={220}
                                className="link-dark fs-4 dropdown-item nameText" aria-current="page" >
                                Ongoing Projects
                            </Link>
                        </li>
                    </div>
                </div>
                
                <Link to='links' spy={true} smooth={true} duration={280} className="me-3 btn btn-toggle rounded border-0 collapsed fs-2 fw-semibold nameText">
                        Links
                </Link>
            </div>
        </>
    )
};

