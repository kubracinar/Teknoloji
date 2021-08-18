import React, {Component} from 'react';
import Select from "react-select";

class Kupon extends Component {


    render() {

        return (
            <div>
                <div className="ui-block-title">
                    <h6 className="title">
                        Kuponum
                    </h6>
                    <div><span>T.oran:1.66</span></div></div>

                <ul className="widget w-friend-pages-added notification-list ">
                <li className="inline-items">
                    <div></div>
                    <div className="notification-item">Changdu Bett- Shenyang Ct </div>
                    <div className="notification-friend">6 Ağustos Cuma 11:30</div>
                    <div className="notification-item">Maç sonucu:1</div>

                </li>
                    <li className="inline-items">
                        <div></div>
                        <div className="notification-item">Wuhan Zall-Tianjin Jinmen </div>
                        <div className="notification-friend">6 Ağustos Cuma 11:30</div>
                        <div className="notification-item">Maç sonucu:1</div>

                    </li>
                    <li className="inline-items">
                        <button className="btn btn-danger btn-md-2 text-wrap">MBS kuralı nedeniyle en az 1 maç daha eklemelisiniz.</button>

                    </li>
                    <li className="notification-footer inline-items" style={{padding:"12px"}}>
                        <div className="notification-footer-item" >Sistem </div><div className="notification-footer-item">Kupon Adedi </div><div className="notification-footer-item">Misli </div>
                    <fieldset className="form-group notification-footer-select">
                        <Select />
                    </fieldset>
                    <fieldset className="form-group notification-footer-select">
                        <Select />
                    </fieldset>
                    <fieldset className="form-group notification-footer-select">
                        <Select />
                    </fieldset></li>
                    <li className=" inline-items">
                        <div></div>
                        <div className="notification-item">Kolon:</div>


                    </li>
                    <li className="notification-footer inline-items">
                        <div></div>
                        <div className="notification-item">Kupon Bedeli:</div>


                    </li>
                    <li className="notification-footer inline-items">
                        <div></div>
                        <div className="notification-item">Toplam Oran:</div>


                    </li>
                    <li className="notification-footer inline-items">
                        <div></div>
                        <div className="notification-item">Maksimum Kazanç:</div>


                    </li>
                    <li className="notification-footer inline-items">
                        <button className="btn btn-danger">Hemen Oyna</button>
                    </li>
                    <li className="notification-footer inline-items">
                        <button className="btn btn-danger">Kısa Kod İle Oyna</button>
                    </li>

                </ul>
            </div>
        )
    }
}

export default Kupon;