import React, { Component } from "react";

export default class Recipe extends Component {
  render() {
    const { handleDetails } = this.props;
    const {
      image_url,
      title,
      publisher,
      source_url,
      recipe_id
    } = this.props.recipe;
    return (
      <React.Fragment>
        <div className="col-10 mx-auto col-md-6 col-lg-4 my-3">
          <div className="card">
            <img
              style={{ height: "14rem" }}
              className="img-card-top"
              src={image_url}
              alt={title}
            />
            <div className="card-body text-capitalize">
              <h6>{title}</h6>
              <h6 className="text-warning- text-slanted">
                provided by {publisher}
              </h6>
            </div>
            <div className="card-footer">
              <button
                className="btn btn-primary text-capitalize "
                type="button"
                onClick={() => handleDetails(0, recipe_id)}
              >
                details
              </button>
              <a
                className="btn btn-success mx-2 text-capitalize"
                href={source_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                recipe url
              </a>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
