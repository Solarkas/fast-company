import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import API from "../../api";

const CommentForm = ({ users, user }) => {
    const userId = user._id;
    const [data, setData] = useState([]);
    console.log(userId);

    useEffect(() => {
        API.comments.fetchCommentsForUser(userId).then((data) => setData(data));
    }, []);

    const handleClick = (id) => {
        API.comments.remove(id).then((id) => {
            setData(data.filter((el) => el._id !== id));
        });
    };
    if (data[0] !== undefined) {
        return data.map((e) => {
            console.log(e);
            return users.map((el) => {
                if (el._id === e.pageId) {
                    return (
                        <div key={e._id} className="bg-light card-body  mb-3">
                            <div className="row">
                                <div className="col">
                                    <div className="d-flex flex-start ">
                                        <img
                                            src={`https://avatars.dicebear.com/api/avataaars/${(
                                                Math.random() + 1
                                            )
                                                .toString(36)
                                                .substring(7)}.svg`}
                                            className="rounded-circle shadow-1-strong me-3"
                                            alt="avatar"
                                            width="65"
                                            height="65"
                                        />
                                        <div className="flex-grow-1 flex-shrink-1">
                                            <div className="mb-4">
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <p className="mb-1 ">
                                                        {el.name}
                                                        <span className="small">
                                                            Published Time
                                                        </span>
                                                    </p>
                                                    <button
                                                        className="btn btn-sm text-primary d-flex align-items-center"
                                                        onClick={() =>
                                                            handleClick(e._id)
                                                        }
                                                    >
                                                        <i className="bi bi-x-lg"></i>
                                                    </button>
                                                </div>
                                                <p className="small mb-0">
                                                    {e.content}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                } else {
                    return null;
                }
            });
        });
    } else {
        return null;
    }
};

export default CommentForm;
