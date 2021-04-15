import React, { useContext, useEffect } from "react";
import './Dashboard.css'
import { deviceData } from './../../assets/raw-data/device-data'
import { loginData } from './../../assets/raw-data/login-record'
import TableComponent from "../../shared/Table/TableComponent";
import CustomDashboardCard from "../../shared/CustomDashboardCard/CustomDashboardCard";
import { CreateGlobalContext } from "../../context/GlobalContext";
import axios from "axios";

const Dashboard = () => {

    const {
        userData,
        setUserData
    } = useContext(CreateGlobalContext)

    useEffect(() => {
        getUserData()
    }, [])

    const getUserData = async () => {
        try {
            const response = await axios({
                method: 'get',
                url: 'https://spot.stable.trade/api/users/self',
                headers: { 'Content-Type': 'text/plain' },
            });
            console.log('response', response);
            if (response.status === 200) {
                setUserData(response.data)
                localStorage.setItem('userData', JSON.stringify(response.data))
            }
        } catch (e: any) {
            console.log('e', e.response.data.message);
            if (e.response && e.response.data.message)
                console.log(e.response.data.message)

        }
    }


    return (
        <div className="col-12">
            <div className="row" style={{ backgroundColor: "#ecf0f3" }}>
                <div className="col-7 d-flex " >
                    <div className="col-12 border">
                        <div className="row">
                            {/* analytics div start here */}
                            <div className="col-12 mb-2 border bg-white">
                                <div className="row justify-content-center">
                                    <div className="col-12 d-flex justify-content-between align-items-center mb-2 pt-2">
                                        <h3>Balance Details</h3>
                                        <button type="button" className="btn btn-light">Submit verification documents</button>
                                    </div>
                                    <div className="col-11 border"></div>
                                    <div className="col-12">
                                        <div className="row pt-4 pb-4">
                                            <div className="col-4 d-flex flex-column">
                                                <div className="d-flex flex-column mb-3">
                                                    <p className="mb-0">Account Balance:</p>
                                                    <p className="mb-0">10, 0000000000000 BTC</p>
                                                </div>
                                                <div className="d-flex flex-column">
                                                    <p className="mb-0">Account Balance:</p>
                                                    <p className="mb-0">10, 0000000000000 BTC</p>
                                                </div>
                                            </div>
                                            <div className="col-4">
                                                <div className="rotated-half-circle"></div>
                                            </div>
                                            <div className="col-4">
                                                <div className="d-flex flex-column mb-3">
                                                    <p className="mb-0 d-flex align-items-center"> <div className="small-label-square"></div> Account Balance:</p>
                                                    <p className="mb-0">10, 0000000000000 BTC</p>
                                                </div>
                                                <div className="d-flex flex-column">
                                                    <p className="mb-0 d-flex align-items-center"> <div className="small-label-square-white"></div>Account Balance:</p>
                                                    <p className="mb-0">10, 0000000000000 BTC</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* analytics div end here */}
                            {/* table div start here */}
                            <div className="col-12 border bg-white">
                                <div className="row justify-content-center">
                                    <div className="col-12 d-flex justify-content-between align-items-center pb-2 pt-2">
                                        <h5>Device management</h5>
                                        <small className="font-weight-light">These devices are currently allowed to access your account</small>
                                    </div>
                                    <div className="col-11 border"></div>
                                    <div className="col-12 mt-2">
                                        <TableComponent showActions={true} dataList={deviceData}
                                            headerList={['Device', 'location', 'Latest Time of Activity', 'IP Address']}
                                            onDeleteClicked={(id) => {
                                                console.log('id', id);
                                            }} />
                                    </div>
                                </div>
                            </div>
                            {/* table div end here */}
                        </div>
                    </div>
                </div>
                <div className="col-5 border">
                    <div className="row">
                        <div className="col-12 border ">
                            <div className="row">
                                <CustomDashboardCard
                                    imageSrc={"https://img.favpng.com/15/22/4/google-logo-g-suite-google-search-png-favpng-VNHQa3p5904GQLs29dHfvWESX.jpg"}
                                    heading={"Google authentication"}
                                    description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry"}
                                    buttonText={"Enable"}
                                />
                                <CustomDashboardCard
                                    imageSrc={"https://img.favpng.com/15/22/4/google-logo-g-suite-google-search-png-favpng-VNHQa3p5904GQLs29dHfvWESX.jpg"}
                                    heading={"Google authentication"}
                                    description={"nd typesetting industry. Lorem Ipsum has been the industry"}
                                    buttonText={"Enable"}
                                />
                            </div>
                        </div>
                        <div className="col-12 bg-white">
                            <div className="row justify-content-center">
                                <div className="col-12 d-flex justify-content-between align-items-center pb-2 pt-2">
                                    <h5>Login Record</h5>
                                </div>
                                <div className="col-11 border"></div>
                                <div className="col-12 mt-2">
                                    <TableComponent showActions={false} dataList={loginData}
                                        headerList={['location', 'Time', 'IP Address']} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div >
    )
}

export default Dashboard;