import React, { Component } from "react";
import SearchBar from "../atom/SearchBar";
import PropTypes from "prop-types";
import { Link, useSearchParams } from "react-router-dom";
import { getAllNotes } from "../../utils/local-data";

function HeaderSec(props) {
  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get("title");

  function changeSearchParams(keyword) {
    setSearchParams({ title: keyword });
  }

  return (
    <Header
      defaultKeyword={keyword}
      keywordChange={changeSearchParams}
      myFunct={props.receivedData}
    />
  );
}

HeaderSec.propTypes = {
  receivedData: PropTypes.any
}

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dataNotes: getAllNotes(),
      keyword: props.defaultKeyword || "",
    };

    this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);
  }

  onKeywordChangeHandler(keyword) {
    this.setState(() => {
      return {
        keyword,
      };
    });

    this.props.keywordChange(keyword);
    this.props.myFunct(keyword);
  }

  render() {
    return (
      <div>
        <header>
          <h1>
            <Link to="/">Notes</Link>
          </h1>
          <SearchBar
            keyword={this.state.keyword}
            keywordChange={this.onKeywordChangeHandler}
          />
        </header>
      </div>
    );
  }
}

Header.propTypes = {
  defaultKeyword: PropTypes.string,
  keywordChange: PropTypes.func,
  myFunct: PropTypes.func
}

export default HeaderSec;
