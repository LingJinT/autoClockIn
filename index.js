const puppeteer = require('puppeteer');
const goodMan = [
  {
    user: '2017082403',
    password: 'ljt123'
  },
  {
    user: '2017082426',
    password: 'hzhu0305'
  }
];

async function auto(person) {
  console.log(person);
  const browser = await puppeteer.launch({headless: false, defaultViewport: { width: 1600, height: 900 },args: [`--window-size=${1440},${1000}`]});
  const page = await browser.newPage();
  await page.goto('https://jkxxcj.zjhu.edu.cn/login.html');
  await page.waitFor(5000)
  await page.type('#zgh', person.user)
  await page.type('#mm', person.password)
  await page.waitFor(2000)
  await page.click('#loginBtn')
  await page.waitFor(5000)
  await page.click('#jkbg')
  await page.waitFor(10000)
  await page.click('#saveBtn')
  await page.waitFor(5000)
  await page.click('.layui-layer-btn0')
  await page.waitFor(5000)
  await page.click('.person')
  await page.waitFor(2000)
  await page.click('#logout')
  await page.waitFor(5000)
  await browser.close();
}

const interval = setInterval(()=>{
  const nowHours = new Date().getHours()
  console.log(nowHours);
  if(nowHours === 14) {
    clearInterval(interval)
    main()
  }
}, 30*60*1000);

async function main() {
  for (let i = 0; i < goodMan.length; i++) {
    await auto(goodMan[i])
  }
  console.log('完成')
}