import react, { useState } from "react"
import './SignUp.css'
import { useAlert } from "react-alert";
import { useHistory } from 'react-router-dom';


const axios = require('axios').default;

const SignUp = () => {
    const history = useHistory();
    const alert = useAlert();
    const [state, setState] = useState({

    })

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        console.log('handleSubmit', e.target.email.value)
        if (e.target.password.value !== e.target.confirmPassword.value) {
            alert.error('password and confirm password are not same')
            return
        }
            
        let pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
        if (!pattern.test(e.target.password.value)) {
            alert.error('Password must be at least 8 characters with uppercase letters,lowercase letters, numbers and special char')
            return
        }
        try {
            const response = await axios({
                method: 'post',
                url: 'https://spot.stable.trade/api/users',
                headers: { 'Content-Type': 'text/plain' },
                data: {
                    "Email": e.target.email.value,
                    "Password": e.target.password.value,
                    "ConfirmPassword": e.target.confirmPassword.value,
                    "IP": "192.161.1.1",
                    "Device": "device",
                    "Location": "location"
                }
            });
            console.log('response', response);
            if (response.status) {
                alert.success('User created')
            }
        } catch (e: any) {
            console.log('e', e.response.data.message);
            if (e.response && e.response.data.message)
                alert.error(e.response.data.message)

        }

    }

    return (
        <div className="vh-100 flex-fill">
            <div className="row vh-100 justify-content-center align-items-center">
                <div className="col-12 col-md-6 p-4 border">
                    <h3 className="text-center mb-3">SignUp Page</h3>
                    <form onSubmit={handleSubmit} className="d-flex row">
                        <div className="form-group col-6">
                            <label >Email address</label>
                            <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" required />
                            {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
                        </div>
                        <div className="form-group col-6">
                            <label >Password</label>
                            <input type="password" className="form-control" id="password" placeholder="Password" required />
                        </div>
                        <div className="form-group col-6">
                            <label >Confirm Password</label>
                            <input type="password" className="form-control" id="confirmPassword" placeholder="Confirm Password" required />
                        </div>
                        <div className="d-flex col-12 justify-content-around">
                            <button type="button"  onClick={(e) => {
                                history.push("/login");
                            }} className="btn btn-secondary ">Redirect to LogIn</button>
                            <button type="submit" value="Submit" className="btn btn-primary">Submit</button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default SignUp;