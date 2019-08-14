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

start()