"use client"
import { openContractCall } from "@stacks/connect"
import { StacksMainnet } from "@stacks/network"
import { uintCV, ClarityValue } from "@stacks/transactions"

const DEPLOYER = "SP2QNSNKR3NRDWNTX0Q7R4T8WGBJ8RE8RA516AKZP"
const contracts = [
  { name: "curation" },
  { name: "tips" },
  { name: "attestations" },
  { name: "reputation" },
  { name: "funding" },
]

function call(contractName: string, functionName: string, args: ClarityValue[] = []) {
  return openContractCall({
    contractAddress: DEPLOYER,
    contractName,
    functionName,
    functionArgs: args,
    network: new StacksMainnet(),
    appDetails: { name: "CentriFeed", icon: window.location.origin + "/favicon.ico" },
    onFinish: () => {},
  })
}

export default function ContractActions() {
  return (
    <div style={{ display: "grid", gap: 16 }}>
      {contracts.map(c => (
        <div key={c.name} style={{ border: "1px solid #eee", padding: 12, borderRadius: 8 }}>
          <div style={{ fontWeight: 600 }}>{c.name}</div>
          <div style={{ display: "flex", gap: 8, marginTop: 8 }}>
            <button onClick={() => call(c.name, "pause")}>Pause</button>
            <button onClick={() => call(c.name, "unpause")}>Unpause</button>
            {c.name === "curation" && (
              <button onClick={() => call(c.name, "create-topic", [uintCV(100)])}>Create Topic</button>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}
