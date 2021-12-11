const handleBookTap = (elementUserCrop, setUsers) => {
    if (elementUserCrop.bookmark === false) {
        setUsers((el) => {
            const a = [...el];
            a.map(() => (elementUserCrop.bookmark = true));
            return a.map((e) => e);
        });
    } else {
        setUsers((el) => {
            const a = [...el];
            a.map(() => (elementUserCrop.bookmark = false));
            return a.map((e) => e);
        });
    }
};

export default handleBookTap;
