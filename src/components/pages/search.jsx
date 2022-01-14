import React from "react";

const Search = ({ label, type, name, value, onChange }) => {
    return (
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start mt-10">
            <form
                className="col-12 col-lg-450 mb-3 mb-lg-0 me-lg-3 mt-10"
                id="action"
                method="get"
            >
                <label htmlFor={name}>{label}</label>
                <input
                    type={type}
                    id={name}
                    name={name}
                    value={value}
                    onChange={onChange}
                    className="form-control form-control-dark"
                    placeholder="Search..."
                />
            </form>
        </div>
    );
};

export default Search;
