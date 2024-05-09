import StretchesSentence from "./StretchesSentence";
import WarmUp from "./WarmUp";
import WellDone from "./WellDone";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Ratio from 'react-bootstrap/Ratio';

const Exercise = ({heading, src}) => {
    return(
    <Col xl={6} lg={6} xs={12} md={6} sm={12}>
        <h6><b>{heading}</b></h6>
        <Ratio aspectRatio="16x9">
            <iframe loading='lazy' src={`https://www.youtube-nocookie.com/embed/${src}`} title='Youtube Video' allowFullScreen></iframe>
        </Ratio>
        <br />
    </Col>
    )
};

const FullBodyWorkouts = () => {
    return (
        <section className="exerciseSection">
            <h3 className='subheading'>FULL BODY HIGH-INTENSITY INTERVAL TRAINING (HIIT)</h3>
            <br />
            <WarmUp />
            <Container fluid>
                <Row>
                    <h5><b>2. Workouts :</b></h5>
                    <p className="paragraph">Now for the exercises, aim for 30 seconds of work followed by 15 seconds of rest between exercises. Perform this exercise 3 - 4 times.</p>
                </Row>
                <Row>
                    <Exercise
                    heading='1. Jump Squats :'
                    src='BRfxI2Es2lE'
                    />
                    <Exercise
                    heading='2. Mountain Climbers :'
                    src='kLh-uczlPLg'
                    />
                </Row>
                <Row>
                    <Exercise
                    heading='3. Burpees :'
                    src="auBLPXO8Fww"
                    />
                    <Exercise
                    heading='4. Plank with Shoulder Taps :'
                    src="8rgurWd-PB8"
                    />
                </Row>
                <Row>
                    <Exercise
                    heading='5. Bicycle Crunches :'
                    src="cbKIDZ_XyjY"
                    />
                    <Exercise
                    heading='6. High Knees :'
                    src="ZNDHivUg7vA"
                    />
                </Row>
                <Row>
                    <StretchesSentence />
                </Row>
                <Row>
                    <Exercise
                    heading='Standing Quadriceps Stretch :'
                    src='FBO9-8nTbsM'
                    />
                    <Exercise
                    heading='Standing Hamstring Stretch :'
                    src='inLULJztZh0'
                    />
                </Row>
                <Row>
                    <Exercise
                    heading='Standing Calf Stretch :'
                    src="uuVyVuSbXrA"
                    />
                    <Exercise
                    heading="Child's Pose :"
                    src="nMp3MlTz9fA"
                    />
                </Row>
                <Row>
                    <Exercise
                    heading='Seated Forward Fold :'
                    src="5njnlgYYdD4"
                    />
                    <Exercise
                    heading='Cat - Cow Stretch :'
                    src="LIVJZZyZ2qM"
                    />
                </Row>
                <Row>
                    <Exercise
                    heading='Overhead Stretch :'
                    src="VqBxiIeAZ3k"
                    />
                    <Exercise
                    heading='Triceps Stretch :'
                    src="zzvDO56B0HE"
                    />
                </Row>
            </Container>
            <WellDone />
        </section>
    );
};

export default FullBodyWorkouts;