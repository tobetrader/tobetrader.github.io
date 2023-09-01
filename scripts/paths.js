'use strict'

const fs = require('fs')
const path = require('path')

const rootDirectory = fs.realpathSync(process.cwd())

const resolveDirectory = (relativePath, root = rootDirectory) => path.resolve(root, relativePath)

module.exports = {
  resolveDirectory,
  rootDirectory,
  distDirectory: resolveDirectory('public'),
  articleDirectory: rootDirectory,
  buildDirectory: path.resolve(resolveDirectory('public'), 'article'),
  articleDataFile: path.resolve(resolveDirectory('public'), 'articles.json')
}
