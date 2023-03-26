import { useState, useEffect, useRef } from 'react';

export function useScrollDirection() {
    const [scrollDirection, setScrollDirection] = useState('up');
    const previousScrollYRef = useRef(0);

    useEffect(() => {
        function handleScroll() {
            const currentScrollY = window.scrollY;
            const previousScrollY = previousScrollYRef.current || currentScrollY;

            if (currentScrollY > previousScrollY) {
                setScrollDirection('down');
            } else if (currentScrollY < previousScrollY) {
                setScrollDirection('up');
            }

            previousScrollYRef.current = currentScrollY;
        }

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return scrollDirection;
}
