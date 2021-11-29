/// <reference types="react-scripts" />
declare module "circomlib";
declare module "snarkjs";

declare global {
    interface Window {
        FB:any;
    }
}

let FB = window.FB;