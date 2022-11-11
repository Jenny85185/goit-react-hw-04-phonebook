import PropTypes from 'prop-types';
import {
  List,
  ListItem,
  ListDeleteButton,
  Information,
} from './ContactList.styled';


const ContactList = ({ contacts, filter, filteredContacts, deleteContact }) => {
  console.log(filter);
  let rendered = filter === '' ? contacts : filteredContacts();
  return (
    <ul className={List}>
      {rendered.map(({ name, id, number }) => (
        <li className={ListItem} key={id} id={id}>
          <span className={Information}>{name}: </span>
          <span className={Information}>{number}</span>

          <ListDeleteButton
            type="button"
            onClick={e => deleteContact(e)}
            aria-label="delete contact button"
          >
     Delete
          </ListDeleteButton>
        </li>
      ))}
    </ul>
  );
};
export default ContactList;

ContactList.propTypes = {
  filter: PropTypes.string.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
  filteredContacts: PropTypes.func.isRequired,
  deleteContact: PropTypes.func.isRequired,
};

// const ContactList = ({ contacts, deleteContact }) => (
//   <List>
//     {contacts.map(({ id, name, number }) => {
//       return (
//         <ListItem key={id}>
//           <Information>
//             {name}: {number}
//           </Information>
//           <ListDeleteButton type="button" onClick={() => deleteContact(id)}>
//             Delete
//           </ListDeleteButton>
//         </ListItem>
//       );
//     })}
//   </List>
// );

// ContactList.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.exact({
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//       id: PropTypes.string.isRequired,
//     })
//   ),
//   deleteContact: PropTypes.func.isRequired,
// };

