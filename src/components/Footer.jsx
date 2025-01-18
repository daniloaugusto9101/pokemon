import { Pagination, Stack } from "@mui/material";
import React from "react";
import { GlobalContext } from "../contexts/GlobalContext";

const Footer = () => {
  const { total, page, handlePageChange } = React.useContext(GlobalContext);

  return (
    <footer className="my-14 flex justify-center">
      <Stack spacing={2}>
        <p>Total: {total}</p>
        <Pagination count={Math.ceil(total / 20)} shape="rounded" size="large" page={page} onChange={handlePageChange} />
      </Stack>
    </footer>
  );
};

export default Footer;
