import React, { useState, useEffect } from "react";
import TextField from "../common/form/textField";
import { validator } from "../../utils/validator";
import api from "../../api";
import SelectField from "../common/form/selectField";
import RadioField from "../common/form/radioField";
import MultiSelectField from "../common/form/multiSelectField";

const UserEditForm = ({ user }) => {
    const [professions, setProfession] = useState();
    const [qualities, setQualities] = useState({});
    const [errors, setErrors] = useState({});
    const [data, setData] = useState({
        name: user.name,
        email: user.email,
        profession: user.profession.name,
        sex: user.sex,
        qualities: user.qualities
    });

    const optionsArray = data.qualities.map((optionName) => ({
        label: optionName.name,
        value: optionName._id
    }));

    useEffect(() => {
        api.professions.fetchAll().then((data) => setProfession(data));
        api.qualities.fetchAll().then((data) => setQualities(data));
    }, []);

    const handleChange = (target) => {
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }));
    };
    const validatorConfig = {
        email: {
            isRequired: {
                message: "Электронная почта обязательна для заполнения"
            },
            isEmail: {
                message: "Email введен некорректно"
            }
        },
        profession: {
            isRequired: {
                message: "Обязательно выберите вашу профессию"
            }
        },
        name: {
            isRequired: {
                message: "Обязательно введите имя"
            },
            min: {
                message: "Имя должно состоять минимум из 3 символов",
                value: 3
            }
        }
    };
    useEffect(() => {
        validate();
    }, [data]);
    const validate = () => {
        const errors = validator(data, validatorConfig);
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };
    const isValid = Object.keys(errors).length === 0;

    const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = validate();
        if (!isValid) return;
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit}>
            <TextField
                label="Имя"
                name="name"
                value={data.name}
                onChange={handleChange}
                error={errors.name}
            />
            <TextField
                label="Электронная почта"
                name="email"
                value={data.email}
                onChange={handleChange}
                error={errors.email}
            />
            <SelectField
                label="Выбери свою профессию"
                defaultOption="Choose..."
                options={professions}
                name="profession"
                onChange={handleChange}
                value={data.profession}
                error={errors.profession}
            />
            <RadioField
                options={[
                    { name: "Male", value: "male" },
                    { name: "Female", value: "female" },
                    { name: "Other", value: "other" }
                ]}
                value={data.sex}
                name="sex"
                onChange={handleChange}
                label="Выберите ваш пол"
            />
            <MultiSelectField
                options={qualities}
                onChange={handleChange}
                defaultValue={optionsArray}
                name="qualities"
                label="Выберите ваши качества"
            />

            <button
                className="btn btn-primary w-100 mx-auto"
                type="submit"
                disabled={!isValid}
                onClick={(e) => {
                    user.profession.name = data.profession;
                    const a = data.qualities.map((event) => {
                        return Object.values(qualities).filter((e) => {
                            return e.name === event.label ? e : false;
                        });
                    });
                    const merged = [].concat.apply([], a);
                    console.log(merged);
                    user.qualities = merged;
                    user.email = data.email;
                    user.sex = data.sex;
                    user.name = (
                        data.name.charAt(0).toUpperCase() +
                        data.name.slice(1).toLowerCase()
                    ).trim();
                    e.preventDefault();

                    api.users.update(user._id, user);
                    window.location.href = `/users/${user._id}`;
                }}
            >
                Submit
            </button>
        </form>
    );
};

export default UserEditForm;
