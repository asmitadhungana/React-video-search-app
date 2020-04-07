import React from "react";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { term: "" };
    this.inputRef = React.createRef();
  }

  onInputChange = (event) => {
    this.setState({ term: event.target.value });
  };

  onFormSubmit = (event) => {
    event.preventDefault();

    this.props.onFormSubmit(this.state.term);
  };

  componentDidMount() {
    this.inputRef.current.focus();
  }

  render() {
    const headerStyle = {
      color: "white",
      backgroundColor: "Red",
      padding: "10px",
      textAlign: "center",
    };

    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <h1 style={headerStyle}>Asmee tube</h1>
            <label>Video Search</label>
            <input
              ref={this.inputRef}
              type="text"
              value={this.state.term}
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
