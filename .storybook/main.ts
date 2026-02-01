import type { StorybookConfig } from '@storybook/react-vite'

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@chromatic-com/storybook', // отвечает за регрессионные (скриншотные) тесты
    '@storybook/addon-docs', // генерация документации по компонентам прямо в Storybook
  ],
  framework: '@storybook/react-vite',
}
export default config
