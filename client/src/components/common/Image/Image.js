import React from 'react';
import { IMAGE_URL } from '../../../config';
import './Image.scss';

const Image = ({ image, alt }) => {
    if (!image) {
        return '';
    }
    return (
        <img src={`${IMAGE_URL}/${image}`} alt={alt} className={'image'}/>
    );
};

export default Image;
