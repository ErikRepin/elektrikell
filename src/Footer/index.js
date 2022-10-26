import High from './high';
import Low from './low';
import {}

function Footer(props) {
  const radioValue = useSelector((state) => state.radioValue);

    return (
    
      <div id="footer">
        {props.radioValue === 'low' ? (<Low {...props} />) : 
        (<High />)}
        (<High 
        </div>
      </>
    );  
}

export default Footer;