import { Dispatch, SetStateAction } from "react";

type ControlsProps = {
  reset: Dispatch<SetStateAction<boolean>>;
  incrBy5: Dispatch<SetStateAction<boolean>>;
  incrBy10: Dispatch<SetStateAction<boolean>>;
};

export default ControlsProps;
