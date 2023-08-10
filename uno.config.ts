import { defineConfig, presetUno } from 'unocss'

export default defineConfig({
    presets: [presetUno()],
    rules: [[/^letter-spacing-(.+)$/, ([, s]) => ({ 'letter-spacing': `${s}` })]],
})
