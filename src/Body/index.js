import { useEffect, useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine, ReferenceArea } from 'recharts';
import { getPriceData } from '../services/apiServices';
import ErrorModal from '../ErrorModal';
import moment from 'moment';

function Body({ 
    radioValue, 
    hourValue, 
    setBestTimeRange, 
    setWorstTimeRange,
    selectedCountry,
  }) {

    const [showError, setShowError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [data, setData] = useState(null);
    const [response,setRsponse] = useState(0);
    const [hourNowI, setHourNowI] = useState(0);
    const [x1, setX1] = useState(0);
    const [x2, setX2] = useState(0);

    useEffect(() => {
      // vnutri otkrqli asynhronnuju funkciju kotoraja moentalno i zapuskaetsja 
      // nemedlenno vqzqvaemaja funkcija
        (async function () {
          // try - probuet vqpolnit vsjo 4to v jego scope. {}
          // pri obnuruzenii oshibki try ostanavlivaetsja i zapuskaet cacth scope {} peredav emu oshibku
            try {
               // mq sprashivaem est li otvet s api v sostojanii komponenta
                if (!response) { 
                  // esli netu to mi delaem zapros i sohranjaem v sostjoanii komponenta
                    const response = await getPriceData();
                    setResponse(response.data);
                    return; // garantiruem 4tobq kod dalshe ne vqpolnalsja
                }
                   // vzjav otvet s api my vqbiraem vqbrannqi pol'zovatelem stranu (ee) 
                   // na massive s dannqimi mq zapuskaem cicl map kotorqi nam vozvrashet novqi massive
                   let priceData = priceData[selectedCountry.key].map(dataObject => {
                    // v cicle mq s timestamp vzjali chasq "HH" i naznachili x i y
                    // y = cena
                    // x = vremja
                    // timestamp 
                        return {
                            x: moment.unix(dataObject.timestamp).format('HH'),
                            y: dataObject.price,
                            timestamp: dataObject.timestamp,
                        };
                    });
                    setData(priceData); // naznachili novqi massive s obrabotannqmi dannqmi 
                }
              
                // ishem index v kotorom zapisan dannqi 4as
                const hourNowI = priceData.findIndex(dataObject => {
                    return dataObject.x === moment().format('HH');
                });
                setHourNowI(hourNowI);

                // vqdeljaem/filtruem massive gde toko budushie vremja prskolko znaem 4to budushee vremja nastupaet 
                const futureData = priceData.filter((v, i) => i >= 9);
                const areaPrices = [];
                // dopustim ishem 3 samqh deshovqi chasov
                // zapuskaem cikl na budushie vremena
                // kazdqi cikl berjot 3 4asa / 3 elemta s massiva 
                // sumiruet ih i zapisqvaet v novqi massive s tekushem indexom
                // takim orazom mq nahodim samqi deshovqi diapazon v 3 4asa
                futureData.forEach((v, i, arr) => {
                    const partData = arr.slice(i, i + hourValue + 1);
                    if (partData.length === hourValue + 1) {
                        let result = 0;
                        for (const p of partData) result += p.y;
                        areaPrices.push({ result, i });
                    }
                    return;

                });
                // sortiruem po summe, deshovqi v nachalo
                areaPrices.sort((a, b) => a.result - b.result);
                if (radioValue === 'low') {
                  // esli hotim znat' deshovqe cenq
                  // berjom vremena i ishem objeckt s cenoi po pervomu/deshovomu indexu
                  // sostavljaem nashq dannqe dlja grafika i shot4ika
                    setBestTimeRange({
                        from: futureData[areaPrices[0].i].x,
                        until: futureData[areaPrices[0].i + hourValue].x,
                        timestamp: futureData[areaPrices[0].i].timestamp,
                        bestPrice: futureData[areaPrices[0].i].y,
                    });
                } else {
                  // esli hotim samoe dorogoe to mq perevorachivaem same deshovqe summq. Teper porjadok s dorogogo k deshovqm
                    areaPrices.reverse();
                    setWorstTimeRange({
                        from: futureData[areaPrices[0].i].x,
                        until: futureData[areaPrices[0].i + hourValue].x,
                        worstPrice: futureData[areaPrices[0].i].y,
                    });

                }
                // dobavljaem proshloe dlja grafika n naznashem v tochk
                setX1(9 + areaPrices[0].i);
                const x2 = 9 + areaPrices[0].i + hourValue;
                setX2(x2);

              } catch (error) {
                setShowError(true);
                setErrorMessage(error.message);
            }
        })();
    }, [hourValue, data, setBestTimeRange, setWorstTimeRange, radioValue, selectedCountry, response]);

return (
        <>
            <Row>
                <Col>
                    <ResponsiveContainer width="100%" height="100%" minHeight="500px">
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
                            <XAxis dataKey="x" />
                            <YAxis dataKey="y" />
                            <Tooltip />
                            <Line type="monotone" dataKey="y" stroke="#8884d8" activeDot={{ r: 8 }} />
                            <ReferenceLine x={hourNowI} stroke="red" />
                            {
                                radioValue === 'low'
                                    ? <ReferenceArea x1={x1} x2={x2} stroke="green" fill="green" opacity={0.3} />
                                    : <ReferenceArea x1={x1} x2={x2} stroke="red" fill="red" opacity={0.3} />

                            }

                        </LineChart>
                    </ResponsiveContainer>
                </Col>
            </Row>
            <ErrorModal errorMassage={errorMessage} show={showError} setShow={setShowError} />
        </>

    )
};


export default Body;