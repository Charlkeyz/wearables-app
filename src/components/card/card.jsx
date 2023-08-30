import './card.style.jsx'
import { useNavigate } from 'react-router-dom';
import { BackgroundImage, Body, CardItemContainer } from './card.style.jsx';
const CardItems = ({card}) => {
    const {imageUrl, title, route} = card;
    const navigate = useNavigate();

    const onNavigateHandler = () => {
        navigate(route);
    };
    return(
        <CardItemContainer onClick={onNavigateHandler}>
            <BackgroundImage
            imageUrl = {imageUrl}/>
            <Body>
                <h2>{title}</h2>
                <p>Shop Now</p>
            </Body>
            
        </CardItemContainer>
    )
}
export default CardItems;