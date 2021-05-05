import React from "react";
import { Link } from "react-router-dom";

import './styles/BadgeDetails.css';
import ParticleComponent from "../components/ParticleComponent";
import Badge from "../components/Badge";
import DeleteBadgeModal from "../components/DeleteBadgeModal";

export default function BadgeDetails(props){
    const badge = props.badge;
    return (
        <div>
            <div className="BadgeDetails__hero">
                <ParticleComponent />    
            </div>

            <div className="BadgeDetails__container">
                <div className="BadgeDetails__badge">
                    <Badge
                     firstName={badge.firstName}
                     lastName={badge.lastName}
                     email={badge.email}
                     twitter={badge.twitter}
                     jobTitle={badge.jobTitle}
                    />
                </div>
                <div className="BadgeDetails__actions">
                    <div className="BadgeDetails__buttons">
                        <Link
                         className="btn btn-primary mb-4 button-edit"
                         to={`/badges/${badge.id}/edit`}
                        >
                        Edit
                        </Link>
                    </div>
                    <div className="BadgeDetails__buttons">
                        <button onClick={props.onOpenModal} className="btn button-delete">
                            DELETE
                        </button>
                        <DeleteBadgeModal 
                        isOpen={props.modalIsOpen} 
                        onClose={props.onCloseModal}
                        onDeleteBadge={props.onDeleteBadge}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

