import type { NextPage } from 'next';
import styles from '../styles/Home.module.scss';
import prisma from '../lib/prisma';

export const getServerSideProps = async () => {
  const config = await prisma.config.findMany();

  return {
    props: { config },
  };
};

type Config = {
  config: [{ labelPath: String; streamlabsApiKey: String }];
};

const Home: NextPage<Config> = ({ config }) => {
  return <div className={styles.container}>soon.</div>;
};

export default Home;
