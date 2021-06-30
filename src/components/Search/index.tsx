import { Input, Wrapper } from './styles';

interface PropsSearch {
  text: string;
  // eslint-disable-next-line no-unused-vars
  changeValue: (data: string) => void;
  value: string;
}

export default function Search({ text, changeValue, value }: PropsSearch) {
  return (
    <Wrapper>
      <Input
        placeholder={text}
        value={value}
        onChange={e => changeValue(e.target.value)}
      />
    </Wrapper>
  );
}
