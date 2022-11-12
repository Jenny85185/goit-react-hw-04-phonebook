import PropTypes from 'prop-types';
import {
  List,
  ListItem,
  ListDeleteButton,
} from './ContactList.styled';

const ContactList = ({ items, removeContact }) => {
  const elements = items.map(({ name, number, id }) => {
    return (
      <ListItem key={id}>
        <span>
          {name}: {number}
        </span>
        <ListDeleteButton type="button" onClick={() => removeContact(id)}>
          Delete
        </ListDeleteButton>
      </ListItem>
    );
  });
  return <List>{elements}</List>;
};

export default ContactList;

ContactList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};

// const ContactList = ({ contacts, filter, filteredContacts, deleteContact }) => {
//   console.log(filter);
//   let rendered = filter === '' ? contacts : filteredContacts();
//   return (
//     <ul className={List}>
//       {rendered.map(({ name, id, number }) => (
//         <li className={ListItem} key={id} id={id}>
//           <span className={Information}>{name}: </span>
//           <span className={Information}>{number}</span>

//           <ListDeleteButton
//             type="button"
//             onClick={e => deleteContact(e)}
//             aria-label="delete contact button"
//           >
//      Delete
//           </ListDeleteButton>
//         </li>
//       ))}
//     </ul>
//   );
// };
// export default ContactList;

// ContactList.propTypes = {
//   filter: PropTypes.string.isRequired,
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//       id: PropTypes.string.isRequired,
//     })
//   ).isRequired,
//   filteredContacts: PropTypes.func.isRequired,
//   deleteContact: PropTypes.func.isRequired,
// };
