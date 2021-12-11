import React, { useState } from "react";

import "bootstrap/dist/css/bootstrap.css";
import "../index.css";
import renderData from "./renderData";
import handleTagChange from "./userDelete";
import handleBookRender from "./bookmarkRender";
import handleBookTap from "./handleBookmark";
import Table from "./table";
import PropTypes from "prop-types";

const Users = (props) => {
    const [users, setUsers] = useState(props.usersList);
    const count = users.length;

    const renderUsers = (userCrop, handlePageChange) => {
        return userCrop.map((elementUserCrop) => {
            return (
                <tr key={elementUserCrop._id}>
                    <th>{elementUserCrop.name}</th>
                    <td>
                        {renderData(
                            elementUserCrop,
                            setUsers,
                            handlePageChange
                        )}
                    </td>
                    <td>{elementUserCrop.profession.name}</td>
                    <td>{elementUserCrop.completedMeetings}</td>
                    <td>{elementUserCrop.rate}</td>
                    <td>
                        <button
                            type="button"
                            id="btn"
                            className="btn btn-danger"
                            onClick={() =>
                                handleBookTap(elementUserCrop, setUsers)
                            }
                        >
                            {handleBookRender(elementUserCrop)}
                        </button>
                    </td>
                    <td>
                        <button
                            type="button"
                            className="btn btn-danger"
                            onClick={() =>
                                handleTagChange(elementUserCrop, setUsers)
                            }
                        >
                            delete <i className="bi bi-emoji-angry-fill"></i>
                        </button>
                    </td>
                </tr>
            );
        });
    };

    return users.length !== 0 ? (
        <Table
            count={count}
            renderUsers={renderUsers}
            setUsers={setUsers}
            users={users}
        />
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
