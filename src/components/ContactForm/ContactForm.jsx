import { Component } from 'react';
import { Button, FormContact, Input, Label } from './ContactForm.styled';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, number } = this.state;
    this.props.onSubmit({ name, number });
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <FormContact autoComplete="off" onSubmit={this.handleSubmit}>
        <Label>
          Name
          <Input
            type="text"
            name="name"
            value={this.state.name}
            required
            onChange={this.handleChange}
          />
        </Label>

        <br />
        <Label>
          Number
          <Input
            type="tel"
            name="number"
            value={this.state.number}
            required
            onChange={this.handleChange}
          />
        </Label>

        <Button type="submit">Add contact</Button>
      </FormContact>
    );
  }
}
