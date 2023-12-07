import { useEffect } from 'react';
import WaveApp from './app'

const Wave = () => {
    useEffect(()=>{
        new WaveApp('.wave');
    },[])

    return(<div className='wave' style={{width:'80%', height:'400px', margin:'0 auto'}}>test</div>)
}

export default Wave