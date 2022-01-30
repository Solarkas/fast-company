import React, { useEffect, useState } from "react";
import SelectField from "../form/selectField";
import TextField from "../form/textField";
import api from "../../../api";
import { validator } from "../../../utils/validator";
const initialData = { userId: "", content: "" };

const TextCommentForm = ({ id, setComment, comments }) => {
    const [data, setData] = useState(initialData);
    const [users, setUsers] = useState({});
    const [errors, setErrors] = useState({});

    useEffect(() => {
        api.users.fetchAll().then(setUsers);
    }, []);

    const validate = () => {
        const errors = validator(data, validatorConfig);

        setErrors(errors);
        return Object.keys(errors).length === 0;
    };
    const handleChange = (target) => {
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }));
    };

    const handleButtonClick = (data) => {
        console.log(data);
        api.comments
            .add({ ...data, pageId: id })
            .then((data) => setComment([...comments, data]));
    };

    const validatorConfig = {
        userId: {
            isRequired: {
                message: "Выберите от чьего имени Вы хотите отправить сообщение"
            }
        },
        content: {
            isRequired: {
                message: "Сообщение не может быть пустым"
            }
        }
    };

    const clearForm = () => {
        setData(initialData);
        setErrors({});
    };
    const onSubmit = (e) => {
        e.preventDefault();
        const isValid = validate();
        if (!isValid) return;
        handleButtonClick(data);
        clearForm();
    };
    const arrayOfUsers =
        users &&
        Object.keys(users).map((userId) => ({
            name: users[userId].name,
            value: users[userId]._id
        }));

    return (
        <div>
            <form onSubmit={onSubmit}>
                <div className="mb-4">
                    <SelectField
                        onChange={handleChange}
                        options={arrayOfUsers}
                        name="userId"
                        value={data.userId}
                        defaultOption="Выберите пользователя"
                        error={errors.userId}
                    />
                </div>
                <div className="mb-4">
                    <TextField
                        value={data.content}
                        onChange={handleChange}
                        name="content"
                        label="Сообщение"
                        error={errors.content}
                    />
                </div>
                <div className="d-flex justify-content-end">
                    <button className="btn btn-primary">Опубликовать</button>
                </div>
            </form>
        </div>
    );
};

export default TextCommentForm;
