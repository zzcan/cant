export default {
  esm: 'babel',
  cjs: 'babel',
  umd: {
    minFile: true,
  },
  lessInBabelMode: true,
  runtimeHelpers: true,
  autoprefixer: {
    browsers: [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
  },
};
