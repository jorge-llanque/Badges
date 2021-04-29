import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import '.././global.css'
import './styles/Badge.css';

import confLogo from "../images/logo.png";


class Badge extends React.Component {
    render(){   
        return (
            <div className="badge">
                <div className="badge_header">
                    <img src={confLogo} alt="Logo de la conferencia" />
                </div>

                <div className="badge_section-name">
                    <img
                        className="badge_avatar"
                    src=""
                    alt="Avatar"
                    />

                    <h1>
                        {this.props.firstName} <br /> {this.props.lastName}
                    </h1>
                </div>

                <div className="badge_section-info">
                    <h3>{this.props.jobTitle}</h3>
                    <div>@{this.props.twitter}</div>
                </div>

                <div className="badge_footer">#Techconf</div>
            </div>
        );
    }
}

export default Badge;