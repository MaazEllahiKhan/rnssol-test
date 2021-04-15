import react, {useContext} from "react"
import "./LogIn.css"
import { useAlert } from "react-alert";
import { useHistory } from 'react-router-dom';
import GlobalContext, { CreateGlobalContext } from "../../context/GlobalContext";
const axios = require('axios').default;


const LogIn = () => {
    const history = useHistory();
    const alert = useAlert();
    const {
        setToken
    } = useContext(CreateGlobalContext)

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        console.log('handleSubmit', e.target.email.value)

        try {
            const response = await axios({
                method: 'post',
                url: 'https://spot.stable.trade/api/users/accessToken ',
                headers: { 'Content-Type': 'text/plain' },
                data: {
                    "Email": e.target.email.value,
                    "Password": e.target.password.value,
                    "IP": "192.161.1.1",
                    "Device": "device",
                    "Location": "location"
                }
            });
            console.log('response', response);
            if (response.status === 200) {
                alert.success('Welcome')
                setToken(response.data.Token)
                localStorage.setItem('data', JSON.stringify(response.data))
                history.push("/dashboard");
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
                    <h3 className="text-center mb-3">login Page</h3>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label >Email address</label>
                            <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" required />
                            {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
                        </div>
                        <div className="form-group">
                            <label >Password</label>
                            <input type="password" className="form-control" id="password" placeholder="Password" required />
                        </div>
                        <div className="d-flex justify-content-around">
                           
                            <button type="button" onClick={(e) => {
                                history.push("/signup");
                            }} className="btn btn-secondary ">Redirect to SignUp</button>
                             <button type="submit" value="Submit" className="btn btn-primary">Submit</button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default LogIn;