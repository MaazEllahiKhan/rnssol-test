import React from "react";

type AppProps = {
    imageSrc: string,
    heading: string,
    description: string,
    buttonText: string
    actionClicked?: Function;
}

const CustomDashboardCard = (props: AppProps) => {
    return (
        <div className="col-12 d-flex align-items-center justify-content-between pt-2 pb-2 mb-2 bg-white">
            <div className="d-flex align-items-center">
                <img src={props.imageSrc}
                    // "https://img.favpng.com/15/22/4/google-logo-g-suite-google-search-png-favpng-VNHQa3p5904GQLs29dHfvWESX.jpg"
                    alt="google" style={{ width: '30px', height: '30px' }} className="mr-2" />
                <div>
                    <h6 className="m-0">{props.heading}</h6>
                    <small className="m-0 font-weight-light p-1">{props.description}</small>
                </div>
            </div>

            <button type="button" className="btn btn-success mt-2"
                style={{ backgroundColor: '#ffa90c', border: '#ffa90c' }}
                onClick={(e) => {
                    //  props.actionClicked()
                }}>{props.buttonText}</button>

        </div>
    );
}

export default CustomDashboardCard;