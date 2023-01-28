import React, { Component } from "react";

export class FormNote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
      createdAt: "",
      archived: false,
      restlength: 50,
    };

    // binding
    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleChangeEventHandler(event) {
    this.setState(() => {
      return {
        title: event.target.value,
        restlength: 50 - event.target.value.length,
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

  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.addNote(this.state);
    this.setState(() => {
      return {
        title: "",
        body: "",
        restlength: 50,
      };
    });

    const message = `
      Name: ${this.state.title}
      Email: ${this.state.body}
      Sisa Karakter: ${this.state.restlength}

      Data berhasil ditambahkan.
    `;

    alert(message);
  }

  render() {
    return (
      <div className="note-input">
        <h2>Buat Catatan</h2>
        <form onSubmit={this.onSubmitEventHandler}>
          <p className="char-limit">Sisa karakter: {this.state.restlength}</p>
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
          <button type="submit">Simpan</button>
        </form>
      </div>
    );
  }
}

export default FormNote;
