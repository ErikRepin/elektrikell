import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useSelector } from `react-redux`;

function High({worstTimeRange}) { 
    const currentPrice = useSelector((state) => state.currentPrice);

   return (
      <>
          <Row>
              <Col>Järgmine tiputund on</Col>
          </Row>
          <Row>
              <Col>{`${worstTimeRange.from}:00st ${worstTimeRange.until}:00no`}</Col>
          </Row>
          <Row>
              <Col>Siis on kilovatt-tunni hind 30.00 senti, mis on 12% kallim kui praegu</Col>
          </Row>
          <Row>
              <Col>Soovitame tiptundide ajal vähendada elektri tarbimist, et aidata kaasa Euroopa ühisele eesmärgile alandada tiputundidel -5% elektri tarbmist ja vähendada maagaasi nõudlust. Loe lähemalt</Col>
          </Row>
      </>
  );

}

export default High;