import React, { Component } from 'react'
import { Link } from "react-router-dom";
import './styles/BadgesList.css'
import Gravatar from "./Gravatar";
import confLogo from "../images/logo.png";
import ParticleComponent from "./ParticleComponent";

// class BadgesListItem extends Component {
//     render() {
//       return (
//         <div className="BadgesListItem">
//           <Gravatar 
//             className="BadgesListItem__avatar"
//             email={this.props.badge.email}
//           />          
//           <div>
//             <strong>
//               {this.props.badge.firstName} {this.props.badge.lastName}
//             </strong>
//             <br />@{this.props.badge.twitter}
//             <br />
//             {this.props.badge.jobTitle}
//           </div>
//         </div>
//       );
//    }
// }

class BadgesListItem extends Component {
    render() {
      return (
        <div className="badge">
            <ParticleComponent />
            <div className="badge_header">
                <img src={confLogo} alt="Logo de la conferencia" />
                <div className="hole"></div>
                <span>#06521</span>
            </div>
            <div className="badge_container">
                <div className="layer"></div>
                <div className="layer"></div>
                <div className="layer"></div>
                <div className="layer"></div>
                <div className="layer"></div>
                <div className="layer"></div>
                <div className="layer"></div>
                <div className="badge_section-name">
                    <div className="image-back">
                    <Gravatar className="badge_avatar" email={this.props.badge.email} alt="Avatar" />
                    </div>
                    <h1>{this.props.badge.firstName}<br/>{this.props.badge.lastName}</h1>
                </div>
            <div className="badge_section-info">
                <h3>{this.props.badge.jobTitle}</h3>
                <span>@{this.props.badge.twitter}</span>
            </div>
            <div className="badge_footer">
                #Techconf
            </div>
            </div>
        </div>
      );
   }
}

function useSearchBadges(badges) {
    const [query, setQuery] = React.useState("");
    const [filteredBadges, setFilteredBadges] = React.useState(badges);

    React.useMemo(()=>{
        const result = badges.filter( badge => {
            return `${badge.firstName} ${badge.lastName}`
                .toLowerCase()
                .includes(query.toLowerCase());
        });

        setFilteredBadges(result);
    },[badges, query]);
    return {query, setQuery, filteredBadges};
}

function BadgesList(props) { 
    const badges = props.badges;
    const {query, setQuery, filteredBadges} = useSearchBadges(badges);

    if(filteredBadges.length === 0){
        return (
            <div>
                <div className="form-group">
                    <label>Filter Badges</label>
                    <input
                     type="text"
                     className="form-control"
                     value={query}
                     onChange={ e => {
                         setQuery(e.target.value);
                     }}
                    />
                </div>
                <h3>No badges were found :-(</h3>
                <Link className="btn btn-primary" to="/badges/new" >
                    Create new badge
                </Link>
            </div>
        );
    }

    return (
        <div className="BadgesList">
            <div className="form-group">
                <label>Filter Badges</label>
                <input 
                 type="text"
                 className="form-control"
                 value={query}
                 onChange= {e => {
                     setQuery(e.target.value);
                 }}
                />
            </div>

            <div className="BadgesList__list">
                <ul className="BadgesList__each">
                    {filteredBadges.map( badge => {
                        return(
                            <li key={badge.id}>
                                <Link
                                    className="text-reset text-decoration-none"
                                    to={`/badges/${badge.id}`}
                                >
                                    <BadgesListItem badge={badge} />
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </div>    
        </div>
    );
}
export default BadgesList