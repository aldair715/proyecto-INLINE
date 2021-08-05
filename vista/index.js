import { App } from "./App.js";

const D=document,
W=window;
D.addEventListener("DOMContentLoaded",App());
W.addEventListener("hashchange",App());
