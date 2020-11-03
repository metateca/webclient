import { useState, useEffect } from "react"
import {getMainPoolAddress, handleChange, handleCommit, handleFinalise, loadPool, handleFormConnect, handleValueChange} from "../components/handlers"
import Select from 'react-select'
import FormInput from '../components/FormInput'

const initLockDetails = {
    amount: "",
    index: "",
    locker: "",
    pool: "",
}

const options = [
    { value: '0x9E237f4a7AD90FfAFB0adEf703186F91428a6a38', label: 'BTC / FUSD' },
    { value: '0x0000000000000000000000000000000000000000', label: 'BTC / ETH' },
  ]

export default function Swap({getAddress, address}){
    const [selectedPair, setSelectedPair] = useState(options[0])
    const {label, value} = selectedPair
    const [externalCoin, onChainCoin] = label.split(' / ')
    const [ratio, setRatio] = useState(1)
    const [pools, setPools] = useState({})
    const [lockDetails, setLockdetails] = useState(initLockDetails)

    const [coinsAmount, setCoinsAmount] = useState({externalCoin: 0, onChainCoin: 0})

    useEffect(() => {
        if(!address)return
        (async () => {
            const _pools = await loadPool(getMainPoolAddress(label))
            setPools(_pools)
        })()
    },[label, address])

    useEffect(() => {
        setCoinsAmount({externalCoin: 0, onChainCoin: 0})
        setRatio({'BTC / FUSD': 13_000, 'BTC / ETH': 35.85}[label])
    }, [label])

    const mainPoolAddress = getMainPoolAddress(label)
    
    return <div className="w-full shadow p-4 rounded">
        <form onSubmit={(e) =>{e.preventDefault()}}>
            <div className="w-full flex justify-end mb-1 text-xs">
                <button disabled={!!address} onClick={getAddress} className="p-1 flex justify-center items-center underline">{formatConnected(address)} <span className={`inline-block h-3 w-3 ml-2 rounded-full ${address?'bg-green-400':'bg-red-500'}`}></span></button>
            </div>
            <Select instanceId="select-select" defaultValue={options[0]} placeholder="Select pair" options={options} name="address" onChange={setSelectedPair} />
            <FormInput label="Send" value={coinsAmount.externalCoin} onChange={handleValueChange(setCoinsAmount, ratio)} name={'externalCoin'} coin={externalCoin} />
            <FormInput label="Receive" value={coinsAmount.onChainCoin} onChange={handleValueChange(setCoinsAmount, ratio)} name={'onChainCoin'} coin={onChainCoin} balance="13,000.00" />
            <div className="text-sm mt-3"><span>Rate:</span> <span>1 {externalCoin} = {ratio} {onChainCoin}</span> <span className="float-right">Fee: 0.0001 ETH</span></div>
            <div className="w-full flex py-4 pt-8 justify-between">
                <button className="w-2/5 h-10 text-yellow-200 bg-blue-500 hover:bg-blue-600 rounded shadow" disabled={lockDetails.pool!==""} onClick={handleCommit({mainPoolAddress, tokenAddress: value, amount:Number(coinsAmount.externalCoin)}, pools, setLockdetails)}>Commit</button>
                <button className="w-2/5 h-10 text-yellow-200 bg-blue-500 hover:bg-blue-600 rounded shadow" disabled={lockDetails.pool===""} onClick={handleFinalise({mainPoolAddress, tokenAddress: value, amount:Number(coinsAmount.externalCoin)}, lockDetails)}>Swap</button>
            </div>
            
        </form>
    </div>
}

const formatConnected = (address: string) => {
    const formated = address ? `${address.slice(0,5)}...${address.slice(address.length-5)}` : 'Connect Wallet'
    return formated
}
