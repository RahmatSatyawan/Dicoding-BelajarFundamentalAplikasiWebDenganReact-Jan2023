import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { showFormattedDate } from "../../utils";
import parse from "html-react-parser";

const NoteItem = (props) => {
  const { id, title, createdAt, body, archived } = props;
  const onDelete = props.onDelete;
  const onArchive = props.onArchive;
  const buttonName = archived ? "Move to Active" : "Move to Archived";

  return (
    <div className="note-item">
      <div className="content">
        <Link to={`/notes/${id}`}>
          <h3 className="item-title">{title}</h3>
          <p className="item-date">{showFormattedDate(createdAt)}</p>
          <p className="item-body">{parse(body)}</p>
        </Link>
      </div>

      <div className="action">
        <button
          className="action-button border-right delete"
          onClick={() => onDelete(id)}
        >
          Delete
        </button>
        <button
          className="action-button"
          onClick={() => onArchive(id)}
        >
          {buttonName}
        </button>
      </div>
    </div>
  );
};

NoteItem.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  createdAt: PropTypes.string,
  body: PropTypes.string,
  archived: PropTypes.bool,
  onDelete: PropTypes.func,
  onArchive: PropTypes.func,
};

export default NoteItem;
