import Jiange from './contracts/Jiange'

const options = {
  web3: {
    block: false
  },
  contracts: [Jiange],
  events: {
    Jiange: ['worship', 'sendMsg']
  }
}

export default options
