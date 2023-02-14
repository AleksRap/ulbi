export const buildSvgLoader = () => ({
  test: /\.svg$/,
  use: [
    {
      loader: '@svgr/webpack',
      options: {
        svgoConfig: {
          plugins: [
            {
              name: 'removeAttrs',
              params: {
                attrs: '(fill|stroke)',
              },
            },
          ],
        },
      },
    },
  ],
});
