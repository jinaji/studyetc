import React from "react";
import { AlignedRow } from "./Row";
import { Text } from "../Text/Text";
import { useRouter } from "next/router";

const HeaderMenus = ({ text, route }: { text: string; route: string }) => {
  const router = useRouter();

  return (
    <Text
      text={text}
      style={{
        padding: 6,
        borderRadius: 10,
        backgroundColor: "blanchedalmond",
      }}
      onClick={() => router.push(`${route}`)}
    />
  );
};

export const Header = () => {
  return (
    <AlignedRow
      style={{
        padding: 10,
        height: "100%",
        backgroundColor: "#fff",
        flexWrap: "wrap",
        gap: 10,
      }}
    >
      <HeaderMenus text={"Home"} route={"/"} />
      <HeaderMenus text={"Animations"} route={"/animations"} />
    </AlignedRow>
  );
};
