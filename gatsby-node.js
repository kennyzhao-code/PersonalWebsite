exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /react-modern-audio-player/,
            use: loaders.null(),
          },
        ],
      },
    })
  }
}

