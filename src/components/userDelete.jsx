const handleTagChange = (id, setUsers) => {
    setUsers((prevState) => prevState.filter((tag) => tag !== id));
};

export default handleTagChange;
