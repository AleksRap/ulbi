declare module '*.module.scss'
declare module '*.module.css'

declare module '*.svg' {
  import { SVGProps, VFC } from "react";
  const SVG: VFC<SVGProps<SVGElement>>;
  export default SVG;
}

declare module '*.png'
declare module '*.jpg'
declare module '*.jpeg'
