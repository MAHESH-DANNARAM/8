import { FunctionComponent, memo } from "react";

const RemoteTeamsContainer: FunctionComponent = memo(() => {
  return (
    <div className="absolute top-[0rem] left-[0rem] bg-primary-0 w-[46.5rem] h-[50rem] overflow-hidden text-left text-[3.13rem] text-off-white font-paragraph-mobile">
      <img
        className="absolute top-[0rem] left-[0rem] w-[46.5rem] h-[64rem] object-cover"
        alt=""
        src="/heroimg2@2x.png"
      />
      <div className="absolute top-[0rem] left-[0rem] w-[46.5rem] flex flex-row pt-[2.5rem] px-[3.75rem] pb-[0rem] box-border items-center justify-between">
        <div className="relative w-[8.63rem] h-[3.25rem]">
          <div className="absolute top-[0rem] left-[0rem] tracking-[-0.02em] leading-[100%] font-semibold">
            <span>team</span>
            <span className="text-[3.25rem] text-soft-blue">.</span>
          </div>
        </div>
        <div className="hidden flex-row items-start justify-start">
          <img
            className="relative w-[1.5rem] h-[1.5rem]"
            alt=""
            src="/iconnavigationmenu-24px1.svg"
          />
        </div>
        <div className="flex flex-row items-center justify-start gap-[1rem] text-[1rem]">
          <div className="relative [text-decoration:underline] leading-[150%] font-medium [text-shadow:0px_8px_16px_rgba(35,_35,_64,_0.6)]">
            Product
          </div>
          <div className="relative [text-decoration:underline] leading-[150%] font-medium [text-shadow:0px_8px_16px_rgba(35,_35,_64,_0.6)]">
            Blog
          </div>
          <div className="relative [text-decoration:underline] leading-[150%] font-medium [text-shadow:0px_8px_16px_rgba(35,_35,_64,_0.6)]">
            Support
          </div>
          <div className="relative [text-decoration:underline] leading-[150%] font-medium [text-shadow:0px_8px_16px_rgba(35,_35,_64,_0.6)]">
            Log In
          </div>
          <div className="rounded bg-royalblue overflow-hidden flex flex-row py-[0.63rem] px-[2.75rem] items-center justify-center text-center text-[1.13rem]">
            <div className="relative leading-[150%]">Get Access</div>
          </div>
        </div>
      </div>
      <div className="absolute top-[calc(50%_-_42px)] left-[3.75rem] w-[34.25rem] flex flex-col items-start justify-start gap-[3.5rem]">
        <div className="self-stretch flex flex-col items-start justify-start gap-[1rem]">
          <b className="self-stretch relative leading-[4rem]">
            Instant collaboration for remote teams
          </b>
          <div className="self-stretch relative text-[1.13rem] leading-[1.69rem]">
            All-in-one place for your remote team to chat, collaborate and track
            project progress.
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start gap-[1rem] text-[0.88rem] text-desaturated-blue">
          <div className="self-stretch rounded bg-off-white box-border w-[18.63rem] overflow-hidden shrink-0 flex flex-row py-[0.69rem] px-[1rem] items-center justify-between border-[2px] border-solid border-grayish-blue">
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
            <div className="relative leading-[150%]">Get Early Access</div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default RemoteTeamsContainer;
