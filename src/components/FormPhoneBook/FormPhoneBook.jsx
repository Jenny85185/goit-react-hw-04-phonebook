import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Form, Input, FormButton, Label } from './FormPhoneBook.styled';
import shortid from 'shortid';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const FormPhoneBook = ({ contacts, addContact }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [isDisabled, setIsDisabled] = useState(false);

  const reset = () => {
    setName('');
    setNumber('');
  };

  const handleSubmit = e => {
    e.preventDefault();
    const contact = {
      id: shortid.generate(),
      name,
      number,
    };
    addContact(contact);
    reset();
  };

  useEffect(() => {
    setIsDisabled(false);
    const contactFinder = contacts.find(
      contact =>
        contact.name.toLowerCase() === name.toLowerCase() ||
        contact.number === number
    );

    if (contactFinder) {
      setIsDisabled(true);
      Notify.warning(`${name} ${number} is already in contacts.`);
      reset();
    }
  }, [name, number, contacts]);


// export class FormPhoneBook extends Component {
//   state = {
//     name: '',
//     number: '',
//   };

//   handleChange = event => {
//     const { name, value } = event.currentTarget;
//     this.setState({ [name]: value });
//   };

//   handleSubmit = event => {
//     event.preventDefault();
//     this.props.onSubmit(this.state);
//     this.setState({
//       name: '',
//       number: '',
//     });
//   };

//   render() {
//     const { name, number } = this.state;
    return (
      <Form onSubmit={handleSubmit}>
        <Label>
          Name:
          <Input
            type="text"
            name="name"
            value={name}
            onChange={e => setName(e.currentTarget.value)}
            placeholder="GoIt Manager"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </Label>
        <Label>
          Number:
          <Input
            type="tel"
            name="number"
            value={number}
            placeholder="578-87-89"
             onChange={e => setNumber(e.currentTarget.value)}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </Label>
        <FormButton disabled={isDisabled} type="submit">Add contact</FormButton>
      </Form>
    );
  }

export default FormPhoneBook;
FormPhoneBook.prototypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
