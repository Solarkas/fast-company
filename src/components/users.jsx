import React, { useState } from "react";
import api from "../api";
import "bootstrap/dist/css/bootstrap.css";
import "../index.css";
import renderData from "./renderData";
import handleTagChange from "./userDelete";
import table from "./table";

const Users = () => {
  const [users, setUsers] = useState(api.users.fetchAll());
  const count = users.length + 1;

  const renderUsers = () => {
    // let a = [];
    // users.forEach((e, i) => {
    //   a[i] = e.name.concat(users[e]);
    // });
    // console.log(a.sort());
    return users.map((e) => {
      return (
        <tr key={e._id}>
          <th type="button" onClick={() => console.log("ok")}>
            {e.name}
          </th>
          <td>{renderData(e, setUsers)}</td>
          <td>{e.profession.name}</td>
          <td>{e.completedMeetings}</td>
          <td>{e.rate}</td>
          <td>
            <button
              type="button"
              className="btn btn-danger"
              onClick={() => handleTagChange(e, setUsers)}
            >
              delete <i class="bi bi-emoji-angry-fill"></i>
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
