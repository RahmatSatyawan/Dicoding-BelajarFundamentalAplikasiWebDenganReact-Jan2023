import React from "react";
import PropTypes from "prop-types";
import EmptyMessage from "../../atom/EmptyMessage";
import NoteItem from "../../atom/NoteItem";

const ListSearch = ({ dataNotes, onDelete, onArchive }) => {
  if (!dataNotes.length) return <EmptyMessage />;
  return (
    <div className="list-note">
      {dataNotes.map((note) => (
        <NoteItem
          key={note.id}
          {...note}
          onDelete={onDelete}
          onArchive={onArchive}
        />
      ))}
    </div>
  );
};

ListSearch.propTypes = {
  dataNotes: PropTypes.array,
};

export default ListSearch;
