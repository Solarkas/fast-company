import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";

const TableHeader = ({ sortBy, columns, setSortBy }) => {
    const handleSort = (item) => {
        const buttonDown = <i className="bi bi-caret-down-fill"></i>;
        const buttonUp = <i className="bi bi-caret-up-fill"></i>;
        if (sortBy.path === item) {
            setSortBy({
                ...sortBy,
                order: sortBy.order === "asc" ? "desc" : "asc",
                image: sortBy.order === "asc" ? buttonDown : buttonUp
            });
        } else {
            setSortBy({
                path: item,
                order: "asc",
                image: buttonUp
            });
        }
    };

    return (
        <thead>
            <tr>
                {Object.keys(columns).map((column) => {
                    return (
                        <th
                            key={column}
                            onClick={
                                columns[column].path
                                    ? () => {
                                          handleSort(columns[column].path);
                                      }
                                    : undefined
                            }
                            {...{
                                role: columns[column].path && "button"
                            }}
                            scope="col"
                        >
                            {console.log(
                                "sortby",
                                sortBy.path === columns[column].path
                            )}
                            {columns[column].name}
                            {sortBy.path === columns[column].path
                                ? sortBy.image
                                : ""}
                        </th>
                    );
                })}
            </tr>
        </thead>
    );
};

export default TableHeader;
