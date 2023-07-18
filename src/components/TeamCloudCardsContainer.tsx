import { FunctionComponent, memo, useMemo } from "react";
import CSS, { Property } from "csstype";

type TeamCloudCardsContainerType = {
  image?: string;
  heading?: string;
  anInternalInvestigationRe?: string;
  avatar?: string;
  markBrooklyn?: string;
  july112022?: string;

  /** Style props */
  anInternalInvestigationReDisplay?: Property.Display;
  anInternalInvestigationReOverflow?: Property.Overflow;
  anInternalInvestigationReTextOverflow?: Property.TextOverflow;
  anInternalInvestigationReWebkitLineClamp?: Property.WebkitLineClamp;
  anInternalInvestigationReWebkitBoxOrient?: Property.WebkitBoxOrient;
  authorWidth?: Property.Width;
};

const TeamCloudCardsContainer: FunctionComponent<TeamCloudCardsContainerType> =
  memo(
    ({
      image,
      heading,
      anInternalInvestigationRe,
      avatar,
      markBrooklyn,
      july112022,
      anInternalInvestigationReDisplay,
      anInternalInvestigationReOverflow,
      anInternalInvestigationReTextOverflow,
      anInternalInvestigationReWebkitLineClamp,
      anInternalInvestigationReWebkitBoxOrient,
      authorWidth,
    }) => {
      const anInternalInvestigationStyle: CSS.Properties = useMemo(() => {
        return {
          display: anInternalInvestigationReDisplay,
          overflow: anInternalInvestigationReOverflow,
          textOverflow: anInternalInvestigationReTextOverflow,
          webkitLineClamp: anInternalInvestigationReWebkitLineClamp,
          webkitBoxOrient: anInternalInvestigationReWebkitBoxOrient,
        };
      }, [
        anInternalInvestigationReDisplay,
        anInternalInvestigationReOverflow,
        anInternalInvestigationReTextOverflow,
        anInternalInvestigationReWebkitLineClamp,
        anInternalInvestigationReWebkitBoxOrient,
      ]);

      const authorStyle: CSS.Properties = useMemo(() => {
        return {
          width: authorWidth,
        };
      }, [authorWidth]);

      return (
        <div className="rounded-lg bg-primary-0 shadow-[0px_16px_24px_rgba(118,_118,_178,_0.2)] w-[18.75rem] h-[32.5rem] overflow-hidden shrink-0 flex flex-col pt-[0rem] px-[0rem] pb-[1rem] box-border items-start justify-between text-left text-[1.5rem] text-soft-blue font-paragraph-mobile">
          <div className="self-stretch flex flex-col items-start justify-start gap-[1.5rem]">
            <img
              className="self-stretch relative rounded-t-lg rounded-b-none max-w-full overflow-hidden h-[13.75rem] shrink-0"
              alt=""
              src={image}
            />
            <div className="self-stretch flex flex-col py-[0rem] px-[1rem] items-start justify-start gap-[1.5rem]">
              <div className="self-stretch relative leading-[1.88rem]">
                {heading}
              </div>
              <div
                className="self-stretch relative text-[0.88rem] tracking-[0.01em] leading-[1.44rem] text-dark-blue"
                style={anInternalInvestigationStyle}
              >
                {anInternalInvestigationRe}
              </div>
            </div>
          </div>
          <div
            className="w-[16.5rem] flex flex-row py-[0rem] px-[1rem] box-border items-center justify-start text-[0.88rem] text-desaturated-blue"
            style={authorStyle}
          >
            <img
              className="relative w-[3rem] h-[3rem] overflow-hidden shrink-0"
              alt=""
              src={avatar}
            />
            <div className="self-stretch flex-1 overflow-hidden flex flex-row py-[0rem] px-[0.5rem] items-center justify-start">
              <div className="flex-1 relative tracking-[0.01em] leading-[1.44rem]">
                {markBrooklyn}
              </div>
            </div>
            <img
              className="relative w-[0.07rem] h-[1.5rem]"
              alt=""
              src="/vector2.svg"
            />
            <div className="self-stretch flex-1 overflow-hidden flex flex-row py-[0rem] px-[0.5rem] items-center justify-start">
              <div className="flex-1 relative tracking-[0.01em] leading-[1.44rem]">
                {july112022}
              </div>
            </div>
          </div>
        </div>
      );
    }
  );

export default TeamCloudCardsContainer;
