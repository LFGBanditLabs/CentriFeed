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
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation
          </a>
        </div>
      </main>
    </div>
  );
}
