import Web3 from 'web3';

let web3;

if (window.ethereum) {
  web3 = new Web3(window.ethereum);
  window.ethereum.enable();
} else {
  console.log('MetaMask is not installed');
}

export const payWithMetaMask = async (amount) => {
  const accounts = await web3.eth.getAccounts();
  const transactionParameters = {
    to: '0x9dd9c2d208b07bf9a4ef9ca311f36d7185749635',
    from: accounts[0],
    value: web3.utils.toHex(web3.utils.toWei(amount, 'ether')),
  };

  return await window.ethereum.request({
    method: 'eth_sendTransaction',
    params: [transactionParameters],
  });
};