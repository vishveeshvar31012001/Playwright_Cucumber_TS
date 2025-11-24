import { Page } from '@playwright/test';
import KeywordWrapper from '../helper/wrapper/keywordWrapper.ts'
export default class LoginPage{
    private base:KeywordWrapper;
    constructor(private page:Page){
        this.base=new KeywordWrapper(page)
    }

    private elements={
        txtUsername:this.page.getByRole('textbox',{name:'username'}),
        txtPassword:this.page.getByRole('textbox',{name:'password'}),
        btnLogin:this.page.getByRole('button',{name:'Login'}),
        txtErrorMes:this. page.locator('.oxd-alert-content-text')
    }

    enterUserName=async (username:string)=>{
        await this.base.object_setValue(this.elements.txtUsername,username)
    }

    enterPassword=async (password:string)=>{
        await this.base.object_setValue(this.elements.txtPassword,password)
    }

    clickLogin=async()=>{
        await this.base.object_click(this.elements.btnLogin)
    }

    verifyErrorMes=async(message:string)=>{
        await this.base.object_verify_text(this.elements.txtErrorMes,message)
    }
    
}
