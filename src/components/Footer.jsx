import { Pagination, Stack, useMediaQuery } from "@mui/material";
import React from "react";
import { GlobalContext } from "../contexts/GlobalContext";

const Footer = () => {
  const { total, page, handlePageChange } = React.useContext(GlobalContext);
  const isSmallScreen = useMediaQuery("(max-width:420px)");

  return (
    <footer className="my-14 flex justify-center">
      <Stack spacing={2}>
        <Pagination count={Math.ceil(total / 20)} siblingCount={isSmallScreen ? 0 : 1} boundaryCount={isSmallScreen ? 0 : 1} shape="rounded" size={"large"} page={page} onChange={handlePageChange} />
      </Stack>
    </footer>
  );
};

export default Footer;
