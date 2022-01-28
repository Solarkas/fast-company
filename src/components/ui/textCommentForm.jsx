import React, { useState } from "react";
import Select from "react-select";
import CommentForm from "./commentForm";

const TextCommentForm = ({
    id,
    label,
    options,
    comments,
    handleButtonClick,
    deleteClick,
    users,
    user
}) => {
    const [value, setValue] = useState({});

    const handleClick = (e) => {
        setValue(e);
    };

    return (
        <div>
            <div className="mb-4">
                <Select
                    options={options}
                    onChange={handleClick}
                    placeholder="Выберите пользователя"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="textArea" className="form-label">
                    {label}
                </label>
                <textarea className="form-control" id={id} rows="3"></textarea>
                <button onClick={() => handleButtonClick(value)}>Click</button>
            </div>
            <div className="card mb-3">
                <div className="card-body">
                    <h2>Comments</h2>
                    <hr />
                    <CommentForm
                        users={users}
                        user={user}
                        comments={comments}
                        deleteClick={deleteClick}
                    />
                </div>
            </div>
        </div>
    );
};

export default TextCommentForm;
