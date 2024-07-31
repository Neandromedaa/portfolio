import Navigation from "./Navigation";
import Icon from "./Icon";

function Header(){
    return <div className="header">
        <Icon/>
        <div className='header__navigation'>
            <Navigation href='#video' name='Видео'/>
            <Navigation href='#motion' name='Моушн'/>
            <Navigation href='#design' name='Дизайн'/>
            <Navigation href='#contacts' name='Контакты'/>
        </div>
    </div>
}

export default Header;