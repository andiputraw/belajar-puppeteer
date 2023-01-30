import puppeteer,{Browser,Page} from "puppeteer";
import CONFIG from "./config";


(async () => {
    const browser : Browser = await puppeteer.launch();
    const page : Page = await browser.newPage();

    await page.setViewport({width:1920,height:1080})
    await page.goto("https://facebook.com/");

    if(CONFIG.username === null || CONFIG.password === null){
        throw new Error("Isi email dan password terlebih dahulu di .env")
    }
    
    //* Masukan email dan password
    await page.type('#email',CONFIG.username);
    await page.type('#pass', CONFIG.password)

    //*click tombol sign-in
    await Promise.all([page.waitForNavigation(),page.click('form button')])
    await page.screenshot({ path : "screenshoot/debug1.png"});

    //*click photo
    await Promise.all([page.click('div[role=region] div[role=button]:nth-child(2)'),page.waitForSelector('div[role=presentation] > div > div > div > div > p')])
    
    await page.type('div[role=presentation] > div > div > div > div > p',"Minggu 15 \n\n Semoga tulisannya rapih \n\n Ya setelah sekian lama, Akhirnya ada niatan lagi buat lanjut belajar. hari ini belajar puppeteer,  gak tau juga sih mau scraping apaan. semoga benda ini berguna suatu saat nanti")
    await page.click('div[aria-label=Post]')
    await page.screenshot({ path : "screenshoot/debug2.png"});
    


    console.log('selesai')
    await browser.close();
})();