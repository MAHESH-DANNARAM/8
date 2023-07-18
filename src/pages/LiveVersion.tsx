import { FunctionComponent } from "react";

const LiveVersion: FunctionComponent = () => {
  return (
    <div className="relative w-full flex flex-col items-start justify-start text-center text-[2rem] text-off-white font-paragraph-mobile">
      <div className="rounded-t-3xl rounded-b-none bg-blueviolet w-[37.5rem] overflow-hidden flex flex-col pt-[4rem] px-[2rem] pb-[3rem] box-border items-center justify-center">
        <img
          className="relative w-[29.82rem] h-[7.5rem]"
          alt=""
          src="/vector.svg"
        />
      </div>
      <div className="bg-off-white w-[37.5rem] flex flex-col py-[4rem] px-[0.5rem] box-border items-center justify-center">
        <div className="rounded-xl bg-dark-blue w-[20rem] h-[5rem] overflow-hidden shrink-0 flex flex-row items-center justify-center">
          <a
            className="self-stretch flex-1 relative leading-[2.5rem] font-medium text-[inherit] flex items-center justify-center [text-decoration:none]"
            href="https://tinyurl.com/webflow-teamapp"
            target="_blank"
          >
            Live Version
          </a>
        </div>
      </div>
    </div>
  );
};

export default LiveVersion;
