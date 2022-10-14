import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';

// App - eto react component, napisan 4erez funkciju
// Komponentq vsegda nachenajutsja s Zaglavnoi bukvy
// Komponenetq kak i funkcii prinimajut argumentq tolko nazqvajutsja oni tut properties(props)
// Komponent vozvrahaet(return) React element/JSX
// React element dolzen soderzat' tol'ko odin zaglavnij element
function App() {
  const [radioValue, setRadioValue] = useState('low');
  const [hourValue, setHourValue] = useState(1);
//useState - eto react hook, pozvoljajushij rabotat' s sostojaniem komponenta
// useState prinimaet kak argument iznachal'noe sostojanie. radioValue = 'low';
// useState vozvrashaet massive iz dvuh elementov
// [1] = iznachal'no ili novoe znachenie sostojanija/peremennoj
// [2] = funkciju kotoraja mozet izmenit' znachenie sostojanija/peremennoj
// pri izmenenii sostojania zapuskaetsja rerender componenta
// vse nazvanija react hookov nachinaetsja s 'use'; vse funkcii izmenenija sostojanija nachinajustjsa s 'set'  
  return (
    <Container>
      <Header setRadioValue={setRadioValue} radioValue={radioValue}/>
      <Body radioValue={radioValue} hourValue={hourValue}/>
      <Footer radioValue={radioValue} hourValue={hourValue} setHourValue={setHourValue} />
    </Container>
  );
}

export default App;