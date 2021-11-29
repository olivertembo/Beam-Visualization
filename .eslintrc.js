module.exports = {
  extends: ["react-app", "react-app/jest", "plugin:@typescript-eslint/recommended", "prettier", "plugin:storybook/recommended"],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error'
  }
};