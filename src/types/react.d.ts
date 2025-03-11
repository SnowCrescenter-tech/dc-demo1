import 'react';

declare module 'react' {
  interface ReactElement<P = any, T extends string | JSXElementConstructor<any> = string | JSXElementConstructor<any>> {
    type: T;
    props: P;
    key: Key | null;
  }

  export type ReactNode = ReactElement | string | number | ReactFragment | ReactPortal | boolean | null | undefined;
}

declare global {
  namespace JSX {
    interface Element extends React.ReactElement<any, any> {}
  }
}
