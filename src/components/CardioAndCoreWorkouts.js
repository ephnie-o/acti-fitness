import SetsAndRepsSentence from "./SetsAndRepsSentence";
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

const CardioAndCoreWorkouts = () => {
    return (
        <section className="exerciseSection">
            <h3 className='subheading'>CARDIO AND CORE</h3>
            <br />
            <WarmUp />
            <Container fluid>
                <Row>
                    <SetsAndRepsSentence />
                </Row>
                <Row>
                    <Exercise
                    heading='1. Leg Raises :'
                    src='lw8HnB0cEP0'
                    />
                    <Exercise
                    heading='2. Flutter Kicks :'
                    src='ZB1SwBRVLCc'
                    />
                </Row>
                <Row>
                    <Exercise
                    heading='3. Russian Twist :'
                    src="-cPtvFdT8dc"
                    />
                    <Exercise
                    heading='4. Bicycle Crunches :'
                    src="cbKIDZ_XyjY"
                    />
                </Row>
                <Row>
                    <Exercise
                    heading='5. Alternate V Ups :'
                    src="8WaDzRANv94"
                    />
                    <Exercise
                    heading='6. Windshield Wipers :'
                    src="Fuccu9GFO6g"
                    />
                </Row>
                <Row>
                    <Exercise
                    heading='7. Crunches :'
                    src='eeJ_CYqSoT4'
                    />
                    <Exercise
                    heading='8. Plank Knee to Elbow :'
                    src='7DdLEw0kYPQ'
                    />
                </Row>
                <Row>
                    <Exercise
                    heading='9. Planks :'
                    src="v25dawSzRTM"
                    />
                    <Exercise
                    heading="10. Hollow Body Hold :"
                    src="6z2a2D250Kc"
                    />
                </Row>
                <Row>
                    <Col xl={6} lg={6} xs={12} md={6} sm={12}><p className="paragraph">For the Cardio, choose any activity that you enjoy, such as running, cycling or jumping rope. Aim for 20 - 30 minutes of continuous cardio to get your heart rate up and burn calories.</p></Col>
                    <Exercise
                    heading='11. Cardiovascular Exercise : 20 - 30 mins :'
                    src="zzY5KD8Cfwg"
                    />
                </Row>
                <Row>
                    <StretchesSentence />
                </Row>
                <Row>
                    <Exercise
                    heading='Standing Quadriceps Stretch :'
                    src="FBO9-8nTbsM"
                    />
                    <Exercise
                    heading='Standing Hamstring Stretch :'
                    src="inLULJztZh0"
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
                    heading='Triceps Stretch :'
                    src="zzvDO56B0HE"
                    />
                </Row>
                <Row>
                    <Exercise
                    heading='Sphinx Pose :'
                    src="QVYLJJE2TlE"
                    />
                    <Exercise
                    heading='Spinal Twist :'
                    src="B2YBWYQ8hDE"
                    />
                </Row>
            </Container>
            <WellDone />
        </section>
    );
};

export default CardioAndCoreWorkouts;