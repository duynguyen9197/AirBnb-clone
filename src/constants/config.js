import { createTheme } from "@material-ui/core";

export const BASE_URL = "https://airbnb.cybersoft.edu.vn/api";
export const MAPBOX_URL = "https://api.mapbox.com";
export const MAPBOX_TOKEN =
  "pk.eyJ1IjoidGhpZW52eTk1IiwiYSI6ImNrdXFkcTlycjByem8yeHBnbXVmNmwwMzQifQ.rLTXpQcU4iZjpeNw8DblUQ";
export const TOKEN_BY_CLASS =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAxMSIsIkhldEhhblN0cmluZyI6IjE0LzAzLzIwMjIiLCJIZXRIYW5UaW1lIjoiMTY0NzIxNjAwMDAwMCIsIm5iZiI6MTYxODI0NjgwMCwiZXhwIjoxNjQ3MzYzNjAwfQ.mOv5qM9N68AKpDxX9HZC3TaZNZaqfk-i1qO_Hcgf0RU";

export const FAKE_AVATAR = "https://i.pravatar.cc/300?u=";
export const TOKEN = "token";
export const USERID = "userId";
export const removeAccents = (name) => {
  return name
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .replace(/Đ/g, "D")
    .toLowerCase();
};

export const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 376,
      md: 768,
      lg: 950,
      xl: 1128,
      xxl: 1440,
    },
  },
});
