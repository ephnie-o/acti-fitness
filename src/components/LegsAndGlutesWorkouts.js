import SetsAndRepsSentence from "./SetsAndRepsSentence";
import StretchesSentence from "./StretchesSentence";
import WarmUp from "./WarmUp";
import WellDone from "./WellDone";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Ratio from 'react-bootstrap/Ratio';

const Stretch = ({heading, src}) => {
    try {
        return(
            <Col xl={6} lg={6} xs={12} md={6} sm={12}>
                <h6><b>{heading}</b></h6>
                <Ratio aspectRatio="16x9">
                    <iframe aria-label='YouTube Video' loading='lazy' src={`https://www.youtube-nocookie.com/embed/${src}`} title='Youtube Video' allowFullScreen></iframe>
                </Ratio>
                <br />
            </Col>
        );
    } catch (error) {
        console.error('Error loading YouTube video:', error);
        return <div aria-live='polite' className='subheading'>Error loading video. Please try again later.</div>;
    }
};

const Exercise = ({heading1, heading2, src1, src2}) => {
    try {
        return(
            <Row>
                <Col xl={5} lg={5} xs={12} md={5} sm={12}>
                     <h6><b>{heading1}</b></h6>
                     <Ratio aspectRatio="16x9">
                         <iframe aria-label='YouTube Video' loading='lazy' src={`https://www.youtube-nocookie.com/embed/${src1}`} title='Youtube Video' allowFullScreen></iframe>
                     </Ratio>
                     <br />
                 </Col>
                 <Col xl={2} lg={2} xs={12} md={2} sm={12}>
                     <h3 className="subheading">OR</h3>
                 </Col>
                 <Col xl={5} lg={5} xs={12} md={5} sm={12}>
                     <h6><b>{heading2}</b></h6>
                     <Ratio aspectRatio="16x9">
                         <iframe aria-label='YouTube Video' loading='lazy' src={`https://www.youtube-nocookie.com/embed/${src2}`} title='Youtube Video' allowFullScreen></iframe>
                     </Ratio>
                     <br />
                 </Col>
            </Row>
        )
    } catch (error) {
        console.error('Error loading YouTube video:', error);
        return <div aria-live='polite' className='subheading'>Error loading video. Please try again later.</div>;
    }
};

const LegsAndGlutesWorkouts = () => {
    return (
        <section className="exerciseSection">
            <h3 className='subheading'>LOWER BODY FOCUS</h3>
            <br />
            <WarmUp />
            <Container fluid>
                <Row>
                    <SetsAndRepsSentence />
                </Row>
                <Exercise
                heading1='1. Squats with Weights :'
                src1='lw8HnB0cEP0'
                heading2='1. Squats without Weights :'
                src2='ZB1SwBRVLCc'
                />
                <Exercise
                heading1='2. Deadlifts :'
                src1="-cPtvFdT8dc"
                heading2='2. Good Mornings :'
                src2="cbKIDZ_XyjY"
                />
                <Exercise
                heading1='3. Lunges with Weights :'
                src1="8WaDzRANv94"
                heading2='3. Lunges without Weights :'
                src2="Fuccu9GFO6g"
                />
                <Exercise
                heading1='4. Hip Thrusts with Weights :'
                src1='eeJ_CYqSoT4'
                heading2='4. Hip Thrusts without Weights :'
                src2='7DdLEw0kYPQ'
                />
                <Exercise
                heading1='5. Sumo Squats with Weights :'
                src1="v25dawSzRTM"
                heading2="5. Sumo Squats without Weights :"
                src2="6z2a2D250Kc"
                />
                <Exercise
                heading1='6. Donkey Kicks with Resistant Bands :'
                src1="v25dawSzRTM"
                heading2="6. Donkey Kicks without Resistant Bands :"
                src2="6z2a2D250Kc"
                />
                <Row>
                    <StretchesSentence />
                </Row>
                <Row>
                    <Stretch
                    heading='Standing Quadriceps Stretch :'
                    src="FBO9-8nTbsM"
                    />
                    <Stretch
                    heading='Hamstring Stretch :'
                    src="inLULJztZh0"
                    />
                </Row>
                <Row>
                    <Stretch
                    heading='Groin Stretch :'
                    src="uuVyVuSbXrA"
                    />
                    <Stretch
                    heading="Hip Flexor :"
                    src="nMp3MlTz9fA"
                    />
                </Row>
                <Row>
                    <Stretch
                    heading='Calf Stretch :'
                    src="5njnlgYYdD4"
                    />
                    <Stretch
                    heading='Glute Stretch :'
                    src="zzvDO56B0HE"
                    />
                </Row>
                <Row>
                    <Stretch
                    heading='Lower Back Stretch :'
                    src="QVYLJJE2TlE"
                    />
                    <Stretch
                    heading='IT band Stretch :'
                    src="B2YBWYQ8hDE"
                    />
                </Row>
            </Container>
            <WellDone />
        </section>
    );
};

export default LegsAndGlutesWorkouts;