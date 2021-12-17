import renderData from "./renderData";
import handleTagChange from "./userDelete";
import handleBookRender from "./bookmarkRender";
import handleBookTap from "./handleBookmark";

export const renderUsers = (userCrop) => {
    return userCrop.map((elementUserCrop) => {
        return (
            <tr key={elementUserCrop._id}>
                <th>{elementUserCrop.name}</th>
                <td>{renderData(elementUserCrop)}</td>
                <td>{elementUserCrop.profession.name}</td>
                <td>{elementUserCrop.completedMeetings}</td>
                <td>{elementUserCrop.rate}</td>
                <td>
                    <button
                        type="button"
                        id="btn"
                        className="btn btn-danger"
                        onClick={() => handleBookTap(elementUserCrop, setUsers)}
                    >
                        {handleBookRender(elementUserCrop)}
                    </button>
                </td>
                <td>
                    <button
                        type="button"
                        className="btn btn-danger"
                        onClick={() =>
                            handleTagChange(elementUserCrop, setUsers)
                        }
                    >
                        delete <i className="bi bi-emoji-angry-fill"></i>
                    </button>
                </td>
            </tr>
        );
    });
};

export default renderUsers;
