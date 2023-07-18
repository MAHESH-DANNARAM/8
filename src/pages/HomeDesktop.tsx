import { FunctionComponent } from "react";
import HeroContainer from "../components/HeroContainer";
import DistributedChatContainer from "../components/DistributedChatContainer";
import InfoSectionContainer2 from "../components/InfoSectionContainer2";
import ReviewCarouselWrapper from "../components/ReviewCarouselWrapper";
import FooterContainer from "../components/FooterContainer";

const HomeDesktop: FunctionComponent = () => {
  return (
    <div className="relative bg-off-white w-full h-[322.25rem] overflow-hidden text-left text-[3.13rem] text-dark-blue font-paragraph-mobile">
      <HeroContainer />
      <DistributedChatContainer />
      <InfoSectionContainer2
        chatTeamText="/imggroup9.svg"
        teamChatText="Chats for your distributed teams"
        teamChatThreadText="Team combines the immediacy of real-time chat with an email threading model. With Team, you can catch up on important conversations while ignoring irrelevant ones."
      />
      <div className="absolute top-[146.31rem] left-[calc(50%_-_580px)] w-[72.5rem] flex flex-row items-center justify-between">
        <div className="w-[28.5rem] flex flex-col items-start justify-start gap-[3rem]">
          <div className="self-stretch flex flex-col items-start justify-start gap-[1.5rem]">
            <b className="self-stretch relative leading-[4rem]">
              Choose how you want to work
            </b>
            <div className="self-stretch relative text-[1.13rem] leading-[1.69rem] text-gray-500">
              In Team, you’ve got all the flexibility to work when, where and
              how it’s best for you. You can easily chat, send audio and video
              clips, or hop on a huddle to talk things out live.
            </div>
          </div>
          <div className="flex flex-row items-center justify-start gap-[0.5rem] text-[1rem] text-soft-blue">
            <div className="relative [text-decoration:underline] leading-[150%] font-medium">{`Learn more `}</div>
            <img
              className="relative w-[1.88rem] h-[1.88rem]"
              alt=""
              src="/iconactionarrow-right-alt-24px4.svg"
            />
          </div>
        </div>
        <img
          className="relative w-[35.31rem] h-[35.31rem]"
          alt=""
          src="/imggroup10.svg"
        />
      </div>
      <InfoSectionContainer2
        chatTeamText="/imggroup11.svg"
        teamChatText="Move faster with your Team tools"
        teamChatThreadText="With your other work apps connected to Team, you can work faster by switching tabs less. And with powerful tools like Workflow Builder, you can automate away routine tasks."
        propTop="189.13rem"
      />
      <img
        className="absolute top-[105rem] right-[47.19rem] w-[16rem] h-[6.88rem] object-cover"
        alt=""
        src="/calender3@2x.png"
      />
      <ReviewCarouselWrapper
        productIds="/star10.svg"
        productImageIds="/star11.svg"
        productImageDimensions="/star12.svg"
        productImageIds32x32="/star13.svg"
        productImageIds32x32x="/star14.svg"
        productImageIds56x56x="/avatar163.svg"
        productImageIds32x32x2031="/star15.svg"
        productImageIds32x32x4157="/star16.svg"
        productImageIds32x32x2297="/star17.svg"
        productImageIds32x32x3410="/star18.svg"
        productImageIds32x32x3627="/star19.svg"
        productImageIds56x56x2="/avatar164.svg"
        productImageIds32x32x8048="/star15.svg"
        productImageIds32x32x3310="/star6.svg"
        productImageIds32x32x22972="/star7.svg"
        productImageIds32x32x34102="/star8.svg"
        productImageIds32x32x36272="/star9.svg"
        productImageIds56x56x3="/avatar165.svg"
        productImageIds32x32x80482="/star5.svg"
        productImageIds32x32x33102="/star6.svg"
        productImageIds32x32x22973="/star7.svg"
        productImageIds32x32x34103="/star8.svg"
        productImageIds32x32x36273="/star9.svg"
        productImageIds56x56x4="/avatar166.svg"
        productImageIds32x32x20312="/star5.svg"
        productImageIds32x32x2="/star6.svg"
        productImageIds32x32x22974="/star7.svg"
        productImageIds32x32x34104="/star8.svg"
        productImageIds32x32x36274="/star9.svg"
        productImageIds56x56x5="/avatar167.svg"
        propTop="248.44rem"
        propLeft="10rem"
        propLeft1="71.31rem"
      />
      <b className="absolute top-[236.94rem] left-[calc(50%_-_373px)] leading-[4rem]">
        What people say about Team
      </b>
      <FooterContainer productIds="/iconnavigationarrow-forward-24px3.svg" />
      <img
        className="absolute top-[162.94rem] left-[67.88rem] w-[11.88rem] h-[5.09rem] object-cover"
        alt=""
        src="/image156@2x.png"
      />
      <img
        className="absolute top-[168.75rem] left-[67.88rem] w-[11.88rem] h-[11.35rem] object-cover"
        alt=""
        src="/image157@2x.png"
      />
      <img
        className="absolute top-[205.81rem] left-[10.31rem] w-[11.88rem] h-[11.34rem] object-cover"
        alt=""
        src="/image158@2x.png"
      />
      <img
        className="absolute top-[217.88rem] left-[10.31rem] w-[11.88rem] h-[5.09rem] object-cover"
        alt=""
        src="/image159@2x.png"
      />
    </div>
  );
};

export default HomeDesktop;
