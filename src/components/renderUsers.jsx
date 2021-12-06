const people = (count) => {
  let a = [2, 3, 4, 5];
  return a.indexOf(count) > 0
    ? "человека тусанут с тобой сегодня"
    : "человек тусанет с тобой сегодня";
};

export default people;
