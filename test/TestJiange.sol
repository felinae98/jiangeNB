pragma solidity >=0.4.25 <0.6.0;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/Jiange.sol";

contract TestJiange {
    function testJiangenb() public {
        Jiange jiange = Jiange(DeployedAddresses.Jiange());
        uint retVal = jiange.jiangenb();
        Assert.equal(retVal, 1, "jiangenb failed");
        Assert.equal(jiange.getCurrentWorship(), 1, "jiangenb worshipVal failed");
    }
    function testJiangeddw() public {
        Jiange jiange = Jiange(DeployedAddresses.Jiange());
        uint retVal = jiange.jiangeddw();
        Assert.equal(retVal, 10, "jiangeddw failed");
        Assert.equal(jiange.getCurrentWorship(), 11, "jiangeddw worshipVal failed");
    }
    function testJiangetql() public {
        Jiange jiange = Jiange(DeployedAddresses.Jiange());
        uint retVal = jiange.jiangetql();
        Assert.equal(retVal, 100, "jiangetql failed");
        Assert.equal(jiange.getCurrentWorship(), 111, "jiangetql worshipVal failed");
    }
}