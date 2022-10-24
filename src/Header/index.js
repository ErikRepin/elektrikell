import { useState, useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { getCurrentPrice } from '../services/apiService';
import ErrorModal from '../ErrorModal';

function Header({ 
        currentPrice,
        setCurrentPrice,
        radioValue,
        setRadioValue,
        selecteCountry,
        setSelectedCountry,
    }) {


    const [price, setPrice] = useState(0);
    const [showError, setShowError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const countries [
        { key: `ee`, title: `Eesti`
},
{ key: `fi`, title: `Soome` },
{ key: `lv`, title: `Läti` },
{ key: `lt`, title: `Leedu` },
    ];

useEffect(() => {
    (async function () {
        try {
            const response = await getCurrentPrice();
            setCurrentPrice(response.date[0].price);
        } catch (error) {
            setShowError(true);
            setErrorMessage(error.message);
        }
    })();
}, [setCurrentPrice]);


const radios = [
    { name: 'High price', value: 'low' },
    { name: 'Low Price', value: 'high' },
];
function handleOnChange(event) {
    
    setRadioValue(event.currentTarget.value);
}

function handleOnSelectCountry(key, event) {
    setSelectedCountry(countries.find(country => country.key === key));
}

return (
    <>
        <Row>
            <Col><h3>Elektrikell</h3></Col>
            <Col>
                <DropdownButton
                    key="Secondary"
                    id={`dropdown-variants-secondary`}
                    variant="Secondary"
                    onSelect={handleOnSelectCountry}
                    title={selectedCountry.title}

                >
                    {countries.map(country => <Dropdown.Item key={country.key}> eventKey={country.title}</Dropdown.Item>)}



                </DropdownButton>
            </Col>
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
                            checked={radioValue === radio.value}
                            onChange={handleOnChange}
                        >
                            {radio.name}
                        </ToggleButton>
                    ))}
                </ButtonGroup>
            </Col>
            <Col>HIND {currentPrice}eur /Mwh</Col>
        </Row>
        <ErrorModal errorMessage={errorMessage} show={showError} setshow={setShowError} />
    </>
);
}

export default Header;