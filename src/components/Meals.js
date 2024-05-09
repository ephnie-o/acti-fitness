import Nav from 'react-bootstrap/Nav';
import { useRef } from 'react';
import Breakfast from './Breakfast';
import Snack from './Snack';
import Lunch from './Lunch';

const Meals = () => {
    const breakfastRef = useRef(null);
    const snackRef = useRef(null);
    const lunchRef = useRef(null);

    const scrollToRef = (ref) => {
        window.scrollTo({
            top: ref.current.offsetTop,
            behavior: 'smooth',
        });
    };

    return (
        <div className="meals">
            <section className="section">
                <h3 className="subheading">NUTRITION</h3>
                <p className="paragraph">Nutrition is vital for exercise, muscle growth, and overall performance. Acti Fitness promotes balanced nutrition with nutrient-rich foods, <strong>including Ghanaian dishes</strong>. Meal planning helps save time and make healthier choices. Individual nutritional needs vary, so consulting professionals for personalized advice is recommended.</p>
                <p className="paragraph">I'll be sharing a selection of nutritious meal ideas along with instructions on how to prepare them in a video. These meals are not only delicious but also contribute to a healthy lifestyle. Let's dive in! </p>
            </section>
            <section className="section">
                    <h3 className="subheading">MEALS</h3>
                    <Nav variant='underline' className="justify-content-center">
                        <Nav.Item>
                            <Nav.Link className='meals-link' eventKey="link-0" onClick={() => scrollToRef(breakfastRef)}>Breakfast</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className='meals-link' eventKey="link-1" onClick={() => scrollToRef(snackRef)}>Snack</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className='meals-link' eventKey="link-2" onClick={() => scrollToRef(lunchRef)}>Lunch / Dinner </Nav.Link>
                        </Nav.Item>
                    </Nav>
                    <br />
                    <div ref={breakfastRef}><Breakfast /></div>
                    <div ref={snackRef}><Snack /></div>
                    <div ref={lunchRef}><Lunch /></div>
            </section>
        </div>
    );
};

export default Meals;