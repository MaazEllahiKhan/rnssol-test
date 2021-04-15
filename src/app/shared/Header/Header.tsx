import axios from "axios";
import react from "react"
import { Dropdown } from "react-bootstrap";
import logo from './../../assets/logo.png'
import { useAlert } from "react-alert";
import { useHistory } from 'react-router-dom';
import './Header.css'

const Header = () => {
    const alert = useAlert();
    const history = useHistory();


    const logOutClicked = async (e: any) => {
        e.preventDefault()
        try {
            const response = await axios({
                method: 'delete',
                url: 'https://spot.stable.trade/api/users/accessToken',
                headers: { 'Content-Type': 'text/plain' },
            });
            console.log('response', response);
            if (response.status === 200) {
                localStorage.clear()
                alert.success('Logout successfully')
                history.push("/dashboard");
            }
        } catch (e: any) {
            console.log('e', e.response.data.message);
            if (e.response && e.response.data.message)
                console.log(e.response.data.message)

        }
    }


    return (
        <div className="d-flex col-12 border justify-content-between align-items-center" style={{ height: '55px' }}>
            <div className="row w-100">
                <div className="col-2">
                    <img src={logo} alt="logo" style={{ height: '47px' }} />
                </div>
                <div className="d-flex col-7 justify-content-between align-items-center">
                    <a href="">Investment</a>
                    <a href="">Trade</a>
                    <a href="">Wallet</a>
                    <a href="">History</a>
                    <a href="">Support</a>
                </div>
                <div className="d-flex col-3 justify-content-between align-items-center">
                    <Dropdown>
                        <Dropdown.Toggle  id="dropdown-basic">
                            <img src="https://cdn.onlinewebfonts.com/svg/img_139247.png" className="profile-image" alt="profile"/>
                            Profile
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="" onClick={logOutClicked}>SignOut</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </div>
        </div>
    )
}

export default Header;