import High from './high';
import Low from './low';
import './footer.scss';
import { Route, Routes } from 'react-router-dom';
// biblioteka kotoraja nam pomogaet pokazqvat te komponenntq kotorqe bqli zaproshennq 4erez url

function Footer(props) {
    // Routes eto wrapper nashqh marshrutov
    // Route eto marshrut v kotorqi peredajom komponent 4erez props
    // path sovpadaet s nashim url i Route renderit ego polu4ennqi komponent
    // v path 4erez : my mozem peredat komponent parametra url
    return (
        <div id="footer">
            <Routes>
                <Route path="/" element={<Low {...props} />} />
                <Route path="/low" element={<Low {...props} />} />
                <Route path="/low/:hours" element={<Low {...props} />} />
                <Route path="/high" element={<High />} />
            </Routes>
        </div>
    );
}

export default Footer;