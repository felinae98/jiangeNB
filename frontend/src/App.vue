<template>
  <div class="center">
    <el-card v-if="hasMetaMask" v-loading="!isDrizzleInitialized" class="card">
      <div slot="header">翦哥是世界的红太阳</div>
      <div class="horizontal-center">
        当前膜拜点数:
        <el-tooltip content="累计2000点膜拜点会提醒翦哥我们想改群名片" placement="top">
          <h1>{{currentWorship}}</h1>
        </el-tooltip>
      </div>
      <el-row type="flex" justify="space-around">
        <el-col :span="4">
          <el-tooltip content="增加1点膜拜点数">
            <el-button type="primary" @click="handleContractCall('jiangenb')">jiangenb</el-button>
          </el-tooltip>
        </el-col>
        <el-col :span="4">
          <el-tooltip content="增加10点膜拜点数">
            <el-button type="primary" @click="handleContractCall('jiangeddw')">jiangeddw</el-button>
          </el-tooltip>
        </el-col>
        <el-col :span="4">
          <el-tooltip content="增加100点膜拜点数">
            <el-button type="primary" @click="handleContractCall('jiangetql')">jiangetql</el-button>
          </el-tooltip>
        </el-col>
      </el-row>
    </el-card>
    <el-card v-else class="card">
      <div slot="header">使用教程</div>
      <div>
        <ol>
          <li>先在浏览器中安装MetaMask，注册一个私钥，设置一个密码，把私钥秘钥短语记在小本本上</li>
          <li>在网络选项里选Ropsten测试网络</li>
          <li>在<a href="https://faucet.metamask.io/" target="_blank">这里</a>领一个测试币</li>
          <li>然后刷新网页，告诉世界翦哥才是最牛逼的</li>
        </ol>
      </div>
    </el-card>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'app',
  components: {
  },
  computed: {
    ...mapGetters('accounts', ['activeAccount', 'activeBalance']),
    ...mapGetters('drizzle', ['isDrizzleInitialized', 'drizzleInstance']),
    ...mapGetters('contracts', ['contractInstances', 'getContractData']),
    hasMetaMask () {
      return typeof window.web3 !== 'undefined'
    },
    currentWorship () {
      return this.getContractData({
        contract: 'Jiange',
        method: 'getCurrentWorship'
      })
    }
  },
  data () {
    return {
    }
  },
  created () {
    this.$store.dispatch('drizzle/REGISTER_CONTRACT', {
      contractName: 'Jiange',
      method: 'getCurrentWorship',
      methodArgs: []
    })
    document.title = '翦哥nb！'
  },
  methods: {
    handleContractCall (method) {
      if (['jiangeddw', 'jiangenb', 'jiangetql'].indexOf(method) === -1) {
        return
      }
      this.drizzleInstance.contracts.Jiange.methods[method].cacheSend()
    }
  }
}
</script>

<style scoped>
.center {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 95vh;
}
.card {
  width: 600px;
}
.horizontal-center {
  text-align: center;
}
</style>
