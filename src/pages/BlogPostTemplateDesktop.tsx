import { FunctionComponent } from "react";
import AuthorContainer from "../components/AuthorContainer";
import FooterContainer from "../components/FooterContainer";

const BlogPostTemplateDesktop: FunctionComponent = () => {
  return (
    <div className="relative bg-off-white w-full h-[199.88rem] overflow-hidden text-left text-[3.13rem] text-dark-blue font-paragraph-mobile">
      <div className="absolute top-[2.5rem] left-[calc(50%_-_580px)] w-[72.5rem] flex flex-row items-center justify-between">
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
        <div className="flex flex-row items-center justify-start gap-[3.5rem] text-[1rem]">
          <div className="relative [text-decoration:underline] leading-[150%] font-medium">
            Product
          </div>
          <div className="relative [text-decoration:underline] leading-[150%] font-medium">
            Blog
          </div>
          <div className="relative [text-decoration:underline] leading-[150%] font-medium">
            Support
          </div>
          <div className="relative [text-decoration:underline] leading-[150%] font-medium">
            Log In
          </div>
          <div className="rounded bg-royalblue overflow-hidden flex flex-row py-[0.63rem] px-[2.75rem] items-center justify-center text-center text-[1.13rem]">
            <div className="relative leading-[150%]">Get Access</div>
          </div>
        </div>
      </div>
      <b className="absolute top-[14.25rem] left-[21.13rem] leading-[4rem] inline-block text-black w-[47.75rem]">
        Data exported by Team Cloud organization administrators contained
        private files
      </b>
      <img
        className="absolute top-[40.25rem] left-[calc(50%_-_481px)] w-[60.13rem] h-[31.25rem] overflow-hidden"
        alt=""
        src="/image3.svg"
      />
      <div className="absolute top-[76.5rem] left-[21.13rem] text-[1.13rem] leading-[1.69rem] text-darkslategray inline-block w-[47.75rem]">
        <p className="m-0">
          Administrators of Team Cloud organizations can export public data from
          their organization via the organization settings menu. The exports
          include all the data that appears in public streams, and can be used
          to migrate from Team Cloud to self-hosting Team. Note that exporting
          private data is a separate process that requires contacting Team
          Support.
        </p>
        <p className="m-0">&nbsp;</p>
        <p className="m-0">
          Due to a bug in the public export code, exports of public data
          contained all uploaded files, even those from private messages and
          private streams. This may have allowed organization owners or
          administrators to extract uploaded files that they were not otherwise
          allowed to access. The content of non-public messages was never
          included in public exports.
        </p>
        <p className="m-0">&nbsp;</p>
        <p className="m-0">
          This bug has existed since the public export feature was implemented
          in August 2019. We have deleted all existing Team Cloud exports from
          our servers, and will be making changes to auto-expire all exports
          after 7 days in the future. This bug was fixed for self-hosted users
          in the Team Server 5.4 release.
        </p>
        <p className="m-0">&nbsp;</p>
        <p className="m-0">
          We have notified by email all administrators and users in
          non-deactivated Team Cloud organizations who may have been impacted by
          this bug. As many organizations have never exported their data, most
          Team Cloud users were not affected.
        </p>
        <p className="m-0">&nbsp;</p>
        <p className="m-0">
          We would like to thank Antoine Benoist for bringing this issue to our
          attention.
        </p>
      </div>
      <div className="absolute top-[33.75rem] left-[21.13rem] w-[17.5rem] flex flex-row items-center justify-between text-[0.88rem] text-desaturated-blue">
        <img
          className="relative w-[3rem] h-[3rem] overflow-hidden shrink-0"
          alt=""
          src="/avatar9.svg"
        />
        <div className="self-stretch flex-1 overflow-hidden flex flex-row py-[0rem] px-[0.5rem] items-center justify-start">
          <div className="flex-1 relative tracking-[0.01em] leading-[1.44rem]">
            Mark Brooklyn
          </div>
        </div>
        <img
          className="relative w-[0.07rem] h-[1.5rem]"
          alt=""
          src="/vector2.svg"
        />
        <div className="self-stretch flex-1 overflow-hidden flex flex-row py-[0rem] px-[0.5rem] items-center justify-start">
          <div className="flex-1 relative tracking-[0.01em] leading-[1.44rem]">
            June 14, 2023
          </div>
        </div>
      </div>
      <AuthorContainer imageDimensions="/avatar10.svg" propLeft="338px" />
      <div className="absolute top-[133.97rem] left-[21.09rem] box-border w-[47.81rem] h-[0.06rem] border-t-[1px] border-solid border-light-grey" />
      <div className="absolute top-[141.5rem] left-[21.13rem] w-[47.75rem] h-[17.13rem] flex flex-col items-start justify-start gap-[3rem] min-w-[16.25rem] max-w-[50rem] text-[1.13rem]">
        <div className="relative leading-[150%]">Join the conversation</div>
        <div className="self-stretch flex-1 flex flex-row items-start justify-start gap-[1rem] text-[0.88rem] text-gray-500">
          <img
            className="relative w-[3.5rem] h-[3.5rem] overflow-hidden shrink-0"
            alt=""
            src="/avatar11.svg"
          />
          <div className="self-stretch flex-1 relative overflow-hidden">
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded bg-off-white box-border border-[2px] border-solid border-desaturated-blue" />
            <div className="absolute top-[1rem] left-[1rem] tracking-[0.01em] leading-[1.44rem]">
              Comments
            </div>
            <img
              className="absolute right-[0.33rem] bottom-[0.27rem] w-[0.79rem] h-[0.79rem]"
              alt=""
              src="/expand-icon.svg"
            />
          </div>
        </div>
      </div>
      <FooterContainer
        productIds="/iconnavigationarrow-forward-24px1.svg"
        propWidth="1440px"
        propHeight="500px"
        propLeft="140px"
        propTop="73px"
        propTop1="440px"
        propLeft1="140px"
        propTop2="95px"
        propLeft2="438px"
        propTop3="95px"
        propLeft3="635px"
        propTop4="95px"
        propLeft4="834px"
        propTop5="95px"
        propLeft5="1033px"
      />
    </div>
  );
};

export default BlogPostTemplateDesktop;
