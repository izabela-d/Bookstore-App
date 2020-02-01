import React from 'react'
import { IMAGE_URL } from '../../../config';
import './Image.scss';

const Image = ({image}) => (
    <img src={`${IMAGE_URL}/${image}`} alt={'photo'} className={'image'}/>
);

export default Image;
