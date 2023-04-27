
import './Header.css'

function Header() {
    const UrlImg = "https://sat02pap005files.storage.live.com/y4mFCYvDi5sNvXwJBX9_GcmY2Ixz7f6jl-9xfMzRFOaE1NGbMxIB9YAvTACwhEmeZWPqgI62zbnIcRi8MNhVjeFE0SL-CqZCG9Rz4opxX8VyZ4yknU4B6OwonKvS7PaICn3e2j4KGkcfZkX0fVS7RrztkXfvxiMAh-_l7aagyyge4Txsdx-TER4lMFV-FmWBOp-?width=583&height=579&cropmode=none"
    return (
        <header className="header">

            <img className='logo' src={UrlImg} alt="" />
            <nav className="nav">
                <ul>
                    <li><a href="https://github.com/LeoRodrigues1036"><img src="https://img.icons8.com/nolan/96/github.png"/></a></li>
                    <li><a href="https://www.linkedin.com/in/leonardo-rodrigues-desenvolvedor-web/"><img src="https://img.icons8.com/nolan/96/linkedin.png"/></a></li>
                    <li><a href="https://www.instagram.com/leozera96/?next=%2F"><img src="https://img.icons8.com/nolan/96/instagram-new.png"/></a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;


    

