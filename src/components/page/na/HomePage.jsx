import React, { Component } from "react";
import { getAllNotes } from "../../utils/local-data";
import HeaderSec from "../organisms/HeaderSec";
import MainSec from "../organisms/MainSec";
import Navigation from "./Navigation";

export class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dataNotes: getAllNotes(),
      dataArchivedNotes: [],
      searchTitle: "",
    };

    //Binding
    this.onAddHandler = this.onAddHandler.bind(this);
    this.onEditHandler = this.onEditHandler.bind(this);
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
  }

  onAddHandler() {
    this.props.history.push("/add");
  }

  onEditHandler(id) {
    this.props.history.push(`/edit/${id}`);
  }

  onDeleteHandler(id) {
    this.props.history.push(`/delete/${id}`);
    return {
      dataNotes: getAllNotes(),
    };
  }

  render() {
    const dataNotes = this.state.dataNotes.filter((note) =>
      note.title.toLowerCase().includes(this.state.searchTitle.toLowerCase())
    );
    
    return (
      <>
        <HeaderSec></HeaderSec>
        <Navigation></Navigation>
        <MainSec
          dataNotes={dataNotes}
          addNote={this.onAddNoteHandler}
          onDelete={this.onDeleteHandler}
          onArchive={this.onArchivedHandler}
        ></MainSec>
      </>
    );
  }
}

export default HomePage;
