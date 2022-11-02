import { useState, useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import Countdown from 'react-countdown';
import moment from 'moment';
import { useSelector, useDispatch } from 'react-redux';
import { setHourValue } from '../services/stateService';
import { useParams, useNavigate } from 'react-router-dom';

function Low() {
    const [showElement, setShowElement] = useState('countdown');
    const [time, setTime] = useState(null);
    const hourValue = useSelector((state) => state.hourValue);
    const currentPrice = useSelector((state) => state.currentPrice);
    const bestTimeRange = useSelector((state) => state.bestTimeRange);
    // useParams - dajot nam peredannqe parametrq 4erez url
    const { hours } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const cheapHours = [
        { label: '1h', value: 1 },
        { label: '2h', value: 2 },
        { label: '3h', value: 3 },
        { label: '4h', value: 4 },
        { label: '6h', value: 6 },
        { label: '8h', value: 8 },
    ];
    console.log(hours);
    useEffect(() => {
        const countDownUntil = moment.unix(bestTimeRange.timestamp).toDate();
        setTime(countDownUntil);
        dispatch(setHourValue(+hours || 1));
    }, [bestTimeRange, hours, dispatch]);

    function handleOnChange(event) {
        const hour = event.currentTarget.value;

        if(bestTimeRange.timestamp > moment().unix()) {
            setShowElement('countdown');
        } else {
            setShowElement('right now');
        }
        navigate('/low/' + hour);
        dispatch(setHourValue(+hour));
    }

    return (
        <div className="text-center">
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
            <Row>
                <Col>Parim aeg selleks on {`${bestTimeRange.from}:00st ${bestTimeRange.until}:00ni`}, milleni on jäänud</Col>
            </Row>
            <Row>
                <Col>
                    {showElement === 'countdown' && time ? <Countdown date={time} /> : <h3>Right Now!</h3>}
                </Col>
            </Row>
            <Row>
                <Col>Siis on kilovatt-tunni hind {bestTimeRange.bestPrice} eur, 
                    mis on {Math.round(100 - bestTimeRange.bestPrice / currentPrice * 100)}% odavam kui praegu
                </Col>
            </Row>
        </div>
    );
}

export default Low;