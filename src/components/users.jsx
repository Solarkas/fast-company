import React, { useState } from "react";

import "bootstrap/dist/css/bootstrap.css";
import "../index.css";
import Table from "./table";
import PropTypes from "prop-types";

const Users = (props) => {
    const [list, setUsers] = useState(props);

    const count = list.users.length;

    return list.users.length !== 0 ? (
        <Table count={count} setUsers={setUsers} users={list.users} />
    ) : (
        <button type="button" className="btn btn-danger">
            Никто с тобой не тусанет
        </button>
    );
};

Users.propTypes = {
    usersList: PropTypes.array
};

export default Users;
