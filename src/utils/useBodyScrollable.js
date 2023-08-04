/* eslint-disable no-redeclare, no-unused-vars */
/* global ResizeObserver, window */
import { useEffect, useState } from 'react';

function useBodyScrollable() {
  const [bodyScrollable, setBodyScrollable] = useState(
    document.body.scrollHeight >= window.innerHeight,
  );

  useEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => {
      setBodyScrollable(document.body.scrollHeight >= window.innerHeight);
    });

    resizeObserver.observe(document.body);

    return () => {
      resizeObserver.unobserve(document.body);
    };
  }, []);

  return bodyScrollable;
}

export default useBodyScrollable;
