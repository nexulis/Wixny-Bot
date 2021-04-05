const lolcatjs = require('lolcatjs')
const figlet = require('figlet')

lolcatjs.options.seed = Math.round(Math.random() * 1000);
lolcatjs.options.colors = true;

lolcatjs.fromString('[INFO] hola, yo soy Tu sunao nako bot')
lolcatjs.fromString('[SYSTEM] iniciando bot...')
console.log('------------------------------------------------')
let { spawn } = require('child_process')
let path = require('path')
const CFonts  = require('cfonts')
CFonts.say('sunao nako', {
  font: 'chrome',
  align: 'center',
  gradient: ['red', 'magenta']
})
CFonts.say('\'Bot sunao nako \' By wixny', {
  font: 'console',
  align: 'center',
  gradient: ['red', 'magenta']
})
console.log('------------------------------------------------')

function start() {
  let args = [path.join(__dirname, 'nzwa.js'), ...process.argv.slice(2)]
  CFonts.say([process.argv[0], ...args].join(' '), {
    font: 'console',
    align: 'center',
    gradient: ['red', 'magenta']
  })
  let p = spawn(process.argv[0], args, {
    stdio: ['inherit', 'inherit', 'inherit', 'ipc']
  })
  .on('message', data => {
    if (data == 'reset') {
      console.log('RESET')
      p.kill()
      start()
      delete p
    }
  })
}

start()
console.log('------------------------------------------------')
lolcatjs.fromString('[REB] Wixny')
