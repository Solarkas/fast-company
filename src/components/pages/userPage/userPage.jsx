import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import api from "../../../api";
import QualitiesList from "../../ui/quailities/qualitiesList";
import UserEditForm from "../../ui/userEditForm";

const UserPage = ({ match }) => {
    const { type } = useParams();
    const [users, setUsers] = useState();
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
    }, []);

    if (users !== undefined) {
        return (
            <div className="col-md-6 offset-md-3 shadow p-4">
                {pageChange === "user" ? (
                    <div>
                        <h1>{users.name}</h1>
                        <h6>
                            Профессия: <strong>{users.profession.name}</strong>
                        </h6>
                        <h6>
                            Качества:
                            <QualitiesList qualities={users.qualities} />
                        </h6>
                        <h6>
                            Сколько раз встречался:
                            <strong>{users.completedMeetings}</strong>
                        </h6>
                        <h6>
                            Рейтинг: <strong>{users.rate}</strong>
                        </h6>

                        <button onClick={toggleFormType}>Изменить</button>
                    </div>
                ) : (
                    <>
                        <h3 className="mb-4">Edit your profile</h3>
                        <UserEditForm user={users} />
                    </>
                )}
            </div>
        );
    } else {
        return "Loading.......";
    }
};
export default UserPage;
