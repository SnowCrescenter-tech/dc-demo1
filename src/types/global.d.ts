/// <reference types="react" />

declare namespace JSX {
  interface Element extends React.ReactElement<any, any> { }
}

declare module '*.svg' {
  const content: any;
  export default content;
}

declare module '*.png' {
  const content: any;
  export default content;
}

declare module '*.jpg' {
  const content: any;
  export default content;
}
