import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import TextCommentForm from "./textCommentForm";
import api from "../../api";

const Comments = ({ user, optionsArray, users }) => {
    const { userId } = useParams();
    const [comments, setComment] = useState([]);

    useEffect(() => {
        api.comments
            .fetchCommentsForUser(userId)
            .then((data) => setComment(data));
    }, []);

    const handleButtonClick = (el) => {
        const data = document.querySelector(".form-control").value;

        api.comments
            .add({ content: data, userId: userId, pageId: el.value })
            .then((data) => setComment(...comments, data));
    };

    const handleClick = (id) => {
        api.comments.remove(id).then((id) => {
            setComment(comments.filter((el) => el._id !== id));
        });
    };

    return (
        <div>
            <div className="card mb-2">
                <div className="card-body">
                    <div>
                        <h2>New comment</h2>
                        <TextCommentForm
                            id={userId}
                            label="Сообщение"
                            user={user}
                            users={users}
                            options={optionsArray}
                            comments={comments}
                            setComment={setComment}
                            handleButtonClick={handleButtonClick}
                            deleteClick={handleClick}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Comments;
