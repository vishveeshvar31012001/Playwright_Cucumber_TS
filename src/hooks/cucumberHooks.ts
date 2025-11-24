import { After, AfterAll, Before, BeforeAll, Status, setDefaultTimeout } from "@cucumber/cucumber";
import { Browser, BrowserContext, chromium, Page } from "@playwright/test";
import { dateTimeWithMilliSec, executionTime } from "../utils/date";
import * as executionConfig from '../../executionConfig.json';
const fs = require('fs-extra')

let context: BrowserContext
export let page: Page
let browser: Browser

// video
const recordOption = { recordVideo: { dir: 'test-output/videos' } }


BeforeAll(async function () {
    executionTime.startTime = dateTimeWithMilliSec()
    browser = await chromium.launch({ headless: executionConfig.headless });
})
Before(async function ({ pickle }) {
    setDefaultTimeout(60 * 1000);
    if (executionConfig.scenarioName.trim() != "" && pickle.name != executionConfig.scenarioName) {
        console.log('Skipped')
        return 'skipped'
    }
    if (executionConfig.recordVideo.toLowerCase().trim() == 'on') {
        context = await browser.newContext(recordOption);
    } else {
        context = await browser.newContext();
    }
    page = await context.newPage()
})
After(async function ({ pickle, result }) {
    let video = ''
    if (result.status == Status.FAILED) {
        //screenshot
        const image = await page.screenshot({ path: `test-output/screenshot/${pickle.name}.png`, type: 'png' })
        //attach to the report
        this.attach(image, 'image/png')
    }
    await page.waitForTimeout(2 * 1000)
    if (result.status != Status.SKIPPED) {
        await page.close();
        await context.close();
    }
    if(executionConfig.recordVideo.toLowerCase().trim() == 'on'){
        video = await page.video().path()
        this.attach(fs.readFileSync(video), 'video/webm')
    }

})
AfterAll(async function () {
    browser.close()
    executionTime.endTime = dateTimeWithMilliSec()
})

