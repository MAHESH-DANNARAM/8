import { FunctionComponent } from "react";
import InfoSectionContainer from "../components/InfoSectionContainer";
import FooterContainer from "../components/FooterContainer";
import ReviewCarouselContainer from "../components/ReviewCarouselContainer";

const HomeMobileLandscape: FunctionComponent = () => {
  return (
    <div className="relative bg-off-white w-full h-[317.88rem] overflow-hidden text-left text-[3.13rem] text-dark-blue font-paragraph-mobile">
      <div className="absolute top-[0rem] left-[0rem] bg-primary-0 w-[35.5rem] h-[45rem] overflow-hidden text-off-white">
        <img
          className="absolute top-[0rem] left-[0rem] w-[35.5rem] h-[48.86rem] object-cover"
          alt=""
          src="/heroimg1@2x.png"
        />
        <div className="absolute top-[calc(50%_-_116px)] left-[calc(50%_-_254px)] flex flex-col items-start justify-start gap-[3.5rem]">
          <div className="self-stretch flex flex-col items-start justify-start gap-[1rem]">
            <b className="self-stretch relative leading-[4rem]">
              Instant collaboration for remote teams
            </b>
            <div className="self-stretch relative text-[1.13rem] leading-[1.69rem]">
              All-in-one place for your remote team to chat, collaborate and
              track project progress.
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start gap-[0.75rem] text-[0.88rem] text-desaturated-blue">
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
              <div className="relative leading-[150%]">Button Label</div>
            </div>
          </div>
        </div>
        <div className="absolute top-[2.5rem] left-[calc(50%_-_254px)] w-[31.75rem] flex flex-row items-center justify-between">
          <div className="relative w-[8.63rem] h-[3.25rem]">
            <div className="absolute top-[0rem] left-[0rem] tracking-[-0.02em] leading-[100%] font-semibold">
              <span>team</span>
              <span className="text-[3.25rem] text-soft-blue">.</span>
            </div>
          </div>
          <div className="flex flex-row items-start justify-start">
            <img
              className="relative w-[1.5rem] h-[1.5rem]"
              alt=""
              src="/iconnavigationmenu-24px2.svg"
            />
          </div>
          <div className="hidden flex-row items-center justify-start gap-[1.25rem] text-[1rem]">
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
      </div>
      <div className="absolute top-[47.5rem] left-[calc(50%_-_284px)] bg-off-white w-[35.5rem] h-[71.25rem] overflow-hidden text-[0.33rem] font-plus-jakarta-sans">
        <div className="absolute top-[3.75rem] left-[1.88rem] flex flex-col items-start justify-center gap-[3rem]">
          <div className="relative w-[65.67rem] h-[40.88rem]">
            <div className="absolute top-[1.06rem] left-[1.46rem] rounded-[3.72px] bg-primary-0 shadow-[0px_13px_26px_rgba(118,_118,_178,_0.24)] w-[8.66rem] h-[17.88rem] overflow-hidden text-secondary-500">
              <div className="absolute top-[0.56rem] left-[0.56rem] flex flex-row items-start justify-start gap-[5.31rem]">
                <div className="relative tracking-[-0.02em] leading-[150%] font-semibold flex items-center w-[1.77rem] h-[0.47rem] shrink-0">
                  Task Today
                </div>
                <img
                  className="relative w-[0.47rem] h-[0.47rem]"
                  alt=""
                  src="/vuesaxlinearmore.svg"
                />
              </div>
              <img
                className="absolute top-[1.49rem] left-[0.56rem] rounded-[3.72px] w-[7.54rem] h-[3.72rem] object-cover"
                alt=""
                src="/image140@2x.png"
              />
              <div className="absolute top-[5.68rem] left-[0.56rem] flex flex-col items-start justify-start gap-[0.09rem] text-[0.37rem]">
                <div className="relative tracking-[-0.02em] leading-[150%] font-semibold flex items-center w-[5.77rem] h-[0.47rem] shrink-0">
                  Creating Awesome Mobile Apps
                </div>
                <div className="relative text-[0.28rem] tracking-[-0.02em] font-medium text-secondary-400 flex items-center w-[2.14rem] h-[0.37rem] shrink-0">
                  UI /UX Designer
                </div>
              </div>
              <div className="absolute top-[10.61rem] left-[0.56rem] flex flex-row items-start justify-start gap-[3.07rem] text-[0.37rem] text-dark-blue">
                <div className="relative tracking-[-0.02em] leading-[150%] font-semibold flex items-center w-[2.33rem] h-[0.47rem] shrink-0">
                  Detail Task
                </div>
                <div className="relative text-[0.28rem] tracking-[-0.02em] font-medium text-desaturated-blue flex items-center w-[2.14rem] h-[0.47rem] shrink-0">
                  UI / UX Designer
                </div>
              </div>
              <div className="absolute top-[7.08rem] left-[0.56rem] flex flex-col items-start justify-start gap-[0.19rem] text-[0.37rem]">
                <div className="flex flex-row items-start justify-start gap-[4rem]">
                  <div className="relative tracking-[-0.02em] leading-[150%] font-medium flex items-center w-[2.33rem] h-[0.47rem] shrink-0">
                    Progress
                  </div>
                  <div className="relative tracking-[-0.02em] leading-[150%] font-medium text-primary-500 text-right flex items-center w-[1.21rem] h-[0.47rem] shrink-0">
                    90%
                  </div>
                </div>
                <div className="relative w-[7.54rem] h-[0.37rem]">
                  <div className="absolute top-[0.09rem] left-[0rem] rounded-[2.98px] bg-royalblue w-[7.54rem] h-[0.19rem]" />
                  <div className="absolute top-[0.09rem] left-[0rem] rounded-tl-[2.98px] rounded-tr-none rounded-br-none rounded-bl-[2.98px] bg-soft-blue w-[6.28rem] h-[0.19rem]" />
                  <div className="absolute top-[0rem] left-[6.1rem] rounded-[50%] bg-primary-500 box-border w-[0.37rem] h-[0.37rem] border-[0.7px] border-solid border-primary-0" />
                </div>
              </div>
              <div className="absolute top-[9.86rem] left-[0.55rem] box-border w-[7.56rem] h-[0.02rem] border-t-[0.4px] border-solid border-whitesmoke-100" />
              <div className="absolute top-[8.57rem] left-[0.56rem] flex flex-row items-start justify-start gap-[0.19rem] text-[0.37rem]">
                <img
                  className="relative w-[0.56rem] h-[0.56rem]"
                  alt=""
                  src="/iconlylighttime-circle.svg"
                />
                <div className="relative tracking-[-0.02em] leading-[150%] font-medium flex items-center w-[2.14rem] h-[0.56rem] shrink-0">
                  1 Hour
                </div>
              </div>
              <div className="absolute top-[8.57rem] left-[6.05rem] flex flex-row items-start justify-start">
                <img
                  className="relative rounded-[74.48px] w-[0.56rem] h-[0.56rem] object-cover"
                  alt=""
                  src="/photo-4@2x.png"
                />
                <img
                  className="relative rounded-[74.48px] w-[0.56rem] h-[0.56rem] object-cover ml-[-0.19rem]"
                  alt=""
                  src="/photo-2@2x.png"
                />
                <img
                  className="relative rounded-[74.48px] w-[0.56rem] h-[0.56rem] object-cover ml-[-0.19rem]"
                  alt=""
                  src="/photo-1@2x.png"
                />
                <img
                  className="relative rounded-[74.48px] w-[0.56rem] h-[0.56rem] object-cover ml-[-0.19rem]"
                  alt=""
                  src="/photo-5@2x.png"
                />
                <img
                  className="relative rounded-[74.48px] w-[0.56rem] h-[0.56rem] object-cover ml-[-0.19rem]"
                  alt=""
                  src="/photo-3@2x.png"
                />
              </div>
              <div className="absolute top-[16.29rem] left-[0.56rem] rounded-[3.72px] bg-soft-blue flex flex-row py-[0.28rem] px-[2.79rem] items-start justify-start text-center text-off-white">
                <div className="relative tracking-[-0.02em] leading-[150%] font-semibold flex items-center justify-center w-[1.96rem] h-[0.47rem] shrink-0">
                  Go To Detail
                </div>
              </div>
              <div className="absolute top-[11.54rem] left-[0.56rem] flex flex-row items-center justify-start gap-[0.28rem] text-center">
                <div className="rounded-[3.72px] bg-whitesmoke-100 w-[0.84rem] h-[0.84rem] flex flex-row items-center justify-center">
                  <div className="relative tracking-[-0.02em] leading-[150%] font-semibold flex items-center justify-center w-[0.47rem] h-[0.47rem] shrink-0">
                    1
                  </div>
                </div>
                <div className="w-[6.42rem] flex flex-row items-start justify-start text-left">
                  <div className="relative tracking-[-0.02em] leading-[150%] font-medium flex items-center w-[6.42rem] h-[0.56rem] shrink-0">
                    Understanding the tools in Figma
                  </div>
                </div>
              </div>
              <div className="absolute top-[12.85rem] left-[0.56rem] flex flex-row items-center justify-start gap-[0.28rem] text-center">
                <div className="rounded-[3.72px] bg-whitesmoke-100 w-[0.84rem] h-[0.84rem] flex flex-row items-center justify-center">
                  <div className="relative tracking-[-0.02em] leading-[150%] font-semibold flex items-center justify-center w-[0.47rem] h-[0.47rem] shrink-0">
                    2
                  </div>
                </div>
                <div className="w-[6.42rem] flex flex-row items-start justify-start text-left">
                  <div className="relative tracking-[-0.02em] leading-[150%] font-medium flex items-center w-[6.42rem] h-[0.56rem] shrink-0">
                    Understand the basics of making designs
                  </div>
                </div>
              </div>
              <div className="absolute top-[14.15rem] left-[0.56rem] flex flex-row items-center justify-start gap-[0.28rem] text-center">
                <div className="rounded-[3.72px] bg-whitesmoke-100 w-[0.84rem] h-[0.84rem] flex flex-row items-center justify-center">
                  <div className="relative tracking-[-0.02em] leading-[150%] font-semibold flex items-center justify-center w-[0.47rem] h-[0.47rem] shrink-0">
                    3
                  </div>
                </div>
                <div className="w-[6.42rem] flex flex-row items-start justify-start text-left">
                  <div className="relative tracking-[-0.02em] leading-[150%] font-medium flex items-center w-[6.42rem] h-[0.56rem] shrink-0">
                    Design a mobile application with figma
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute top-[0rem] left-[8.19rem] rounded-xl bg-gray-100 shadow-[0px_8px_24px_rgba(118,_118,_178,_0.24)] w-[57.48rem] h-[40.88rem] overflow-hidden text-[0.96rem]">
              <div className="absolute h-full top-[0rem] bottom-[0rem] left-[0rem] bg-primary-0 w-[10.06rem] text-[1.92rem]">
                <div className="absolute w-[calc(100%_-_160.31px)] top-[-0.02rem] right-[-0.02rem] left-[10.04rem] box-border h-[40.92rem] border-r-[0.6px] border-solid border-whitesmoke-100" />
                <div className="absolute top-[1.28rem] left-[1.28rem] flex flex-row items-center justify-start font-paragraph-mobile">
                  <div className="relative tracking-[-0.02em] leading-[80%] font-semibold">
                    <span>team</span>
                    <span className="text-[2.56rem] text-soft-blue">.</span>
                  </div>
                </div>
                <div className="absolute top-[5.27rem] left-[1.28rem] flex flex-col items-start justify-start gap-[0.96rem] text-[0.56rem] text-desaturated-blue">
                  <div className="rounded-[6.39px] bg-whitesmoke-100 flex flex-col py-[0.4rem] px-[0.8rem] items-start justify-start text-dark-blue">
                    <div className="flex flex-row items-start justify-start gap-[0.48rem]">
                      <img
                        className="relative w-[0.96rem] h-[0.96rem]"
                        alt=""
                        src="/vuesaxlinearcategory2.svg"
                      />
                      <div className="relative tracking-[-0.02em] leading-[150%] font-semibold flex items-center w-[4.47rem] h-[0.96rem] shrink-0">
                        Overview
                      </div>
                    </div>
                  </div>
                  <div className="rounded-[6.39px] flex flex-row py-[0.4rem] px-[0.8rem] items-center justify-start gap-[0.48rem]">
                    <img
                      className="relative w-[0.96rem] h-[0.96rem]"
                      alt=""
                      src="/vuesaxlinearbook.svg"
                    />
                    <div className="relative tracking-[-0.02em] leading-[150%] font-semibold flex items-center w-[4.47rem] h-[0.96rem] shrink-0">
                      Task
                    </div>
                  </div>
                  <div className="rounded-[6.39px] flex flex-col py-[0.4rem] px-[0.8rem] items-start justify-start">
                    <div className="flex flex-row items-start justify-start gap-[0.48rem]">
                      <img
                        className="relative w-[0.96rem] h-[0.96rem]"
                        alt=""
                        src="/vuesaxlinearuseroctagon.svg"
                      />
                      <div className="relative tracking-[-0.02em] leading-[150%] font-semibold flex items-center w-[4.47rem] h-[0.96rem] shrink-0">
                        Mentors
                      </div>
                    </div>
                  </div>
                  <div className="rounded-[6.39px] flex flex-col py-[0.4rem] px-[0.8rem] items-start justify-start">
                    <div className="flex flex-row items-start justify-start gap-[0.48rem]">
                      <img
                        className="relative w-[0.96rem] h-[0.96rem]"
                        alt=""
                        src="/vuesaxlinearmessage.svg"
                      />
                      <div className="relative tracking-[-0.02em] leading-[150%] font-semibold flex items-center w-[4.47rem] h-[0.96rem] shrink-0">
                        Message
                      </div>
                    </div>
                  </div>
                  <div className="rounded-[6.39px] flex flex-col py-[0.4rem] px-[0.8rem] items-start justify-start">
                    <div className="flex flex-row items-start justify-start gap-[0.48rem]">
                      <img
                        className="relative w-[0.96rem] h-[0.96rem]"
                        alt=""
                        src="/vuesaxlinearsetting2.svg"
                      />
                      <div className="relative tracking-[-0.02em] leading-[150%] font-semibold flex items-center w-[4.47rem] h-[0.96rem] shrink-0">
                        Settings
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute top-[28.66rem] left-[1.28rem] w-[7.5rem] h-[10.94rem] text-center text-[0.48rem]">
                  <div className="absolute top-[1.04rem] left-[0rem] rounded-[6.39px] bg-dark-blue w-[7.5rem] h-[9.9rem] overflow-hidden">
                    <div className="absolute top-[0rem] left-[0rem] rounded-[6.39px] bg-gray-200 w-[7.5rem] h-[9.9rem]" />
                    <div className="absolute top-[-3.99rem] left-[-3.75rem] rounded-[50%] bg-gray-300 w-[6.39rem] h-[6.39rem]" />
                    <div className="absolute top-[6.71rem] left-[4.79rem] rounded-[50%] bg-gray-300 w-[6.39rem] h-[6.39rem]" />
                    <div className="absolute top-[7.66rem] left-[0.64rem] w-[6.23rem] h-[1.6rem]">
                      <div className="absolute top-[0rem] left-[0rem] rounded-[6.39px] bg-primary-0 w-[6.23rem] h-[1.6rem]" />
                      <div className="absolute top-[0.48rem] left-[0.96rem] tracking-[-0.02em] font-semibold flex items-center justify-center w-[4.31rem] h-[0.64rem]">
                        Go To Help Center
                      </div>
                    </div>
                    <div className="absolute top-[2.83rem] left-[0.72rem] w-[6.07rem] h-[3.03rem] text-[0.64rem] text-primary-0">
                      <div className="absolute top-[0rem] left-[0.96rem] tracking-[-0.02em] leading-[150%] font-semibold flex items-center justify-center w-[4.15rem] h-[0.8rem]">
                        Help Center
                      </div>
                      <div className="absolute top-[1.28rem] left-[0rem] text-[0.48rem] tracking-[-0.02em] font-medium flex items-center w-[6.07rem] h-[1.76rem]">
                        <span className="[line-break:anywhere] w-full">
                          <p className="m-0">Having Trouble in Learning.</p>
                          <p className="m-0">
                            Please contact us for more questions.
                          </p>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-[0rem] left-[2.79rem] w-[1.92rem] h-[2.08rem] text-[1.12rem] text-off-white font-paragraph-mobile">
                    <div className="absolute top-[0.32rem] left-[0rem] rounded-[30.66px] bg-desaturated-blue [filter:blur(15.33px)] w-[1.92rem] h-[1.76rem]" />
                    <div className="absolute top-[0rem] left-[0rem] rounded-[30.66px] bg-dark-blue box-border w-[1.92rem] h-[1.92rem] border-[2.6px] border-solid border-off-white" />
                    <b className="absolute top-[0.28rem] left-[0.28rem] tracking-[0.01em] leading-[120%] flex items-center justify-center w-[1.36rem]">
                      ?
                    </b>
                  </div>
                </div>
              </div>
              <div className="absolute top-[1.28rem] left-[11.34rem] flex flex-col items-start justify-start gap-[0.32rem]">
                <div className="relative tracking-[-0.03em] leading-[150%] font-semibold flex items-center w-[8.62rem]">
                  Hi, Skylar Dias
                </div>
                <div className="relative text-[0.64rem] tracking-[-0.02em] leading-[150%] font-medium text-desaturated-blue inline-block w-[9.42rem] h-[1.12rem] shrink-0">
                  Let's finish your task today!
                </div>
              </div>
              <div className="absolute top-[0rem] left-[40.08rem] bg-whitesmoke-100 w-[17.4rem] h-[40.88rem]" />
              <div className="absolute top-[1.92rem] left-[33.69rem] flex flex-row items-start justify-start gap-[0.96rem]">
                <img
                  className="relative w-[2.08rem] h-[2.08rem]"
                  alt=""
                  src="/notif.svg"
                />
                <img
                  className="relative rounded-[63.87px] w-[2.08rem] h-[2.08rem] object-cover"
                  alt=""
                  src="/profil@2x.png"
                />
              </div>
              <div className="absolute top-[5.91rem] left-[11.34rem] rounded-[6.39px] bg-dark-blue w-[7.74rem] h-[8.54rem] text-[1.28rem] text-off-white">
                <div className="absolute top-[2.4rem] left-[0.8rem] tracking-[-0.03em] leading-[150%] font-semibold">
                  65
                </div>
                <div className="absolute w-[calc(100%_-_44.71px)] top-[0.8rem] right-[2rem] left-[0.8rem] flex flex-row items-center justify-start text-[0.64rem] text-primary-0">
                  <div className="relative tracking-[-0.02em] leading-[150%] font-semibold inline-block w-[4.95rem] shrink-0">
                    Running Task
                  </div>
                </div>
                <div className="absolute top-[4.95rem] left-[0.8rem] w-[2.71rem] h-[2.71rem] text-center text-[0.72rem]">
                  <div className="absolute top-[0rem] left-[0rem] w-[2.71rem] h-[2.71rem]">
                    <img
                      className="absolute top-[-0.06rem] left-[-0.06rem] w-[2.83rem] h-[2.83rem]"
                      alt=""
                      src="/chart.svg"
                    />
                    <div className="absolute top-[0.88rem] left-[0.48rem] tracking-[-0.02em] leading-[150%] font-medium flex items-center justify-center w-[1.76rem] h-[0.96rem]">
                      45%
                    </div>
                  </div>
                </div>
                <div className="absolute top-[5.39rem] left-[4.23rem] flex flex-col items-start justify-start gap-[0.16rem] text-[0.8rem]">
                  <div className="relative tracking-[-0.02em] leading-[150%] font-semibold flex items-center w-[1.6rem] h-[0.96rem] shrink-0">
                    100
                  </div>
                  <div className="relative text-[0.56rem] tracking-[-0.02em] leading-[150%] font-medium text-desaturated-blue flex items-center w-[2.08rem] h-[0.8rem] shrink-0">
                    Task
                  </div>
                </div>
              </div>
              <div className="absolute top-[5.91rem] left-[20.36rem] rounded-[6.39px] bg-whitesmoke-100 w-[18.44rem] h-[8.54rem] overflow-hidden text-center text-[0.48rem]">
                <div className="absolute top-[0.8rem] right-[0.8rem] flex flex-row items-center justify-start gap-[0.32rem]">
                  <div className="relative tracking-[-0.02em] font-medium flex items-center justify-center w-[2.4rem] h-[0.96rem] shrink-0">
                    This Week
                  </div>
                  <img
                    className="relative w-[0.48rem] h-[0.48rem]"
                    alt=""
                    src="/arrowdown.svg"
                  />
                </div>
                <div className="absolute w-[calc(100%_-_256.75px)] top-[0.8rem] right-[15.25rem] left-[0.8rem] flex flex-row items-center justify-start text-left text-[0.64rem]">
                  <div className="relative tracking-[-0.02em] leading-[150%] font-semibold inline-block w-[2.4rem] shrink-0">
                    Activity
                  </div>
                </div>
                <div className="absolute top-[2.56rem] left-[0.8rem] rounded-[6.39px] bg-primary-0 w-[16.85rem] h-[5.19rem] overflow-hidden">
                  <div className="absolute top-[0.64rem] left-[0.64rem] flex flex-col items-start justify-start gap-[0.8rem]">
                    <div className="relative tracking-[-0.02em] font-medium flex items-center justify-center w-[0.32rem] h-[0.56rem] shrink-0">
                      3
                    </div>
                    <div className="relative tracking-[-0.02em] font-medium flex items-center justify-center w-[0.32rem] h-[0.56rem] shrink-0">
                      2
                    </div>
                    <div className="relative tracking-[-0.02em] font-medium flex items-center justify-center w-[0.32rem] h-[0.56rem] shrink-0">
                      1
                    </div>
                  </div>
                  <div className="absolute top-[0.64rem] left-[1.6rem] flex flex-row items-start justify-start gap-[2.04rem] text-left">
                    <div className="flex flex-col items-center justify-start gap-[0.32rem]">
                      <div className="relative box-border w-[0.04rem] h-[3.23rem] border-r-[0.6px] border-solid border-whitesmoke-100" />
                      <div className="relative tracking-[-0.02em] font-medium">
                        S
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start gap-[0.32rem]">
                      <div className="relative box-border w-[0.04rem] h-[3.23rem] border-r-[0.6px] border-solid border-whitesmoke-100" />
                      <div className="relative tracking-[-0.02em] font-medium">
                        M
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start gap-[0.32rem]">
                      <div className="relative box-border w-[0.04rem] h-[3.23rem] border-r-[0.6px] border-solid border-whitesmoke-100" />
                      <div className="relative tracking-[-0.02em] font-medium">
                        T
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start gap-[0.32rem]">
                      <div className="relative box-border w-[0.04rem] h-[3.23rem] border-r-[0.6px] border-solid border-whitesmoke-100" />
                      <div className="relative tracking-[-0.02em] font-medium">
                        W
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start gap-[0.32rem]">
                      <div className="relative box-border w-[0.04rem] h-[3.23rem] border-r-[0.6px] border-solid border-whitesmoke-100" />
                      <div className="relative tracking-[-0.02em] font-medium">
                        T
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start gap-[0.32rem]">
                      <div className="relative box-border w-[0.04rem] h-[3.23rem] border-r-[0.6px] border-solid border-whitesmoke-100" />
                      <div className="relative tracking-[-0.02em] font-medium">
                        F
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start gap-[0.32rem]">
                      <div className="relative box-border w-[0.04rem] h-[3.23rem] border-r-[0.6px] border-solid border-whitesmoke-100" />
                      <div className="relative tracking-[-0.02em] font-medium">
                        S
                      </div>
                    </div>
                  </div>
                  <img
                    className="absolute top-[0.96rem] left-[1.7rem] w-[14.29rem] h-[3.29rem]"
                    alt=""
                    src="/cart.svg"
                  />
                </div>
                <div className="absolute top-[4.79rem] left-[4.63rem] flex flex-col items-center justify-center">
                  <img
                    className="relative w-[0.64rem] h-[0.96rem]"
                    alt=""
                    src="/point.svg"
                  />
                </div>
                <div className="absolute top-[2.44rem] left-[3.27rem] w-[3.35rem] h-[1.88rem] text-[0.56rem] text-primary-0">
                  <img
                    className="absolute top-[0.62rem] left-[0.42rem] rounded-[1.28px] w-[1.38rem] h-[2.37rem]"
                    alt=""
                    src="/polygon-2.svg"
                  />
                  <div className="absolute top-[0rem] left-[0rem] rounded-[6.39px] bg-dark-blue flex flex-row py-[0.32rem] px-[0.72rem] items-start justify-start">
                    <div className="relative tracking-[-0.02em] leading-[150%] font-semibold flex items-center justify-center w-[1.92rem] h-[0.96rem] shrink-0">
                      2 Task
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute top-[15.73rem] left-[11.34rem] flex flex-col items-start justify-start gap-[0.8rem]">
                <div className="w-[27.46rem] flex flex-row items-center justify-between">
                  <div className="relative tracking-[-0.03em] leading-[150%] font-semibold flex items-center w-[7.82rem] shrink-0">
                    Monthly Mentors
                  </div>
                  <div className="flex flex-row items-start justify-start gap-[0.4rem]">
                    <img
                      className="relative w-[0.96rem] h-[0.96rem]"
                      alt=""
                      src="/arrowleft.svg"
                    />
                    <img
                      className="relative w-[0.96rem] h-[0.96rem]"
                      alt=""
                      src="/arrowright.svg"
                    />
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[1.28rem] text-[0.56rem]">
                  <div className="relative rounded-[6.39px] bg-primary-0 w-[13.09rem] h-[5.59rem] overflow-hidden shrink-0">
                    <div className="absolute top-[0.96rem] left-[0.96rem] flex flex-row items-center justify-start gap-[0.32rem] text-[0.64rem]">
                      <img
                        className="relative rounded-[127.73px] w-[1.92rem] h-[1.92rem] object-cover"
                        alt=""
                        src="/photo@2x.png"
                      />
                      <div className="flex flex-col items-start justify-start gap-[0.16rem]">
                        <div className="relative tracking-[-0.02em] leading-[150%] font-semibold flex items-center w-[4.95rem] h-[0.8rem] shrink-0">
                          Curious George
                        </div>
                        <div className="relative text-[0.48rem] tracking-[-0.02em] font-medium text-secondary-400 flex items-center w-[2.87rem] h-[0.64rem] shrink-0">
                          UI UX Design
                        </div>
                      </div>
                    </div>
                    <div className="absolute top-[1.44rem] left-[9.74rem] tracking-[-0.02em] leading-[150%] font-medium text-soft-blue text-right flex items-center w-[2.4rem] h-[0.96rem]">{`+ Follow `}</div>
                    <div className="absolute top-[3.67rem] left-[0.96rem] flex flex-row items-start justify-start gap-[0.32rem]">
                      <img
                        className="relative w-[0.96rem] h-[0.96rem]"
                        alt=""
                        src="/vuesaxlinearnote2.svg"
                      />
                      <div className="relative tracking-[-0.02em] leading-[150%] font-medium flex items-center w-[2.08rem] h-[0.96rem] shrink-0">
                        40 Task
                      </div>
                    </div>
                    <div className="absolute top-[3.67rem] left-[6.07rem] flex flex-row items-start justify-start gap-[0.32rem]">
                      <img
                        className="relative rounded-[0.64px] w-[0.96rem] h-[0.96rem]"
                        alt=""
                        src="/star-1.svg"
                      />
                      <div className="relative tracking-[-0.02em] leading-[150%] font-medium flex items-center w-[4.79rem] h-[0.96rem] shrink-0">
                        4,7 (750 Reviews)
                      </div>
                    </div>
                  </div>
                  <div className="relative rounded-[6.39px] bg-primary-0 w-[13.09rem] h-[5.59rem] overflow-hidden shrink-0">
                    <div className="absolute top-[0.96rem] left-[0.96rem] flex flex-row items-center justify-start gap-[0.32rem] text-[0.64rem]">
                      <img
                        className="relative rounded-[127.73px] w-[1.92rem] h-[1.92rem] object-cover"
                        alt=""
                        src="/photo1@2x.png"
                      />
                      <div className="flex flex-col items-start justify-start gap-[0.16rem]">
                        <div className="relative tracking-[-0.02em] leading-[150%] font-semibold flex items-center w-[5.27rem] h-[0.8rem] shrink-0">
                          Abraham Lincoln
                        </div>
                        <div className="relative text-[0.48rem] tracking-[-0.02em] font-medium text-secondary-400 flex items-center w-[2.87rem] h-[0.64rem] shrink-0">
                          3D Design
                        </div>
                      </div>
                    </div>
                    <div className="absolute top-[1.44rem] left-[9.58rem] tracking-[-0.02em] leading-[150%] font-medium text-secondary-400 text-right flex items-center w-[2.56rem] h-[0.96rem]">
                      Followed
                    </div>
                    <div className="absolute top-[3.67rem] left-[0.96rem] flex flex-row items-start justify-start gap-[0.32rem]">
                      <img
                        className="relative w-[0.96rem] h-[0.96rem]"
                        alt=""
                        src="/vuesaxlinearnote21.svg"
                      />
                      <div className="relative tracking-[-0.02em] leading-[150%] font-medium flex items-center w-[2.08rem] h-[0.96rem] shrink-0">
                        32 Task
                      </div>
                    </div>
                    <div className="absolute top-[3.67rem] left-[6.07rem] flex flex-row items-start justify-start gap-[0.32rem]">
                      <img
                        className="relative rounded-[0.64px] w-[0.96rem] h-[0.96rem]"
                        alt=""
                        src="/star-11.svg"
                      />
                      <div className="relative tracking-[-0.02em] leading-[150%] font-medium flex items-center w-[4.79rem] h-[0.96rem] shrink-0">
                        4,9 (510 Reviews)
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute top-[24.83rem] left-[11.34rem] flex flex-col items-start justify-start gap-[0.8rem]">
                <div className="w-[27.46rem] flex flex-row items-center justify-between">
                  <div className="relative tracking-[-0.03em] leading-[150%] font-semibold flex items-center w-[7.82rem] shrink-0">
                    Upcoming Task
                  </div>
                  <div className="flex flex-row items-start justify-start gap-[0.4rem]">
                    <img
                      className="relative w-[0.96rem] h-[0.96rem]"
                      alt=""
                      src="/arrowleft1.svg"
                    />
                    <img
                      className="relative w-[0.96rem] h-[0.96rem]"
                      alt=""
                      src="/arrowright1.svg"
                    />
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[1.28rem] text-[0.64rem]">
                  <div className="relative rounded-[6.39px] bg-primary-0 w-[13.09rem] h-[12.53rem] overflow-hidden shrink-0">
                    <img
                      className="absolute top-[0.96rem] left-[0.96rem] rounded-[6.39px] w-[11.18rem] h-[4.39rem] object-cover"
                      alt=""
                      src="/image141@2x.png"
                    />
                    <div className="absolute top-[5.99rem] left-[0.96rem] flex flex-col items-start justify-start gap-[0.16rem]">
                      <div className="relative tracking-[-0.02em] leading-[150%] font-semibold flex items-center w-[8.62rem] h-[0.8rem] shrink-0">
                        Creating Mobile App Design
                      </div>
                      <div className="relative text-[0.48rem] tracking-[-0.02em] font-medium text-secondary-400 flex items-center w-[2.87rem] h-[0.64rem] shrink-0">
                        UI UX Design
                      </div>
                    </div>
                    <div className="absolute top-[8.22rem] left-[0.96rem] flex flex-col items-start justify-start gap-[0.32rem]">
                      <div className="flex flex-row items-start justify-start gap-[5.11rem]">
                        <div className="relative tracking-[-0.02em] leading-[150%] font-medium flex items-center w-[3.99rem] h-[0.8rem] shrink-0">
                          Progress
                        </div>
                        <div className="relative tracking-[-0.02em] leading-[150%] font-medium text-soft-blue text-right flex items-center w-[2.08rem] h-[0.8rem] shrink-0">
                          75%
                        </div>
                      </div>
                      <div className="relative w-[11.18rem] h-[0.64rem]">
                        <div className="absolute top-[0.16rem] left-[0rem] rounded-[5.11px] bg-royalblue w-[11.18rem] h-[0.32rem]" />
                        <div className="absolute top-[0.16rem] left-[0rem] rounded-tl-[5.11px] rounded-tr-none rounded-br-none rounded-bl-[5.11px] bg-soft-blue w-[8.38rem] h-[0.32rem]" />
                        <div className="absolute top-[0rem] left-[8.06rem] rounded-[50%] bg-soft-blue box-border w-[0.64rem] h-[0.64rem] border-[1.3px] border-solid border-primary-0" />
                      </div>
                    </div>
                    <div className="absolute top-[10.62rem] left-[0.96rem] flex flex-row items-start justify-start gap-[0.32rem]">
                      <img
                        className="relative w-[0.96rem] h-[0.96rem]"
                        alt=""
                        src="/iconlylighttime-circle1.svg"
                      />
                      <div className="relative tracking-[-0.02em] leading-[150%] font-medium flex items-center w-[3.67rem] h-[0.96rem] shrink-0">
                        3 Days Left
                      </div>
                    </div>
                    <div className="absolute top-[10.62rem] left-[8.62rem] flex flex-row items-start justify-start">
                      <img
                        className="relative rounded-[127.73px] w-[0.96rem] h-[0.96rem] object-cover"
                        alt=""
                        src="/photo-11@2x.png"
                      />
                      <img
                        className="relative rounded-[127.73px] w-[0.96rem] h-[0.96rem] object-cover ml-[-0.32rem]"
                        alt=""
                        src="/photo-21@2x.png"
                      />
                      <img
                        className="relative rounded-[127.73px] w-[0.96rem] h-[0.96rem] object-cover ml-[-0.32rem]"
                        alt=""
                        src="/photo-31@2x.png"
                      />
                      <img
                        className="relative rounded-[127.73px] w-[0.96rem] h-[0.96rem] object-cover ml-[-0.32rem]"
                        alt=""
                        src="/photo-41@2x.png"
                      />
                      <img
                        className="relative rounded-[127.73px] w-[0.96rem] h-[0.96rem] object-cover ml-[-0.32rem]"
                        alt=""
                        src="/photo-51@2x.png"
                      />
                    </div>
                  </div>
                  <div className="relative rounded-[6.39px] bg-primary-0 w-[13.09rem] h-[12.53rem] overflow-hidden shrink-0">
                    <img
                      className="absolute top-[0.96rem] left-[0.96rem] rounded-[6.39px] w-[11.18rem] h-[4.39rem] object-cover"
                      alt=""
                      src="/image142@2x.png"
                    />
                    <div className="absolute top-[5.99rem] left-[0.96rem] flex flex-col items-start justify-start gap-[0.16rem]">
                      <div className="relative tracking-[-0.02em] leading-[150%] font-semibold flex items-center w-[8.62rem] h-[0.8rem] shrink-0">
                        Creating Perfect Website
                      </div>
                      <div className="relative text-[0.48rem] tracking-[-0.02em] font-medium text-secondary-400 flex items-center w-[3.67rem] h-[0.64rem] shrink-0">
                        Web Developer
                      </div>
                    </div>
                    <div className="absolute top-[8.22rem] left-[0.96rem] flex flex-col items-start justify-start gap-[0.32rem]">
                      <div className="flex flex-row items-start justify-start gap-[5.11rem]">
                        <div className="relative tracking-[-0.02em] leading-[150%] font-medium flex items-center w-[3.99rem] h-[0.8rem] shrink-0">
                          Progress
                        </div>
                        <div className="relative tracking-[-0.02em] leading-[150%] font-medium text-soft-blue text-right flex items-center w-[2.08rem] h-[0.8rem] shrink-0">
                          85%
                        </div>
                      </div>
                      <div className="relative w-[11.18rem] h-[0.64rem]">
                        <div className="absolute top-[0.16rem] left-[0rem] rounded-[5.11px] bg-royalblue w-[11.18rem] h-[0.32rem]" />
                        <div className="absolute top-[0.16rem] left-[0rem] rounded-tl-[5.11px] rounded-tr-none rounded-br-none rounded-bl-[5.11px] bg-soft-blue w-[9.58rem] h-[0.32rem]" />
                        <div className="absolute top-[0rem] left-[9.26rem] rounded-[50%] bg-soft-blue box-border w-[0.64rem] h-[0.64rem] border-[1.3px] border-solid border-primary-0" />
                      </div>
                    </div>
                    <div className="absolute top-[10.62rem] left-[0.96rem] flex flex-row items-start justify-start gap-[0.32rem]">
                      <img
                        className="relative w-[0.96rem] h-[0.96rem]"
                        alt=""
                        src="/iconlylighttime-circle2.svg"
                      />
                      <div className="relative tracking-[-0.02em] leading-[150%] font-medium flex items-center w-[3.67rem] h-[0.96rem] shrink-0">
                        4 Days Left
                      </div>
                    </div>
                    <div className="absolute top-[10.62rem] left-[8.62rem] flex flex-row items-start justify-start">
                      <img
                        className="relative rounded-[127.73px] w-[0.96rem] h-[0.96rem] object-cover"
                        alt=""
                        src="/photo-32@2x.png"
                      />
                      <img
                        className="relative rounded-[127.73px] w-[0.96rem] h-[0.96rem] object-cover ml-[-0.32rem]"
                        alt=""
                        src="/photo-12@2x.png"
                      />
                      <img
                        className="relative rounded-[127.73px] w-[0.96rem] h-[0.96rem] object-cover ml-[-0.32rem]"
                        alt=""
                        src="/photo-52@2x.png"
                      />
                      <img
                        className="relative rounded-[127.73px] w-[0.96rem] h-[0.96rem] object-cover ml-[-0.32rem]"
                        alt=""
                        src="/photo-22@2x.png"
                      />
                      <img
                        className="relative rounded-[127.73px] w-[0.96rem] h-[0.96rem] object-cover ml-[-0.32rem]"
                        alt=""
                        src="/photo-42@2x.png"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute top-[1.28rem] left-[41.35rem] rounded-[6.39px] bg-primary-0 w-[14.85rem] h-[6.39rem] overflow-hidden text-center text-[0.56rem] text-secondary-500">
                <div className="absolute top-[0.96rem] left-[0.96rem] flex flex-row items-start justify-start gap-[4.23rem]">
                  <img
                    className="relative w-[0.8rem] h-[0.8rem]"
                    alt=""
                    src="/arrowleft2.svg"
                  />
                  <div className="relative leading-[150%] font-semibold flex items-center justify-center w-[2.87rem] h-[0.8rem] shrink-0">
                    July 2022
                  </div>
                  <img
                    className="relative w-[0.8rem] h-[0.8rem]"
                    alt=""
                    src="/arrowright2.svg"
                  />
                </div>
                <div className="absolute top-[2.95rem] left-[8.62rem] rounded-[14.66px] bg-secondary-500 w-[1.6rem] h-[2.87rem]" />
                <div className="absolute top-[3.19rem] left-[0.8rem] flex flex-row items-start justify-start gap-[0.72rem] text-[0.48rem]">
                  <div className="flex flex-col items-center justify-center gap-[0.48rem]">
                    <div className="relative tracking-[-0.02em] font-medium flex items-center justify-center w-[0.48rem] h-[0.64rem] shrink-0">
                      S
                    </div>
                    <div className="rounded-[63.87px] bg-whitesmoke-100 w-[1.28rem] h-[1.28rem] flex flex-row items-center justify-center">
                      <div className="relative tracking-[-0.02em] font-medium flex items-center justify-center w-[0.64rem] h-[0.64rem] shrink-0">
                        10
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-center gap-[0.48rem]">
                    <div className="relative tracking-[-0.02em] font-medium flex items-center justify-center w-[0.48rem] h-[0.64rem] shrink-0">
                      M
                    </div>
                    <div className="rounded-[63.87px] bg-whitesmoke-100 w-[1.28rem] h-[1.28rem] flex flex-row items-center justify-center">
                      <div className="relative tracking-[-0.02em] font-medium flex items-center justify-center w-[0.64rem] h-[0.64rem] shrink-0">
                        11
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-center gap-[0.48rem]">
                    <div className="relative tracking-[-0.02em] font-medium flex items-center justify-center w-[0.48rem] h-[0.64rem] shrink-0">
                      T
                    </div>
                    <div className="rounded-[63.87px] bg-whitesmoke-100 w-[1.28rem] h-[1.28rem] flex flex-row items-center justify-center">
                      <div className="relative tracking-[-0.02em] font-medium flex items-center justify-center w-[0.64rem] h-[0.64rem] shrink-0">
                        12
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-center gap-[0.48rem]">
                    <div className="relative tracking-[-0.02em] font-medium flex items-center justify-center w-[0.48rem] h-[0.64rem] shrink-0">
                      W
                    </div>
                    <div className="rounded-[63.87px] bg-whitesmoke-100 w-[1.28rem] h-[1.28rem] flex flex-row items-center justify-center">
                      <div className="relative tracking-[-0.02em] font-medium flex items-center justify-center w-[0.64rem] h-[0.64rem] shrink-0">
                        13
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-center gap-[0.48rem] text-primary-0">
                    <div className="relative tracking-[-0.02em] font-semibold flex items-center justify-center w-[0.48rem] h-[0.64rem] shrink-0">
                      T
                    </div>
                    <div className="rounded-[63.87px] bg-soft-blue w-[1.28rem] h-[1.28rem] flex flex-row items-center justify-center text-whitesmoke-100">
                      <div className="relative tracking-[-0.02em] font-semibold flex items-center justify-center w-[0.64rem] h-[0.64rem] shrink-0">
                        14
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-center gap-[0.48rem]">
                    <div className="relative tracking-[-0.02em] font-medium flex items-center justify-center w-[0.48rem] h-[0.64rem] shrink-0">
                      F
                    </div>
                    <div className="rounded-[63.87px] bg-whitesmoke-100 w-[1.28rem] h-[1.28rem] flex flex-row items-center justify-center">
                      <div className="relative tracking-[-0.02em] font-medium flex items-center justify-center w-[0.64rem] h-[0.64rem] shrink-0">
                        15
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-center gap-[0.48rem]">
                    <div className="relative tracking-[-0.02em] font-medium flex items-center justify-center w-[0.48rem] h-[0.64rem] shrink-0">
                      S
                    </div>
                    <div className="rounded-[63.87px] bg-whitesmoke-100 w-[1.28rem] h-[1.28rem] flex flex-row items-center justify-center">
                      <div className="relative tracking-[-0.02em] font-medium flex items-center justify-center w-[0.64rem] h-[0.64rem] shrink-0">
                        16
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute top-[8.94rem] left-[41.35rem] rounded-[6.39px] bg-primary-0 w-[14.85rem] h-[30.66rem] overflow-hidden text-[0.56rem] text-secondary-500">
                <div className="absolute top-[0.96rem] left-[0.96rem] flex flex-row items-start justify-start gap-[9.1rem]">
                  <div className="relative tracking-[-0.02em] leading-[150%] font-semibold flex items-center w-[3.03rem] h-[0.8rem] shrink-0">
                    Task Today
                  </div>
                  <img
                    className="relative w-[0.8rem] h-[0.8rem]"
                    alt=""
                    src="/vuesaxlinearmore1.svg"
                  />
                </div>
                <img
                  className="absolute top-[2.56rem] left-[0.96rem] rounded-[6.39px] w-[12.93rem] h-[6.39rem] object-cover"
                  alt=""
                  src="/image143@2x.png"
                />
                <div className="absolute top-[9.74rem] left-[0.96rem] flex flex-col items-start justify-start gap-[0.16rem] text-[0.64rem]">
                  <div className="relative tracking-[-0.02em] leading-[150%] font-semibold flex items-center w-[9.9rem] h-[0.8rem] shrink-0">
                    Creating Awesome Mobile Apps
                  </div>
                  <div className="relative text-[0.48rem] tracking-[-0.02em] font-medium text-secondary-400 flex items-center w-[3.67rem] h-[0.64rem] shrink-0">
                    UI /UX Designer
                  </div>
                </div>
                <div className="absolute top-[18.2rem] left-[0.96rem] flex flex-row items-start justify-start gap-[5.27rem] text-[0.64rem] text-dark-blue">
                  <div className="relative tracking-[-0.02em] leading-[150%] font-semibold flex items-center w-[3.99rem] h-[0.8rem] shrink-0">
                    Detail Task
                  </div>
                  <div className="relative text-[0.48rem] tracking-[-0.02em] font-medium text-desaturated-blue flex items-center w-[3.67rem] h-[0.8rem] shrink-0">
                    UI / UX Designer
                  </div>
                </div>
                <div className="absolute top-[12.14rem] left-[0.96rem] flex flex-col items-start justify-start gap-[0.32rem] text-[0.64rem]">
                  <div className="flex flex-row items-start justify-start gap-[6.87rem]">
                    <div className="relative tracking-[-0.02em] leading-[150%] font-medium flex items-center w-[3.99rem] h-[0.8rem] shrink-0">
                      Progress
                    </div>
                    <div className="relative tracking-[-0.02em] leading-[150%] font-medium text-primary-500 text-right flex items-center w-[2.08rem] h-[0.8rem] shrink-0">
                      90%
                    </div>
                  </div>
                  <div className="relative w-[12.93rem] h-[0.64rem]">
                    <div className="absolute top-[0.16rem] left-[0rem] rounded-[5.11px] bg-royalblue w-[12.93rem] h-[0.32rem]" />
                    <div className="absolute top-[0.16rem] left-[0rem] rounded-tl-[5.11px] rounded-tr-none rounded-br-none rounded-bl-[5.11px] bg-soft-blue w-[10.78rem] h-[0.32rem]" />
                    <div className="absolute top-[0rem] left-[10.46rem] rounded-[50%] bg-primary-500 box-border w-[0.64rem] h-[0.64rem] border-[1.3px] border-solid border-primary-0" />
                  </div>
                </div>
                <div className="absolute top-[16.91rem] left-[0.94rem] box-border w-[12.97rem] h-[0.04rem] border-t-[0.6px] border-solid border-whitesmoke-100" />
                <div className="absolute top-[14.69rem] left-[0.96rem] flex flex-row items-start justify-start gap-[0.32rem] text-[0.64rem]">
                  <img
                    className="relative w-[0.96rem] h-[0.96rem]"
                    alt=""
                    src="/iconlylighttime-circle3.svg"
                  />
                  <div className="relative tracking-[-0.02em] leading-[150%] font-medium flex items-center w-[3.67rem] h-[0.96rem] shrink-0">
                    1 Hour
                  </div>
                </div>
                <div className="absolute top-[14.69rem] left-[10.38rem] flex flex-row items-start justify-start">
                  <img
                    className="relative rounded-[127.73px] w-[0.96rem] h-[0.96rem] object-cover"
                    alt=""
                    src="/photo-43@2x.png"
                  />
                  <img
                    className="relative rounded-[127.73px] w-[0.96rem] h-[0.96rem] object-cover ml-[-0.32rem]"
                    alt=""
                    src="/photo-23@2x.png"
                  />
                  <img
                    className="relative rounded-[127.73px] w-[0.96rem] h-[0.96rem] object-cover ml-[-0.32rem]"
                    alt=""
                    src="/photo-13@2x.png"
                  />
                  <img
                    className="relative rounded-[127.73px] w-[0.96rem] h-[0.96rem] object-cover ml-[-0.32rem]"
                    alt=""
                    src="/photo-53@2x.png"
                  />
                  <img
                    className="relative rounded-[127.73px] w-[0.96rem] h-[0.96rem] object-cover ml-[-0.32rem]"
                    alt=""
                    src="/photo-33@2x.png"
                  />
                </div>
                <div className="absolute top-[27.94rem] left-[0.96rem] rounded-[6.39px] bg-soft-blue flex flex-row py-[0.48rem] px-[4.79rem] items-start justify-start text-center text-off-white">
                  <div className="relative tracking-[-0.02em] leading-[150%] font-semibold flex items-center justify-center w-[3.35rem] h-[0.8rem] shrink-0">
                    Go To Detail
                  </div>
                </div>
                <div className="absolute top-[19.8rem] left-[0.96rem] flex flex-row items-center justify-start gap-[0.48rem] text-center">
                  <div className="rounded-[6.39px] bg-whitesmoke-100 w-[1.44rem] h-[1.44rem] flex flex-row items-center justify-center">
                    <div className="relative tracking-[-0.02em] leading-[150%] font-semibold flex items-center justify-center w-[0.8rem] h-[0.8rem] shrink-0">
                      1
                    </div>
                  </div>
                  <div className="w-[11.02rem] flex flex-row items-start justify-start text-left">
                    <div className="relative tracking-[-0.02em] leading-[150%] font-medium flex items-center w-[11.02rem] h-[0.96rem] shrink-0">
                      Understanding the tools in Figma
                    </div>
                  </div>
                </div>
                <div className="absolute top-[22.03rem] left-[0.96rem] flex flex-row items-center justify-start gap-[0.48rem] text-center">
                  <div className="rounded-[6.39px] bg-whitesmoke-100 w-[1.44rem] h-[1.44rem] flex flex-row items-center justify-center">
                    <div className="relative tracking-[-0.02em] leading-[150%] font-semibold flex items-center justify-center w-[0.8rem] h-[0.8rem] shrink-0">
                      2
                    </div>
                  </div>
                  <div className="w-[11.02rem] flex flex-row items-start justify-start text-left">
                    <div className="relative tracking-[-0.02em] leading-[150%] font-medium flex items-center w-[11.02rem] h-[0.96rem] shrink-0">
                      Understand the basics of making designs
                    </div>
                  </div>
                </div>
                <div className="absolute top-[24.27rem] left-[0.96rem] flex flex-row items-center justify-start gap-[0.48rem] text-center">
                  <div className="rounded-[6.39px] bg-whitesmoke-100 w-[1.44rem] h-[1.44rem] flex flex-row items-center justify-center">
                    <div className="relative tracking-[-0.02em] leading-[150%] font-semibold flex items-center justify-center w-[0.8rem] h-[0.8rem] shrink-0">
                      3
                    </div>
                  </div>
                  <div className="w-[11.02rem] flex flex-row items-start justify-start text-left">
                    <div className="relative tracking-[-0.02em] leading-[150%] font-medium flex items-center w-[11.02rem] h-[0.96rem] shrink-0">
                      Design a mobile application with figma
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute top-[19.88rem] left-[0rem] rounded-[8.29px] bg-primary-0 shadow-[0px_12px_24px_rgba(84,_104,_231,_0.24)] w-[18.34rem] h-[11.81rem] overflow-hidden text-[0.73rem]">
              <div className="absolute top-[1.24rem] left-[1.24rem] flex flex-row items-center justify-start gap-[0.41rem] text-[0.83rem]">
                <img
                  className="relative rounded-[165.79px] w-[2.49rem] h-[2.49rem] object-cover"
                  alt=""
                  src="/photo2@2x.png"
                />
                <div className="flex flex-col items-start justify-start gap-[0.21rem]">
                  <div className="relative tracking-[-0.02em] leading-[150%] font-semibold flex items-center w-[7.88rem] h-[1.04rem] shrink-0">
                    Julia Philips
                  </div>
                  <div className="relative text-[0.62rem] tracking-[-0.01em] text-desaturated-blue flex items-center w-[6.42rem] h-[0.83rem] shrink-0">
                    IOS Developer
                  </div>
                </div>
              </div>
              <div className="absolute top-[1.87rem] left-[13.78rem] tracking-[-0.02em] leading-[150%] font-medium text-soft-blue text-right flex items-center w-[3.32rem] h-[1.24rem]">{`+ Follow  `}</div>
              <div className="absolute top-[9.33rem] left-[1.24rem] flex flex-row items-start justify-start gap-[0.41rem]">
                <img
                  className="relative w-[1.24rem] h-[1.24rem]"
                  alt=""
                  src="/vuesaxlinearnote22.svg"
                />
                <div className="relative tracking-[-0.02em] leading-[150%] font-medium flex items-center w-[2.69rem] h-[1.24rem] shrink-0">
                  60 Task
                </div>
              </div>
              <div className="absolute top-[9.33rem] left-[9.22rem] flex flex-row items-start justify-start gap-[0.41rem]">
                <img
                  className="relative rounded-[0.83px] w-[1.24rem] h-[1.24rem]"
                  alt=""
                  src="/star-12.svg"
                />
                <div className="relative tracking-[-0.02em] leading-[150%] font-medium flex items-center w-[6.22rem] h-[1.24rem] shrink-0">
                  4,9 (910 Reviews)
                </div>
              </div>
              <div className="absolute top-[4.97rem] left-[1.24rem] leading-[200%] font-medium text-gray-500 flex items-center w-[15.85rem] h-[3.11rem]">
                Hi, I'm Julia Philips. I'm a senior manager at Apple company . .
                .
              </div>
            </div>
            <div className="absolute top-[18.38rem] left-[16.75rem] rounded-3xs bg-soft-blue shadow-[0px_8px_24px_rgba(118,_118,_178,_0.24)] flex flex-row p-[0.63rem] items-start justify-start">
              <img
                className="relative w-[1.5rem] h-[1.5rem]"
                alt=""
                src="/send2.svg"
              />
            </div>
          </div>
          <div className="w-[31.75rem] flex flex-col items-start justify-start gap-[3rem] text-[3.13rem] font-paragraph-mobile">
            <div className="self-stretch flex flex-col items-start justify-start gap-[1.5rem]">
              <b className="self-stretch relative leading-[4rem]">
                Chats for your distributed teams
              </b>
              <div className="self-stretch relative text-[1rem] leading-[1.5rem] text-gray-500">
                Team combines the immediacy of real-time chat with an email
                threading model. With Team, you can catch up on important
                conversations while ignoring irrelevant ones.
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
      </div>
      <b className="absolute top-[211.88rem] left-[calc(50%_-_231px)] leading-[4rem] inline-block text-center w-[28.88rem]">
        What people say about Team
      </b>
      <InfoSectionContainer
        chatText="/imggroup3.svg"
        teamChatText="Chats for your distributed teams"
        teamThreadText="Team combines the immediacy of real-time chat with an email threading model. With Team, you can catch up on important conversations while ignoring irrelevant ones."
      />
      <div className="absolute top-[155.13rem] left-[0rem] w-[35.5rem] flex flex-row items-start justify-start gap-[1.5rem] text-[2.13rem]">
        <div className="w-[16.5rem] flex flex-col py-[0rem] pr-[0rem] pl-[1.5rem] box-border items-start justify-start gap-[3rem]">
          <div className="self-stretch flex flex-col items-start justify-start gap-[1.5rem]">
            <b className="self-stretch relative leading-[2.63rem]">
              Choose how you want to work
            </b>
            <div className="self-stretch relative text-[1rem] leading-[1.5rem] text-gray-500">
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
              src="/iconactionarrow-right-alt-24px.svg"
            />
          </div>
        </div>
        <img
          className="relative w-[17.5rem] h-[22.5rem]"
          alt=""
          src="/imggroup4.svg"
        />
      </div>
      <InfoSectionContainer
        chatText="/imggroup5.svg"
        teamChatText="Move faster with your Team tools"
        teamThreadText="With your other work apps connected to Team, you can work faster by switching tabs less. And with powerful tools like Workflow Builder, you can automate away routine tasks."
        propTop="182.38rem"
      />
      <FooterContainer
        productIds="/iconnavigationarrow-forward-24px3.svg"
        propWidth="568px"
        propHeight="764px"
        propLeft="40px"
        propTop="56px"
        propTop1="685px"
        propLeft1="40px"
        propTop2="218px"
        propLeft2="40px"
        propTop3="218px"
        propLeft3="200px"
        propTop4="218px"
        propLeft4="384px"
        propTop5="440px"
        propLeft5="40px"
      />
      <ReviewCarouselContainer
        productIds="/avatar153.svg"
        productIdsArray="/avatar154.svg"
        selectedProductIds="/avatar155.svg"
        productIdsToCompare="/avatar156.svg"
        productIdsToCompare2="/avatar157.svg"
        propTop="224.88rem"
        propGap="1rem"
      />
      <img
        className="absolute top-[124.5rem] right-[18.56rem] w-[10rem] h-[4.28rem] object-cover"
        alt=""
        src="/calender1@2x.png"
      />
      <img
        className="absolute top-[155.88rem] left-[27.25rem] w-[7.5rem] h-[3.22rem] object-cover"
        alt=""
        src="/image148@2x.png"
      />
      <img
        className="absolute top-[159.84rem] left-[27.25rem] w-[7.5rem] h-[7.17rem] object-cover"
        alt=""
        src="/image149@2x.png"
      />
      <img
        className="absolute top-[192.31rem] left-[0.75rem] w-[8rem] h-[7.64rem] object-cover"
        alt=""
        src="/image150@2x.png"
      />
      <img
        className="absolute top-[200.7rem] left-[0.75rem] w-[8rem] h-[3.43rem] object-cover"
        alt=""
        src="/image151@2x.png"
      />
    </div>
  );
};

export default HomeMobileLandscape;
