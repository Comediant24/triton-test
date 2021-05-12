import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string;

    colors: {
      main: string;
      secondary: string;
    };

    fontSize: {
      h1: string;
      h2: string;
      p: string;
    };
  }
}
