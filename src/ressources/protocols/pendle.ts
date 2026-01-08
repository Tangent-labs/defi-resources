import { commonERC20 } from "../..";

export const PendlePools: {
    [key: string]: {
        MARKET: string;
        PT: string;
        SY: string;
        YT: string;
        UNDERLYING_IN: string[];
        UNDERLYING_OUT: string[];
    };
} = {
    "sUSDe 09/25/25": {
        MARKET: "0xA36b60A14A1A5247912584768C6e53E1a269a9F7",
        PT: "0x9F56094C450763769BA0EA9Fe2876070c0fD5F77",
        SY: "0xC01cde799245a25e6EabC550b36A47F6F83cc0f1",
        YT: "0x029d6247ADb0A57138c62E3019C92d3dfC9c1840",
        UNDERLYING_IN: [commonERC20.USDe, commonERC20.sUSDe],
        UNDERLYING_OUT: [commonERC20.sUSDe],
    },
    "USDe 09/25/25": {
        MARKET: "0x6d98a2b6CDbF44939362a3E99793339Ba2016aF4",
        PT: "0xBC6736d346a5eBC0dEbc997397912CD9b8FAe10a",
        SY: "0xf3DbdE762E5B67FaD09d88da3dfD38A83f753FFe",
        YT: "0x48bbbEdc4d2491cc08915D7a5c7cc8A8EdF165da",
        UNDERLYING_IN: [commonERC20.USDe],
        UNDERLYING_OUT: [commonERC20.USDe],
    },
    "wstUSR 09/25/25": {
        MARKET: "0x09fA04Aac9c6d1c6131352EE950CD67ecC6d4fB9",
        PT: "0x23E60d1488525bf4685f53b3aa8E676c30321066",
        SY: "0x6c78661c00D797C9c7fCBE4BCacbD9612A61C07f",
        YT: "0x1E24B022329f3CA0083b12FAF75d19639FAebF6f",
        UNDERLYING_IN: [commonERC20.USR, commonERC20.wstUSR],
        UNDERLYING_OUT: [commonERC20.USR, commonERC20.wstUSR],
    },

    "USR 09/04/25": {
        MARKET: "0x33BdA865c6815c906e63878357335B28f063936c",
        PT: "0x5a5b93F762739fa94F3EcC0b34Af2e56702E7f70",
        SY: "0x6AFde97a0c27e57cf0582373F9D7dc2b9f1CC3A3",
        YT: "0x9ebd88a0368D53fdCAd9c72C47280fECBcCDCAA9",
        UNDERLYING_IN: [commonERC20.USR],
        UNDERLYING_OUT: [commonERC20.USR],
    },
    "sUSDe 27/11/25": {
        MARKET: "0xb6ac3d5da138918ac4e84441e924a20daa60dbdd",
        PT: "0xe6a934089bbee34f832060ce98848359883749b3",
        SY: "0xabf8165dd7a90ab75878161db15bf85f6f781d9b",
        YT: "0x28e626b560f1faac01544770425e2de8fd179c79",
        UNDERLYING_IN: [commonERC20.USDe, commonERC20.sUSDe],
        UNDERLYING_OUT: [commonERC20.USDe],
    },
    "sUSDf 29/01/26": {
        MARKET: "0xeb5819b31a0378407f43aba2f3e9d16b40aa5ec7",
        PT: "0x48e502fbb6ff2cc687d049150e2c8addc765a43a",
        SY: "0xa780d7f775b4eff6846a8c28981f086bc6a7d637",
        YT: "0xced7ce96ce7d1ea384137e071c2d3561f226d1f4",
        UNDERLYING_IN: [commonERC20.USDf, commonERC20.sUSDf],
        UNDERLYING_OUT: [commonERC20.USDf, commonERC20.sUSDf],
    },
    "USDe 27/11/25": {
        MARKET: "0x4eaa571eafcd96f51728756bd7f396459bb9b869",
        PT: "0x62c6e813b9589c3631ba0cdb013acdb8544038b7",
        SY: "0x925a15bd6a1582fa7c0ebbfc3dbd29c34f58340e",
        YT: "0x99c92d4da7a81c7698ef33a39d7538d0f92623f7",
        UNDERLYING_IN: [commonERC20.USDe],
        UNDERLYING_OUT: [commonERC20.USDe],
    },
    "sUSDe 05/02/26": {
        MARKET: "0xed81f8ba2941c3979de2265c295748a6b6956567",
        PT: "0xe8483517077afa11a9b07f849cee2552f040d7b2",
        SY: "0x50cbf8837791ab3d8dcfb3ce3d1b0d128e1105d4",
        YT: "0xe36c6c271779c080ba2e68e1e68410291a1b3f7a",
        UNDERLYING_IN: [commonERC20.USDe, commonERC20.sUSDe],
        UNDERLYING_OUT: [commonERC20.USDe],
    },
    "reUSD 25/06/26": {
        MARKET: "0xf5929a1c332ceab7918a4593a43db2b9ac20095f",
        PT: "0x3eaa0f0f0a5d3d595ae4e4b0d27f439d01c3e7b2",
        SY: "0x9487bd5a3b16ecb5f3184453e3ee75b800141648",
        YT: "0x03f1954443e73513a6fa6840685488a379ed6f64",
        UNDERLYING_IN: [commonERC20.reUSD],
        UNDERLYING_OUT: [commonERC20.reUSD],
    },
    "wstUSR 29/01/26": {
        MARKET: "0x39c3f8e0e7c6f44dc8f0397feb124517ba82e26e",
        PT: "0xfceeb7586bab730fa400a5bf3fcf298d0db4c7e7",
        SY: "0x6c78661c00d797c9c7fcbe4bcacbd9612a61c07f",
        YT: "0x112b56037552d9a5142493f44480ba98c2586805",
        UNDERLYING_IN: [commonERC20.USR, commonERC20.wstUSR],
        UNDERLYING_OUT: [commonERC20.USR, commonERC20.wstUSR],
    },
    "wstETH 25/06/26": {
        MARKET: "0xcfd848b9f6fef552204014ac67901223ad6bf679",
        PT: "0x9ce6478ef45bb1baac69efd8a3ea0ed110a43042",
        SY: "0xcbc72d92b2dc8187414f6734718563898740c0bc",
        YT: "0x12cc7b6ee36b1a33ebc33dc41c39d383b3b33896",
        UNDERLYING_IN: [commonERC20.CHAIN_COIN, commonERC20.WETH, commonERC20.stETH, commonERC20.wstETH],
        UNDERLYING_OUT: [commonERC20.stETH, commonERC20.wstETH],
    },
};
