import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Ratio from 'react-bootstrap/Ratio';

const Exercise = ({heading, src}) => {
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

const WarmUp = () => {
    return (
        <section>
             <Container fluid>
                <h5><b>1. Warm-Up (5 - 10 minutes):</b></h5>
                <p className='paragraph'>Start with jumping jacks or skipping rope for 5 - 10 minutes to raise your heart rate.</p>
                <Row>
                    <Exercise
                    heading='Jumping Jacks :'
                    src='yg3KQQn3QWg'
                    />
                    <Exercise
                    heading='Skipping Rope :'
                    src='OutJVANrxmQ'
                    />
                </Row>
                <p className='paragraph'>Perform dynamic stretches for the major muscle groups. 5 seconds for each.</p>
                <Row>
                    <Exercise
                    heading='Standing Side Stretch :'
                    src="CwgeTuh3MDQ"
                    />
                    <Exercise
                    heading='Hip Flexor Stretch :'
                    src="DXuStgWuJV8"
                    />
                </Row>
                <Row>
                    <Exercise
                    heading='Shoulder Stretch :'
                    src="XMsBC9-vSDs"
                    />
                    <Exercise
                    heading='Toe Touch :'
                    src="Xvr5N_Xf6QM"
                    />
                </Row>
            </Container>
        </section>
    );
};

export default WarmUp;