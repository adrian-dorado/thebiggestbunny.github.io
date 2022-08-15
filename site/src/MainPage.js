
import FinishedProjects from './FinishedProjects.js'
import OngoingProjects from './OngoingProjects.js';
import Bored from './Bored.js';
import Skills from './Skills.js';
import TypeBun from './Header.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Element } from 'react-scroll';



export default function MainPage() {
    return (
        <>
            <TypeBun />
            <Element id='skills'>
                <Skills />
            </Element>
            <Bored />
            <Element id='finished-projects'>
                <FinishedProjects />
            </Element>
            <Element id='ongoing-projects'>
                <OngoingProjects />
            </Element>
        </>
    );
}
