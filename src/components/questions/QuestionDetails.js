import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect, firebaseConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import {Redirect} from 'react-router-dom'
import moment from 'moment'

function QuestionDetails(props) {
    const { auth, question } = props;
        if (!auth.uid) return <Redirect to='/signin' />
    if (question) {
        return (<div className="container section question-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">{question.title}</span>
                    <p> {question.content} </p>
                    <span className="center"><i className="right tiny material-icons">thumb_up thumb_down comment</i></span>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>Posted by {question.authorFirstName} {question.authorLastName}</div>
                    <div>{moment(question.createdAt.toDate().toString()).calendar()}</div>
                </div>
            </div>    
            <div className="col s10 section">
                <div className="section">
                <div className="card z-depth-0">
                            <div className="card-content">
                                <span className="card-title">
                                    Edit info
                                    </span>
                                    <form className="white">
                                        <div className="input-field">
                                            <label htmlFor="answer">Answer</label>
                                            <input type="text" id="answer"/>
                                        </div>
                                    
                                    <div className="input-field">
                                        <button className="btn orange lighten-1 z-depth-0">Submit answer</button>
                                    </div>
                                    </form>
                            </div>
                        </div>
                </div>
            </div>
        </div>)
    } else {
        return (
            <div className="container center">
                <p>Question loading...</p>
            </div>
        )
    }
    
}

const mapStateToProps = (state, ownProps) => {
    //console.log(state);
    const id=ownProps.match.params.id;
    const questions = state.firestore.data.questions;
    const question = questions ? questions[id] : null
    return {
        auth: state.firebase.auth,
        question: question
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection: 'questions'}
    ])
    //(() => ['questions'])
)(QuestionDetails)
