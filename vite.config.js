import { defineConfig } from 'vite'

export default defineConfig({
  // 多页面配置
  build: {
    rollupOptions: {
      input: {
        main: './index.html',
        menu: './menu.html',
        home: './pages/home.html',
        about: './pages/about.html',
        archive: './pages/archive.html',
        lab: './pages/lab.html',
        manifesto: './pages/manifesto.html'
      }
    }
  }
})