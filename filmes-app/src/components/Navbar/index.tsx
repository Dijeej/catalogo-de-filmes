import Link from 'next/link';
import './index.scss'
import CatFilmIcon from '../CatFilmIcon/icon';
export default function Navbar() {
    return (
        <nav className="navbar">
            
            <Link href="/" className="page-title"> <CatFilmIcon /> Cat. Filmes</Link>
            <div className='navbar-itens'>

            </div>
        </nav>
    );
}