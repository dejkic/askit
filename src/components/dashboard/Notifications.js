import React, {Component} from 'react'
import { connect } from 'react-redux'
import { firestoreConnect, firebaseConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import {Redirect} from 'react-router-dom'

class Notification extends Component  {
    render() {
    const { auth, profile } = this.props;
        if (!auth.uid) return <Redirect to='/signin' />
    if (profile) {
        return (
        <div className="row container">
            <div className="col s12">
                <div className="section">
                    <div className="card z-depth:0">
                        <div className="card-content grey-text text-darken-3">
                            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur consectetur felis ac urna varius, a rhoncus nibh imperdiet. Duis efficitur mauris sit amet condimentum consequat. </span>
                        </div>
                    </div> 
                    <div className="card z-depth:0">
                        <div className="card-content grey-text text-darken-3">
                            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur consectetur felis ac urna varius, a rhoncus nibh imperdiet. Duis efficitur mauris sit amet condimentum consequat. </span>
                        </div>
                    </div> 
                    <div className="card z-depth:0">
                        <div className="card-content grey-text text-darken-3">
                            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur consectetur felis ac urna varius, a rhoncus nibh imperdiet. Duis efficitur mauris sit amet condimentum consequat. </span>
                        </div>
                    </div> 
                    <div className="card z-depth:0">
                        <div className="card-content grey-text text-darken-3">
                            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur consectetur felis ac urna varius, a rhoncus nibh imperdiet. Duis efficitur mauris sit amet condimentum consequat. </span>
                        </div>
                    </div> 
                    <div className="card z-depth:0">
                        <div className="card-content grey-text text-darken-3">
                            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur consectetur felis ac urna varius, a rhoncus nibh imperdiet. Duis efficitur mauris sit amet condimentum consequat. </span>
                        </div>
                    </div> 
                    <div className="card z-depth:0">
                        <div className="card-content grey-text text-darken-3">
                            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur consectetur felis ac urna varius, a rhoncus nibh imperdiet. Duis efficitur mauris sit amet condimentum consequat. </span>
                        </div>
                    </div> 
                    <div className="card z-depth:0">
                        <div className="card-content grey-text text-darken-3">
                            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur consectetur felis ac urna varius, a rhoncus nibh imperdiet. Duis efficitur mauris sit amet condimentum consequat. </span>
                        </div>
                    </div> 
                    <div className="card z-depth:0">
                        <div className="card-content grey-text text-darken-3">
                            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur consectetur felis ac urna varius, a rhoncus nibh imperdiet. Duis efficitur mauris sit amet condimentum consequat. </span>
                        </div>
                    </div>                
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
)(Notification)