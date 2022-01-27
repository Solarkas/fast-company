import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import api from "../../../api";
import UserEditForm from "../../ui/userEditForm";
import UserRender from "./userRender";

const UserPage = ({ match }) => {
    const { type } = useParams();
    const [users, setUsers] = useState();
    const [qualities, setQualities] = useState({});
    const [userList, setUserList] = useState();
    const [pageChange, setPageChange] = useState(
        type === "edit" ? type : "user"
    );
    const toggleFormType = () => {
        setPageChange((prevState) => (prevState === "edit" ? "user" : "edit"));
    };

    useEffect(() => {
        api.users
            .getById(`${match.params.userId}`)
            .then((data) => setUsers(data));
        api.qualities.fetchAll().then((data) => setQualities(data));
        api.users.fetchAll().then((data) => setUserList(data));
    }, []);

    if ((users !== undefined) & (userList !== undefined)) {
        return (
            <div>
                {pageChange === "user" ? (
                    <UserRender
                        user={users}
                        users={userList}
                        toggleFormType={toggleFormType}
                    />
                ) : (
                    <div className="col-md-6 offset-md-3 shadow p-4">
                        <h3 className="mb-4">Edit your profile</h3>
                        <UserEditForm user={users} qualities={qualities} />
                    </div>
                )}
            </div>
        );
    } else {
        return "Loading.......";
    }
};
export default UserPage;
