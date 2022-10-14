import High from './high';
import Low from './low';

function Footer({ radioValue, hourValue, setHourValue }) {
   
    return (
      <>
        {radioValue === 'low' ? (<Low {...{hourValue, setHourValue}} />) : (<High />)}
      </>
    );  
}

export default Footer;