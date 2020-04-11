import React, {Component} from 'react' 

export class ChangePassword extends Component {
    render() {
        return(
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">
                    Change password
                    </span>
                                    
                    <form className="white">
                        <div className="input-field">
                            <label htmlFor="oldPassword">Old password</label>
                            <input type="password" id="oldPassword"/>
                        </div>
                                    
                        <div className="input-field">
                            <label htmlFor="newPassword">New password</label>
                            <input type="password" id="newPassword"/>
                        </div>

                        <div className="input-field">
                            <label htmlFor="confirmPassword">Confirm new password</label>
                            <input type="password" id="confirmPassword" />
                        </div>

                        <div className="input-field">
                            <button className="btn orange lighten-1 z-depth-0">Save</button>
                        </div>
                    </form>
                </div>
            </div>)
    }
}

export default ChangePassword

