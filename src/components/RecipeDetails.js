import React, { Component } from "react";
import { recipe } from "../tempDetails";

export default class RecipeDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      recipe: recipe
    };
  }

  // async componentDidMount() {
  //   const id = this.props.id;
  //   const url = `https://www.food2fork.com/api/get?key=012b4157a2fd02428d424a3e5cf4c1fb&rId=${id}`;
  //   try {
  //     const data = await fetch(url);
  //     const jsonData = await data.json();
  //     console.log(jsonData.recipe);

  //     this.setState({
  //       recipe: jsonData.recipe
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  render() {
    const { handelIndex } = this.props;

    const {
      image_url,
      publisher,
      publisher_url,
      source_url,
      title,
      ingredients
    } = this.state.recipe;
    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <div className="col-10 max-auto col-md-6 my-3">
              <button
                className="btn btn-warning mb-5 text-capitalize"
                type="button"
                onClick={() => handelIndex(1)}
              >
                back to recipe
              </button>
              <img className="d-block w-100" src={image_url} alt={title} />
            </div>
            <div className="col-10 max-auto col-md-6 my-3">
              <h6 className="text-uppercase">{title}</h6>
              <h6 className="text-warning text-capitalize text-slanted">
                provided by {publisher}
              </h6>
              <a
                className="btn btn-primary mt-2 text-capitalize"
                href={publisher_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                publisher webpage
              </a>
              <a
                className="btn btn-success mt-2 mx-3 text-capitalize"
                href={source_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                recipe url
              </a>
              <ul className="list-group mt-4">
                <h2 className="mt-3 mb-4">Ingredients</h2>
                {ingredients.map((item, index) => {
                  return (
                    <li className="list-group-item text-slanted" key={index}>
                      {item}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
