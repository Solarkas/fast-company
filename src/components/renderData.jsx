import React from "react";

const renderData = (userMassiv) => {
    return userMassiv.qualities.map((element, index) => {
        const name = element.name;
        const elementClass =
            (element.className = `btn btn-${element.color} btn-sm m-2 btn-user`);
        return (
            <div key={index} className={elementClass}>
                <p type="button" className="p_name">
                    {name}
                </p>
            </div>
        );
    });
};

export default renderData;
