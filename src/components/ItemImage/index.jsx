import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export default function ItemImage({ image, height, width, className, ...props }) {
    const padding = 8;

    const ImageContainer = styled.div`
        background: #f6f6f6;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: ${padding}px;
        height: ${height}px;
        width: ${width}px;
    `;

    const Image = styled.img`
        border-radius: 3px;
        max-height: 100%;
        max-width: 100%;
    `;

    return (
        <ImageContainer className={className}>
            <Image src={`/images/${image}`} />
        </ImageContainer>
    );
}

ItemImage.propTypes = {
    image: PropTypes.string.isRequired,
    height: PropTypes.number,
    width: PropTypes.number,
};
