import React, { useState } from "react";
import {
  Input,
  Checkbox,
  CheckboxGroup,
  Stack,
  Button,
} from "@chakra-ui/react";
import { useNewMoralisObject } from "react-moralis";

export const EventForm = (props) => {
  const [coin, setCoin] = useState({ name: "" });
  const { isSaving, error, save } = useNewMoralisObject('Event');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.target.value);
    props.handleSubmit(coin);
  };
  const handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    setCoin((prev) => {
      const newCoin = Object.assign({}, prev);
      newCoin[name] = value;
      return newCoin;
    });
  };
  return (
    <div>
      {/* <p>preview {JSON.stringify(coin)}</p> */}
      <fieldset>
        <legend>Basic Info</legend>
        <label>Token Name</label>
        <Input
          type="text"
          name="name"
          value={coin.name}
          onChange={handleChange}
        />
      </fieldset>
      <fieldset>
        <legend>Due Dilligence</legend>

        <Stack>
          <Checkbox name="doxxed" id="doxxedcb">
            Doxxed Founders
          </Checkbox>

          <Checkbox name="size" id="auditcb" value="medium">
            Contract Audit
          </Checkbox>

          <Checkbox name="size" id="taxcapcb" value="large">
            Maximum cap on taxes in contract
          </Checkbox>

          <Checkbox name="size" id="staysafucb" value="large">
            StaySafu scan
          </Checkbox>

          <Checkbox name="size" id="reflectionscb" value="large">
            Reflections
          </Checkbox>

          <Checkbox type="checkbox" name="size" id="socialscb" value="large">
            Socials
          </Checkbox>
        </Stack>
      </fieldset>
      <fieldset>
        <legend>Early Sale Start Date</legend>
        <label>Date: </label>
        <Input type="text" name="earlySaleDate" onChange={handleChange} />
      </fieldset>
      <fieldset>
        <legend>Liquidity Launch Date</legend>
        <label>Date: </label>
        <Input type="text" name="liquidityDate" onChange={handleChange} />
      </fieldset>
      <fieldset>
        <Button type="submit" onClick={handleSubmit}>
          Save
        </Button>
      </fieldset>
    </div>
  );
};
