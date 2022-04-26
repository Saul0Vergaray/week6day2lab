const {Builder, Capabilities} = require('selenium-webdriver');
require('chromedriver');

const driver = new Builder().withCapabilities(Capabilities.chrome()).build();

const {addMovie} = require('..//addMovie.js')

beforeEach(async () => {
    await driver.get('http://localhost:5500/exercises/automation/movieList/index.html')
})

afterAll(async () => {
    await driver.quit()
})

test('Add a Movie', async () =>{
await addMovie(driver)
await driver.sleep(3000)
})

test('Delete a Movie', async () =>{
    await deleteMovie(driver)
    await driver.sleep(3000)
})

test('Cross Of Movie', async () =>{
    await crossOffMovie(driver)
    await driver.sleep(3000)
})

test('Reveal Message', async () =>{
    await revealMessage(driver)
    await driver.sleep(3000)
})
