## 服务端配置

### 安装

`$ npm install webpack webpack-cli webpack-node-externals @bable/preset-env @babel/core @babel/preset-react`

### 运行服务端

`$ npm run dev:server $ npm run dev:start`

## 客户端配置

### 安装

`$ npm install react react-dom react-dom-server express babel-loader`

### 运行客户端

`$ npm run dev:client`

## concurrently 同时运行多个命令

### 添加命令

`"start": "concurrently \"npm run dev:server\" \"npm run dev:start\" \"npm run dev:client\""`

### 运行

`npm install concurrently --save`

## 路由支持

### 客户端路由

- BrowserRouter

#### 安装

`npm install react-router-dom --save`

### 服务端路由

- StaticRouter

## store

### 安装

`npm install redux react-redux redux-thunk axios --save`
