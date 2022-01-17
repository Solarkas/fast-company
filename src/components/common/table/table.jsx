import people from "../../ui/peopleCount";
import "bootstrap-icons/font/bootstrap-icons.css";
import Pagination from "../pagination";
import { paginate } from "../../../api/utils/paginate";
import React, { useState, useEffect } from "react";
import GroupList from "../groupList";

import api from "../../../api";
import _ from "lodash";
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";
import handleTagChange from "../userDelete";
import NewTable from "./newtable";
import BookMark from "../bookmark";
import QualitiesList from "../../ui/quailities/qualitiesList";
import Search from "../../layouts/search";

const Table = (props) => {
    const pageSize = 4;
    const [currentPage, setCurrentPage] = useState(1);
    const [bookMark] = useState(props);
    const [searchFilter, setFilter] = useState();
    const [professions, setProfession] = useState();
    const [dataSearch, setSearch] = useState("");
    const [selectedProf, setSelectedProf] = useState();
    const [sortBy, setSortBy] = useState({
        path: "name",
        order: "asc"
    });

    useEffect(() => {
        api.professions.fetchAll().then((data) => setProfession(data));
    }, []);

    const handleProfessionSelect = (item) => {
        setFilter();
        setSearch("");
        setSelectedProf(item);
    };

    const handlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex);
    };

    const filteredUsers = selectedProf
        ? props.users.filter(
              (user) => user.profession.name === selectedProf.name
          )
        : props.users;
    const count = filteredUsers.length;
    const sortedusers = _.orderBy(filteredUsers, [sortBy.path], [sortBy.order]);
    const userCrop = paginate(sortedusers, currentPage, pageSize);
    const columns = {
        name: {
            path: "name",
            name: "Имя",
            image: ""
        },
        qualities: {
            name: "Качества",
            component: (user) => {
                const asyncQualities = user.qualities || [];
                return <QualitiesList qualities={asyncQualities} />;
            }
        },
        professions: { path: "profession.name", name: "Профессия" },
        completedMeetings: {
            path: "completedMeetings",
            name: "Встретился раз"
        },
        rate: { path: "rate", name: "Оценка" },
        bookmark: {
            path: "bookmark",
            name: "Избранное",
            component: (user) => (
                <BookMark
                    status={user.bookmark}
                    onClick={() =>
                        bookMark.onToggleBookMark(user._id, props.setUsers)
                    }
                />
            )
        },
        delete: {
            component: (user) => (
                <button
                    onClick={() => handleTagChange(user._id, props.setUsers)}
                    className="btn btn-danger"
                >
                    delete
                </button>
            )
        }
    };

    useEffect(() => {
        setCurrentPage(1);
    }, [selectedProf]);

    const clearFilter = () => {
        setSelectedProf();
    };
    let searchResult = "";

    const handleSearch = ({ target }) => {
        setSearch(target.value);

        searchResult = props.users.filter((user) => {
            const str = user.name;
            const lowerName = str.replace(/\s+/g, " ").toLowerCase();

            if (
                (target.value.length > 0) &
                (lowerName.indexOf(target.value.toLowerCase().trim()) > -1)
            ) {
                return user;
            } else {
                return false;
            }
        });
        setFilter(searchResult);
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
                    className="btn btn-primary mb-5"
                    style={{ width: 400 }}
                >
                    {count} {people(count)}
                </button>
                <Search
                    label="search"
                    type="search"
                    name="search"
                    value={dataSearch}
                    onChange={handleSearch}
                />
                <NewTable>
                    <TableHeader {...{ setSortBy, sortBy, columns }} />
                    <TableBody
                        {...{
                            columns,
                            data:
                                searchFilter === undefined ||
                                searchFilter.length === 0
                                    ? userCrop
                                    : searchFilter
                        }}
                    />
                </NewTable>
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

export default Table;
