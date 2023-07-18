import { FunctionComponent, memo } from "react";

const HeroContainer: FunctionComponent = memo(() => {
  return (
    <div className="absolute top-[0rem] left-[0rem] bg-primary-0 w-[90rem] h-[50rem] overflow-hidden text-left text-[3.13rem] text-off-white font-paragraph-mobile">
      <img
        className="absolute top-[0rem] left-[0rem] w-[90rem] h-[50rem] object-cover"
        alt=""
        src="/heroimg3@2x.png"
      />
      <div className="absolute top-[2.5rem] left-[calc(50%_-_580px)] w-[72.5rem] flex flex-row items-center justify-between">
        <div className="relative w-[8.63rem] h-[3.25rem]">
          <div className="absolute top-[0.06rem] left-[0rem] tracking-[-0.02em] leading-[100%] font-semibold [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)]">
            company
          </div>
        </div>
        <div className="hidden flex-row items-start justify-start">
          <img
            className="relative w-[1.5rem] h-[1.5rem]"
            alt=""
            src="/iconnavigationmenu-24px2.svg"
          />
        </div>
        <div className="flex flex-row items-center justify-start gap-[3.5rem] text-[1rem]">
          <div className="relative [text-decoration:underline] leading-[150%] font-medium [text-shadow:0px_8px_16px_rgba(35,_35,_64,_0.6)]">
            Product
          </div>
          <div className="relative [text-decoration:underline] leading-[150%] font-medium [text-shadow:0px_8px_16px_rgba(35,_35,_64,_0.6)]">
            Blog
          </div>
          <div className="relative [text-decoration:underline] leading-[150%] font-medium [text-shadow:0px_8px_16px_rgba(35,_35,_64,_0.6)]">
            Contact Us
          </div>
          <div className="relative [text-decoration:underline] leading-[150%] font-medium [text-shadow:0px_8px_16px_rgba(35,_35,_64,_0.6)]">
            Up Coming
          </div>
          <div className="rounded bg-royalblue overflow-hidden flex flex-row py-[0.63rem] px-[2.75rem] items-center justify-center text-center text-[1.13rem]">
            <div className="relative leading-[150%]">Login / Sing up</div>
          </div>
        </div>
      </div>
      <div className="absolute top-[15.75rem] left-[8.75rem] flex flex-col items-start justify-start gap-[3.5rem]">
        <div className="flex flex-col items-start justify-start gap-[1rem]">
          <b className="relative leading-[4rem] inline-block w-[35.19rem]">
            Instant collaboration for remote teams
          </b>
          <div className="relative text-[1.13rem] leading-[1.69rem] inline-block w-[24.81rem]">
            All-in-one place for your remote team to chat, collaborate and track
            project progress.
          </div>
        </div>
        <div className="self-stretch hidden flex-row items-start justify-start gap-[1rem] text-[0.88rem] text-desaturated-blue">
          <div className="self-stretch rounded bg-off-white box-border w-[18.63rem] overflow-hidden shrink-0 hidden flex-row py-[0.69rem] px-[1rem] items-center justify-between border-[2px] border-solid border-grayish-blue">
            <div className="relative tracking-[0.01em] leading-[160%] flex items-center w-[2.44rem] shrink-0">
              Email
            </div>
            <img
              className="relative w-[1.5rem] h-[1.5rem]"
              alt=""
              src="/iconnavigationarrow-forward-24px2.svg"
            />
          </div>
          <div className="rounded bg-soft-blue overflow-hidden flex flex-row py-[0.63rem] px-[2.75rem] items-center justify-center text-center text-[1.13rem] text-off-white">
            <div className="relative leading-[150%]" />
          </div>
        </div>
      </div>
    </div>
  );
});

export default HeroContainer;
