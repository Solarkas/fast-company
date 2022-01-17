import React from "react";
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";

const NewTable = ({ setSortBy, sortBy, columns, userCrop, children }) => {
    return (
        <table className="table">
            {children || (
                <>
                    <TableHeader {...{ setSortBy, sortBy, columns }} />
                    <TableBody {...{ columns, data: userCrop }} />
                </>
            )}
        </table>
    );
};

export default NewTable;
