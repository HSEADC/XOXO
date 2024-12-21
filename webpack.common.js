const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackPartialsPlugin = require('html-webpack-partials-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')

const webpack = require('webpack')
const path = require('path')

module.exports = {
  entry: {
    index: './src/index.js',
    toggleClick: './src/javascripts/toggleClick.js',
    terminHover: './src/javascripts/terminHover.js',
    swiper: './src/javascripts/swiper.js',
    burgerMenu: './src/javascripts/burgerMenu.js',
    terminClick: './src/javascripts/terminClick.js',
    preloader: './src/javascripts/preloader.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'docs'),
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: ['@babel/plugin-proposal-class-properties']
          }
        }
      },
      {
        test: /\.(sa|sc|c)ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [['postcss-preset-env']]
              }
            }
          },
          'sass-loader'
        ]
      },
      {
        test: /\.html$/i,
        loader: 'html-loader'
      },
      {
        resourceQuery: /raw/,
        type: 'asset/source'
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|webp)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'images/[hash][ext][query]'
        }
      },
      {
        test: /\.(ttf|otf|woff|woff2|eot)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[hash][ext][query]'
        }
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    }),

    // Index
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: './index.html',
      chunks: ['index', 'burgerMenu']
    }),
    new HtmlWebpackPlugin({
      template: './src/main.html',
      filename: './main.html',
      chunks: ['index']
    }),
    new HtmlWebpackPlugin({
      template: './src/styleguide.html',
      filename: './styleguide.html',
      chunks: ['index']
    }),
    // Страницы разделов
    new HtmlWebpackPlugin({
      template: './src/articles.html',
      filename: './articles.html',
      chunks: ['index', 'burgerMenu']
    }),
    new HtmlWebpackPlugin({
      template: './src/tests.html',
      filename: './tests.html',
      chunks: ['index', 'burgerMenu']
    }),
    new HtmlWebpackPlugin({
      template: './src/cards.html',
      filename: './cards.html',
      chunks: ['index']
    }),
    new HtmlWebpackPlugin({
      template: './src/aboutUs.html',
      filename: './aboutUs.html',
      chunks: ['index', 'swiper', 'burgerMenu']
    }),
    // Страницы статей
    new HtmlWebpackPlugin({
      template: './src/articles/contraception/extra-contraception.html',
      filename: './articles/contraception/extra-contraception.html',
      chunks: ['index']
    }),
    new HtmlWebpackPlugin({
      template: './src/articles/sex/article2.html',
      filename: './articles/sex/article2.html',
      chunks: ['index', 'terminClick', 'burgerMenu', 'preloader']
    }),
    // Страницы тестов
    new HtmlWebpackPlugin({
      template: './src/tests/test1.html',
      filename: './tests/test1.html',
      chunks: ['index']
    }),
    new HtmlWebpackPlugin({
      template: './src/tests/test2.html',
      filename: './tests/test2.html',
      chunks: ['index']
    }),

    // Internal pages
    // new HtmlWebpackPlugin({
    //   hash: true,
    //   scriptLoading: 'blocking',
    //   template: './src/pages/page.html',
    //   filename: './pages/page.html',
    //   chunks: ['page']
    // }),

    // Partials
    new HtmlWebpackPartialsPlugin([
      {
        path: path.join(__dirname, './src/partials/footer.html'),
        location: 'footerPartial',
        template_filename: '*',
        priority: 'replace'
      }
    ])
  ],
  optimization: {
    minimizer: [new CssMinimizerPlugin()]
  }
}
