import React from 'react'
import { IMAGE_URL } from '../../../config';
import './Image.scss';

const Image = ({image}) => {

    if (!image) {
        return ''
    }
    return (
        <img src={`${IMAGE_URL}/${image}`} alt={'photo'} className={'image'}/>
        )
};

export default Image;
