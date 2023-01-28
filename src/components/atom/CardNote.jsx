import React, { Component } from "react";
import { showFormattedDate } from "../../utils/data";

export class CardNote extends Component {
  render() {
    const { id, title, createdAt, body, archived } = this.props;
    const onDelete = this.props.onDelete;
    const onArchive = this.props.onArchive;
    const buttonName = archived ? "Pindahkan" : "Arsipkan";

    return (
      <div className="note-item">
        <div className="content">
          <h3 className="item-title">{title}</h3>
          <p className="item-date">{showFormattedDate(createdAt)}</p>
          <p className="item-body">{body}</p>
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
