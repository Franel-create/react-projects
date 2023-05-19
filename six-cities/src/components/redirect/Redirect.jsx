import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Redirect = () => {
    const navigate = useNavigate();
    const redirectToRoute = useSelector(state => state.redirectToRoute);

    return (
        navigate({redirectToRoute}, { replace: true })
    )
}

export default Redirect;