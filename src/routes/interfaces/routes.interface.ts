type JSXComponent = () => JSX.Element;

export interface IRoute {
  path: string;
  to: string;
  view: JSXComponent;
  name: string;
  default?: boolean;
}
