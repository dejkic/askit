import React from 'react'
const TopUsers = (props) => {
    return (
        <div className="section">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">
                        <i className="material-icons">people</i>
                    </span>
                    <ul className="topUsers">
                        <li>User</li>
                        <li>User</li>
                        <li>User</li>
                        <li>User</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default TopUsers