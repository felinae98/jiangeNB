const Jiange = artifacts.require('Jiange')

contract('Jiange', async accounts => {
    it('jiangenb', async () => {
        let jiange = await Jiange.deployed()
        let retval = await jiange.jiangenb()
        assert.equal(retval.logs[0].args['0'].toNumber(), 1)
        let curWorship = await jiange.getCurrentWorship.call()
        assert.equal(curWorship.toNumber(), 1)
    })
    it('jiangeddw', async () => {
        let jiange = await Jiange.deployed()
        let retval = await jiange.jiangeddw()
        assert.equal(retval.logs[0].args['0'].toNumber(), 11)
        let curWorship = await jiange.getCurrentWorship.call()
        assert.equal(curWorship.toNumber(), 11)
    })
    it('jiangetql', async () => {
        let jiange = await Jiange.deployed()
        let retval = await jiange.jiangetql()
        assert.equal(retval.logs[0].args['0'].toNumber(), 111)
        let curWorship = await jiange.getCurrentWorship.call()
        assert.equal(curWorship.toNumber(), 111)
    })
    it('sendMsg event', async () => {
        let jiange = await Jiange.deployed()
        for(let i = 0; i < 18; i++){
            await jiange.jiangetql()
        }
        let retval = await jiange.jiangetql()
        assert.equal(retval.logs.filter(log => log.event == 'sendMsg').length, 1)
    })
})