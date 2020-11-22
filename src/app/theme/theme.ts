export interface Theme {
    name: string;
    properties: any;
  }
  
  export const light: Theme = {
    name: "light",
    properties: {
        "--background": "#ffffff",
        "--foreground": "#ffffff",
        "--primary": "#000000",
        "--secondary": "#000000BF",
        "--input-bg": "#EAEAEA",
        "--accent": "#E63A8A",
        "--accent-bg": "#FFB7D91F",
        "--input-title": "#00000099",
        "--input-text": '#000000DE'
      }
  };
  
  export const dark: Theme = {
    name: "dark",
    properties: {
        "--background": "#292929",
        "--foreground": "#2F2F2F",
        "--primary": "#E4E4E4",
        "--secondary": "#ACACAC",
        "--input-bg": "#292929",
        "--accent": "#FF96C7",
        "--accent-bg": "#FFB7D91F",
        "--input-title": "#FFFFFF99",
        "--input-text": '#FFFFFFDE'
    }
  };