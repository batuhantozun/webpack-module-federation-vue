# Webpack Module Federation with Vue

> Basic module federation setup with vue 3 and webpack 5

This repository is to experiment of Webpack 5's new Module Federation with Vue 3.

Here is the simple micro frontends architecture;

[Container App](./container-app) &mdash; Host application. Consumes child apps.

[Child App](./container-app) &mdash; Remote application. Expose own components.

### Prerequisites
- Node & NPM

### Install
install and serve all applications.

[Install Container App](./container-app/README.md)

[Install Child App](./child-app-first/README.md)
