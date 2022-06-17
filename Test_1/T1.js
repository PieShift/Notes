const puppeteer = require('puppeteer');

const URL_TEST = 'https://qa-routes.praktikum-services.ru/';

async function testTaxiResult() {
    /// Запуск браузера
    const browser = await puppeteer.launch({headless: false, slowMo: 100});

    console.log('Создание новой вкладки в браузере');
    const page = await browser.newPage();

    console.log('Переход по ссылке');
    await page.goto(URL_TEST);

    console.log('Шаг 1: ввод часов и минут');
    const hoursInput = await page.$('#form-input-hour');
    await hoursInput.type('08');

    const minutesInput = await page.$('#form-input-minute');
    await minutesInput.type('00');
        
    console.log('Шаг 2: заполнение поля Откуда');
    const fromInput = await page.$('#form-input-from');
    await fromInput.type('Усачева, 3');

    console.log('Шаг 3: заполнение поля Куда');
    const toInput = await page.$('#form-input-to');
    await toInput.type('Комсомольский проспект, 18');

    await page.screenshot({path: 'testTaxiResult.png'});

    console.log('Закрытие браузера');
    await browser.close();
}

testTaxiResult(); 
