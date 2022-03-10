import {ReactComponent as Github} from '../../assets/img/github.svg'


function Navbar(){
    return(
        <header>
            <nav className='container'>
                <div className="dsmovie-nav-content">
                    <h1>DS Movie</h1>
                    <a href="https://github.com/devsuperior" target="_blank" rel="noreferrer" className='dsmovie-contact'>
                        <Github />
                        <p>/desuperior</p>
                    </a>
                </div>
            </nav>
      </header>
    )
}
export default Navbar