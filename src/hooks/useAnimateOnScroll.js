import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const useAnimateOnScroll = (initial) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return { ref, inView };
};

export default useAnimateOnScroll;
