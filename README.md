### Setup

- Scaffold using vite `yarn create @vitejs/app new-project --template vanilla`
- Install prettier, eslint `yarn add --dev eslint prettier babel-eslint eslint-config-airbnb-base eslint-config-prettier eslint-plugin-prettier eslint-plugin-jsx-a11y eslint-plugin-import`
- Install tailwind `yarn add --dev tailwindcss@latest postcss@latest autoprefixer@latest`
- Create tailwind files `npx tailwindcss init -p`

### Snippets

Tailwind `styles.css`

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```
