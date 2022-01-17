import React, { useState } from "react";

import "bootstrap/dist/css/bootstrap.css";
import "../../../index.css";
import Table from "../../common/table/table";

const Users = (props) => {
    const [list, setUsers] = useState(props);
    const count = list.users.length;

    const handleToggleBookMark = (id, setUser) =>
        list.users.map((element) => {
            if (element.bookmark === false && element._id === id) {
                return setUser((el) => {
                    let newUserList = {};
                    const a = [...el.users];
                    const users = {
                        users: a.map((e) => {
                            element.bookmark = true;
                            return e;
                        })
                    };
                    return (newUserList = { ...newUserList, ...users });
                });
            } else if (element.bookmark === true && element._id === id) {
                return setUser((el) => {
                    let newUserList = {};
                    const a = [...el.users];
                    const users = {
                        users: a.map((e) => {
                            element.bookmark = false;
                            return e;
                        })
                    };
                    return (newUserList = { ...newUserList, ...users });
                });
            } else {
                return 0;
            }
        });

    return list.users.length !== 0 ? (
        <Table
            count={count}
            setUsers={setUsers}
            users={list.users}
            onToggleBookMark={handleToggleBookMark}
        />
    ) : (
        <button type="button" className="btn btn-danger">
            Никто с тобой не тусанет
        </button>
    );
};

export default Users;
