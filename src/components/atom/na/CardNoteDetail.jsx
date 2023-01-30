import React, { Component } from "react";
import { Link } from "react-router-dom";

import { showFormattedDate } from "../../../utils";

export class CardNoteDetail extends Component {
  render() {
    const { id, title, createdAt, body } = this.props;

    return (
      <div className="note-item">
        <h1>Detail Note</h1>
        <Link to={`/notes/${id}`}>
          <div className="content">
            <h3 className="item-title">{title}</h3>
            <p className="item-date">{showFormattedDate(createdAt)}</p>
            <p className="item-body">{body}</p>
          </div>
        </Link>
        {/* <div className="action">
          <button
            className="action-button border-right delete"
            onClick={() => onDelete(id)}
          >
            Delete
          </button>
          <button className="action-button" onClick={() => onArchive(id)}>
            {buttonName}
          </button>
        </div> */}
      </div>
    );
  }
}

export default CardNoteDetail;
