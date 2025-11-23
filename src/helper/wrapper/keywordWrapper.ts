import { expect, Locator, Page } from "@playwright/test";

export default class KeywordWrapper{
    constructor(private page:Page){}

    async goto_url(url:string){
        await this.page.goto(url,{
            waitUntil:'domcontentloaded'
        })
    }

    async object_click(locator:Locator){
       await locator.click();
    }

    async object_setValue(locator:Locator,value:string){
        await locator.fill(value)
    }

    async object_wait(locator:Locator,condition:string){
        if(condition.toLowerCase()=='visible')
            await locator.waitFor({state:'visible'})
        else if(condition.toLowerCase()=='hidden')
            await locator.waitFor({state:'hidden'})
        else if(condition.toLowerCase()=='attached')
            await locator.waitFor({state:'attached'})
    }

    async object_verify_text(locator:Locator,value:string){
        await locator.waitFor({state:'visible'})
        expect(await locator.innerText()).toBe(value)
    }

}
