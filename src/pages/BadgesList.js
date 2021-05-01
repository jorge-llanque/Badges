import React, { Component } from 'react'
import { Link } from "react-router-dom";
import './styles/BadgesList.css'

class BadgesListItem extends React.Component {
    render() {
      return (
        <div className="BadgesListItem">
          
            className="BadgesListItem__avatar"
            email={this.props.badge.email}
          
  
          <div>
            <strong>
              {this.props.badge.firstName} {this.props.badge.lastName}
            </strong>
            <br />@{this.props.badge.twitter}
            <br />
            {this.props.badge.jobTitle}
          </div>
        </div>
      );
   }
}

class BadgesList extends Component { 
    render() {
        if(this.props.badges.length === 0){
            return (
                <div>
                    <h3>No badges were found :-(</h3>
                </div>
            )
        }
        return (
            <ul className="list-unstyled">
                {this.props.badges.map( badge => {
                    return(
                        <div className="card-badges">
                            <li key={badge.id}>
                                <Link
                                    className="text-reset text-decoration-none"
                                    to={`/badges/${badge.id}/id`}
                                >
                                    <BadgesListItem badge={badge} />
                                </Link>
                                    <p>{badge.firstName} {badge.lastName}</p>
                                    <p>{badge.twitter}</p>
                                    <p>{badge.jobTitle}</p>
                            </li>
                        </div>
                    )
                })}
            </ul>
        )
    }
}
export default BadgesList