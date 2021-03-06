import React from "react";
import "./styles/BadgeNew.css";
import ParticleComponent from "../components/ParticleComponent";
import Badge from "../components/Badge";
import BadgeForm from "../components/BadgeForm";
import PageLoading from "../components/PageLoading";
import api from "../api";

class BadgeNew extends React.Component {
    state = 
    {
        loading: false,
        error: null,
        form:{
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
            await api.badges.create(this.state.form);
            this.setState({loading: false});
            this.props.history.push('/badges');
        } catch (error) {
            this.setState({loading: false, error: error});
        }
    };


    render(){
        if(this.state.loading){
            return <PageLoading />;
        }
        return (
        <React.Fragment>
            <div className="BadgeNew__hero">
                <ParticleComponent />
            </div>
            <div className="BadgeNew__container">
                    <div className="BadgeNew__badge">
                        <Badge 
                            firstName={this.state.form.firstName || "First_name"}
                            lastName={this.state.form.lastName || "Last_name"}
                            twitter={this.state.form.twitter || "Twitter_nick"}
                            jobTitle={this.state.form.jobTitle || "Job_title"}
                            email={this.state.form.email || 'EMAIL'}
                            avatarUrl="https://www.gravatar.com/avatar/21594ed15d68ace3965642162f8d2e84?d=identicon"
                        />
                    </div>
                    <div className="BadgeNew__form">
                        <h1>New Attendant</h1>
                        <BadgeForm 
                          onChange={this.handleChange}
                          onSubmit={this.handleSubmit}
                          formValues={this.state.form}
                          error={this.state.error}
                        />
                    </div>
            </div>
        </React.Fragment>
        );
    }
}

export default BadgeNew;