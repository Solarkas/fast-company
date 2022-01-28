import React from "react";

const CommentForm = ({ users, comments, deleteClick }) => {
    if (comments[0] !== undefined) {
        return comments.map((e) => {
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
                                                            deleteClick(e._id)
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
