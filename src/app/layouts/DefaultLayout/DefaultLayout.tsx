import react from "react"
import GlobalContext from "../../context/GlobalContext"
import { Route, Switch } from "react-router-dom";
import Dashboard from "../../pages/Dashboard/Dashboard";
import Header from "./../../shared/Header/Header"

const DefaultLayout = (props: any) => {
    return (
        <GlobalContext>
            {/* <Switch>
                <Route exact path="/"  component={Dashboard} />
            </Switch> */}
            <div className="vh-100 flex-fill">
                <div className="row">
                    {/* <div className="col-12 col-md-6 p-4 border"> */}
                        <Header />
                        <Dashboard />
                    {/* </div> */}
                </div>
            </div>

        </GlobalContext>
    )
}

export default DefaultLayout;