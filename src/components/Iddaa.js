import React, {Component} from 'react';
import {Bulten} from "./Bulten";
import './style.css'
import Kupon from "./Kupon";

class Iddaa extends Component {

    render() {

        return (
            <div className="container">

                <div className="row">
                    <div  className="header-spacer"></div>
                    <div className="col-lg-8 col-md-8 col-sm-8 ui-block shadow-effect">
                        <div>
                            <Bulten/>
                        </div>

                    </div>
                    <div className="col-lg-1 col-md-1 col-sm-1"></div>
                    <div className="col-lg-2 col-md-2 col-sm-2 ui-block shadow-effect">
                            <Kupon/>
                    </div>
                    <div className="col-lg-1 col-md-1 col-sm-1"></div>
                </div>
            </div>
        )
    }
}

export default Iddaa;