declare module '*.module.scss';
declare module '*.module.css';

declare module '*.svg' {
  import { SVGProps, FC } from 'react';

  const SVG: FC<SVGProps<SVGElement>>;
  export default SVG;
}

declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.jpeg';

declare module 'features/*';
declare module 'shared/*';
declare module 'entities/*';
declare module 'widgets/*';
declare module 'pages/*';
