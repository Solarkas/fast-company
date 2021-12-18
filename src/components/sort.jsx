export const completedMeetingsSort = (setUsers) => {
    setUsers((prevState) => {
        let newUserList = {};
        const a = [...prevState.users];
        const users = {
            users: a.sort((z, b) => b.completedMeetings - z.completedMeetings)
        };
        return (newUserList = { ...newUserList, ...users });
    });
};

export const completedMeetingsSortDown = (setUsers) => {
    setUsers((prevState) => {
        let newUserList = {};
        const a = [...prevState.users];
        const users = {
            users: a.sort((z, b) => z.completedMeetings - b.completedMeetings)
        };
        return (newUserList = { ...newUserList, ...users });
    });
};

export const ratingSortUp = (setUsers) => {
    setUsers((prevState) => {
        let newUserList = {};
        const a = [...prevState.users];
        const users = {
            users: a.sort((z, b) => b.rate - z.rate)
        };
        return (newUserList = { ...newUserList, ...users });
    });
};

export const ratingSortDown = (setUsers) => {
    setUsers((prevState) => {
        let newUserList = {};
        const a = [...prevState.users];
        const users = {
            users: a.sort((z, b) => z.rate - b.rate)
        };
        return (newUserList = { ...newUserList, ...users });
    });
};

export const nameSortUp = (setUsers) => {
    setUsers((prevState) => {
        let newUserList = {};
        const a = [...prevState.users];
        const users = {
            users: a.sort((z, b) => {
                const nameA = z.name.toLowerCase();
                const nameB = b.name.toLowerCase();
                return nameA < nameB ? -1 : 1;
            })
        };
        return (newUserList = { ...newUserList, ...users });
    });
};

export const nameSortDown = (setUsers) => {
    setUsers((prevState) => {
        let newUserList = {};
        const a = [...prevState.users];
        const users = {
            users: a.sort((z, b) => {
                const nameA = z.name.toLowerCase();
                const nameB = b.name.toLowerCase();
                return nameA < nameB ? 1 : -1;
            })
        };
        return (newUserList = { ...newUserList, ...users });
    });
};
