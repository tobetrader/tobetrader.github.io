'use strict'

const fs = require('fs')
const path = require('path')
const chalk = require('chalk')

const { articleDirectory, buildDirectory, articleDataFile } = require('./paths.cjs')

const includeDirs = ['bigcard', 'daily', 'industrynav', 'knowledge', 'news', 'viewpoint']

const CONVERT_FILE_SUFFIX = '.md'

const ignoreFiles = ['index.md', 'README.md']

function convert (dirPath, articles) {
  const dirs = fs.readdirSync(dirPath)
  dirs.forEach(dir => {
    const p = path.resolve(dirPath, dir)
    const dirInfo = fs.statSync(p)
    if (dirInfo.isDirectory()) {
      if (includeDirs.includes(dir)) {
        convert(p, articles)
      }
    } else if (dirInfo.isFile() && dir.match(CONVERT_FILE_SUFFIX) && !ignoreFiles.includes(dir)) {


      let relativeParentDirPath = (dirPath.split(articleDirectory))[1]
      if (relativeParentDirPath) {
        relativeParentDirPath = relativeParentDirPath.substr(1)
      }
      const parentDirPath = path.resolve(buildDirectory, relativeParentDirPath)
      const fileName = dir.split('.')[0] || 'template'
      const article = { key: fileName }
      let text = fs.readFileSync(p, 'utf-8')
      const matchs = text.split('---')
      if (matchs && matchs.length > 2) {
        const keyValues = matchs[1].split('\n')
        keyValues.forEach(kv => {
          if (kv) {
            const index = kv.indexOf(':')
            const key = kv.substring(0, index)
            const value = kv.substring(index + 1)
            article[key.trim()] = value.trim()
          }
        })
      }
      
      const relativeDirs = parentDirPath.split(buildDirectory)
      if (relativeDirs[1]) {
        const key = relativeDirs[1].substring(1).replace('/', '.')
        if (!articles[key]) {
          articles[key] = []
        }
        if (!article.views) {
          article.views = `${relativeDirs[1]}/${fileName}.html`
        }
        articles[key].push(article)
      } else {
        if (!articles.root) {
          articles.root = []
        }
        articles.root.push({ views: `${fileName}.html`, ...article })
      }
    }
    // if (includeDirs.includes(dir)) {
      
    //   let relativeParentDirPath = (dirPath.split(articleDirectory))[1]
    //   if (relativeParentDirPath) {
    //     relativeParentDirPath = relativeParentDirPath.substr(1)
    //   }
    //   const parentDirPath = path.resolve(buildDirectory, relativeParentDirPath)

    //   const p = path.resolve(dirPath, dir)
    //   const dirInfo = fs.statSync(p)
    //   if (dirInfo.isDirectory()) {
    //     convert(p, articles)
    //   } else if (dirInfo.isFile() && dir.match(CONVERT_FILE_SUFFIX) && !ignoreFiles.includes(dir)) {
    //     const fileName = dir.split('.')[0] || 'template'
    //     const article = { key: fileName }
    //     let text = fs.readFileSync(p, 'utf-8')
    //     const matchs = text.split('---')
    //     if (matchs && matchs.length > 2) {
    //       const keyValues = matchs[1].split('\n')
    //       keyValues.forEach(kv => {
    //         if (kv) {
    //           const index = kv.indexOf(':')
    //           const key = kv.substring(0, index)
    //           const value = kv.substring(index + 1)
    //           article[key.trim()] = value.trim()
    //         }
    //       })
    //     }
        
    //     const relativeDirs = parentDirPath.split(buildDirectory)
    //     if (relativeDirs[1]) {
    //       const key = relativeDirs[1].substring(1).replace('/', '.')
    //       if (!articles[key]) {
    //         articles[key] = []
    //       }
    //       if (!article.views) {
    //         article.views = `${baseUrl}${relativeDirs[1]}/${fileName}.html`
    //       }
    //       articles[key].push(article)
    //     } else {
    //       if (!articles.root) {
    //         articles.root = []
    //       }
    //       articles.root.push({ views: `${baseUrl}/${fileName}.html`, ...article })
    //     }
    //   }
    // }
  })
}

function build () {

  console.log('Start generate data...')
  const articles = {}
  convert(articleDirectory, articles)
  console.log()

  if (fs.existsSync(articleDataFile)) {
    fs.unlinkSync(articleDataFile)
  }
  fs.writeFileSync(articleDataFile, JSON.stringify(articles), 'utf-8')

  console.log(chalk.blue('Generate data completed!'))

  console.log()
}

build()
