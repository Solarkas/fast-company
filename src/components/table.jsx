import people from "./renderUsers";
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
import React, { useState } from "react";
import PropTypes from "prop-types";

const Table = (props) => {
    const pageSize = 4;
    const [currentPage, setCurrentPage] = useState(1);

    const handlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex);
    };

    const userCrop = paginate(props.users, currentPage, pageSize);
    return (
        <div>
            <button type="button" className="btn btn-primary">
                {props.count - 1} {people(props.count)}
            </button>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">
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
                        <th scope="col">Проффессия</th>
                        <th scope="col">
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
                                    completedMeetingsSortDown(props.setUsers)
                                }
                            >
                                <i className="bi bi-caret-down-fill"></i>
                            </p>
                        </th>
                        <th scope="col">
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
                                onClick={() => ratingSortDown(props.setUsers)}
                            >
                                <i className="bi bi-caret-down-fill"></i>
                            </p>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {props.renderUsers(
                        userCrop,
                        handlePageChange,
                        setCurrentPage
                    )}
                </tbody>
            </table>
            <Pagination
                itemsCount={props.count}
                pageSize={pageSize}
                currentPage={currentPage}
                onPageChange={handlePageChange}
            />
        </div>
    );
};
Table.propTypes = {
    users: PropTypes.array,
    count: PropTypes.number,
    setUsers: PropTypes.func,
    renderUsers: PropTypes.func
};

export default Table;
