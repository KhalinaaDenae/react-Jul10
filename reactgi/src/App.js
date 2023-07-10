import React from 'react';

class BasicInfo extends React.Component {
  render() {
    const { name, number, dateOfBirth } = this.props.person;
    return (
      <div>
        <h1>Name: {name}</h1>
        <p>Number: {number}</p>
        <p>Date of Birth: {dateOfBirth}</p>
      </div>
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      people: [
        {
          name: 'Sally Thompson',
          number: '123-456-7890',
          dateOfBirth: 'Jan 1, 2023'
        },
        {
          name: 'Jane Thompson',
          number: '123-456-7890',
          dateOfBirth: 'February 2, 2023'
        },

      ]
    };
  }

  render() {
    return (
      <div>
        {this.state.people.map((person, index) => (
          <BasicInfo key={index} person={person} />
        ))}
      </div>
    );
  }
}

export default App;
