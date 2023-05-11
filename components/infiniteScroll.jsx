import { motion } from 'framer-motion';
import {
  useEffect,
  useRef,
  useState,
  useCallback,
  useLayoutEffect,
} from 'react';

function InfiniteScrollLoop({
  surroundingBackup = 6,
  direction,
  outerStyle,
  innerStyle,
  id,
  children,
}) {
  const contentRef = useRef(null);
  const scrollRef = useRef(null);
  const [height, setHeight] = useState(0);

  const backupHeight = height * surroundingBackup;

  const handleScroll = () => {
    if (scrollRef.current) {
      const scroll = scrollRef.current.scrollTop;
      if (scroll < backupHeight || scroll >= backupHeight + height) {
        scrollRef.current.scrollTop = backupHeight + (scroll % height);
      }
    }
  };

  useCallback(handleScroll, [height]);

  useLayoutEffect(() => {
    if (contentRef.current) {
      setHeight(contentRef.current.offsetHeight);
      scrollRef.current.scrollTop = backupHeight;
    }
  }, [children]);

  useEffect(() => {
    const autoScroll = () => {
      if (scrollRef.current) {
        switch (direction) {
          case 'up':
            scrollRef.current.scrollTop -= 1;
            break;
          case 'down':
            scrollRef.current.scrollTop += 1;
            break;
        }

        requestAnimationFrame(autoScroll);
      }
    };
    autoScroll();
  }, []);

  //add a useEFffect to scroll a bit on load
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = backupHeight + 1;
    }
  }, []);

  return (
    <div className="infinite-scroll-loop-outer" style={outerStyle}>
      <div>
        <motion.div
          layoutId={id}
          className="infinite-scroll-loop-inner"
          ref={scrollRef}
          style={{
            height,
            ...innerStyle,
          }}
          onScroll={handleScroll}
          //disable scroll from the user
          onWheel={(e) => e.preventDefault()}
        >
          {[...Array(surroundingBackup)].map(() => (
            <div>{children}</div>
          ))}
          <div ref={contentRef}>{children}</div>
          {[...Array(surroundingBackup)].map(() => (
            <div>{children}</div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default InfiniteScrollLoop;
