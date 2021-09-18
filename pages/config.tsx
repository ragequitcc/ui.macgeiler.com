import type { NextPage } from "next";
import styles from "../styles/Config.module.scss";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import prisma from "../lib/prisma";

export const getServerSideProps = async () => {
    const config = await prisma.config.findMany();

    return {
        props: {config}
    }
  };

  
const Config: NextPage = (props) => {
  const onSubmit = async (event: any) => {
    const labelPath = event.target.labelPath.value;
    const streamlabsApiKey = event.target.streamlabsApiKey.value;

    event.preventDefault();

    if (!labelPath || !streamlabsApiKey) {
        alert('Error. No Values Set.');
        return;
    }

    await fetch('/api/config', {
        body: JSON.stringify({
            labelPath: event.target.labelPath.value,
            streamlabsApiKey: event.target.streamlabsApiKey.value
        }),
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'POST'
    }).then(data => {
        alert('Saved.');
    }).catch(error => {
        alert('Error');
    });
  };

  return (
    <div className={styles.container}>
      <Form onSubmit={onSubmit}>
        <FormGroup>
          <Label for="labelPath">Label Path</Label>
          <Input
            type="text"
            name="labelPath"
            placeholder={props.config[0]?.labelPath ? props.config[0].labelPath : 'Empty'}
            id="labelPath"
          />
        </FormGroup>
        <FormGroup>
          <Label for="labelPath">Streamlabs API Key</Label>
          <Input
            type="text"
            name="streamlabsApiKey"
            placeholder={props.config[0]?.streamlabsApiKey ? props.config[0].streamlabsApiKey : 'Empty'}
            id="streamlabsApiKey"
          />
        </FormGroup>
        <Button color="primary">Save</Button>
      </Form>
    </div>
  );
};

export default Config;
