import React from 'react';

export default function Image({ image }) {
    return <img id={image.key} className='single-photo' src={image.urls.thumb} alt='' />;
}