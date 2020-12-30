const {
  override,
  addLessLoader,
  addBundleVisualizer
} = require("customize-cra");

module.exports = override(
  addLessLoader(),
  addBundleVisualizer({
    "analyzerMode": "static",
    "reportFilename": "report.html"
  }, true)
)
