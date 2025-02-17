
import { Outlet } from 'react-router-dom';
import Nav from '../Shared/Nav';
import Footer from '../Home/Footer';
import ChartsD from '../Shared/ChartsD';

const Root = () => {
    return (
        <div className='font-lato'>
            <Nav></Nav>
            <Outlet></Outlet>
            <ChartsD></ChartsD>
            <Footer></Footer>
        </div>
    );
};

export default Root;