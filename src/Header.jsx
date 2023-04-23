
import './Header.css'

function Header() {
    const UrlImg = "https://sat02pap005files.storage.live.com/y4mFCYvDi5sNvXwJBX9_GcmY2Ixz7f6jl-9xfMzRFOaE1NGbMxIB9YAvTACwhEmeZWPqgI62zbnIcRi8MNhVjeFE0SL-CqZCG9Rz4opxX8VyZ4yknU4B6OwonKvS7PaICn3e2j4KGkcfZkX0fVS7RrztkXfvxiMAh-_l7aagyyge4Txsdx-TER4lMFV-FmWBOp-?width=583&height=579&cropmode=none"
    return (
        <header className="header">

            <img className='logo' src={UrlImg} alt="" />
            <nav className="nav">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Sobre</a></li>
                    <li><a href="#">Contato</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;


    

