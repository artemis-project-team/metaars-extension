import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { toDataUrl } from '../../../../lib/blockies'
import contractMap from 'eth-contract-metadata'
import { checksumAddress } from '../../../helpers/utils/util'
import Jazzicon from '../jazzicon'

const getStyles = diameter => (
  {
    height: diameter,
    width: diameter,
    borderRadius: diameter / 2,
  }
)

export default class Identicon extends PureComponent {
  static propTypes = {
    address: PropTypes.string,
    className: PropTypes.string,
    diameter: PropTypes.number,
    image: PropTypes.string,
    useBlockie: PropTypes.bool,
  }

  static defaultProps = {
    diameter: 46,
  }

  renderImage () {
    const { className, diameter, image } = this.props

    return (
      <img
        className={classnames('identicon', className)}
        src={image}
        style={getStyles(diameter)}
      />
    )
  }

  renderJazzicon () {
    const { address, className, diameter } = this.props

    return (
      <Jazzicon
        address={address}
        diameter={diameter}
        className={classnames('identicon', className)}
        style={getStyles(diameter)}
      />
    )
  }

  renderBlockie () {
    const { address, className, diameter } = this.props

    return (
      <div
        className={classnames('identicon', className)}
        style={getStyles(diameter)}
      >
        <img
          src={toDataUrl(address)}
          height={diameter}
          width={diameter}
        />
      </div>
    )
  }

  render () {
    const { className, address, image, diameter, useBlockie } = this.props

    if (image) {
      return this.renderImage()
    }

    if (address) {
      const checksummedAddress = checksumAddress(address)

      if (contractMap[checksummedAddress] && contractMap[checksummedAddress].logo) {
        return this.renderJazzicon()
      }

      return useBlockie
        ? this.renderBlockie()
        : this.renderJazzicon()
    }

    return (
      <img
        className={classnames('balance-icon', className)}
        src="./images/ars_logo.svg"
        style={getStyles(diameter)}
      />
    )
  }
}
