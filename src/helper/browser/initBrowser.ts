import { Browser, chromium, firefox, webkit } from "@playwright/test";
import * as executionConfig from '../../../executionConfig.json'
import { exit } from "node:process";
const options={
    headless:executionConfig.headless
}

export const initBrowser=async ()=>{
    let browser:Browser=undefined;
   const browserName=executionConfig.browser
    switch(browserName.toLowerCase()){
        case 'chromium':
            browser=await chromium.launch(options);
            break
        case 'firefox':
            browser=await firefox.launch(options)
            break
         case 'webkit':
            browser=await webkit.launch();
        default :
            console.log('Browser should be "Chrome, webkit or firefax')
            exit(1)

    }
    return browser;
}
