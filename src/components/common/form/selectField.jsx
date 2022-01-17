import React from "react";
const SelectField = ({
    label,
    value,
    onChange,
    defaultOption,
    options,
    name,
    error
}) => {
    const handleChange = ({ target }) => {
        onChange({ name: target.name, value: target.value });
    };
    const getInputClasses = () => {
        return "form-select" + (error ? " is-invalid" : "");
    };
    const optionsArray =
        !Array.isArray(options) && typeof options === "object"
            ? Object.keys(options).map((optionName) => ({
                  name: options[optionName].name,
                  value: options[optionName]._id
              }))
            : options;
    return (
        <div className="md-4">
            <label htmlFor={name} className="form-label">
                {label}
            </label>
            <select
                id={name}
                className={getInputClasses()}
                name={name}
                value={value}
                onChange={handleChange}
            >
                <option disabled value="">
                    {defaultOption}
                </option>
                {optionsArray &&
                    optionsArray.map((option) => {
                        return (
                            <option value={option.value} key={option._id}>
                                {option.name}
                            </option>
                        );
                    })}
            </select>
            {error && <div className="invalid-feedback">{error}</div>}
        </div>
    );
};

export default SelectField;
