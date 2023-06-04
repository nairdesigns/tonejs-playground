module.exports = {
  transform: {},
  transformIgnorePatterns: [
    "/node_modules/(?!tone)/", // Allow transforming only 'tone' package
  ],
  testEnvironment: "node",
  extensionsToTreatAsEsm: [".js"], // Treat JS files as ES modules
  globals: {
    "ts-jest": {
      useESM: true, // Enable ES module support
    },
  },
};
