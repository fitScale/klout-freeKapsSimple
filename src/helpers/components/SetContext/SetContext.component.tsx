"use client";

import { AppAction, AppContext } from "@/contexts/AppContext";
import createDiscpatch from "@/helpers/functions/createDispatch";
import { AppContextType } from "next/dist/shared/lib/utils";
import { useContext, useEffect } from "react";

export interface SetContextProps {
  payload: AppAction["payload"];
  type: AppAction["type"];
}

const SetContext = ({
  setContextConfig,
}: {
  setContextConfig: SetContextProps;
}) => {
  const { dispatch } = useContext(AppContext);

  useEffect(() => {
    dispatch(createDiscpatch(setContextConfig.payload, setContextConfig.type));
  }, []);

  return <div></div>;
};

export default SetContext;
