import { Pagination, Stack } from "@mui/material";
import React from "react";
import { GlobalContext } from "../contexts/GlobalContext";

const Footer = () => {
  const { total, page, handlePageChange } = React.useContext(GlobalContext);

  return (
    <>
      <footer className="w-full ">
        <div className="w-[1140px] mx-auto my-14 flex justify-between items-center px-4">
          <div className="flex-1 flex justify-center">
            <Stack spacing={2}>
              <Pagination count={Math.ceil(total / 20)} shape="rounded" size="large" page={page} onChange={handlePageChange} />
            </Stack>
          </div>
          <p className="text-gray-500 text-[12px]">DAP@V1.0</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
