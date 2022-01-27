import React, { useState } from "react";
import QualitiesList from "../../ui/quailities/qualitiesList";
import Select from "react-select";
import CommentForm from "../../ui/commentForm";

const UserRender = ({ user, users, toggleFormType }) => {
    const [data] = useState(users);

    const optionsArray = data.map((optionName) => ({
        label: optionName.name,
        value: optionName._id
    }));

    return (
        <div className="container">
            <div className="row gutters-sm">
                <div className="col-md-4 mb-3">
                    <div className="card mb-3">
                        <div className="card-body">
                            <button
                                className="
                    position-absolute
                    top-0
                    end-0
                    btn btn-light btn-sm
                "
                            >
                                <i
                                    className="bi bi-gear"
                                    onClick={toggleFormType}
                                ></i>
                            </button>
                            <div
                                className="
                    d-flex
                    flex-column
                    align-items-center
                    text-center
                    position-relative
                "
                            >
                                <img
                                    src={`https://avatars.dicebear.com/api/avataaars/${(
                                        Math.random() + 1
                                    )
                                        .toString(36)
                                        .substring(7)}.svg`}
                                    className="rounded-circle shadow-1-strong me-3"
                                    alt="avatar"
                                    width="155"
                                    height="155"
                                />
                                <div className="mt-3">
                                    <h4>{user.name}</h4>
                                    <p className="text-secondary mb-1">
                                        {user.profession.name}
                                    </p>
                                    <div className="text-muted">
                                        <i
                                            className="
                                bi bi-caret-down-fill
                                text-primary
                            "
                                            role="button"
                                        ></i>
                                        <i
                                            className="
                                bi bi-caret-up
                                text-secondary
                            "
                                            role="button"
                                        ></i>
                                        <span className="ms-2">
                                            {user.rate}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card mb-3">
                        <div
                            className="
                card-body
                d-flex
                flex-column
                justify-content-center
                text-center
            "
                        >
                            <h5 className="card-title">
                                <span>Qualities</span>
                            </h5>
                            <p className="card-text">
                                <QualitiesList qualities={user.qualities} />
                            </p>
                        </div>
                    </div>
                    <div className="card mb-3">
                        <div className="card mb-3">
                            <div
                                className="
                    card-body
                    d-flex
                    flex-column
                    justify-content-center
                    text-center
                "
                            >
                                <h5 className="card-title">
                                    <span>Completed meetings</span>
                                </h5>

                                <h1 className="display-1">
                                    {user.completedMeetings}
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-8">
                    <div className="card mb-2">
                        <div className="card-body">
                            <div>
                                <h2>New comment</h2>
                                <div className="mb-4">
                                    <Select
                                        options={optionsArray}
                                        placeholder="Выберите пользователя"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label
                                        htmlFor="exampleFormControlTextarea1"
                                        className="form-label"
                                    >
                                        Сообщение
                                    </label>
                                    <textarea
                                        className="form-control"
                                        id="exampleFormControlTextarea1"
                                        rows="3"
                                    ></textarea>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card mb-3">
                        <div className="card-body">
                            <h2>Comments</h2>
                            <hr />
                            <CommentForm users={users} user={user} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserRender;
