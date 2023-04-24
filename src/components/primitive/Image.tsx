import NextImage from 'next/image'
import { FC } from 'react'

export interface ImageProps {
  src: string
  alt: string
  className: string
  imageClass?: string
}

export const Image: FC<ImageProps> = ({ src, alt, className, imageClass = '' }) => {
  return (
    <div className={` relative ${className} `}>
      <NextImage src={src} alt={alt} className={` ${imageClass} object-cover `} fill />
    </div>
  )
}
