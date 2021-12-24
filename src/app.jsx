import React, { useState, useEffect } from "react";
// import Users from "./components/users";
import API from "./api";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Accaunt from "./components/pages/accaunt";
import Home from "./components/pages/home";
import Login from "./components/pages/login";
import NavBar from "./components/pages/navBar";
import UserPage from "./components/pages/userPage";

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
                                <Route path="/login" component={Login} />

                                <Route
                                    path="/users"
                                    exact
                                    render={() => <Accaunt users={users} />}
                                />
                                <Route
                                    path="/users/:userId?"
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
