import type { NextPage } from 'next';
import styles from '../styles/Ui.module.scss';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { CSSTransition } from 'react-transition-group';

const Ui: NextPage = (props) => {
  return (
    <div className={styles.container}>
      {/* <Image
        src={`/badges/${labelName}/${currentLabel.rank}.png`}
        width={36}
        height={36}
      /> */}
    </div>
  );
};

export default Ui;
