module.exports = {
  presets: [
    ["@babel/preset-env",{
        targets: {
            browsers: ["defaults", "not ie 11"]
        },
        corejs: {
          version: 3,
          proposals: true
        },
        useBuiltIns:"usage"
    }],
    ["@vue/babel-preset-jsx"]
  ],
  plugins : [
     ["@babel/plugin-transform-runtime",{
       corejs:3
     }],
     ["@babel/plugin-syntax-dynamic-import"]
  ]
}
