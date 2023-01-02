import {
    Card,
    Badge
} from 'react-bootstrap';

import {
    Link
} from 'react-router-dom';

import data from './data';

function Home(){
    // komponen ini membuat list dari data yang disediakan.
    // dalam list ini, digunakan komponen Card dari React Bootstrap.
    
    return (
        <>
            <h3>Home</h3>
            {
                data.map((item) => {
                    return (
                        <Card className="mb-3" style={{ width: '100%' }}>
                            <Card.Body>
                                <Card.Title>{ item.nama }</Card.Title>
                                <Card.Text>
                                { item.deskripsi }
                                </Card.Text>
                                <Link to={`/detail/${item.id}`}><Badge pill bg="danger" className="float-end me-2">Detail</Badge></Link>
                            </Card.Body>
                        </Card>
                    );
                })
            }
        </>
    );
}

export default Home;