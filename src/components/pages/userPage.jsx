import React, { useState, useEffect } from "react";
import api from "../../api";
import QualitiesList from "../qualitiesList";

const UserPage = ({ match }) => {
    const [users, setUsers] = useState();

    useEffect(() => {
        api.users
            .getById(`${match.params.userId}`)
            .then((data) => setUsers(data));
    }, []);

    if (users !== undefined) {
        return (
            <div>
                <h1>{users.name}</h1>
                <h6>
                    Профессия: <strong>{users.profession.name}</strong>
                </h6>
                <h6>
                    Качества: <QualitiesList qualities={users.qualities} />
                </h6>
                <h6>
                    Сколько раз встречался:{" "}
                    <strong>{users.completedMeetings}</strong>
                </h6>
                <h6>
                    Рейтинг: <strong>{users.rate}</strong>
                </h6>

                <button onClick={() => (window.location.href = "/users")}>
                    Все пользователи
                </button>
            </div>
        );
    } else {
        return "Loading.......";
    }
};
export default UserPage;
