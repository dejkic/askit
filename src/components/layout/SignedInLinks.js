import React, { Profiler } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux' 
import { signOut } from '../../store/actions/authActions'

const SignedInLinks = (props) =>{
    return (
        <ul className="right hide-on-med-and-down">
            <li>
                <NavLink to='/'>Home</NavLink>
            </li>
            <li>
                <NavLink to='/'>My Questions</NavLink>
            </li>
            <li>
                <a onClick={props.signOut}>Log Out</a>
            </li>
            <li>
                <NavLink to="/notifications">
                    Notifications
                </NavLink>
            </li>
            <li>
                <NavLink to='/profiledetails' className="btn btn-floating orange lighten-">
                    {props.profile.initials}
                </NavLink>
            </li>
        </ul>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}

export default connect(null, mapDispatchToProps)(SignedInLinks )