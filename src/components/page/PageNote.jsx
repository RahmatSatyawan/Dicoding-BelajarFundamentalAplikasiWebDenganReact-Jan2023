import React, { Component } from "react";

import HeaderPage from "../organisms/HeaderPage";
import MainPage from "../organisms/MainPage";
import FooterPage from "../organisms/FooterPage";

import { getInitialData } from "../../utils/data";


export class PageNote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataNotes: getInitialData(),
      searchTitle: "",
    };

    //binding
    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onArchivedHandler = this.onArchivedHandler.bind(this);
    this.onSearchHandler = this.onSearchHandler.bind(this);
  }

  onAddNoteHandler({ title, body }) {
    this.setState((prevState) => {
      return {
        dataNotes: [
          ...prevState.dataNotes,
          {
            id: +new Date(),
            title,
            body,
            archived: false,
            createdAt: new Date().toLocaleDateString(),
          },
        ],
      };
    });
  }

  onDeleteHandler(id) {
    const dataNotes = this.state.dataNotes.filter(
      (dataNote) => dataNote.id !== id
    );
    this.setState({ dataNotes });
  }

  onArchivedHandler(id) {
    const dataNotes = this.state.dataNotes.map((note) => {
      if (note.id === id) {
        return { ...note, archived: !note.archived };
      } else {
        return note;
      }
    });
    this.setState({ dataNotes });
  }

  onSearchHandler(event) {
    this.setState(() => {
      return {
        searchTitle: event.target.value,
      };
    });
  }

  render() {
    console.log(this.state.dataNotes);
    console.log(`search ${this.state.searchTitle}`);
    const dataNotes = this.state.dataNotes.filter((note) =>
      note.title.toLowerCase().includes(this.state.searchTitle.toLowerCase())
    );
    return (
      <>
        <HeaderPage
          searchTitle={this.state.searchTitle}
          onSearch={this.onSearchHandler}
        ></HeaderPage>
        <MainPage
          dataNotes={dataNotes}
          addNote={this.onAddNoteHandler}
          onDelete={this.onDeleteHandler}
          onArchive={this.onArchivedHandler}
        ></MainPage>
        <FooterPage></FooterPage>
      </>
    );
  }
}

export default PageNote;
