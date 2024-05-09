import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Ratio from 'react-bootstrap/Ratio';


const WorkoutCard = ({ src, text }) => {
    return (
        <div>
            <Card style={{ width: '100%', marginBottom: '10px' }}>
                <Ratio aspectRatio="16x9"><Card.Img loading='lazy' variant="top" src={src} /></Ratio>
                <Card.Body>
                    <Button style={{ width: '100%' }} variant="dark">{text}</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default WorkoutCard;