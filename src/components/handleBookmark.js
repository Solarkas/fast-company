const handleBookTap = (e, setUsers) => {
    if (e.bookmark === false) {
        setUsers((el) => {
            const a = [...el];
            a.map(() => (e.bookmark = true));
            return a.map((e) => e);
        });
    } else {
        setUsers((el) => {
            const a = [...el];
            a.map(() => (e.bookmark = false));
            return a.map((e) => e);
        });
    }
};

export default handleBookTap;
