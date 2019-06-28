const {
  ROPSTEN,
  RINKEBY,
  KOVAN,
  MAINNET,
  GOERLI,
  ARTEMIS,
  ROPSTEN_CODE,
  RINKEYBY_CODE,
  KOVAN_CODE,
  GOERLI_CODE,
  ARTEMIS_CODE,
  ROPSTEN_DISPLAY_NAME,
  RINKEBY_DISPLAY_NAME,
  KOVAN_DISPLAY_NAME,
  MAINNET_DISPLAY_NAME,
  GOERLI_DISPLAY_NAME,
  ARTEMIS_DISPLAY_NAME,
} = require('./enums')

const networkToNameMap = {
  [ROPSTEN]: ROPSTEN_DISPLAY_NAME,
  [RINKEBY]: RINKEBY_DISPLAY_NAME,
  [KOVAN]: KOVAN_DISPLAY_NAME,
  [MAINNET]: MAINNET_DISPLAY_NAME,
  [GOERLI]: GOERLI_DISPLAY_NAME,
  [ROPSTEN_CODE]: ROPSTEN_DISPLAY_NAME,
  [RINKEYBY_CODE]: RINKEBY_DISPLAY_NAME,
  [KOVAN_CODE]: KOVAN_DISPLAY_NAME,
  [GOERLI_CODE]: GOERLI_DISPLAY_NAME,
  [ARTEMIS_CODE]: ARTEMIS_DISPLAY_NAME,
}

const getNetworkDisplayName = key => networkToNameMap[key]

module.exports = {
  getNetworkDisplayName,
}
