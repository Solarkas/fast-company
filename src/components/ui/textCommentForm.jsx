import React, { useState } from "react";
import Select from "react-select";
import API from "../../api";

const TextCommentForm = ({ id, label, user, options }) => {
    const [value, setValue] = useState({});
    const [comments, setComment] = useState({});

    const handleClick = (e) => {
        setValue(e);
    };
    const handleButtonClick = (el) => {
        const data = document.querySelector(".form-control").value;

        API.comments
            .add({ content: data, userId: el.value, pageId: user._id })
            .then((data) => setComment(...comments, data));
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
        </div>
    );
};

export default TextCommentForm;
