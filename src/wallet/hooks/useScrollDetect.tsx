import { useEffect, useRef, useState } from 'react';

const useScrollDetect = () => {
  const element = useRef<HTMLElement | null>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY + 100;
      if (element.current) {
        const pagePosTop =
          element.current.getBoundingClientRect().top + window.scrollY;
        const pagePosBot =
          element.current.getBoundingClientRect().bottom + window.scrollY;

        if (pagePosTop - 150 < scrollTop && scrollTop < pagePosBot - 150) {
          setActive(true);
        } else {
          setActive(false);
        }
      }
    };

    window.addEventListener('scroll', onScroll);

    // Cleanup on unmount
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []); // Only run once when the component mounts

  return { active, element };
};

export default useScrollDetect;
