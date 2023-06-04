import './ItemCount.css';
import { BsDash, BsPlusLg } from 'react-icons/bs'

export const ItemCount = ({max, modify, amount}) => {

    // const [counter, setCounter] = useState(0);

    const sumar = () =>{
        if(amount < max){
            modify( amount +1 );
        }
    }
    const restar = () =>{
        if (amount>0){
            modify( amount -1 );
        }
    }
    // const resetear = () =>{
    //     modify( 0 );
    // }
      
    return (
        <div >
            <h3 className='container'>Cantidad: {amount}</h3>
            <div className='containerButtons'>
            
                <button className='buttonAdd' onClick={sumar}><BsPlusLg/></button>
                <button className='buttonSubtract' onClick={restar}><BsDash/></button>
            </div>
        </div>
    )
}
