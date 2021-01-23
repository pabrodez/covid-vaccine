const fs = require('fs-extra')
const download = require('download')

const URL = "https://api.coronavirus.data.gov.uk/v2/data?areaType=overview&metric=cumPeopleVaccinatedFirstDoseByPublishDate&metric=cumPeopleVaccinatedSecondDoseByPublishDate&metric=newPeopleVaccinatedFirstDoseByPublishDate&metric=newPeopleVaccinatedSecondDoseByPublishDate&format=json"
const today = new Date()
const date = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`
const filename = `${date}.json`

download(URL, 'public/data', { filename }).then(async () => {
    await fs.copyFile(`./public/data/${filename}`, './public/data/latest.json')
    await fs.writeJSON('./public/data/updated.json', { updated: +new Date() })
}).catch(error => {
    console.error('Error while downloading resource', error)
})