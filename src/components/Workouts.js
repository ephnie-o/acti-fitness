import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";
import WorkoutCard from "./WorkoutCard";
import cardioAndCore from '../__assets__/images/cardioAndCore.jpeg';
import legs from '../__assets__/images/legs.jpeg';
import upperbody from '../__assets__/images/upperbody.jpeg';
import fullBody from '../__assets__/images/fullbody.jpeg';

const DaySection = ({ title, description1, description2, linkTo, image, buttonText }) => (
    <Row>
        <span className='subheading'>{title}</span>
        <span className='paragraph'>{description1}</span>
        <Col lg={6} xs={12} md={6} sm={6}>
            <Link to={linkTo}><WorkoutCard src={image} text={buttonText} /></Link>
        </Col>
        <Col lg={6} xs={12} md={6} sm={6}>
            <p className='paragraph'>{description2}</p>
        </Col>
    </Row>
);

const Workouts = () => {
    return (
        <div className="workout">
            <section className="section">
                <h3 className="subheading">WORKOUT ROUTINE</h3>
                <p className="paragraph">Creating a daily workout routine is intense, so prioritize rest and recovery. Here’s a daily workout plan for your goals, but remember rest days are crucial. Start with lighter weights, focusing on form, and gradually increase resistance. Listen to your body, and only increase the weight when you feel ready to do so. Hydration is essential for optimal performance; drink plenty of water before, during, and after your workouts to replenish fluids lost through sweat and keep your body performing at its best. Consistency and gradual progression lead to long-term results.</p>
            </section>
            <section className="section">
                <Container fluid>
                    <DaySection
                        title='DAY 1:'
                        description1='Complete Full Body HIIT Workouts and Stretches'
                        linkTo='/fullBodyWorkouts'
                        image={fullBody}
                        buttonText='Full Body HIIT'
                        description2="If you're opting for home workouts instead of going to the gym, ensure you have the necessary equipment on hand. You'll need only a yoga mat for full body HIIT workouts."
                    />
                    <DaySection
                        title='DAY 2:'
                        description1='Complete Lower Body Workouts and Stretches'
                        linkTo='/legsAndGlutesWorkouts'
                        image={legs}
                        buttonText='Legs and Glutes'
                        description2="If you're opting for home workouts instead of going to the gym, ensure you have the necessary equipment on hand. You'll need a yoga mat for floor exercises, a long and short resistance bands for added resistance and versatility in your workouts."
                    />
                    <DaySection
                        title='DAY 3:'
                        description1='Complete Cardio and Core Workouts and Stretches'
                        linkTo='/cardioAndCoreWorkouts'
                        image={cardioAndCore}
                        buttonText='Cardio and Core'
                        description2="If you're opting for home workouts instead of going to the gym, ensure you have the necessary equipment on hand. You'll need a yoga mat and a skipping rope for cardio and core workouts."
                    />
                    <Row>
                        <Col>
                        <h3 className='subheading'>DAY 4: REST REST REST!!!!</h3>
                        </Col>
                    </Row>
                    <DaySection
                        title='DAY 5:'
                        description1='Complete Upper Body Workouts and Stretches'
                        linkTo='/upperBodyWorkouts'
                        image={upperbody}
                        buttonText='Upper Body'
                        description2="If you're opting for home workouts instead of going to the gym, ensure you have the necessary equipment on hand. You'll need a yoga mat for floor exercises and long resistance bands for added resistance and versatility in your workouts."
                    />
                    <Row>
                        <Col>
                            <h3 className='subheading'>OPTIONAL SECTION</h3>
                            <p className='paragraph'>Looking to make the most of your free days or times when your schedule allows for extra training? These workouts are perfect for those days when you have more time to dedicate to your fitness journey. Choose any workout that aligns with the body part you're interested in growing or strengthening, and enjoy the freedom to customize your training routine based on your goals and availability. Remember, consistency is key, so make the most of every opportunity to challenge yourself and make progress toward your fitness goals.</p>
                        </Col>
                    </Row>
                    <Row>
                        <span className='subheading'>DAY 5:</span>
                        <span className='paragraph'>Complete Lower Body Workouts and Stretches OR Complete Upper Body Workouts and Stretches</span>
                        <Col lg={5} xs={12} md={5} sm={5}><Link to='/legsAndGlutesWorkouts'><WorkoutCard src={legs} text='Legs and Glutes' /></Link></Col>
                        <Col xs={2}><h3 className='subheading'>OR</h3></Col>
                        <Col lg={5} xs={12} md={5} sm={5}><Link to='/upperBodyWorkouts'><WorkoutCard src={upperbody} text='Upper Body' /></Link></Col>
                    </Row>
                    <DaySection
                        title='DAY 7:'
                        description1='Complete Cardio and Core Workouts and Stretches'
                        linkTo='/cardioAndCoreWorkouts'
                        image={cardioAndCore}
                        buttonText='Cardio and Core'
                    />
                </Container>
            </section>
        </div>
    );
};

export default Workouts;