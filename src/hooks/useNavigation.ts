import { useNavigate } from "react-router-dom";

export const useNavigation = () => {
    const navigate = useNavigate();
    return {
        goToCart: () => navigate('/cart'),
        goToProfile: () => navigate('/profile'),
        goToHome: () => navigate('/home'),
    };
};