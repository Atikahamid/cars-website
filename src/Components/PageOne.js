import React from 'react'
import Navbar from './Navbar'

export default function PageOne() {
    return (
        <div>
            <Navbar/>
             <div className="background_img">
                <div className="cont">
                    <h1>Join Us Now</h1>
                    <form action="noaction.php">
                        <div className="form_group">
                            <input type="text" name="" placeholder="Enter Your Name" />
                        </div>
                        <div className="form_group">
                            <input type="text" name="" placeholder="Enter Your Age" />
                        </div>
                        <div className="form_group">
                            <input type="text" name="" placeholder="Enter Your Gender" />
                        </div>
                        <div className="form_group">
                            <input type="text" name="" placeholder="Enter Your Lacality" />
                        </div>
                        <div className="form_group">
                            <input type="text" name="" placeholder="Enter Your Email-ID" />
                        </div>
                        <div className="form_group">
                            <input type="text" name="" placeholder="Enter Your Phone Number" />
                        </div>
                        <button className="navbar1">Submit</button>
                    </form>
                </div>
            </div>
        </div>
       

    )
}
