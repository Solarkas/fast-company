const handleTagChange = (id, setUsers) => {
    setUsers((prevState) => {
        let newUserList = {};
        const users = {
            users: prevState.users.filter((user) => user._id !== id)
        };
        return (newUserList = { ...newUserList, ...users });
    });
};

export default handleTagChange;
