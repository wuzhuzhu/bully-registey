/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import { BuildingBlocks } from "../BuildingBlocks";
import Link from "next/link";

export const SegmentedButton = ({ className, isSelectLeft }) => {
  return (
    <div
      className={`relative flex h-[48px] w-[207px] items-center justify-center ${className}`}
    >
      <Link className="w-[108px]" href="/registry">
        <BuildingBlocks
          className="!w-[unset] !flex-1 !grow"
          configuration="label-only"
          labelText="宠物名"
          labelTextClassName=""
          selected={isSelectLeft}
          side="left"
          disabled={false}
          stateProp="enabled"
        />
      </Link>
      <Link className="w-[108px]" href="/registry/search/chip">
        <BuildingBlocks
          className="!w-[unset] !flex-1 !grow"
          configuration="label-only"
          labelText="芯片号"
          labelTextClassName=""
          selected={!isSelectLeft}
          side="right"
          disabled={false}
          stateProp="enabled"
        />
      </Link>
    </div>
  );
};
