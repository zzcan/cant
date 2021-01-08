module.exports = {
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  setupFilesAfterEnv: ['./setupTests.js'],
  "transform": {
    "\\.[jt]sx?$": "babel-jest",
    '^.+\\.(le)|css$': './jest/cssTransform.js',
  },
}
