import type { NextPage } from "next";
import styles from "../styles/Config.module.scss";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import { useEffect, useState } from "react";

const Ui: NextPage = (props) => {
  const [currentLabel, setLabel] = useState("");

  const getLabel = async (label: string) => {
    await fetch(`/api/labels?label=${label}`, {
      method: "GET",
    })
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        //console.log(data.data.split(/:/g));
        setLabel(data.data.split(/:/g)[0]);
      })
      .catch((error) => {
        // fug.
      });
  };

  useEffect(() => {
    const fetchLabels = async () => {
      await fetch("/api/labels?label=all_time_top_donator", {
        method: "GET",
      })
        .then((data) => {
          return data.json();
        })
        .then((data) => {
          // format bcuz mac want's only the name not the amount. he noble.
          setLabel(data.data.split(/:/g)[0]);
        })
        .catch((error) => {
          // fug.
        });
    };

    fetchLabels();
  }, []);

  return <div className={styles.container}>{currentLabel}</div>;
};

export default Ui;
