import api from "../api";

export const handleQualitiesChange = (id, setUsers, handlePageChange) => {
    setUsers(() => {
        const a = [...api.users.fetchAll()];
        handlePageChange(1);
        return a.filter((tag) => {
            return tag.qualities.includes(id);
        });
    });
};
