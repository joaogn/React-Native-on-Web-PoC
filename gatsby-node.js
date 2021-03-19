exports.onCreateWebpackConfig = args => {
  args.actions.setWebpackConfig({
    resolve: {
      alias: {
        'react-native': 'react-native-web',
      },
    },
  });
};

exports.onCreateBabelConfig = ({ actions }) => {
  actions.setBabelPlugin({
    name: 'babel-plugin-inline-react-svg',
  });
  actions.setBabelPlugin({
    name: 'babel-plugin-inline-dotenv',
  });
};
