import React, { Component } from "react";
import { Link } from "react-router-dom";
import { showFormattedDate } from "../../utils/data";
import DetailPage from "../../page/DetailPage";

export class CardNote extends Component {
  render() {
    const { id, title, createdAt, body, archived } = this.props;
    const onDelete = this.props.onDelete;
    const onArchive = this.props.onArchive;
    const buttonName = archived ? "Pindahkan" : "Arsipkan";

    return (
      <div className="note-item">
        <div className="content">
          <Link to={`/notes/${id}`}>
            <h3 className="item-title">{title}</h3>
            <p className="item-date">{showFormattedDate(createdAt)}</p>
            <p className="item-body">{body}</p>
          </Link>
        </div>

        <div className="action">
          <button
            className="action-button border-right delete"
            onClick={() => onDelete(id)}
          >
            Delete
          </button>
          <button className="action-button" onClick={() => onArchive(id)}>
            {buttonName}
          </button>
        </div>
      </div>
    );
  }
}

export default CardNote;
