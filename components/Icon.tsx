import React from "react";
import {FontAwesome} from "@expo/vector-icons";

const Icon = (props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
  size: number
}) => {
  return <FontAwesome {...props} />;
}

export default Icon;
