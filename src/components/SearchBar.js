import styled from "styled-components";
import { Fragment, useEffect } from "react";

const Input = styled.input`
  border: 2px solid lightgray;
  padding: 0.75rem;
  border-radius: 0.375rem;
  width: 33.3333333%;
`;

export default function SearchBar({ onChange, value }) {
  useEffect(() => console.info("Rendered SearchBar"));

  return (
    <Fragment>
      <Input
        key={1000}
        placeholder="type your animes"
        type="text"
        onChange={onChange}
        value={value}
      />
    </Fragment>
  );
}
