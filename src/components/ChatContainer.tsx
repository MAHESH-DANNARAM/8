import { FunctionComponent, memo, useMemo } from "react";
import CSS, { Property } from "csstype";

type ChatContainerType = {
  chatText?: string;
  teamChatText?: string;
  teamThreadText?: string;
  chatThreadText?: string;

  /** Style props */
  propTop?: Property.Top;
};

const ChatContainer: FunctionComponent<ChatContainerType> = memo(
  ({ chatText, teamChatText, teamThreadText, chatThreadText, propTop }) => {
    const infoSection3Style: CSS.Properties = useMemo(() => {
      return {
        top: propTop,
      };
    }, [propTop]);

    return (
      <div
        className="absolute top-[128.75rem] left-[0rem] w-[20rem] flex flex-col items-start justify-start gap-[3rem] text-left text-[2.13rem] text-dark-blue font-paragraph-mobile"
        style={infoSection3Style}
      >
        <img
          className="relative w-[18.75rem] h-[18rem]"
          alt=""
          src={chatText}
        />
        <div className="self-stretch flex flex-col py-[0rem] pr-[0rem] pl-[1.5rem] items-start justify-start gap-[3rem]">
          <div className="self-stretch flex flex-col items-start justify-start gap-[1.5rem]">
            <b className="self-stretch relative leading-[2.63rem]">
              {teamChatText}
            </b>
            <div className="self-stretch relative text-[1rem] leading-[1.5rem] text-gray-500">
              {teamThreadText}
            </div>
          </div>
          <div className="flex flex-row items-center justify-start gap-[0.5rem] text-[1rem] text-soft-blue">
            <div className="relative [text-decoration:underline] leading-[150%] font-medium">{`Learn more `}</div>
            <img
              className="relative w-[1.88rem] h-[1.88rem]"
              alt=""
              src={chatThreadText}
            />
          </div>
        </div>
      </div>
    );
  }
);

export default ChatContainer;
