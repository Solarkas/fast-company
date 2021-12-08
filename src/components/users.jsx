import React, { useState } from "react";
import api from "../api";
import "bootstrap/dist/css/bootstrap.css";
import "../index.css";
import renderData from "./renderData";
import handleTagChange from "./userDelete";
import handleBookRender from "./bookmarkRender";
import handleBookTap from "./handleBookmark";
import table from "./table";

const Users = () => {
  const [users, setUsers] = useState(api.users.fetchAll());
  const count = users.length + 1;

  const renderUsers = () => {
    return users.map((e) => {
      return (
        <tr key={e._id}>
          <th>{e.name}</th>
          <td>{renderData(e, setUsers)}</td>
          <td>{e.profession.name}</td>
          <td>{e.completedMeetings}</td>
          <td>{e.rate}</td>
          <td>
            <button
              type="button"
              id="btn"
              className="btn btn-danger"
              onClick={() => handleBookTap(e, setUsers)}
            >
              {handleBookRender(e)}
            </button>
          </td>
          <td>
            <button
              type="button"
              className="btn btn-danger"
              onClick={() => handleTagChange(e, setUsers)}
            >
              delete <i className="bi bi-emoji-angry-fill"></i>
            </button>
          </td>
        </tr>
      );
    });
  };

  return users.length !== 0 ? (
    table(count, renderUsers, setUsers)
  ) : (
    <button type="button" className="btn btn-danger">
      Никто с тобой не тусанет
    </button>
  );
};

export default Users;
