import Web3 from 'web3'
import {etc} from './config'
let web3 = new Web3(new Web3.providers.HttpProvider(etc.url))

export default web3

