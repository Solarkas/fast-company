const handleTagChange = (id, setUsers) => {
    setUsers((prevState) => {
        let newUserList = {};
        const users = { users: prevState.users.filter((tag) => tag !== id) };
        return (newUserList = { ...newUserList, ...users });
    });
};

export default handleTagChange;
