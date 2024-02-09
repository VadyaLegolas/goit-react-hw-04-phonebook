import { Input, Label } from './Filter.styled';

export const Filter = ({ value, onChange }) => {
  return (
    <Label>
      Find contact by name:
      <Input type="text" value={value} onChange={onChange} />
    </Label>
  );
};
