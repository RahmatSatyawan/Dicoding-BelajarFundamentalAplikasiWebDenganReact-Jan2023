import React, { Component } from "react";
import PropTypes from "prop-types";
export class FormNote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      title: "",
      body: "",
      archived: false,
      createdAt: "",
    };

    // binding
    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onArchivedChangeEventHandler =
      this.onArchivedChangeEventHandler.bind(this);

    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleChangeEventHandler(event) {
    this.setState(() => {
      return {
        title: event.target.value,
      };
    });
  }

  onBodyChangeEventHandler(event) {
    this.setState(() => {
      return {
        body: event.target.value,
      };
    });
  }

  onArchivedChangeEventHandler(event) {
    this.setState(() => {
      return {
        archived: !this.state.archived,
      };
    });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.addNote(this.state);
    this.setState(() => {
      return {
        title: "",
        body: "",
        archived: false,
      };
    });

    const message = `
      Title: ${this.state.title}
      Body: ${this.state.body}
      Archived: ${this.state.archived}

      Data berhasil ditambahkan.
    `;

    alert(message);
  }

  render() {
    return (
      <div className="note-input">
        <form onSubmit={this.onSubmitEventHandler}>
          <input
            className="input-title"
            type="text"
            placeholder="Judul..."
            value={this.state.title}
            onChange={this.onTitleChangeEventHandler}
          />
          <textarea
            className="input-body"
            type="text"
            placeholder="Isi Catatan..."
            value={this.state.body}
            onChange={this.onBodyChangeEventHandler}
          />
          <label className="input-archived">
            <input
              type="checkbox"
              value={this.state.archived}
              checked={this.state.archived}
              onChange={this.onArchivedChangeEventHandler}
            />
            <p>Archived</p>
          </label>
          <button type="submit">Simpan</button>
        </form>
      </div>
    );
  }
}

FormNote.propTypes = {
  addNote: PropTypes.func,
  onArchivedChangeEventHandler: PropTypes.func,
  title: PropTypes.string,
  body: PropTypes.string,
  archived: PropTypes.bool,
};

export default FormNote;
