function FooterElem({href, dPathSVG, label}){

return <a className='link' rel='noreferrer' target="_blank" href={href}>
        <svg className='footer__elem' viewBox="0 0 50 50">
            <path fill="#fff" d={dPathSVG}/>
        </svg>
        {label ? <p>{label}</p> : <></>}
    </a>
}

export default FooterElem;