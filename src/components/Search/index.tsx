import { ChangeEvent, useState } from 'react';
import { Input, Wrapper } from './styles';

import useDebounce from '../../hooks/Debounce';

interface PropsSearch {
  text: string;
  // eslint-disable-next-line no-unused-vars
  changeValue: (data: string) => void;
  value: string;
}

export default function Search({ text, changeValue, value }: PropsSearch) {
  const [displayValue, setDisplayValue] = useState(value);
  const debounceChange = useDebounce<string>(changeValue, 500);

  function handleOnChange(event: ChangeEvent<HTMLInputElement>) {
    setDisplayValue(event.target.value);
    debounceChange(event.target.value);
  }

  return (
    <Wrapper>
      <Input
        placeholder={text}
        value={displayValue}
        onChange={handleOnChange}
      />
    </Wrapper>
  );
}
