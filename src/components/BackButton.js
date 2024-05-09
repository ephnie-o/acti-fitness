import { useLocation, useNavigate } from 'react-router-dom';

const BackButton = () => {
    const history = useNavigate();
    const location = useLocation();
    const isNotHomePage = location.pathname !== '/';

    return (
        isNotHomePage && (
            <i onClick={()=> history(-1)} className="fa fa-chevron-circle-left back-button" aria-hidden="true"></i>
        )
    );
};

export default BackButton;