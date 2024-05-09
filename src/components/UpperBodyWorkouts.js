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
        )
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
                        <iframe loading='lazy' src={`https://www.youtube-nocookie.com/embed/${src1}`} title='Youtube Video' allowFullScreen></iframe>
                    </Ratio>
                    <br />
                </Col>
                <Col xl={2} lg={2} xs={12} md={2} sm={12}>
                    <h3 className="subheading">OR</h3>
                </Col>
                <Col xl={5} lg={5} xs={12} md={5} sm={12}>
                    <h6><b>{heading2}</b></h6>
                    <Ratio aspectRatio="16x9">
                        <iframe loading='lazy' src={`https://www.youtube-nocookie.com/embed/${src2}`} title='Youtube Video' allowFullScreen></iframe>
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

const UpperBodyWorkouts = () => {
    return (
        <section className="exerciseSection">
            <h3 className='subheading'>UPPER BODY FOCUS</h3>
            <br />
            <WarmUp />
            <Container fluid>
                <Row>
                    <SetsAndRepsSentence />
                </Row>
                <Exercise
                heading1='1. Bench Press with Weights  :'
                src1='YQ2s_Y7g5Qk'
                heading2='1. Bench Press with Resistance Bands :'
                src2='8CqqjAoHFxg'
                />
                <Exercise
                heading1='2. Bent - Over Rows with Weights :'
                src1="IOOLhrkN_NI"
                heading2='2. Resistance Band Bent - Over Rows :'
                src2="DWl-WW3ScEM"
                />
                <Exercise
                heading1='3. Biceps Curls with Weights :'
                src1="09AYfVFf7pg"
                heading2='3. Resistance Band Biceps Curls :'
                src2="0hZboUNuogA"
                />
                <Exercise
                heading1='4. Overhead Shoulder Press with Weights :'
                src1='Did01dFR3Lk'
                heading2='4. Band Overhead Press :'
                src2='sHo1yHPmgnA'
                />
                <Exercise
                heading1='5. Lateral Raise with Weights :'
                src1="xyK8UiC-BUw"
                heading2="5. Resistance Band Lateral Raise :"
                src2="H7ne-44lT_0"
                />
                <Row>
                    <Stretch
                    heading='6. Push Ups :'
                    src="y7PBQ2fYbxY"
                    />
                    <Stretch
                    heading='7. Tricep Dips :'
                    src="S8vL5DK04fU"
                    />
                </Row>
                <Row>
                    <StretchesSentence />
                </Row>
                <Row>
                    <Stretch
                    heading='Triceps Stretch :'
                    src="zzvDO56B0HE"
                    />
                    <Stretch
                    heading='Chest Opener Stretch :'
                    src="izhWC2qwZk0"
                    />
                </Row>
                <Row>
                    <Stretch
                    heading='Shoulder Stretches :'
                    src="XMsBC9-vSDs"
                    />
                    <Stretch
                    heading="Child's Pose :"
                    src="nMp3MlTz9fA"
                    />
                </Row>
                <Row>
                    <Stretch
                    heading='Neck Stretch :'
                    src="H5h54Q0wpps"
                    />
                    <Stretch
                    heading='Wrist Flexor Stretch :'
                    src="R7dI2ZcbiMI"
                    />
                </Row>
                <Row>
                    <Stretch
                    heading='Cat Cow Stretch :'
                    src="LIVJZZyZ2qM"
                    />
                    <Stretch
                    heading='Upper Body Stretch :'
                    src="VqBxiIeAZ3k"
                    />
                </Row>
            </Container>
            <WellDone />
        </section>
    );
};

export default UpperBodyWorkouts;