const puppeteer = require('puppeteer');

const URL_TEST = 'https://qa-routes.praktikum-services.ru/';

async function testTaxiResult() {
    /// Запуск браузера
    const browser = await puppeteer.launch({headless: false, slowMo: 100});

    /// Создание новой вкладки в браузере
    const page = await browser.newPage();

    /// Переход по ссылке
    await page.goto(URL_TEST);

    /// Шаг 1: ввод часов и минут
    const hoursInput = await page.$('#form-input-hour');
    await hoursInput.type('08');

    const minutesInput = await page.$('#form-input-minute');
    await minutesInput.type('00');
        
    /// Шаг 2: заполнение поля Откуда
    const fromInput = await page.$('#form-input-from');
    await fromInput.type('Усачева, 3');

    /// Шаг 3: заполнение поля Куда
    const toInput = await page.$('#form-input-to');
    await toInput.type('Комсомольский проспект, 18');
    
    /// Опционально - скриншот
    await page.screenshot({path: 'testTaxiResult.png'});

    /// Закрытие браузера
    await browser.close();
}

testTaxiResult(); 
