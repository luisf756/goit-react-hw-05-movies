import { Wrapper, Input } from "./SearchBoxStylesd";//Icon

export const SearchBox = ({ value, onChange }) => {
  return (
    <Wrapper>
      {/* <Icon /> */}
      <Input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </Wrapper>
  );
};
