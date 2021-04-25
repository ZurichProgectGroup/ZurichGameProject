import React, { useEffect, useState } from 'react';
import Toggle from 'react-toggle';

const DarkModeToggle = () => {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        if (isDark) {
            document.documentElement.style.setProperty('filter', 'invert(1) hue-rotate(180deg)');
        } else {
            document.documentElement.style.removeProperty('filter');
        }
    }, [isDark]);

    return (
        <Toggle
            className="dark-toggle"
            checked={isDark}
            onChange={(event) => setIsDark(event.target.checked)}
            icons={{ checked: '🌙', unchecked: '🔆' }}
            aria-label="Dark mode"
        />
    );
};

export default DarkModeToggle;
