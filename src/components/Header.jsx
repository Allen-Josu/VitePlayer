import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
    return (
        <>
            <Navbar className="bg-dark">
                <Container>
                    <Navbar.Brand href="/" >
                            <i className="fa-solid fa-video fa-beat-fade icon text-warning me-2 fa-2x"></i>{' '}
                        <span className="text-warning fs-3">VitePlayer</span>
                    </Navbar.Brand>
                </Container>
            </Navbar>
        </>
    )
}

export default Header