import React, { ChangeEvent, MutableRefObject } from 'react';
import { Input, InputContainer, InputSpan } from '../styles/App';

type Props = {
  inputRef: MutableRefObject<HTMLInputElement | null>;
  parseFile: (file: File) => void;
};

export default ({ inputRef, parseFile }: Props) => {
  const onFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;

    parseFile(e.target.files[0]);
  };

  return (
    <InputContainer htmlFor="fileInput">
      <InputSpan>Upload File</InputSpan>
      <Input id="fileInput" type="file" hidden={true} ref={inputRef} onChange={onFileChange} />
    </InputContainer>
  );
};
