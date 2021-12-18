const handleBookTap = (elementUserCrop, setUsers) => {
    if (elementUserCrop.bookmark === false) {
        setUsers((el) => {
            let newUserList = {};
            const a = [...el.users];
            const users = {
                users: a.map((e) => {
                    elementUserCrop.bookmark = true;
                    return e;
                })
            };
            return (newUserList = { ...newUserList, ...users });
        });
    } else {
        setUsers((el) => {
            let newUserList = {};
            const a = [...el.users];
            const users = {
                users: a.map((e) => {
                    elementUserCrop.bookmark = false;
                    return e;
                })
            };
            return (newUserList = { ...newUserList, ...users });
        });
    }
};

// const handleBookTap = (elementUserCrop, setUsers) => {
//     if (elementUserCrop.bookmark === false) {
//         console.log(elementUserCrop, "element");
//         setUsers((elementUserCrop.bookmark = true));
//     } else {
//         setUsers((elementUserCrop.bookmark = false));
//     }
// };

export default handleBookTap;
