import { getDefaultConfig, Chain, } from '@rainbow-me/rainbowkit';
import {
  /*
  arbitrum,
  base,
  mainnet,
  optimism,
  polygon,*/
  sepolia,
  arbitrumSepolia,
} from 'wagmi/chains';

const avalanche = {
  id: 201250004,
  name: 'Arbitrum Orbit AvailDA',
  iconUrl: 'https://s2.coinmarketcap.com/static/img/coins/64x64/11841.png',
  iconBackground: '#fff',
  nativeCurrency: { name: 'Ethereum', symbol: 'ETH', decimals: 18 },
  rpcUrls: {
    default: { http: ['http://127.0.0.1:8449'] },
  },
  blockExplorers: {
    default: { name: 'Explorer', url: 'http://localhost' },
  },
} as const satisfies Chain;

export const config = getDefaultConfig({
  appName: 'Medical Recods DA',
  projectId: 'MEDICALRECORDSDA',
  chains: [
    avalanche,
    //arbitrumSepolia,
    /*
    mainnet,
    polygon,
    optimism,
    arbitrum,
    base,*/
    ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === 'true' ? [sepolia] : []),
  ],
  ssr: true,
});