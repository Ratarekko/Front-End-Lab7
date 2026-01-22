import React from 'react';

function Image({ src, alt, width, isVisible }) {
    if (!isVisible) {
        return null;
    }

    return (
        <div className="image-container">
            <a href="https://www.gdansk.pl/">
                <img
                    src={src}
                    alt={alt}
                    style={{ width: `${width}px` }}
                />
            </a>
        </div>
    );
}

export default Image;