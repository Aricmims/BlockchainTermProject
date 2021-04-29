import React from 'react';

/**
 * App
 *
 * Simple react js fetch example
 */
class App extends React.Component {

  /**
   * constructor
   *
   * @object  @props  parent props
   * @object  @state  component state
   */
  constructor(props) {

    super(props);

    this.state = {
      items: [],
      isLoaded: false
    }

  }

  /**
   * componentDidMount
   *
   * Fetch json array of objects from given url and update state.
   */
  componentDidMount() {

    fetch('http://api.espn.com/v1/sports/baseball/mlb/events')
        .then(res => res.json())
        .then(json => {
          this.setState({
            items: json,
            isLoaded: true,
          })
        }).catch((err) => {
      console.log(err);
    });

  }

  /**
   * render
   *
   * Render UI
   */
  render() {

    const { isLoaded, items } = this.state;

    if (!isLoaded)
      return <div>Failed to load API</div>;

    return (
        <div className="App">
          <ul>
            {items.map(item => (
                <li key={item.id}>
                  Name: {item.name}
                </li>
            ))}
          </ul>
        </div>
    );

  }

}

export default App;