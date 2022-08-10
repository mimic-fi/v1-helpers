import { BigNumber } from 'ethers'

import { bn } from './numbers'

export const maxUint = (e: number): BigNumber => bn(2).pow(e).sub(1)

export const MAX_UINT256: BigNumber = maxUint(256)
export const ZERO_ADDRESS = '0x0000000000000000000000000000000000000000'
export const ZERO_BYTES32 = '0x0000000000000000000000000000000000000000000000000000000000000000'
