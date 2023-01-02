import {
    Badge
} from 'react-bootstrap';

import { 
    useState,
    useEffect
} from 'react';

import {
    useParams,
    Link,
} from 'react-router-dom';

import data from './data';

function Detail(){
    // useParams tujuannya mendapatkan id yang di-pass dari home.
    // tergantung apakah :id atau :nama atau :index yang Anda gunakan,
    // yang di-destructure bisa { id } { nama } atau { index }.
    // agar lebih paham, coba console.log(useParams()).

    const { id } = useParams();
    const [ item, setItem ] = useState({});

    useEffect(() => {
        // cari item dengan id tadi. parseInt digunakan karena id merupakan string.
        const dapatItem = data.find((item) => {
            return item.id === parseInt(id);
        });

        setItem(dapatItem);
    }, [id]);

    return (
        <>
            <h3>Detail: { item.nama }</h3>
            <ul>
                <li>{ item.deskripsi }</li>
            </ul>
            <Link to="/"><Badge pill bg="danger" className="float-end me-2">Kembali</Badge></Link>
        </>
    );
}

export default Detail;