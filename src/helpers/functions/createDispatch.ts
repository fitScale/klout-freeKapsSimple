import { AppAction } from "@/contexts/AppContext";

const createDiscpatch = (
  payload: AppAction["payload"],
  type: AppAction["type"]
): AppAction => {
  return { payload, type };
};

export default createDiscpatch;
