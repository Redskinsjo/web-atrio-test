import React, { useEffect, useState } from "react";

import ProgressBarProps from "../types/progress-bar";
import findNewColor from "../utils/findNewColor";

const ProgressBar = ({
  field,
  initialAdvancement,
  initialColor,
  reset,
  incrBy5,
  incrBy10,
  setReset,
  setIncrBy5,
  setIncrBy10,
}: ProgressBarProps) => {
  const [barColor, setBarColor] = useState(initialColor);
  const [advancement, setAdvancement] = useState(initialAdvancement);

  useEffect(() => {
    if (reset) {
      setBarColor(initialColor);
      setAdvancement(initialAdvancement);
      setReset(false);
    }
    if (incrBy5) {
      const newColor = findNewColor(barColor);
      setBarColor(newColor);
      setAdvancement(advancement + 5 <= 100 ? advancement + 5 : advancement);
      setIncrBy5(false);
    }
    if (incrBy10) {
      const newColor = findNewColor(barColor);
      setBarColor(newColor);
      setAdvancement(advancement + 10 <= 100 ? advancement + 10 : advancement);
      setIncrBy10(false);
    }
  }, [reset, incrBy5, incrBy10]);

  return (
    <div>
      <h3 className="Roboto-regular text-[14px]">{field}</h3>
      <div className="flex items-center">
        <div className="mr-[12px] my-[12px] w-[50px] Roboto-light text-[20px]">
          {advancement}%
        </div>
        <div className="relative z-0 flex justify-start bg-[#373737] h-[15px] w-[840px]">
          <div
            className={`absolute z-10 bg-[${barColor}] h-[15px]`}
            style={{ backgroundColor: barColor, width: `${advancement}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
