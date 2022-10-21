import { useState, useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import Countdown from 'react-countdown';
import moment from 'moment';

function Low({ hourValue, setHourValue, bestTimeRange, currentPrice }) {

   const endOfDay = new Date().setHours(23,59,59,999);

   const [showElement, setShowElement] = useState('countdown');
   const [time, setTime] = useState(newDate());

   const cheapHours = [
      {label: '1h', value: 1},
      {label: '2h', value: 2},
      {label: '3h', value: 3},
      {label: '4h', value: 4},
      {label: '6h', value: 6},
      {label: '8h', value: 8},
   ];

   useEffect(() => {
      const countDownUntil = moment.unix(bestTimeRange.timestamp).toDate();
      setTime(countDownUntil);
   }, [bestTimeRange]);

   function handleOnChange(event) {
      const hour = event.currentTarget.value; 

      if(bestTimeRange.timestamp > moment().unix())  {
         setShowElement('rconutdown');
      } else {
          setShowElement('right now');
      }
      setHourValue(+hour);
   }

   return (
      <>
          <Row>
             <Col>
                  <ButtonGroup>
                           {cheapHours.map(hour => (
                              <ToggleButton
                                 key={hour.value}
                                 id={`hour-${hour.value}`}
                                 type="radio"
                                 name="hour"
                                 value={hour.value}
                                 checked={hourValue === hour.value}
                                 onChange={handleOnChange}
                                 >
                                     {hour.label}
                                 </ToggleButton>
                           ))}
                  </ButtonGroup>
             </Col>
          </Row>
          <Col>Parim aeg selleks on {showElement === `${bestTimeRange.from}:00st` ? <Countdown date={time} /> : <h3>Right Now!</h3>} 
          </Row>
          <Row>
              <Col>
                 {showElement === `countdown` ?  <Countdown date {time} /> : <h3> Right now!</h3>
              </Col>
          </Row>
          <Row>
              <Col>Siis on kilovatt-tunni hind 
              {bestTimeRange.bestPrice} eur,
               mis on {Math.round(100 - bestTimeRange.best / currentPrice * 100)}% kallim kui praegu</Col>
          </Row>
      </>
  );
}

export default Low;