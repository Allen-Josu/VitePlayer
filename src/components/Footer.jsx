import { Link } from "react-router-dom"

function Footer() {
  return (
    <>
      <div className="d-flex flex-column justify-content-center align-items-center mt-5">
        <div className="d-flex flex-warp justify-content-evenly align-items-center w-100">
          {/* Logo and Description */}
          <div className="d-flex flex-column justify-content-center  ms-3" style={{ width: "400px" }}>
            <div>
              <i className="fa-solid fa-video fa-beat-fade text-warning icon  me-2 fa-2x"></i>{' '}
              <span className="text-warning fs-3">VitePlayer</span>
            </div>
            <p className="mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores sint architecto maiores incidunt iste error sed laudantium temporibus odit maxime saepe esse dolore eaque ad, fuga eveniet voluptates blanditiis eius.</p>
          </div>
          {/* Links */}
          <div className="d-flex flex-column justify-content-center">
            <p className="fs-2">Links</p>
            <p><Link to={"/"}>Landing Page</Link></p>
            <p><Link to={"/home"}>Home</Link></p>
            <p><Link to={"/watchHistory"}>Watch History</Link></p>
           
          </div>
          {/* Guides */}
          <div className="d-flex flex-column justify-content-center">
            <p className="fs-2">Guides</p>
            <p>React</p>
            <p>Bootstrap</p>
            <p>Bootswatch</p>
          </div>
          {/* NewsLetter */}
          <div className="d-flex justify-content-center flex-column">
            <p className="fs-2">Contact US</p>
            <div className="d-flex gap-2">
              <input type="text" className="form-control " placeholder="Enter your email" />
              <button className="btn btn-warning d-flex justify-content-center px-4">Subscribe</button>
            </div>
            <div className="d-flex justify-content-evenly mt-3">
              <i className="fa-brands icon fa-2x fa-instagram"></i>
              <i className="fa-brands icon fa-2x fa-twitter"></i>
              <i className="fa-brands icon fa-2x fa-facebook"></i>
              <i className="fa-brands icon fa-2x fa-linkedin"></i>
            </div>
          </div>

        </div>
        <p className="fs-4 mt-3">Copyright. Build with React</p>
      </div>

    </>
  )
}

export default Footer