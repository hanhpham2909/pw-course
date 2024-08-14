import {test} from '@playwright/test';

test('test 3',async ({page})=>{
    await page.goto(' https://material.playwrightvn.com/');
    
    //Thêm mới 100 todo item có nội dung “Todo <i>”

    await page
});