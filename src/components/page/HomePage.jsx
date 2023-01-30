import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  archiveNote,
  deleteNote,
  getActiveNotes,
  getAllNotes,
  getArchivedNotes,
} from "../../utils/local-data";
import ListNote from "../molecules/ListNote";

class HomePage extends Component {
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
    archiveNote(id);
    this.setState(() => {
      return {
        notesAll: getAllNotes(),
        notesActive: getActiveNotes(),
        notesArchived: getArchivedNotes(),
      };
    });
  }

  render() {
    const notes = this.state.notesActive.filter((note) => {
      return note.title
        .toLowerCase()
        .includes(this.props.keyword.toLowerCase());
    });
    return (
      <main>
        <h2>Active Note</h2>
        <ListNote
          dataNotes={notes}
          onDelete={this.onDeleteHandler}
          onArchive={this.onArchiveHandler}
        ></ListNote>
      </main>
    );
  }
}

HomePage.propTypes = {
  getActiveNotes: PropTypes.func,
  notesActive: PropTypes.array,
  dataNotes: PropTypes.array,
};

export default HomePage;
