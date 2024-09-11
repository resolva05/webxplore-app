import React from 'react'
import '../App.css'
import styled from 'styled-components'
import logo from "../../src/assets/logo.jpg"

function Footer() {
    return (

        <FooterContainer className="main-footer" >
            <div className="footer-middle">
                <div className="container">
                    <div className="row">
                        

                        {/* coloumn 1 */}
                        {/* <div className="col-md-3 col sm-6">
                        <a href="/">
                        <img src={logo} alt="" style={{ height: "60px", borderRadius: "15px", marginLeft: "10px" }} /></a> */}
                        {/* <h4>About</h4>
                        <ul className='list-unstyled'>
                            <li>contact us</li>
                            <li>contact us</li>
                            <li>contact us</li>
                            <li>contact us</li>
                        // </ul> */}

                    {/* </div> */}
                    <div className='' style={{margin:"auto", width:"10px"}}><a href="/">
                    <img src={logo} alt="" style={{ height: "100px", borderRadius: "15px", marginLeft: "10px" }} /></a></div>
                        {/* coloumn 2 */}
                        <div className="col-md-3 col sm-6" style={{ marginLeft: "300px" }}>
                            <h4>About</h4>
                            <ul className='list-unstyled'>
                                <li> <a href="/"> contact us</a></li>
                                <li> <a href="/"> contact us</a></li>
                                <li> <a href="/"> contact us</a></li>
                                <li> <a href="/"> contact us</a></li>
                            </ul>

                        </div>
                        {/* coloumn 3 */}
                        <div className="col-md-3 col sm-6">
                            <h4>Socials</h4>
                            <ul className='list-unstyled'>
                                <li><a href="/">Terms & Conditions</a></li>
                                <li><a href="/">Privacy Policy</a></li>
                                <li><a href="/">Licensing</a></li>
                                {/* <li><a href="/">contact us</a></li> */}
                            </ul>

                        </div>
                        {/* coloumn 4 */}
                        {/* <div className='App'> <FontAwesomeIcon icon={faHippo} /></div> */}
                        <div className="col-md-3 col sm-6">
                            <h4>About</h4>
                            <ul className='list-unstyled d-flex'>
                                <li style={{ marginRight: "10px" }}><a href="/"> <i className="fa-brands fa-facebook"></i></a></li>
                                <li style={{ marginRight: "10px" }}><a href="/"><i className="fa-brands fa-instagram"></i></a></li>
                                <li style={{ marginRight: "10px" }}><a href="/"><i className="fa-brands fa-linkedin"></i></a></li>
                                {/* <li><a href="/">contact us</a></li> */}
                            </ul>

                        </div>
                    </div>
                    {/* Footer Bottom */}
                    <div className="footer-bottom">
                        <p className="text-xs-center">
                            &copy;{new Date().getFullYear()} City Guide App - All Rights Received
                        </p>
                    </div>
                </div>
            </div>
        </FooterContainer>


    );
}
export default Footer

const FooterContainer = styled.footer`
.footer-middle{
background: var(--mainDark);
padding-top: 3rem;
color: var(--mainWhite)
}

.footer-bottom{
paggding-top: 3rem;
padding-bottom: 2rem;
}

ul li a {
    color: var(--mainGrey);
}
ul li a:hover{
    color: var(--mainLightGrey)
}
`;