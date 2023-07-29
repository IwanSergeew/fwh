import React, { useRef, useState } from 'react';
import GlobalStyle from './styles/GlobalStyle';
import useDocumentFileDrop from './hooks/useDocumentFileDrop';
import InputComponent from './components/InputComponent';
import { ResultData, WorkData } from './types';
import DisplayWorkDataComponent from './components/DisplayWorkDataComponent';

export default () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [workData, setWorkData] = useState<WorkData | null>(null);

  const parseFile = async (file: File) => {
    const formData = new FormData();
    formData.append('xlsx', file);

    try {
      const response = await fetch('http://87.120.253.100:3432/stuff/georgihours/hours', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('File upload failed');
      }

      const result = (await response.json()) as ResultData<WorkData>;

      if (!result.success) {
        throw new Error(result.error);
      }

      setWorkData(result.data);
    } catch (e) {
      console.error(e.message);
    }
  };

  const onDrop = (files: FileList) => {
    parseFile(files[0]);
  };

  const { DragOverlay } = useDocumentFileDrop({ inputRef, onDrop });

  return (
    <>
      <GlobalStyle />
      <InputComponent inputRef={inputRef} parseFile={parseFile}></InputComponent>
      {workData ? <DisplayWorkDataComponent workData={workData} /> : null}
      <DragOverlay />
    </>
  );
};
