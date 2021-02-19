// tslint:disable:no-namespace
declare namespace jest {
  interface Matchers<R> {
    toHaveStyleRule: import('jest-styled-components').jest.Matchers<R>['toHaveStyleRule']
  }
}

declare module '*.svg' {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>

  export default content
}
