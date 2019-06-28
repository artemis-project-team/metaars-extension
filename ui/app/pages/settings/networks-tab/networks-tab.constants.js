const defaultNetworksData = [
  {
    labelKey: 'artemis',
    iconColor: 'orange',
    border: '1px solid #6A737D',
    providerType: 'artemis',
    rpcUrl: 'http://10.0.2.93:8000',
    chainId: '15',
    ticker: 'ARS',
    blockExplorerUrl: 'http://10.0.2.93:3000/home',
  },
  {
    labelKey: 'localhost',
    iconColor: 'white',
    border: '1px solid #6A737D',
    providerType: 'localhost',
    rpcUrl: 'http://localhost:8545/',
    blockExplorerUrl: 'https://etherscan.io',
  },
  
]

export {
  defaultNetworksData,
}
