pragma solidity ^0.5.0;
contract Jiange {
    uint public worshipVal;
    uint constant threshold = 2000;
    event worship(uint _curval);
    event sendMsg();
    function addWorshipVal(uint addVal) private returns (uint curVal) {
        uint cur = worshipVal / threshold;
        worshipVal += addVal;
        if(worshipVal / threshold != cur) {
            emit sendMsg();
        }
        emit worship(worshipVal);
        return worshipVal;
    }
    function getCurrentWorship() public view returns (uint) {
        return worshipVal;
    }
    function jiangenb() public returns (uint) {
        return addWorshipVal(1);
    }
    function jiangeddw() public returns (uint) {
        return addWorshipVal(10);
    }
    function jiangetql() public returns (uint) {
        return addWorshipVal(100);
    }
}