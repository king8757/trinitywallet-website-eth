export default {
  state: { //state
    version: '0.0.1',
    isLogin: false,        //登录标志
    isNightMode: false,     //夜间模式
    activeNavIndex: '1-1',    //当前active Nav
    isNavShow: true,          //Nav显示
    isMessageBoxShow: false,      //MessageBox显示
    NetMagic: "195378745719990331",     //网络magic
    NodeUriWebSocket: "",
    rpcIp: "",          //全节点调用ip
    walletInfo: {         //钱包信息
      keyStore: "",
      publicKey: "",
      address: ""
    },
    balanceData: {        //余额信息
      Chain: {
        "TNC": 0,
        "ETH": 0
      },
      Channel: {
        "TNC": 0,
        "ETH": 0
      }
    },
    channelList: [],        //通道列表
    addChannelInfo: [],       //添加通道信息
    closeChannelInfo: [],       //关闭通道信息
    contactList: {},            //联系人列表
    FoundertxDataSign: ""       //暂存签名后的FoundertxData
  },
  getters: {
    switchLogin(state) { //这里的state对应着上面这个state
      return !state.isLogin;
    },
    signOut(state) {
      state.walletInfo = {
        privateKey: "",
        publicKey: "",
        address: ""
      }
      return state.walletInfo;
    }
  },
  mutations: {
    switch_dialog(state) { //这里的state对应着上面这个state
      state.show = state.show ? false : true;
      //你还可以在这里执行其他的操作改变state
    }
  },
  actions: {
    switch_dialog(context) { //这里的context和我们使用的$store拥有相同的对象和方法
      context.commit('switch_dialog');
      //你还可以在这里触发其他的mutations方法
    }
  }
}