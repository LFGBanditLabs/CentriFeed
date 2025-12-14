"use client";
import styles from "./page.module.css";
import ConnectWallet from "./components/ConnectWallet";
import ContractActions from "./components/ContractActions";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>CentriFeed</h1>
        <ConnectWallet />
        <div style={{ marginTop: 24 }}>
          <ContractActions />
        </div>
      </main>
    </div>
  );
}
