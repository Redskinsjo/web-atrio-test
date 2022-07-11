import { Dispatch, SetStateAction } from "react";

type ProgressBarProps = {
  field: string;
  initialAdvancement: number;
  initialColor: string;
  reset: boolean;
  incrBy5: boolean;
  incrBy10: boolean;
  setReset: Dispatch<SetStateAction<boolean>>;
  setIncrBy5: Dispatch<SetStateAction<boolean>>;
  setIncrBy10: Dispatch<SetStateAction<boolean>>;
};

export default ProgressBarProps;
