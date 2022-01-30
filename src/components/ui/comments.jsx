import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import TextCommentForm from "../common/comments/textCommentForm";
import api from "../../api";
import CommentsList from "../common/comments/commentsList";
import { orderBy } from "lodash";

const Comments = () => {
    const { userId } = useParams();
    const [comments, setComment] = useState([]);

    useEffect(() => {
        api.comments
            .fetchCommentsForUser(userId)
            .then((data) => setComment(data));
    }, []);

    const handleRemoveComment = (id) => {
        api.comments.remove(id).then((id) => {
            setComment(comments.filter((el) => el._id !== id));
        });
    };

    const SortedComments = orderBy(comments, ["created_at"], ["desc"]);

    return (
        <div>
            <div className="card mb-2">
                <div className="card-body">
                    <div>
                        <h2>New comment</h2>
                        <TextCommentForm
                            id={userId}
                            comments={comments}
                            setComment={setComment}
                        />
                    </div>
                </div>
                <div className="card mb-3">
                    <div className="card-body">
                        <h2>Comments</h2>
                        <hr />
                        <CommentsList
                            comments={SortedComments}
                            onRemove={handleRemoveComment}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Comments;
