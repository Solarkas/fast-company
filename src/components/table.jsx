import people from "./peopleCount";
import "bootstrap-icons/font/bootstrap-icons.css";
import {
    completedMeetingsSort,
    completedMeetingsSortDown,
    nameSortDown,
    nameSortUp,
    ratingSortDown,
    ratingSortUp
} from "./sort";
import Pagination from "./pagination";
import { paginate } from "../api/utils/paginate";
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import GroupList from "./groupList";
import renderUsers from "./renderUsers";
import api from "../api";

const Table = (props) => {
    const pageSize = 4;
    const [currentPage, setCurrentPage] = useState(1);
    const [professions, setProfession] = useState();
    const [selectedProf, setSelectedProf] = useState();

    useEffect(() => {
        api.professions.fetchAll().then((data) => setProfession(data));
    }, []);

    const handleProfessionSelect = (item) => {
        setSelectedProf(item);
    };

    const handlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex);
    };

    const onSort = (item) => {
        console.log(item);
    };
    const filteredUsers = selectedProf
        ? props.users.filter(
              (user) => user.profession.name === selectedProf.name
          )
        : props.users;
    const count = filteredUsers.length;
    const userCrop = paginate(filteredUsers, currentPage, pageSize);

    useEffect(() => {
        setCurrentPage(1);
    }, [selectedProf]);

    const clearFilter = () => {
        setSelectedProf();
    };

    return (
        <div className="d-flex">
            <div className="d-flex flex-column flex-shrink-0 p-3">
                {professions && (
                    <>
                        <GroupList
                            selectedItem={selectedProf}
                            items={professions}
                            onItemSelect={handleProfessionSelect}
                        />
                        <button
                            className="btn btn-secondary mt-2"
                            onClick={clearFilter}
                        >
                            Очистить
                        </button>
                    </>
                )}
            </div>
            <div className="d-flex flex-column">
                <button
                    type="button"
                    className="btn btn-primary"
                    style={{ width: 400 }}
                >
                    {count} {people(count)}
                </button>
                <table className="table">
                    <thead>
                        <tr>
                            <th onClick={() => onSort("name")} scope="col">
                                Имя
                                <p
                                    type="button"
                                    className="btn btn-danger"
                                    onClick={() => nameSortUp(props.setUsers)}
                                >
                                    <i className="bi bi-caret-up-fill"></i>
                                </p>
                                <p
                                    type="button"
                                    className="btn btn-danger"
                                    onClick={() => nameSortDown(props.setUsers)}
                                >
                                    <i className="bi bi-caret-down-fill"></i>
                                </p>
                            </th>
                            <th scope="col">Качества</th>
                            <th
                                onClick={() => onSort("profession.name")}
                                scope="col"
                            >
                                Проффессия
                            </th>
                            <th
                                onClick={() => onSort("completedMeetings")}
                                scope="col"
                            >
                                Встретился раз
                                <p
                                    type="button"
                                    className="btn btn-danger"
                                    onClick={() =>
                                        completedMeetingsSort(props.setUsers)
                                    }
                                >
                                    <i className="bi bi-caret-up-fill"></i>
                                </p>
                                <p
                                    type="button"
                                    className="btn btn-danger"
                                    onClick={() =>
                                        completedMeetingsSortDown(
                                            props.setUsers
                                        )
                                    }
                                >
                                    <i className="bi bi-caret-down-fill"></i>
                                </p>
                            </th>
                            <th onClick={() => onSort("rate")} scope="col">
                                <p>Оценка</p>
                                <p
                                    type="button"
                                    className="btn btn-danger"
                                    onClick={() => ratingSortUp(props.setUsers)}
                                >
                                    <i className="bi bi-caret-up-fill"></i>
                                </p>
                                <p
                                    type="button"
                                    className="btn btn-danger"
                                    onClick={() =>
                                        ratingSortDown(props.setUsers)
                                    }
                                >
                                    <i className="bi bi-caret-down-fill"></i>
                                </p>
                            </th>
                            <th onClick={() => onSort("bookmark")} scope="col">
                                Избранное
                            </th>
                            <th />
                        </tr>
                    </thead>

                    <tbody>{renderUsers(userCrop, props.setUsers)}</tbody>
                </table>

                <Pagination
                    itemsCount={count}
                    pageSize={pageSize}
                    currentPage={currentPage}
                    onPageChange={handlePageChange}
                />
            </div>
        </div>
    );
};
GroupList.defaultProps = {
    valueProperty: "_id",
    contentProperty: "name"
};

Table.propTypes = {
    users: PropTypes.array,
    count: PropTypes.number,
    setUsers: PropTypes.func,
    renderUsers: PropTypes.func
};

export default Table;
