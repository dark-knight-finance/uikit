import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg
    baseProfile="tiny"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1024 1024"
    overflow="visible"
    xmlSpace="preserve"
    {...props}
  >
    <path
      fill="#0052FF"
      d="M512 0c282.8 0 512 229.2 512 512s-229.2 512-512 512S0 794.8 0 512 229.2 0 512 0z"
    />
    <path
      fill="#FFF"
      d="M512.1 692c-99.4 0-180-80.5-180-180s80.6-180 180-180c89.1 0 163.1 65 177.3 150h181.3c-15.3-184.8-170-330-358.7-330-198.8 0-360 161.2-360 360s161.2 360 360 360c188.7 0 343.4-145.2 358.7-330H689.3c-14.3 85-88.1 150-177.2 150z"
    />
  </Svg>
  );
};

export default Icon;
