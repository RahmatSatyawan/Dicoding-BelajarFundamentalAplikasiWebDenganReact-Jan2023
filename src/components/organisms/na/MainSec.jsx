import React, { Component } from "react";
import ListNote from "../../molecules/ListNote";

export class MainSec extends Component {
  render() {
    const dataNotes = this.props.dataNotes;
    const onDelete = this.props.onDelete;
    const onArchive = this.props.onArchive;

    return (
      <main>
        <ListNote
          dataNotes={dataNotes}
          onDelete={onDelete}
          onArchive={onArchive}
        ></ListNote>
      </main>
    );
  }
}

export default MainSec;
