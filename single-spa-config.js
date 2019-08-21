import { registerApplication, start } from 'single-spa'

registerApplication(
  'root',
  () => {
    return import('./src/main.ts')
  },
  () => {
    return location.pathname.startsWith('/')
  }
)

import('./src/main.ts').then(data => {
  console.log('main', data)
})

registerApplication(
  'subApp',
  () => {
    return window.System.import('vueSpa')
  },
  () => {
    return location.href.includes('/sub-app')
  }
)

window.System.import('vueSpa').then(data => {
  console.log('vueSpa', data)
})
start()