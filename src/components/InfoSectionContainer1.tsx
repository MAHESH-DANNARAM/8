import { FunctionComponent, memo, useMemo } from "react";
import CSS, { Property } from "csstype";

type InfoSectionContainer1Type = {
  chatText?: string;
  teamChatText?: string;
  teamThreadText?: string;
  chatImageText?: string;

  /** Style props */
  propTop?: Property.Top;
};

const InfoSectionContainer1: FunctionComponent<InfoSectionContainer1Type> =
  memo(({ chatText, teamChatText, teamThreadText, chatImageText, propTop }) => {
    const infoSection1Style: CSS.Properties = useMemo(() => {
      return {
        top: propTop,
      };
    }, [propTop]);

    return (
      <div
        className="absolute top-[131.25rem] left-[calc(50%_-_372px)] w-[46.5rem] flex flex-row items-start justify-start gap-[1.5rem] text-left text-[3.13rem] text-dark-blue font-paragraph-mobile"
        style={infoSection1Style}
      >
        <img
          className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full"
          alt=""
          src={chatText}
        />
        <div className="w-[23rem] flex flex-col py-[0rem] pr-[1.5rem] pl-[0rem] box-border items-start justify-start gap-[3rem]">
          <div className="self-stretch flex flex-col items-start justify-start gap-[1.5rem]">
            <b className="self-stretch relative leading-[4rem]">
              {teamChatText}
            </b>
            <div className="self-stretch relative text-[1.13rem] leading-[1.69rem] text-gray-500">
              {teamThreadText}
            </div>
          </div>
          <div className="flex flex-row items-center justify-start gap-[0.5rem] text-[1rem] text-soft-blue">
            <div className="relative [text-decoration:underline] leading-[150%] font-medium">{`Learn more `}</div>
            <img
              className="relative w-[1.88rem] h-[1.88rem]"
              alt=""
              src={chatImageText}
            />
          </div>
        </div>
      </div>
    );
  });

export default InfoSectionContainer1;
