import React from "react";

import "./styles/BadgeEdit.css";
import header from "../images/badge-header.svg";
import Badge from "../components/Badge";
import BadgeForm from "../components/BadgeForm";
import Api from "../api";

class BadgeEdit extends React.Component {
    state = {form:{
        firstName: "",
        lastName: "",
        email: "",
        jobTitle: "",
        twitter: "",
    }};

    handleChange = e => {
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value,
            },
        });
    };
    handleSubmit = async e => {
        e.preventDefault();
        this.setState({loading: true, error: null});

        try {
            await Api.badges.create(this.state.form);
            this.setState({loading: false});
        } catch (error) {
            this.setState({loading: false, error: error});
        }
    };


    render(){
        return (
        <React.Fragment>
            <div className="BadgeEdit__hero">
                <img className="BadgeEdit__hero-image img-fluid" src={header} alt="logo" />
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <Badge 
                            firstName={this.state.form.firstName || "First_name"}
                            lastName={this.state.form.lastName || "Last_name"}
                            jobTitle={this.state.form.jobTitle || "Job_title"}
                            twitter={this.state.form.twitter || "Twitter_nick"}
                            email={this.state.form.email || 'EMAIL'}
                            avatarUrl="https://www.gravatar.com/avatar/21594ed15d68ace3965642162f8d2e84?d=identicon"
                        />
                    </div>
                    <div className="col-6">
                        <BadgeForm 
                            onChange={this.handleChange}
                            onSubmit={this.handleSubmit}
                            formValues={this.state.form}
                        />
                    </div>
                </div>
            </div>
        </React.Fragment>
        )
    }
}

export default BadgeEdit