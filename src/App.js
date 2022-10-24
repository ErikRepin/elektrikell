import './App.scss';
import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';

function App() {
  const [currentPrice , setCurrentPrice] = useState(0);
  const [radioValue, setRadioValue] = useState('low');
  const [hourValue, setHourValue] = useState(1);
  const [bestTimeRange, setBestTimeRange ] = useState({
    from: 0,
    until: 0,
    timeStamp: null,
    bestprice: 0,
  });
  const [worstTimeRange, setWorstTimeRange ] = useState({
    from: 0,
    until: 0,
    worstprice: 0,
  });
  const [selectedCountry, setSelectedCountry] = useState({key: `ee`, title: `Eesti`});

  return (
    <Container>
      <Header 
        setRadioValue={setRadioValue} 
        radioValue={radioValue} 
        currentPrice={currentPrice}
        setCurrentPrice={setCurrentPrice}/>
        setSelectedCountry={setSelectedCountry}
        selectedCountry={selectedCountry}
        />
      <Body radioValue={radioValue} 
      hourValue={hourValue} 
      setBestTimeRange={setWorstTimeRange}/>
      <Footer 
      radioValue={radioValue} 
      hourValue={hourValue} 
      setHourValue={setHourValue}    
      setBestTimeRange={bestTimeRange}
      currentPrice={currentPrice} />
    </Container>
  );
}

export default App;