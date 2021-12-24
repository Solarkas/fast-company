import React from "react";
import Quality from "./quality";

const QualitiesList = ({ qualities }) => {
    return (
        <>
            {qualities.map((qual) => {
                return <Quality key={qual._id} {...qual} />;
            })}
        </>
    );
};

export default QualitiesList;
