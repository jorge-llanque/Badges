import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import '.././global.css'
import './styles/Badge.css';
import Gravatar from './Gravatar';
import confLogo from "../images/logo.png";


class Badge extends React.Component {
    render(){   
        return (
            <div className="badge">
                <div className="badge_header">
                    <img src={confLogo} alt="Logo de la conferencia" />
                    <div className="hole"></div>
                    <span>#06521</span>
                </div>
                <div className="badge_container">
                    <div class="layer"></div>
                    <div class="layer"></div>
                    <div class="layer"></div>
                    <div class="layer"></div>
                    <div class="layer"></div>
                    <div class="layer"></div>
                    <div class="layer"></div>
                    <div className="badge_section-name">
                        <div className="image-back">
                        <Gravatar className="badge_avatar" email={this.props.email} alt="Avatar" />
                        </div>
                        <h1>{this.props.firstName}<br/>{this.props.lastName}</h1>
                    </div>
                <div className="badge_section-info">
                    <h3>{this.props.jobTitle}</h3>
                    <span>@{this.props.twitter}</span>
                </div>
                <div className="badge_footer">
                    #Techconf
                </div>
                </div>
            </div>
        );
    }
}

export default Badge;