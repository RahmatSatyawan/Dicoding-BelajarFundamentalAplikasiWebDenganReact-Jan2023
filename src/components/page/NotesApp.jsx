import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";

import HomePage from "./HomePage";
import AddPage from "./AddPage";
import DetailPageWrapper from "./DetailPage";
import NotFoundPage from "./NotFoundPage";

import ArchivedPage from "./ArchivedPage";
import Navigation from "../organisms/Navigation";
import HeaderSec from "../organisms/HeaderSec";
import FooterSec from "../organisms/FooterSec";

export class NotesApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: "",
    };
  }

  render() {
    const receivedData = (data) => {
      this.setState(() => {
        return {
          data: data,
        };
      });
    };
    return (
      <>
        <HeaderSec receivedData={receivedData}></HeaderSec>
        <Navigation></Navigation>
        <Routes>
          <Route path="/" element={<HomePage keyword={this.state.data} />} />
          <Route
            path="archived"
            element={<ArchivedPage keyword={this.state.data} />}
          />
          <Route path="notes/add" element={<AddPage />} />
          <Route path="notes/:id" element={<DetailPageWrapper />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <FooterSec></FooterSec>
      </>
    );
  }
}

export default NotesApp;
