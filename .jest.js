// refer react-script test https://github.com/facebook/create-react-app/blob/282c03f952/packages/react-scripts/scripts/utils/createJestConfig.js
module.exports = {
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  setupFilesAfterEnv: ['./setupTests.ts'],
  "transform": {
    "\\.[jt]sx?$": "babel-jest",
    '^.+\\.(le)|css$': './jest/cssTransform.js',
  },
}
