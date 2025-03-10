import { NavbarItemType } from "@/types/navbarItemType";
import Link from "next/link";
import './index.scss'

interface NavbarItemProps {
    navbarItem: NavbarItemType;
    isActive: boolean;
}



export default function NavbarItem({ navbarItem, isActive }: NavbarItemProps) {
    const {id, namePt, nameEn} = navbarItem;
    return (                
        <li value={id} className="navbar-item">   
            <Link href={`/${nameEn}`} 
            className={`navbar-link ${isActive? 'active' : ''}`}> 
            {namePt} 
            </Link>
        </li>
    );
}