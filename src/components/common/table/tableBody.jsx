import React from "react";
import _ from "lodash";

const TableBody = ({ columns, data }) => {
    const renderContent = (item, column) => {
        const newItem = { ...item };
        newItem.name = <a href={`/users/${item._id}`}>{`${item.name}`}</a>;
        if (columns[column].component) {
            const component = columns[column].component;
            if (typeof component === "function") {
                return component(newItem);
            }
            return component;
        }
        return _.get(newItem, columns[column].path);
    };
    return (
        <tbody>
            {data.map((item) => (
                <tr key={item._id}>
                    {Object.keys(columns).map((column) => (
                        <td key={column}>{renderContent(item, column)}</td>
                    ))}
                </tr>
            ))}
        </tbody>
    );
};

export default TableBody;
