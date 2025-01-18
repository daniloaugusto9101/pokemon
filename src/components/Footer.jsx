import { Pagination, Stack } from "@mui/material";
import React from "react";
import { GlobalContext } from "../contexts/GlobalContext";

const Footer = ({ total, page, onPageChange }) => {
  const { pokemonDetails } = React.useContext(GlobalContext);

  return (
    <footer className="my-14 flex justify-center">
      <Stack spacing={2}>
        <p>Total: {total}</p>
        <Pagination count={10} shape="rounded" size="large" page={page} onChange={onPageChange} />
      </Stack>
    </footer>
  );
};

export default Footer;
