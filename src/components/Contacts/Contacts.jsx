import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';


const Contacts = () => {
    return (
        <div>
            <form>
                
                <div className="row">
                    <div className="col-md-6 form-group">
                        <input type="text" className="form-control" placeholder="First Name" />
                    </div>
                    <div className="col-md-6 form-group">
                        <input type="text" className="form-control" placeholder="Last Name" />
                    </div>
                    <div className="col-md-6 form-group">
                        <input type="text" className="form-control" placeholder="Email Address" />
                    </div>
                    <div className="col-md-6 form-group">
                        <input type="text" className="form-control" placeholder="Contact Number" />
                    </div>
                    <div className="col-md-12 form-group">
                        <textarea className="form-control" placeholder="Message" rows="5"></textarea>
                    </div>
                    <div className="col-md-3 form-group">
                    <input type="submit" className="form-control btn-info" value="Send Message" />
                    </div>
                </div>
            </form>
        </div>
    )
}
export  default Contacts;
