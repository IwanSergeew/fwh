import React from 'react';
import { MutableRefObject, useEffect, useState } from 'react';
import { DragOverlayContainer, DragOverlayInner } from '../styles/DragOverlay';

type Props = {
  inputRef: MutableRefObject<HTMLInputElement | null>;
  onDrop: (files: FileList) => void;
};

export default ({ inputRef, onDrop }: Props) => {
  const [showOverlay, setShowOverlay] = useState(false);

  useEffect(() => {
    const onDocumentDragOver = (e: DragEvent) => {
      e.preventDefault();
    };
    const onDocumentDragEnter = () => {
      setShowOverlay(true);
    };
    const onDocumentDragLeave = (e: DragEvent) => {
      if (e.relatedTarget) return;
      setShowOverlay(false);
    };

    const onDocumentDrop = (e: DragEvent) => {
      if (!inputRef.current || !e.dataTransfer) return;

      e.preventDefault();
      setShowOverlay(false);
      onDrop(e.dataTransfer.files);
    };

    document.addEventListener('dragenter', onDocumentDragEnter);
    document.addEventListener('dragover', onDocumentDragOver);
    document.addEventListener('dragleave', onDocumentDragLeave);
    document.addEventListener('drop', onDocumentDrop);

    return () => {
      document.removeEventListener('dragenter', onDocumentDragEnter);
      document.removeEventListener('dragover', onDocumentDragOver);
      document.removeEventListener('dragleave', onDocumentDragLeave);
      document.removeEventListener('drop', onDocumentDrop);
    };
  }, [inputRef]);

  return {
    DragOverlay: () => (
      <DragOverlayContainer show={showOverlay ? 1 : 0}>
        <DragOverlayInner>Drop File Here</DragOverlayInner>
      </DragOverlayContainer>
    ),
  };
};
