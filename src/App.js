import './App.scss';
import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';

function App() {
  
  const [worstTimeRange, setWorstTimeRange ] = useState({
    from: 0,
    until: 0,
    worstprice: 0,
  });
  

  return (
    <Container>
      <Header 
      
        setSelectedCountry={setSelectedCountry}
        />
      <Body
       
      
      setWorstTimeRange={setWorstTimeRange}

      />
      <Footer 
     
      
      currentPrice={currentPrice} 
      worstPrice={worstPrice}
      /> 
    </Container>
  );
}

export default App;