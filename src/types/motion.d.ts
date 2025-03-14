import { HTMLMotionProps } from "framer-motion";

declare module "framer-motion" {
  export interface MotionComponents {
    div: React.ForwardRefExoticComponent<HTMLMotionProps<"div">>;
    button: React.ForwardRefExoticComponent<HTMLMotionProps<"button">>;
    span: React.ForwardRefExoticComponent<HTMLMotionProps<"span">>;
    p: React.ForwardRefExoticComponent<HTMLMotionProps<"p">>;
    a: React.ForwardRefExoticComponent<HTMLMotionProps<"a">>;
    img: React.ForwardRefExoticComponent<HTMLMotionProps<"img">>;
    h1: React.ForwardRefExoticComponent<HTMLMotionProps<"h1">>;
    h2: React.ForwardRefExoticComponent<HTMLMotionProps<"h2">>;
    h3: React.ForwardRefExoticComponent<HTMLMotionProps<"h3">>;
    h4: React.ForwardRefExoticComponent<HTMLMotionProps<"h4">>;
    h5: React.ForwardRefExoticComponent<HTMLMotionProps<"h5">>;
    h6: React.ForwardRefExoticComponent<HTMLMotionProps<"h6">>;
    nav: React.ForwardRefExoticComponent<HTMLMotionProps<"nav">>;
    section: React.ForwardRefExoticComponent<HTMLMotionProps<"section">>;
    article: React.ForwardRefExoticComponent<HTMLMotionProps<"article">>;
    aside: React.ForwardRefExoticComponent<HTMLMotionProps<"aside">>;
    header: React.ForwardRefExoticComponent<HTMLMotionProps<"header">>;
    footer: React.ForwardRefExoticComponent<HTMLMotionProps<"footer">>;
    main: React.ForwardRefExoticComponent<HTMLMotionProps<"main">>;
  }
}
