import React, { useState, useEffect } from "react";
// import Users from "./components/users";
import API from "./api";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Accaunt from "./components/layouts/accaunt";
import Home from "./components/layouts/home";
import Login from "./components/layouts/login";
import NavBar from "./components/ui/navBar";
import UserPage from "./components/pages/userPage/userPage";

const App = () => {
    const [users, setUsers] = useState();

    useEffect(() => {
        API.users.fetchAll().then((data) => setUsers(data));
    }, []);

    if (users !== undefined) {
        return (
            <>
                {users && (
                    <div>
                        <BrowserRouter>
                            <NavBar />
                            <Switch>
                                <Route path="/login/:type?" component={Login} />

                                <Route
                                    path="/users"
                                    exact
                                    render={() => <Accaunt users={users} />}
                                />
                                <Route
                                    path="/users/:userId?"
                                    exact
                                    render={(props) => <UserPage {...props} />}
                                />
                                <Route path="/" exact component={Home} />
                            </Switch>
                        </BrowserRouter>
                    </div>
                )}
            </>
        );
    } else {
        return "Loading....";
    }
};

export default App;
