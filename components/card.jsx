import image from '../components/digital-business-card-img.png'
import CardInfo from '../components/card-info.jsx'
import CardFooter from './card-footer.jsx'

export default function Card() {
    return (
        <>
            <div className="card">
                <img  className='image' src={image} alt="" />
                <CardInfo></CardInfo>
                <CardFooter></CardFooter>
            </div>
        </>
    )
}