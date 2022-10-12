import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';

function Header(props) {

    const radios = [
        { name: 'High price', value: 'low' },
        { name: 'Low Price', value: 'high' },
    ];
    function handleOnChange(event) {
      console.log(event);
      props.setRadioValue(event.currentTarget.value);
    }

    return (
        <>
            <Row>
                <Col><h3>Elektrikell</h3></Col>
            </Row>

            <Row>
                <Col>Status</Col>
                <Col>
                    <ButtonGroup>
                        {radios.map((radio, idx) => (
                            <ToggleButton
                                key={idx}
                                id={`radio-${idx}`}
                                type="radio"
                                variant={idx % 2 ? 'outline-danger' : 'outline-success'}
                                name="radio"
                                value={radio.value}
                                checked={props.radioValue === radio.value}
                                onChange={handleOnChange}
                            >
                                {radio.name}
                            </ToggleButton>
                        ))}
                    </ButtonGroup>
                </Col>
                <Col>HIND</Col>
            </Row>
        </>
    );
}

export default Header;