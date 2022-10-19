import { useEffect, useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ReferenceLine } from 'recharts';
import { getPriceData } from '../services/apiService';
import ErrorModal from '../ErrorModal';
import moment from 'moment';

function Body({hourValue}) {
  const []
  const []
  const []
  const [x1, setX1] = useState
}

useEffect(() => {
  (async function () {
    try {
         const response = await getPriceData();
         const data = response.data.ee.map(dataObject => {
             return {
                x: moment.unix(dataObject.timestamp).format('HH'),
                y: dataObject.price
      };
    });
    const hourNowI = date.findIndex(dataObject => {
       return dataObject.x === moment().format('HH');
  });
  setHourNowI(hourNowI);
  setDate(date);
  const futureData = date.filter((v, i) => i >= 9);
  const areaPrices = [];
  futureData.forEach((v, i, arr) => {
        const partData = arr.slice(i, i+ hourValue);
        if(partData < hourValue) {
             return;
        }
        let result = 0;
        for(const p of partData) result += p.y; 
        areaPrices.push({result, i});
  });
  areaPrices.sort((a,b) => a.result - b.result);

  setX1(9 + areaPrices[0].i);
  const x2 = 9 + area[0].i);
  setX2(x2);


 // const futureData = date.filter((v. i) => i >= 9);
  //futureData.sort((a, b) => a.y - b.y);

  //const x1 = data.findIndex(dataObject => {
        //return dataObject.y === futureData[0].y;
  });
    setX1(x1);
    setX2(x2 + 1);
  } catch (error) {
      setShowError(true);
      setErrorMessage(error.message);
  }
  }()
    

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
               <Legend />
               <Line type="monotone" dataKey="pv" stroke="#8884d8" />
               <ReferenceLine x="Page C" stroke="red" />
               <ReferenceLine x1={x1} stroke="red" label="Max PV PAGE" />
            </LineChart>
         </ResponsiveContainer>

      </Col>
   </Row>
   <ErrorModal errorMessage={errorMessage} show={showError} showError={setShowError} />
   </>
   );
}

export default Body;