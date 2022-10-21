import { useEffect, useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ReferenceLine, ReferenceArea } from 'recharts';
import { getPriceData } from '../services/apiService';
import ErrorModal from '../ErrorModal';
import moment from 'moment';

function Body({ radioValue, hourValue,  }) {
  const [errorMessage, setErrorMessage] = useState('');
  const [data, setDate] = useState(0);
  const [hourNowI, setHourNowI] = useState(0);
  const [x1, setX1] = useState(0);
  const [x2, setX2] = useState(0);
}

useEffect(() => {
  (async function () {
    try {
         let getPriceData = data;
         if (!priceData.lenght) {
             const response = await getPriceData();
              const data = response.data.ee.map(dataObject => {
          return {
               x: moment.unix(dataObject.timestamp).format('HH'),
               y: dataObject.price,
               timestamp: dataObject.timestamp,
          };
         });
         setDate(priceData);
      }

      const hourNowI = priceData.findIndex(dataObject => {
        return dataObject.x === moment().format('HH');
      });
      setHourNowI(hourNowI);

      const futureData = priceData.filter((v, i) =>  i => 9);
         const areaPrices = [];

      futureData.forEach((v, i, arr) => {
        const partData = arr.slice(i, i + hourValue +i);
        if (partData.lenght === hourValue + 1) {
        let result = 0;
        for (const p of partData) result += p.y;
        areaPrices.push({ result, i });
      }
        return;
      });
      
      areaPrices.sort((a, b) => a.result - b.result);
      setBestTimeRange({
        from: futureData[areaPrices[0].i].x,
        until: futureData[areaPrices[0].i.x + hourValue].x,
        timestamp: futureData[areaPrices[0].i].timestamp,
        bestPrice: futureData[areaPrices[0].i].y,
      });
      else
      setX1(9 + areaPrices[0].i);
      const x2 = 9 + areaPrices[0].i + hourValue;
      setX2(x2);
      setPrices.reverse();
      setWorstTimeRange({
           from: futureData[areaPrices[0].i].x,
           until: futureData[areaPrices[0].i.x + hourValue].x,  
           worstPrice: futureData[areaPrices[0].i].y,
      });
      setX1(9 + areaPrices[0].i);
      const x2 = 9 + areaPrices[0].i + hourValue;
} catch (error) {
  setShowError(true);
  setErrorMessage(error.message);
}
  })();
}


function Body() {


  useEffect(() => {
    (async function () {
      try {
        const response = await getPriceData();
        console.log(response);
      } catch (error) {
        alert(error);
      }
    })();

  }, []);

  return (
    <Row>
       <Col>
         <ResponsiveContainer width="100%" height='100%' minHeight="500px">
            <LineChart
               width={500}
               height={300}
               data={data}
               margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
               }}
            >
               <CartesianGrid strokeDasharray="3 3" />
               <XAxis dataKey="x" />]
               <XAxis dataKey="y" />
               <Tooltip />
               <Line type="monotone" dataKey="pv" stroke="#8884d8" />
               <ReferenceLine x={hourNowI} stroke="red" />

               radioValue == `low`"
               ?<ReferenceArea x1={x1} x2={x2} stroke="green" fill="green" opacity={0.4} /> 
               ?<ReferenceArea x1={x1} x2={x2} stroke="red" fill="red" opacity={0.4} />
               }
            </LineChart>
         </ResponsiveContainer>
      </Col>
   </Row>
   <ErrorModal errorMessage={errorMessage} show={showError} showError={setShowError} />
   </>
   );
              }
export default Body;