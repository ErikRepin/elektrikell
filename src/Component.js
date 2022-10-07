import React, {useState} from 'react';

//function FComponent(){     // komponenetq objavljajutsja s bolshoi bukva
//   return (
//     <div>Privet ot FComponent</div>
//  )
//}

const SComponent = (props) => { // komponenetq objavljajutsja s bolshoi bukva // Strelo4naja func
   const [count, setCount] = useState(0);
   return (
      <div>
         Privet ot {props.firstName} {props.lastName} {count}
         <button onClick={() => setCount(count + 1)}>+</button>
         <button onClick={() => setCount(0)}>Null</button>
         </div>
   )
}

//class CComponent extends React.Component {
//   render() {
//      return (
//        <div>Privet ot Class Component</div>
//      )
//  }
//}
export default SComponent;