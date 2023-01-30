import React, { Component } from "react";
import PropTypes from "prop-types";
import { useRouteError } from "react-router-dom";

function NotFoundPage() {
  const error = useRouteError();
  console.error(error);
  return <NotFound error={error} />;
}

class NotFound extends Component {
  render() {
    const { error } = this.props;
    return (
      <div id="error-page">
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
        ;
      </div>
    );
  }
}

NotFoundPage.propTypes = {
  error: PropTypes.object,
};

export default NotFoundPage;
