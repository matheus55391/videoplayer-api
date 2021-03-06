const fs = require('fs')
const path = require('path')

exports.GerarUrlAbsoluta = (nomeArquivo) =>{
    if(nomeArquivo.includes('.mp4')) return path.resolve(__dirname, '..', '..', 'public','videos', nomeArquivo)
    if(nomeArquivo.includes('.jpg') || nomeArquivo.includes('.png') ) return path.resolve(__dirname, '..', '..', 'public','thumbs', nomeArquivo) 
}

exports.CriarPastasPublicas = ()=>{
    if (!fs.existsSync(path.resolve(__dirname, '..','..', 'public'))) fs.mkdirSync(path.resolve(__dirname, '..', '..', 'public'))
    if (!fs.existsSync(path.resolve(__dirname, '..','..', 'public','videos'))) fs.mkdirSync(path.resolve(__dirname, '..', '..', 'public','videos'))
    if (!fs.existsSync(path.resolve(__dirname, '..','..', 'public','thumbs'))) fs.mkdirSync(path.resolve(__dirname, '..', '..','public','thumbs'))
}

exports.VerificaExisteThumb = (thumb)=>{
    if(fs.existsSync(path.resolve(__dirname, '..','..', 'public', 'thumbs', '${thumb}'))) return true
    return false
}