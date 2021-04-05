const { resolve } = require('path')
const {app, BrowserWindow} = require('electron')

const renderWindow = () => {
    const view = new BrowserWindow({ autoHideMenuBar: true })
    view.loadURL(resolve(__dirname, 'views', 'mainView.html'))
}

app.whenReady().then(renderWindow).catch((err) => console.log(`Something wrong happened -> ${err}`))
