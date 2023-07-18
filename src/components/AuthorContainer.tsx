import { FunctionComponent, memo, useMemo } from "react";
import CSS, { Property } from "csstype";

type AuthorContainerType = {
  imageDimensions?: string;

  /** Style props */
  propTop?: Property.Top;
  propLeft?: Property.Left;
};

const AuthorContainer: FunctionComponent<AuthorContainerType> = memo(
  ({ imageDimensions, propTop, propLeft }) => {
    const author1Style: CSS.Properties = useMemo(() => {
      return {
        top: propTop,
        left: propLeft,
      };
    }, [propTop, propLeft]);

    return (
      <div
        className="absolute top-[118.44rem] left-[1.88rem] w-[26.5rem] flex flex-row items-center justify-start gap-[1.5rem] min-w-[13.5rem] max-w-[26.5rem] text-left text-[1rem] text-soft-violet font-paragraph-mobile"
        style={author1Style}
      >
        <img
          className="relative w-[4rem] h-[4rem] overflow-hidden shrink-0"
          alt=""
          src={imageDimensions}
        />
        <div className="flex-1 flex flex-col items-start justify-start gap-[0.75rem]">
          <b className="self-stretch relative tracking-[0.01em] leading-[1.63rem] uppercase">
            Written by
          </b>
          <div className="self-stretch relative text-[1.5rem] leading-[1.88rem] text-dark-blue">
            Mark Brooklyn
          </div>
          <div className="self-stretch relative text-[0.88rem] tracking-[0.01em] leading-[1.44rem] text-gray-400">
            COO at Team. Author of the upcoming book on Team Management and
            Leadership.
          </div>
        </div>
      </div>
    );
  }
);

export default AuthorContainer;
