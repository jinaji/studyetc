import React, {
  createContext,
  PropsWithChildren,
  ReactNode,
  useCallback,
  useContext,
  useRef,
  useState,
} from "react";
import { Text } from "../Text/Text";
import { Animation } from "./Animation";
import { Column } from "../Layout/Row";

// default value initializing
const DropdownContext = createContext({
  isOpen: false,
  handleDropdown: () => {},
});

const Title = ({ title }: { title: string }) => {
  const { handleDropdown } = useContext(DropdownContext);

  return (
    <Text
      text={title}
      size={25}
      onClick={handleDropdown}
      style={{ cursor: "pointer" }}
    />
  );
};

// animation need
// transition ??
const Contents = ({ contents }: { contents: ReactNode }) => {
  const { isOpen } = useContext(DropdownContext);
  const contentsRef = useRef<HTMLDivElement>(null);
  console.log(isOpen);
  return (
    <div
      style={{
        height: isOpen
          ? contentsRef?.current?.getBoundingClientRect().height
          : 0,
        transition: "height 0.2s ease-in-out",
        overflow: "hidden",
      }}
    >
      <div ref={contentsRef}>{contents}</div>
    </div>
  );
};

export const DropdownComponent = ({ children }: PropsWithChildren) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleDropdown = useCallback(() => setIsOpen(!isOpen), [isOpen]);

  // Provider 안에서는 useContext 를 통해서 context 값을 불러 쓸 수 있음
  // Dropdown 컴포넌트가 wrapper 역할을 해서 내부 컴포넌트에서 상태를 공유할 수 있다
  // 애니메이션도 넣고싶고 ... 사실 굳이 필요없는 합성이긴 한데 공부용으로 좋았음 ㅎㅎ
  return (
    <DropdownContext.Provider value={{ isOpen, handleDropdown }}>
      {children}
    </DropdownContext.Provider>
  );
};

DropdownComponent.Title = Title;
DropdownComponent.Contents = Contents;

export const DropDown = () => (
  <Animation
    title={"Dropdown"}
    animation={
      <DropdownComponent>
        <DropdownComponent.Title title={"누르면 열림"} />
        <DropdownComponent.Contents
          contents={
            <Column>
              <Text text={"1. 드롭다운"} />
              <Text text={"2. context를 사용해봤구요 "} />
              <Text text={"3. compound component 도 사용해봤구요 "} />
              <Text text={"4. 애니메이션도 넣어봤습니다 "} />
            </Column>
          }
        />
      </DropdownComponent>
    }
    description={"드롭다운은 애니메이션이 있는게 예쁜 듯"}
  />
);
