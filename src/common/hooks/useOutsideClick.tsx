import { useEffect, RefObject } from 'react';

export const useOutsideClick = (
  ref: RefObject<HTMLElement>,
  onClose: () => void
) => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, onClose]);
};

export const useOutsideClickIgnore = (
  ref: RefObject<HTMLElement>,
  onClose: () => void,
  ignoreRefs: RefObject<HTMLElement>[] = [] // 무시할 ref 배열 추가
) => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const isInside =
        ref.current && ref.current.contains(event.target as Node);
      const isIgnored = ignoreRefs.some(
        (ignoreRef) =>
          ignoreRef.current && ignoreRef.current.contains(event.target as Node)
      );

      if (!isInside && !isIgnored) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, onClose, ignoreRefs]);
};
