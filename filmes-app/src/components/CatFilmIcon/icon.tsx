import { BsFilm } from "react-icons/bs";
// import { RiFilmFill } from "react-icons/ri";
// import { GiHollowCat } from "react-icons/gi";
import { GiCat } from "react-icons/gi";
import './icon.scss';

export default function CatFilmIcon() {
    return (
        <div className="icon">
            <BsFilm className="icon-film" />
            <GiCat className="icon-cat"/>
        </div>
    );
}