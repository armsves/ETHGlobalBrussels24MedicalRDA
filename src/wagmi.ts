import { getDefaultConfig } from '@rainbow-me/rainbowkit';
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

export const config = getDefaultConfig({
  appName: 'Medical Recods DA',
  projectId: 'MEDICALRECORDSDA',
  chains: [
    arbitrumSepolia,
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