import React, { Component } from "react";
import {
  archiveNote,
  deleteNote,
  getActiveNotes,
  getAllNotes,
  getArchivedNotes,
  getNote,
  unarchiveNote,
} from "../../utils/local-data";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import NoteDetail from "../atom/NoteDetail";
import HomePage from "./HomePage";

function DetailPageWrapper(props) {
  const { id } = useParams();
  return <DetailPage id={id} />;
}

class DetailPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dataNoteId: getNote(this.props.id),
      notesAll: getAllNotes(),
      notesActive: getActiveNotes(),
      notesArchived: getArchivedNotes(),
    };

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
  }

  onDeleteHandler(id) {
    deleteNote(id);

    this.setState(() => {
      return {
        dataNoteId: getNote(this.props.id),
        notesAll: getAllNotes(),
        notesActive: getActiveNotes(),
        notesArchived: getArchivedNotes(),
      };
    });
  }

  onArchiveHandler(id) {
    if (this.state.dataNoteId.archived === true) {
      unarchiveNote(id);
      this.setState(() => {
        return {
          dataNoteId: getNote(this.props.id),
          notesAll: getAllNotes(),
          notesActive: getActiveNotes(),
          notesArchived: getArchivedNotes(),
        };
      });
    }
    if (this.state.dataNoteId.archived === false) {
      archiveNote(id);
      this.setState(() => {
        return {
          dataNoteId: getNote(this.props.id),
          notesAll: getAllNotes(),
          notesActive: getActiveNotes(),
          notesArchived: getArchivedNotes(),
        };
      });
    }
  }

  render() {
    if (
      this.state.dataNoteId === (null || undefined) ||
      this.state.dataNoteId.length
    ) {
      return (
        <main id="block">
          <h1 className="message">404 Note Id Not Found or Delete it</h1>
          <div>
            <Link to="/" element={HomePage}>
              <button className="button-not-found">Home</button>
            </Link>
          </div>
        </main>
      );
    }

    return (
      <>
        <NoteDetail
          {...this.state.dataNoteId}
          onDelete={this.onDeleteHandler}
          onArchive={this.onArchiveHandler}
        />
      </>
    );
  }
}

DetailPage.propTypes = { id: PropTypes.string.isRequired };

export default DetailPageWrapper;
