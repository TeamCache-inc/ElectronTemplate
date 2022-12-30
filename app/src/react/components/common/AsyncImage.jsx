import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const ScImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  user-select: none;

  transition: opacity 0.2s ease-in-out;
  opacity: ${({ loadingImage }) => loadingImage ? 0 : 1};
`;

const AsyncImage = ({ src }) => {
  const [loading, setLoading] = useState(true);
  const [image, setImage] = useState(null);

  useEffect(() => {
    const loadImage = async () => {
      const imageSrc = await require(`../../impl/${src}`);
      setImage(imageSrc);

      setLoading(false);
    };

    loadImage();
    setLoading(true);
  }, [src])

  return <ScImage src={image} loadingImage={loading} />;
};

export default AsyncImage;
