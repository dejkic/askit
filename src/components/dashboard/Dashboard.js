import React, {Component} from 'react'
import QuestionList from '../questions/QuestionList'
import { NavLink } from 'react-router-dom'
import TopUsers from './TopUsers'
import Trending from './Trending'
import { connect } from 'react-redux'
import {compose} from 'redux'
import { firestoreConnect } from 'react-redux-firebase';
import { Redirect } from 'react-router-dom'

class Dashboard extends Component {
    render() {
        //console.log(this.props)
        const { questions, auth } = this.props;
        if (!auth.uid) return <Redirect to='signin' />
        return (
            <div className="dashboard container">
                <div className="row section">
                    <div className="col s12 center">
                        <h4 className="grey-text text-darken-3"><i>"Because answers exist only to questions."</i></h4>
                        <NavLink to='/create' className="btn btn-floating orange lighten-1 z-depth-0">+</NavLink>
                    </div>
                </div>
                <div className="row">
                    <div className="col s6">
                        <TopUsers />
                    </div>
                    <div className="col s6">
                        <Trending />
                    </div>
                    <div className="col s12">
                        <QuestionList questions={questions}/>
                    </div>
                </div>
            </div>

            
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        questions: state.firestore.ordered.questions,
        auth: state.firebase.auth
    }
}

export default compose(
    firestoreConnect(() => ['questions']),
    connect(mapStateToProps)
    )(Dashboard)