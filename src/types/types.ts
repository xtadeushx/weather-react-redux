import { Theme } from "../context/ThemeContext";

export interface Iitem  {
    icon_id: string
    name: string
    value: string
  }

  export interface IDay {
    day: string;
    day_info: string;
    icon_id: string;
    temp_day: string;
    temp_night: string;
    info: string;
  }

  export interface ITab {
    value: string
  }

  export interface IThemeContext {
    theme: Theme;
    changeTheme: (theme:Theme) => void;
  }

  export type Weather =  {

  }