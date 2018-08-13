###基于vue+elementUI，打造一个订单管理系统

#### 开发环境下：
开发环境着重：实时编译，开启模块热更新，生成sourcemap方便调试，接口代理转发

- 编写webpack配置文件时，参照vue示例，会发现示例文件特别注重sourcemap。例如在开发环境下，给vue-loader的样式options添加sourcemap。

- utils.js文件的cssLoaders生成vue-loader的配置项，它的格式如下
    ```
    {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
            loaders: {
                css: [
                    'vue-style-loader', {
                        loader: 'css-loader',
                        options: {
                            sourcemap: false
                        }
                    }
                ],
                postcss: [ // 个人觉得postcss在这里并没有什么用处...
                    'vue-style-loader', {
                        loader: 'css-loader',
                        options: {
                            sourcemap: false
                        }
                    }
                ],
                less: [
                    'vue-style-loader', {
                        loader: 'css-loader',
                        options: {
                            sourcemap: false
                        }
                    }, {
                        loader: 'less-loader',
                        options: {
                            sourcemap: false
                        }
                    }
                ],
                sass: [
                    'vue-style-loader', {
                        loader: 'css-loader',
                        options: {
                            sourcemap: false
                        }
                    }, {
                        loader: 'sass-loader',
                        options: {
                            sourcemap, false
                        }
                    }
                ]
                // ... stylus等
            }
        }
    }
    ```

- utils.styleLoaders生成非vue文件的样式配置项，格式如下：
    ```
    {
        test: /\.css$/,
        use: ['vue-style-loader', {
            loader: 'css-loader',
            options: {
                sourcemap: false
            }
        }, {
            loader: 'postcss-loader',
            options: {
                sourcemap: false
            }
        }]
    },
    {
       test: /\.sass$/,
       use: ['vue-style-loader', {
           loader: 'css-loader',
           options: {
               sourcemap: false
           }
       }, {
            loader: 'postcss-loader',
            options: {
                sourcemap: false
            }
        }, {
           loader: 'sass-loader',
           options: {
               sourcemap: false
           }
       }] 
    }
    // ...以此类推
    ```
- 提取css文件的步骤，在环境为production时配置，并且配置在vue-loader的外面，而非当成vue-loader的配置项。

- 配置Hot Module Replacement，需要在devServer里hot: true，同时在plugins里面添加new webpack.HotModuleReplacementPlugin()

#### 生产环境下：
    待补充


#### 其他
- 发现其实并不需要对vue-loader的options进行任何配置，因为已经对样式单独进行配置了