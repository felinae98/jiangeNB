const Web3 = require('web3')
const contract = require('@truffle/contract')
const jiangenbContract = require('./contracts/Jiange.json')
const nodemailer = require('nodemailer')
const path = require('path')
const fs = require('fs')

var tosend = [
  '翦哥，我们想改群名片',
  '翦哥，你看看人家嘉熙',
  '翦哥，要抓紧了啊，大家都为你着急',
  '翦哥快去勾搭学妹啊'
]
var rawConfig = fs.readFileSync(path.join(__dirname, 'config.json'))
var config = JSON.parse(rawConfig)
console.log(config)

let transport = nodemailer.createTransport({
  host: config.senderHost,
  port: config.senderPort,
  auth: {
    user: config.senderUsername,
    pass: config.senderPassword
  }
})
console.log('login')

function selectRandomMsg() {
  var randomIndex = Math.floor(Math.random() * tosend.length)
  return tosend[randomIndex]
}

var provider = new Web3.providers.WebsocketProvider('wss://ropsten.infura.io/ws/493b443273084711a204bf33faeb28c3')
// var web3 = new Web3(provider)

// var jiange = new web3.eth.Contract(
//   jiangenbContract.abi,
//   jiangenbContract.networks['3'].address
// )
// jiange.events.worship({}, function (error, event) {
//   console.log(error)
//   console.log(event)
// })
// .on('data', function (event) {
//   console.log(event)
// })
// .on('changed', function(event){
//   // remove event from local database
// })
// .on('error', console.error);
var Jiange = contract(jiangenbContract)
Jiange.setProvider(provider)

Jiange.deployed().then(jiange => {
  console.log('start listen')
  jiange.worship().on('data', function(event){
    let msg = {
      from: 'felinae225@qq.com',
      to: config.jiangeEmail,
      subject: 'jiangeNB系统自动发送',
      text: selectRandomMsg()
    }
    transport.sendMail(msg, function(err, info) {
      if(err){
        console.log(err)
      } else {
        console.log(info)
      }
    })
  } )
})