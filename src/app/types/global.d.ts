declare module '*.module.css';
declare module '*.module.scss';

declare module '*.svg' {
    const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
    export default content;
}

declare module '*.jpg'
declare module '*.jpeg'
declare module '*.gif'
declare module '*.png'

declare const __IS_DEV__: boolean;
