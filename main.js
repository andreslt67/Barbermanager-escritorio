//en esta ventana va la logica y configuracion de electron
const { app, BrowserWindow, Menu } = require('electron');
const url = require('url');
const path = require('path');

let ventana;

const templateMenu = [
];

if (process.env.NODE_ENV !== 'production') {
    templateMenu.push({
      label: 'DevTools',
      submenu: [
        {
            label: 'Show/Hide Dev Tools',
            accelerator: process.platform == 'darwin' ? 'Comand+D' : 'Ctrl+D',
            click(item, focusedWindow) {
            focusedWindow.toggleDevTools();
            }
        },
        {
            role: 'reload'
        }
      ]
    })
  }

// if you are in Mac, just add the Name of the App
if (process.platform === 'darwin') {
        templateMenu.unshift({
        label: app.getName(),
    });
};


function crearVentana() {
    ventana = new BrowserWindow({ //aqui se configura la ventana
        width: 1450,
        height: 800,
        title: 'BarberManager',
        backgroundColor: '#ffffff'
    })

    ventana.loadURL(url.format({
            pathname: path.join(__dirname, `dist/index.html`),
            protocol: "file",
            slashes: true
        })
    ); //cargar la pagina de la ventana

    // Menu
  //const mainMenu = Menu.buildFromTemplate(null);
  // Set The Menu to the Main Window
  Menu.setApplicationMenu(null);

    //cuando se cierra la ventana
    ventana.on('closed', function() {
        ventana = null
    })
}

//no consigo abrir una nueva ventana desde algún componente angular
function registrarEstablecimientoWindow() {
  registroWindow = new BrowserWindow({
    width: 400,
    height: 330,
    title: 'Registrar Peluquería'
  });
  registroWindow.setMenu(null);

  registroWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'dist/app/win-peluqueria/win-peluqueria.component.html'),
    protocol: 'file',
    slashes: true
  }));
  registroWindow.on('closed', () => {
    registroWindow = null;
  });
}

if(process.env.NODE_ENV !== 'production') {
    require('electron-reload')(__dirname, {
      electron: path.join(__dirname, '../node_modules', '.bin', 'electron')
    });
  }

//crear ventana al iniciar electron
app.on('ready', crearVentana)

//si se cierran todas las ventanas salir
app.on('window-all-closed', function() {

    // en macOS 
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', function() {

    // en macOS 
    if (ventana === null) {
        crearVentana()
    }
})