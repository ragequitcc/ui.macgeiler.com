import type { NextPage } from 'next';
import styles from '../styles/Config.module.scss';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import { useEffect, useState } from 'react';

const Ui: NextPage = (props) => {
  const [currentLabel, setLabel] = useState('');
  const [labelList, setLabelList] = useState([]);

  const newLabel = async (label: string) => {
    await fetch(`/api/labels/${label.slice(0, label.length - 4)}`, {
      method: 'GET',
    })
      .then(data => {
        console.log(data);
        return data.json();
      })
      .then(data => {
        console.log(data);
        setLabel(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    const initFetch = async () => {
      await fetch('/api/labels/all', {
        method: 'GET',
      })
        .then(data => {
          return data.json();
        })
        .then(data => {
          newLabel(data[0]);
          setLabelList(data);
        })
        .catch((error) => {
          // fug.
          alert('shit.')
        });
    };

    initFetch();
  }, []);

  return <div className={styles.container}>{currentLabel}</div>;
};

export default Ui;
