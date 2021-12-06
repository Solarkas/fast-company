export const completedMeetingsSort = (setUsers) => {
  setUsers((prevState) => {
    let a = prevState;
    a.map(() => a.sort((z, b) => b.completedMeetings - z.completedMeetings));
    return a.filter(() =>
      a.sort((z, b) => b.completedMeetings - z.completedMeetings)
    );
  });
};

export const completedMeetingsSortDown = (setUsers) => {
  setUsers((prevState) => {
    let a = prevState;
    a.map(() => a.sort((z, b) => z.completedMeetings - b.completedMeetings));
    return a.filter(() =>
      a.sort((z, b) => z.completedMeetings - b.completedMeetings)
    );
  });
};

export const ratingSortUp = (setUsers) => {
  setUsers((prevState) => {
    let a = prevState;
    a.map(() => a.sort((z, b) => b.rate - z.rate));
    return a.filter(() => a.sort((z, b) => b.rate - z.rate));
  });
};

export const ratingSortDown = (setUsers) => {
  setUsers((prevState) => {
    let a = prevState;
    a.map(() => a.sort((z, b) => z.rate - b.rate));
    return a.filter(() => a.sort((z, b) => z.rate - b.rate));
  });
};

export const nameSortUp = (setUsers) => {
  setUsers((prevState) => {
    let a = prevState;
    a.map(() =>
      a.sort((z, b) => {
        let nameA = z.name.toLowerCase();
        let nameB = b.name.toLowerCase();
        if (nameA < nameB) {
          console.log(nameA, nameB);
          return -1;
        } else if (nameA > nameB) {
          return 1;
        } else {
          return 0;
        }
      })
    );
    return a.filter(() =>
      a.sort((z, b) => {
        let nameA = z.name.toLowerCase();
        let nameB = b.name.toLowerCase();
        if (nameA < nameB) {
          console.log(nameA, nameB);
          return -1;
        } else if (nameA > nameB) {
          return 1;
        } else {
          return 0;
        }
      })
    );
  });
};

export const nameSortDown = (setUsers) => {
  setUsers((prevState) => {
    let a = prevState;
    a.map(() =>
      a.sort((z, b) => {
        let nameA = z.name.toLowerCase();
        let nameB = b.name.toLowerCase();
        if (nameA < nameB) {
          console.log(nameA, nameB);
          return 1;
        } else if (nameA > nameB) {
          return -1;
        } else {
          return 0;
        }
      })
    );
    return a.filter(() =>
      a.sort((z, b) => {
        let nameA = z.name.toLowerCase();
        let nameB = b.name.toLowerCase();
        if (nameA < nameB) {
          console.log(nameA, nameB);
          return 1;
        } else if (nameA > nameB) {
          return -1;
        } else {
          return 0;
        }
      })
    );
  });
};
