import { Col, Row } from "react-bootstrap"
import Card from 'react-bootstrap/Card';

function LandingPage() {
    return (
        <>
            <Row className="d-flex justify-content-center align-items-center mt-5 mb-5" >
                <Col lg={1}></Col>
                <Col lg={5}>
                    <h1>Welcome to <span className="text-warning">VitePlayer</span></h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa corrupti adipisci expedita rerum est, iste quibusdam non sed aspernatur dolorum corporis labore, debitis dolore porro velit. Esse rerum alias natus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, amet voluptatem error repellendus aliquam sint, consectetur, architecto dolorum recusandae ratione reiciendis eos rerum adipisci dolor corporis sed atque. Accusamus, soluta.</p>
                    <button className="btn btn-warning mt-3">Get Started <i className="fa-solid fa-arrow-right"></i></button>
                </Col>
                <Col lg={1}></Col>
                <Col lg={5}>
                    <img src="https://media.tenor.com/lhlDEs5fNNEAAAAC/music-beat.gif" alt="music beat" />
                </Col>
            </Row>
            <div className=" container flex-column d-flex justify-content-center align-items-center">
                <h3>Features</h3>
                <div className="d-flex w-100 justify-content-evenly align-items-center mt-3 mb-5">
                    <div>
                        <Card style={{ width: '20rem' }}>
                            <Card.Img variant="top" height="300px" src="https://i.pinimg.com/originals/ad/d2/31/add23123b088c3301cc2c71f7767048d.gif" />
                            <Card.Body>
                                <Card.Title className="text-center">Managing Vedio</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the cards content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>

                    <div>
                        <Card style={{ width: '20rem' }}>
                            <Card.Img variant="top" height="300px" src="https://i.pinimg.com/originals/2d/2d/51/2d2d51ba3d86b27b221abb162c24edc0.gif" />
                            <Card.Body>
                                <Card.Title className="text-center">Categorizing Vedio</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the cards content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>

                    <div>
                        <Card style={{ width: '20rem' }}>
                            <Card.Img variant="top" height="300px" src="https://i.pinimg.com/originals/48/c6/12/48c61262980bb7dbf2557940d41c7d0b.gif" />
                            <Card.Body>
                                <Card.Title className="text-center"> Watch History</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the cards content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LandingPage