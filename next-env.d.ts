/// <reference types="next" />
/// <reference types="next/types/global" />

// https://fettblog.eu/typescript-react/styles/#load-css-with-webpack
declare module "*.css" {
  interface IClassNames {
    [className: string]: string;
  }
  const classNames: IClassNames;
  export = classNames;
}

declare module "*.svg" {
  const content: any = null;
  export default content;
}
