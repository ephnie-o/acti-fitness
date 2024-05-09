import ButtonComponent from "./ButtonComponent";
import phone from '../__assets__/images/phone.jpeg';
import mail from '../__assets__/images/mail.jpeg';
import telegram from '../__assets__/images/telegram.png';
import whatsapp from '../__assets__/images/whatsapp.jpeg';
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Veggies from '../__assets__/images/vegetables.jpeg';
import xIcon from '../__assets__/images/xIcon.jpeg';
import cardioAndCore from '../__assets__/images/cardioAndCore.jpeg';
import fullBody from '../__assets__/images/fullbody.jpeg';
import legs from '../__assets__/images/legs.jpeg';
import upperbody from '../__assets__/images/upperbody.jpeg';
import WorkoutCard from "./WorkoutCard";

const Home = () => {

    return (
        <div>
            <div className="hero-bg">
                <ul>
                    <li className='telList'>
                        <a href='tel:+233209156415' data-testid="phone-icon">
                        <Image loading='lazy' src={phone} className='icon'/>
                        </a>
                    </li>
                    <li>
                        <a href='mailto:stephanieodoom25@gmail.com?subject=Subject%20Here&body=Message%20Here' data-testid="email-icon">
                        <Image loading='lazy' src={mail} className='icon'/>
                        </a>
                    </li>
                    <li>
                        <a href='https://wa.me/+233209156415' target='_blank' rel='noopener noreferrer' data-testid="whatsApp-icon">
                        <Image loading='lazy' src={whatsapp} className='icon'/>
                        </a>
                    </li>
                    <li>
                        <a href='tg://resolve?domain=Ephnie' target='_blank' rel='noopener noreferrer' data-testid="telegram-icon">
                        <Image loading='lazy' src={telegram} className='icon'/>
                        </a>
                    </li>
                    <li>
                        <a href='https://twitter.com/_ephnie_' target='_blank' rel='noopener noreferrer'  data-testid="X-icon">
                        <Image loading="lazy" src={xIcon} className='icon'/>
                        </a>
                    </li>
                </ul>
                <h3 className="playball">Get Fit, Stay Healthy</h3>
                <Link to="/workouts"><ButtonComponent text="Workouts" /></Link>
            </div>
            <div className="section1">
                <h3 className="subheading">WELCOME TO ACTI FITNESS</h3>
                <p className="paragraph">At Acti Fitness, we believe that fitness is not just about exercise; it's a lifestyle. Our mission is to empower individuals to lead a healthier, more active lives by providing them with the tools, guidanve and support they need to achieve their fitness goals.</p>
                <Link to="/about"><ButtonComponent text="About" /></Link>
            </div>
            <div className="section2">
            <Container>
                <h3 className="subheading">NUTRITION</h3>
                <Row>
                    <Col sm={12} lg={6}>
                    <Image loading="lazy" className="veggies" src={Veggies} fluid/>
                    </Col>
                    <Col sm={12} lg={6}>
                    <p className="paragraph">We believe that nutrition is a fundamental component of a healthy and active lifestyle. Whether you're looking to build muscle, lose weight, or improve your overall well-being, understanding the role of nutrition in achieving your fitness goals is essential.</p>
                    </Col>
                </Row>
            </Container>
            <Link to="/meals"><ButtonComponent text="Meals" /></Link>
            </div>
            <div className="section1">
                <h3 className="subheading">WORKOUTS</h3>
                <p className="paragraph">Here are the categories of exercises based on the part of the body you are training. Whether you're targeting specific muscle groups or aiming for a full-body workout, we've got you covered. Explore exercises for the Upper Body, Legs and Glutes, Cardio and Core, and Full Body High-Intensity Interval Training (HIIT). You have the freedom to create your own routine tailored to your fitness goals and preferences. If you prefer a more organized approach, head to the Workout section where you'll find pre-designed routines and plans to help you achieve your fitness goals efficiently and effectively.</p>
                <Link to="/workouts"><ButtonComponent text="Workouts" /></Link>
            </div>
            <div className="section1">
            <Container>
                <Row>
                    <Col xs={12} sm={6} lg={3}>
                    <Link to='/fullBodyWorkouts'><WorkoutCard src={fullBody} text='Full Body HIIT' /></Link>
                    </Col>
                    <Col xs={12} sm={6} lg={3}>
                    <Link to='/upperBodyWorkouts'><WorkoutCard src={upperbody} text='Upper Body' /></Link>
                    </Col>
                    <Col xs={12} sm={6} lg={3}>
                    <Link to='/legsAndGlutesWorkouts'><WorkoutCard src={legs} text='Legs and Glutes' /></Link>
                    </Col>
                    <Col xs={12} sm={6} lg={3}>
                    <Link to='/cardioAndCoreWorkouts'><WorkoutCard src={cardioAndCore} text='Cardio and Core' /></Link>
                    </Col>
                </Row>
            </Container>
            </div>
        </div>
    );
};

export default Home;