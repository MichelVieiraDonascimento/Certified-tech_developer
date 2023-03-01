function Header() {
    return (
        <header className="header">

            <img  with={43} height={43}
             src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAA1BMVEX///+nxBvIAAAASElEQVR4nO3BgQAAAADDoPlTX+AIVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDcaiAAFXD1ujAAAAAElFTkSuQmCC" alt="perfil" />
            
            <ul className="lista">
                <li> <a href="#">Home</a> </li>
                <li><a href="#">Contato</a></li>
                <li><a href="#">Quem somos</a></li>

            </ul>
        </header>
    );
}

export default Header;