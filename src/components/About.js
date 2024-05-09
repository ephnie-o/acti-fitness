import WhoWeAre from '../__assets__/images/WhoWeAre.jpeg';
import ButtonComponent from "./ButtonComponent";
import { Link } from "react-router-dom";
import Image from 'react-bootstrap/Image';
import Ratio from 'react-bootstrap/Ratio';
import motivation from '../__assets__/images/motivation.jpeg';

const About = () => {
    return (
        <div className='about'>
            <section className='section'>
                <h3 className="subheading">WHO WE ARE</h3>
                <p className="paragraph">Acti Fitness was founded by a team of fitness enthusiasts and technology experts who are passionate about making fitness accessible to everyone. With years of experience in the fitness industry, our team understands the challenges people face when trying to incorporate exercise into their busy lives. That's why we've created a web app that makes it easy and enjoyable to stay fit, no matter your fitness level or schedule.</p>
                <Image loading='lazy' src={WhoWeAre} fluid />
            </section>
            <section className='section'>
                <h3 className='subheading'>OUR MISSION</h3>
                <p className='paragraph'>Our mission at Acti Fitness is simple: to inspire and motivate people to prioritize their health and wellness. We believe that everyone deserves to feel confident and empowered in their bodies, and we're committed to helping our users achieve their fitness goals, one workout at a time.</p>
            </section>
            <section className='section'>
                <h3 className='subheading'>WHAT WE OFFER</h3>
                <ul className='paragraph about-list'>
                    <li>Workout Plans: Our app offers workout plans which has been grouped according to body parts to make it easier to follow.</li>
                    <li>Expert Guidance: Access expert guidance and tips from certified fitness trainers and nutritionists to help you get the most out of your workouts.</li>
                    <li>Community Support: Connect with like-minded individuals, share your fitness journey, and get support from our supportive community of users. Contact me to join the group.</li>
                    <li>And much more!</li>
                </ul>
            </section>
            <section className='section'>
                <h3 className='subheading'>GET STARTED TODAY</h3>
                <p className='paragraph'>Ready to take your fitness journey to the next level? Go to the workout section today and join thousands of others who are on their way to a healthier, happier lifestyle. Whether you're a beginner or a seasoned athlete, we've got everything you need to succeed.</p>
                <Ratio aspectRatio="21x9"><Image loading='lazy' src={motivation} width='100%' fluid /></Ratio>
            </section>
            <section className='about-section-button'>
                <Link to="/workouts"><ButtonComponent text="Workouts" /></Link>
            </section>
        </div>
    );
};

export default About;