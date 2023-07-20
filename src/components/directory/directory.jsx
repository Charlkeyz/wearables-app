import './directory.scss'
import { cards } from '../../API\'s/card-items'
import CardItems from '../card/card'

const Directory = () => {
    return(
        <div className='directory-container'>
            {
            cards.map(card => (
                <CardItems key={card.id} card={card}/>
            ))
        }
        </div>
        
    )
}
export default Directory;