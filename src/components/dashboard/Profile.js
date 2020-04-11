import React, {Component} from 'react'
import { connect } from 'react-redux'
import { firestoreConnect, firebaseConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import {Redirect} from 'react-router-dom'

import ChangePassword from '../auth/ChangePassword'

class Profile extends Component  {
    render() {
    const { auth, profile } = this.props;
        if (!auth.uid) return <Redirect to='/signin' />
    if (profile) {
        return (
        <div className="container">
                <div className="col s12 section">
                     <div className="section">
                        <div className="card z-depth-0">
                            <div className="card-content">
                                <span className="card-title">
                                    Info
                                    </span>
                                    <p>First name:<b> {profile.profile.firstName}</b></p>
                                    <p>Last name:<b> {profile.profile.lastName}</b></p>
                                    <p>E-mail: <b> {profile.auth.email}</b></p>
                            </div>
                        </div>
                    </div>
                   
                </div>
                <div className="col s12 section">
                <div className="section">
                        <div className="card z-depth-0">
                            <div className="card-content">
                                <span className="card-title">
                                    Edit info
                                    </span>
                                    <form className="white">
                                        <div className="input-field">
                                            <label htmlFor="firstName">First name</label>
                                            <input type="text" id="firstName"/>
                                        </div>
                                    
                                    <div className="input-field">
                                        <label htmlFor="lastName">Last name</label>
                                        <input type="text" id="lastName"/>
                                    </div>

                                    <div className="input-field">
                                        <label htmlFor="email">Email</label>
                                        <input type="email" id="email" />
                                    </div>

                                    <div className="input-field">
                                        <button className="btn orange lighten-1 z-depth-0">Save</button>
                                    </div>
                                    </form>
                            </div>
                        </div>
                    </div>

                    <div className="section">
                        <ChangePassword />
                        
                    </div>
                </div>
           
        </div>)
    } else {
        return (
            <div className="container center">
                <p>Page loading...</p>
            </div>
        )
    }
}
}

const mapStateToProps = (state) => {
    //console.log(state);
    const profile = state.firebase
    return {
        auth: state.firebase.auth,
        profile: profile
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection: 'users'}
    ])
    //(() => ['questions'])
)(Profile)
