import {
    Link
} from 'react-router-dom';

import {
    Col,
    Row,
    Badge
} from 'react-bootstrap';

function Header(){
    // berikut ini adalah navbar dari aplikasi ini.
    // /detail saya comment karena akan dinavigasi dari list yang ada di home.
    // /randomwords bisa apapun yang tidak terdaftar dalam routes di App.js. tujuannya untuk mendapatkan error page.
    
    return (
        <>
            <Row className='mt-5'>
                <Col xs={12} md={6} className="d-flex justify-content-center">
                    <h1>Belajar React Router Dasar</h1>

                </Col>
                <Col xs={12} md={6} className="d-flex justify-content-center">
                    <Link to="/"><Badge pill bg="primary" className="float-end me-2">Home</Badge></Link>
                    {/* <Link to="/detail"><Badge pill bg="primary" className="float-end me-2">Detail</Badge></Link> */}
                    <Link to="/about"><Badge pill bg="primary" className="float-end me-2">About</Badge></Link>
                    <Link to="/randomwords"><Badge pill bg="primary" className="float-end me-2">Test Error</Badge></Link>
                </Col>
            </Row>
            <div className='mb-5'></div>
        </>
        
    );
}

export default Header;