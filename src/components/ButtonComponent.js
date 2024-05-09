import Button from 'react-bootstrap/Button';

const ButtonComponent = ({ text }) => {
    const buttonStyle = {
        position: "absolute",
        bottom: "10px",
        right: "10px",
        width: "30%",
        fontSize: "90%",
        fontWeight: "700",
    };
    return (
        <Button variant="dark" style={buttonStyle}>{text}</Button>
    );
};

export default ButtonComponent;