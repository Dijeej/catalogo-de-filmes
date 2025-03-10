'use client';

import Link from 'next/link';
import './index.scss'
import CatFilmIcon from '../CatFilmIcon/icon';
import NavbarItem from '../NavbarItem';
import { NavbarItemType } from '@/types/navbarItemType';
import { usePathname } from 'next/navigation';
import { genreDictionary } from '@/utils/genreDictionary';
import { FaBars } from "react-icons/fa";
import { FaWindowClose } from "react-icons/fa";
import { useState } from 'react';


export default function Navbar() {
    const navbarItens: NavbarItemType[] = Object.entries(genreDictionary).map(([id, { pt, en }]) => ({
        id: parseInt(id), // Convertendo o id de string para número
        namePt: pt,
        nameEn: en,
    }));
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false); // Controlando se o menu está aberto ou fechado

    const toggleMenu = () => {
        setIsOpen((prev) => !prev); // Alterna o estado do menu
    };
    return (
        <nav className="navbar">
            <Link href="/" className="page-title"> <CatFilmIcon /> Cat. Filmes</Link>

            <ul className={`navbar-itens ${isOpen ? 'open' : ''}`}>
                {navbarItens.map((item) => (
                <NavbarItem 
                key={item.id} 
                navbarItem={item} 
                isActive={pathname === `/${item.nameEn}`}
                />
            ))}
            </ul>
            <button className='btn-responsive' onClick={toggleMenu}>
                {isOpen ? <FaWindowClose /> : <FaBars />}
            </button>
        </nav>
    );
}
