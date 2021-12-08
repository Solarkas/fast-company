import api from "../api";

export const handleQualitiesChange = (id, setUsers) => {
  setUsers(() => {
    const a = [...api.users.fetchAll()];
    return a.filter((tag) => tag.qualities.includes(id));
  });
};
