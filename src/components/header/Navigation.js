function Navigation({name, href}){
    return <a className='navigation__item' href={href}>{name}</a>
}

export default Navigation;