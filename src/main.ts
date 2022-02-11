import './style.css'

import { testA } from './test-modules/test-a'
import { testB } from './test-modules/test-b'

const app = document.querySelector<HTMLDivElement>('#app')!

const longLongMessage =
  '長い長いメッセージだよ長い長いメッセージだよ長い長いメッセージだよ長い長いメッセージだよ長い長いメッセージだよ長い長いメッセージだよ長い長いメッセージだよ長い長いメッセージだよ長い長いメッセージだよ長い長いメッセージだよ長い長いメッセージだよ長い長いメッセージだよ長い長いメッセージだよ長い長いメッセージだよ長い長いメッセージだよ長い長いメッセージだよ長い長いメッセージだよ長い長いメッセージだよ長い長いメッセージだよ長い長いメッセージだよ長い長いメッセージだよ長い長いメッセージだよ長い長いメッセージだよ長い長いメッセージだよ長い長いメッセージだよ長い長いメッセージだよ長い長いメッセージだよ長い長いメッセージだよ長い長いメッセージだよ長い長いメッセージだよ長い長いメッセージだよ長い長いメッセージだよ長い長いメッセージだよ長い長いメッセージだよ長い長いメッセージだよ長い長いメッセージだよ長い長いメッセージだよ長い長いメッセージだよ'

app.innerHTML = `
  <h1>Hello Vite!</h1>
  <p>${longLongMessage}</p>
  <p>${testA}</p>
  <p>${testB}</p>
  <p></p>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`
