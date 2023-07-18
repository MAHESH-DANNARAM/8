import { FunctionComponent, memo, useMemo } from "react";
import CSS, { Property } from "csstype";

type InfoSectionContainerType = {
  chatText?: string;
  teamChatText?: string;
  teamThreadText?: string;

  /** Style props */
  propTop?: Property.Top;
};

const InfoSectionContainer: FunctionComponent<InfoSectionContainerType> = memo(
  ({ chatText, teamChatText, teamThreadText, propTop }) => {
    const infoSection2Style: CSS.Properties = useMemo(() => {
      return {
        top: propTop,
      };
    }, [propTop]);

    return (
      <div
        className="absolute top-[123.75rem] left-[0rem] w-[35.5rem] flex flex-row items-start justify-start gap-[1.5rem] text-left text-[2.13rem] text-dark-blue font-paragraph-mobile"
        style={infoSection2Style}
      >
        <img
          className="flex-1 relative max-w-full overflow-hidden h-[22.5rem]"
          alt=""
          src={chatText}
        />
        <div className="w-[16.5rem] flex flex-col py-[0rem] pr-[1.5rem] pl-[0rem] box-border items-start justify-start gap-[3rem]">
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
              src="/iconactionarrow-right-alt-24px.svg"
            />
          </div>
        </div>
      </div>
    );
  }
);

export default InfoSectionContainer;
