import { useReadContract } from "wagmi";
import { useState, useEffect } from "react";
import axios from "axios";
const ERC20_ABI = [
  {
    constant: true,
    inputs: [{ name: "_owner", type: "address" }],
    name: "balanceOf",
    outputs: [{ name: "balance", type: "uint256" }],
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "decimals",
    outputs: [{ name: "", type: "uint8" }],
    type: "function",
  },
];

const GetTokenBalance = ({ address, setSelectedToken, setWalletAssets }) => {
  const [tokens, setTokens] = useState([]);
  const [contracts, setContracts] = useState([]);

  useEffect(() => {
    // Fetch tokens from Moralis API
    const fetchTokens = async () => {
      try {
        const response = await axios.get(
          `https://deep-index.moralis.io/api/v2.2/wallets/${address}/tokens`,
          {
            headers: {
              "X-API-Key":
                "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub25jZSI6IjA3ZTEzMDM3LWRhZTMtNGFiNi05OTI3LWE3ZTBkYmJhNzBjNCIsIm9yZ0lkIjoiMTI3MzY5IiwidXNlcklkIjoiMTI3MDE1IiwidHlwZUlkIjoiNjdjNDIyZTctZGU2YS00Yjg3LTlhZGItN2ViZjNmMWMzNDIyIiwidHlwZSI6IlBST0pFQ1QiLCJpYXQiOjE3MjY4NDYwODUsImV4cCI6NDg4MjYwNjA4NX0.PBho29M0c4rQKQGbjYvNmoU9C1O7kfHljz4EoYXOj6M",
            },
          }
        );
        setTokens(response.data); // Adjust based on Moralis response structure
        setWalletAssets(response.data)
      } catch (error) {
        console.error("Error fetching token list:", error);
      }
    };

    fetchTokens();
  }, []);

  useEffect(() => {
    if (tokens.length > 0) {
      // Create contract configurations for useContractReads
      const contractsData = tokens.map((token) => ({
        address: token.token_address,
        abi: ERC20_ABI,
        functionName: "balanceOf",
        args: [address],
      }));
      setContracts(contractsData);
    }
  }, []);
  console.log(tokens)
  const { data: balances } = useReadContract({
    contracts: contracts,
    enabled: contracts.length > 0,
  });


  return (
    <div>
      {address ? (
        <div className="flex flex-wrap items-center justify-start py-1  ">
          <div className="flex flex-wrap justify-start ">
            {tokens?.result?.map((token, index) => {
              return (
                <div
                  onClick={() => {
                    setSelectedToken(token)
                  }}
                  key={index} className="flex basis-1/3 justify-end px-6 ">
                  <div className="w-max">
                    <input
                      readOnly
                      className="peer absolute opacity-0"
                      id="input-BridgeForm-input-radio-ETH"
                      name="currency"
                      type="radio"
                      value={token.symbol}
                      checked
                    />
                    <label
                      htmlFor="input-BridgeForm-input-radio-ETH"
                      id="label-BridgeForm-input-radio-ETH"
                      title="Ethereum (ETH)"
                      className="group z-10 flex justify-end gap-2 transition-colors peer-enabled:cursor-pointer peer-enabled:hover:text-white peer-disabled:text-camo-300 text-yellow-100"
                    >
                      <div className="typography-brand-body-l-caps text-current">
                        {Number(token.balance_formatted).toPrecision(3)}
                      </div>
                      <img
                        alt="$ETH Token"
                        loading="lazy"
                        width="24"
                        height="24"
                        decoding="async"
                        src={token.thumbnail}
                        style={{ color: "transparent" }}
                      />
                    </label>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default GetTokenBalance;
