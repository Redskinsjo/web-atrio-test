import React from "react";

import TitleProps from "@/types/title";
import formatTitleDate from "../utils/formatTitleDate";

const Title = ({ lastname, firstname, date }: TitleProps) => {
  return (
    <h1 className="Roboto-bold text-[16px] w-[396px] h-[42px] mt-[164px] text-center">
      Test technique WEB-ATRIO réalisé par {lastname} {firstname} réalisé le{" "}
      {formatTitleDate(date)}
    </h1>
  );
};

export default Title;
