import { Component } from 'react';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addContact(this.state);
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="inputName">Name</label>
          <input
            name="name"
            type="text"
            id="inputName"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label htmlFor="inputNumber">Number</label>
          <input
            name="number"
            type="tel"
            id="inputNumber"
            value={this.state.value}
            onChange={this.handleChange}
            required
          />
        </div>
        <button type="submit">Add contact</button>
      </form>
    );
  }
}

export default ContactForm;
