const handleBookRender = (e) => {
  if (e.bookmark === false) {
    return (
      <div>
        <i className="bi bi-bookmark"></i>
      </div>
    );
  } else {
    return (
      <div>
        <i className="bi bi-bookmark-fill"></i>
      </div>
    );
  }
};

export default handleBookRender;
