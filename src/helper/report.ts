const report = require("multiple-cucumber-html-reporter");
import * as executionConfig from '../../executionConfig.json';
import os = require('os');
report.generate({
  jsonDir: "test-output",
  reportPath: "./test-output/",
  reportName:"Execution Report",
  pageTitle:"Orange HRM Report",
  metadata: {
    browser: {
      name: executionConfig.browser,
      version: executionConfig.browser,
    },
    device: os.platform(),
    platform: {
      name: os.type(),
      version: os.release(),
    },
  },
  customData: {
    title: "Run info",
    data: [
      { label: "Project", value: "Orange HRM project" },
      { label: "Release", value: executionConfig.releaseName },
      { label: "Cycle", value: executionConfig.cycleID },
    ],
  },
});
