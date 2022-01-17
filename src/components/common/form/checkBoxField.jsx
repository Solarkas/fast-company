import React from "react";

const CheckBoxField = ({ name, value, onChange, children, error }) => {
    const handleChange = () => {
        onChange({ name: name, value: !value });
    };
    const getInputClasses = () => {
        return "form-check-input" + (error ? " is-invalid" : "");
    };
    return (
        <div className="form-check mb-4">
            <input
                type="checkbox"
                className={getInputClasses()}
                value=""
                id={name}
                onChange={handleChange}
                checked={value}
            />
            <label htmlFor={name} className="form-check-label">
                {children}
            </label>
            {error && <div className="invalid-feedback">{error}</div>}
        </div>
    );
};

export default CheckBoxField;
