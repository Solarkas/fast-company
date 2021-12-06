import people from "./renderUsers";
import "bootstrap-icons/font/bootstrap-icons.css";
import {
  completedMeetingsSort,
  completedMeetingsSortDown,
  nameSortDown,
  nameSortUp,
  ratingSortDown,
  ratingSortUp,
} from "./sort";

const table = (count, renderUsers, setUsers) => {
  return (
    <div>
      <button type="button" className="btn btn-primary">
        {count - 1} {people(count)}
      </button>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">
              Имя
              <p
                type="button"
                className="btn btn-danger"
                onClick={() => nameSortUp(setUsers)}
              >
                <i className="bi bi-caret-up-fill"></i>
              </p>
              <p
                type="button"
                className="btn btn-danger"
                onClick={() => nameSortDown(setUsers)}
              >
                <i className="bi bi-caret-down-fill"></i>
              </p>
            </th>
            <th scope="col">Качества</th>
            <th scope="col">Проффессия</th>
            <th scope="col">
              Встретился раз
              <p
                type="button"
                className="btn btn-danger"
                onClick={() => completedMeetingsSort(setUsers)}
              >
                <i className="bi bi-caret-up-fill"></i>
              </p>
              <p
                type="button"
                className="btn btn-danger"
                onClick={() => completedMeetingsSortDown(setUsers)}
              >
                <i className="bi bi-caret-down-fill"></i>
              </p>
            </th>
            <th scope="col">
              <p>Оценка</p>
              <p
                type="button"
                className="btn btn-danger"
                onClick={() => ratingSortUp(setUsers)}
              >
                <i className="bi bi-caret-up-fill"></i>
              </p>
              <p
                type="button"
                className="btn btn-danger"
                onClick={() => ratingSortDown(setUsers)}
              >
                <i className="bi bi-caret-down-fill"></i>
              </p>
            </th>
          </tr>
        </thead>
        <tbody>{renderUsers()}</tbody>
      </table>
    </div>
  );
};

export default table;
