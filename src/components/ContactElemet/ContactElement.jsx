import { Button, Div, ListItem } from './ContactElement.styled';

export const ContactElement = ({ id, name, number, onDelete }) => {
  return (
    <ListItem>
      <Div>
        {name}: {number}
        <Button onClick={() => onDelete(id)}>Delete</Button>
      </Div>
    </ListItem>
  );
};
