import React from "react";

const BackHistoryButton = ({ pageChange, setPageChange }) => {
    return (
        <button
            className="btn btn-primary"
            onClick={() => {
                return setPageChange((pageChange = "user"));
            }}
        >
            <i className="bi bi-caret-left" /> Назад
        </button>
    );
};

export default BackHistoryButton;
