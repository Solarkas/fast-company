export const completedMeetingsSort = (setUsers) => {
  setUsers((prevState) => {
    let a = [...prevState];
    a.sort((z, b) => b.completedMeetings - z.completedMeetings);
    return a.filter(() => 1);
  });
};

export const completedMeetingsSortDown = (setUsers) => {
  setUsers((prevState) => {
    let a = [...prevState];
    a.sort((z, b) => z.completedMeetings - b.completedMeetings);
    return a.filter(() => 1);
  });
};

export const ratingSortUp = (setUsers) => {
  setUsers((prevState) => {
    let a = [...prevState];
    a.sort((z, b) => b.rate - z.rate);
    return a.filter(() => 1);
  });
};

export const ratingSortDown = (setUsers) => {
  setUsers((prevState) => {
    let a = [...prevState];
    a.sort((z, b) => z.rate - b.rate);
    return a.filter(() => 1);
  });
};

export const nameSortUp = (setUsers) => {
  setUsers((prevState) => {
    let a = [...prevState];
    a.sort((z, b) => {
      let nameA = z.name.toLowerCase();
      let nameB = b.name.toLowerCase();
      return nameA < nameB ? -1 : 1;
    });

    return a.filter(() => 1);
  });
};

export const nameSortDown = (setUsers) => {
  setUsers((prevState) => {
    let a = [...prevState];
    a.sort((z, b) => {
      let nameA = z.name.toLowerCase();
      let nameB = b.name.toLowerCase();
      return nameA < nameB ? 1 : -1;
    });

    return a.filter(() => 1);
  });
};
