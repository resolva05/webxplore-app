import React from 'react'
import '../App.css'

function Footer() {
    return (
        <div className="main-footer" style={{}}>
            <div className="container">
                <div className="row">

                    {/* coloumn 1 */}
                    <div className="col-md-3 col sm-6">
                        <h4>About</h4>
                        <ul className='list-unstyled'>
                            <li>contact us</li>
                            <li>contact us</li>
                            <li>contact us</li>
                            <li>contact us</li>
                        </ul>

                    </div>
                    {/* coloumn 2 */}
                    <div className="col-md-3 col sm-6">
                        <h4>About</h4>
                        <ul className='list-unstyled'>
                            <li>contact us</li>
                            <li>contact us</li>
                            <li>contact us</li>
                            <li>contact us</li>
                        </ul>

                    </div>
                    {/* coloumn 3 */}
                    <div className="col-md-3 col sm-6">
                        <h4>About</h4>
                        <ul className='list-unstyled'>
                            <li>contact us</li>
                            <li>contact us</li>
                            <li>contact us</li>
                            <li>contact us</li>
                        </ul>

                    </div>
                    {/* coloumn 4 */}
                    <div className="col-md-3 col sm-6">
                        <h4>About</h4>
                        <ul className='list-unstyled'>
                            <li>contact us</li>
                            <li>contact us</li>
                            <li>contact us</li>
                            <li>contact us</li>
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


    );
}
export default Footer