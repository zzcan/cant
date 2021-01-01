module.exports = {
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  setupFilesAfterEnv: ['./setupTests.ts'],
  "transform": {
    "\\.[jt]sx?$": "babel-jest",
    '^.+\\.(le)|css$': './jest/cssTransform.js',
  },
}
