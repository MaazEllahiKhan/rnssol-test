import react from "react"
import GlobalContext from "../../context/GlobalContext"
import { Route, Switch } from "react-router-dom";
import Dashboard from "../../pages/Dashboard/Dashboard";
import Header from "./../../shared/Header/Header"
import AnimationPage from "../../pages/Animation/AnimationPage";

const DefaultLayout = (props: any) => {
    return (
        <GlobalContext>
            {/* <Switch>
                <Route exact path="/"  component={Dashboard} />
            </Switch> */}
            <div className="vh-100 flex-fill">
                <div className="row">
                    <Header />
                    <Switch>
                        <Route exact path="/dashboard" component={Dashboard} />
                        <Route path="/anime" component={AnimationPage} />


                    </Switch>
                </div>
            </div>

        </GlobalContext>
    )
}

export default DefaultLayout;