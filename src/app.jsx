import React, { useState, useEffect } from "react";
import Users from "./components/users";
import API from "./api";

const App = () => {
    const [users, setUsers] = useState();

    useEffect(() => {
        API.users.fetchAll().then((data) => setUsers(data));
    }, []);
    return <>{users && <Users users={users} />}</>;
};

export default App;
