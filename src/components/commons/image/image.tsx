import React from 'react';
import './image.scss';

interface IProps {
  src: string;
  alt?: string;
  className?: string;
  ariaLabel?: string;
  lazyLoading: boolean;
}

const Image = (props: IProps) => {

  const { src, alt, ariaLabel, lazyLoading, className } = props;

  return (
    <img className={className} src={src} alt={alt} aria-label={ariaLabel} loading={lazyLoading ? 'lazy' : 'eager'} />
  );
}

export default Image;
