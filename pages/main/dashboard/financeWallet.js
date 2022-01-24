import React from "react";
import Head from 'next/head';
import dynamic from "next/dynamic";
import CircularProgress from "../../../app/components/CircularProgress";

const FinanceWallet = dynamic(() => import('../../../routes/main/Dashboard/FinanceWallet'), {
  loading: () => <CircularProgress/>,
});

const CryptoPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>FinanceWallet Dashboard</title>
      </Head>
      <FinanceWallet/>
    </React.Fragment>
  );
}

export default CryptoPage;
