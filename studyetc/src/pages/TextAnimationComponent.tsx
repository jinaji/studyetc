import { useEffect, useState } from "react";

export const TextAnimationComponent = () => {
  const [text, setText] = useState("");
  const [animationTrigger, setAnimationTrigger] = useState(false);

  useEffect(() => {}, [text]);

  return (
    <div className="bg-pink-200 h-[100vh] flex flex-col gap-20 p-5">
      <input
        className="w-[80%] h-20"
        onChange={(e) => setText(e.target.value)}
      />
      <div className="text-xl flex-row flex">
        {text.split("").map((c, index) => {
          return (
            <p
              key={c + index}
              className={
                index === text.length - 1
                  ? Math.random() % 2
                    ? "animate-[movetext_0.1s_ease-in-out]"
                    : "animate-[movetextreverse_0.1s_ease-in-out]"
                  : ""
              }
            >
              {c}
            </p>
          );
        })}
      </div>
    </div>
  );
};
