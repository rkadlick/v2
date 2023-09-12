
const SCROLL_UP = 'up';
const SCROLL_DOWN = 'down';

import { useState, useEffect } from 'react';

const useScrollDirection = ({ initialDirection } = {}) => {
	const [scrollDir, setScrollDir] = useState(initialDirection);

	useEffect(() => {
	  const threshold = 85;
	  let lastScrollY = window.scrollY;
	  let ticking = false;
	
	  const updateScrollDir = () => {
		const scrollY = window.scrollY;
	
		if (Math.abs(scrollY - lastScrollY) < threshold) {
		  ticking = false;
		  return;
		}
		setScrollDir(scrollY > lastScrollY ? SCROLL_DOWN : SCROLL_UP);
		lastScrollY = scrollY > 0 ? scrollY : 0;
		ticking = false;
	  };
	
	  const onScroll = () => {
		if (!ticking) {
		  window.requestAnimationFrame(updateScrollDir);
		  ticking = true;
		}
	  };
	
	  window.addEventListener("scroll", onScroll);
	  {/* console.log(scrollDir); */}
	
	  return () => window.removeEventListener('scroll', onScroll);
	}, [scrollDir]);
  
	return scrollDir;
};

export default useScrollDirection;