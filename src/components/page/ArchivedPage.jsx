import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  deleteNote,
  getActiveNotes,
  getAllNotes,
  getArchivedNotes,
  unarchiveNote,
} from "../../utils/local-data";
import ListNote from "../molecules/ListNote";

class ArchivedPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
        notesAll: getAllNotes(),
        notesActive: getActiveNotes(),
        notesArchived: getArchivedNotes(),
      };
    });
  }

  onArchiveHandler(id) {
    unarchiveNote(id);
    this.setState(() => {
      return {
        notesAll: getAllNotes(),
        notesActive: getActiveNotes(),
        notesArchived: getArchivedNotes(),
      };
    });
  }

  render() {
    const notes = this.state.notesArchived.filter((note) => {
      return note.title
        .toLowerCase()
        .includes(this.props.keyword.toLowerCase());
    });

    return (
      <main>
        <h2>Archived Note</h2>
        <ListNote
          dataNotes={notes}
          onDelete={this.onDeleteHandler}
          onArchive={this.onArchiveHandler}
        ></ListNote>
      </main>
    );
  }
}

ArchivedPage.propTypes = {
  getActiveNotes: PropTypes.func,
  notesActive: PropTypes.array,
  dataNotes: PropTypes.array,
  onDelete: PropTypes.func,
  onArchive: PropTypes.func,
  id: PropTypes.string,
  keyword: PropTypes.string,
};

export default ArchivedPage;
