import { FunctionComponent } from "react";
import AuthorContainer from "../components/AuthorContainer";

const BlogPostTemplateTablet: FunctionComponent = () => {
  return (
    <div className="relative bg-off-white w-full h-[220.31rem] overflow-hidden text-left text-[3.13rem] text-dark-blue font-paragraph-mobile">
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
      <b className="absolute top-[11.75rem] left-[3.75rem] leading-[4rem] inline-block text-black w-[39rem]">
        Data exported by Team Cloud organization administrators contained
        private files
      </b>
      <div className="absolute top-[31.25rem] left-[3.75rem] w-[17.5rem] flex flex-row items-center justify-between text-[0.88rem] text-desaturated-blue">
        <img
          className="relative w-[3rem] h-[3rem] overflow-hidden shrink-0"
          alt=""
          src="/avatar6.svg"
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
      <img
        className="absolute top-[37.75rem] left-[calc(50%_-_372px)] w-[46.56rem] h-[31.25rem] overflow-hidden"
        alt=""
        src="/image2.svg"
      />
      <div className="absolute top-[74rem] left-[3.75rem] text-[1.13rem] leading-[1.69rem] text-darkslategray inline-block w-[39rem]">
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
      <AuthorContainer
        imageDimensions="/avatar7.svg"
        propTop="1993px"
        propLeft="60px"
      />
      <div className="absolute top-[138.41rem] left-[calc(50%_-_312.5px)] box-border w-[39.06rem] h-[0.06rem] border-t-[1px] border-solid border-light-grey" />
      <div className="absolute top-[144.44rem] left-[3.75rem] w-[39rem] h-[17.13rem] flex flex-col items-start justify-start gap-[3rem] min-w-[16.25rem] max-w-[50rem] text-[1.13rem]">
        <div className="relative leading-[150%]">Join the conversation</div>
        <div className="self-stretch flex-1 flex flex-row items-start justify-start gap-[1rem] text-[0.88rem] text-gray-500">
          <img
            className="relative w-[3.5rem] h-[3.5rem] overflow-hidden shrink-0"
            alt=""
            src="/avatar8.svg"
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
      <div className="absolute bottom-[0rem] left-[0rem] w-[46.5rem] h-[48.75rem] overflow-hidden text-[1.5rem] text-off-white">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-dark-blue" />
        <div className="absolute top-[4.5rem] left-[2.5rem] flex flex-col items-start justify-start gap-[1rem] text-[3.13rem]">
          <div className="relative w-[8.63rem] h-[3.25rem]">
            <div className="absolute top-[0rem] left-[0rem] tracking-[-0.02em] leading-[100%] font-semibold">
              <span>team</span>
              <span className="text-[3.25rem] text-soft-blue">.</span>
            </div>
          </div>
          <div className="relative text-[0.88rem] tracking-[0.01em] leading-[1.44rem] flex items-center w-[10.5rem]">{`Collaboration platform for mordern team `}</div>
        </div>
        <div className="absolute top-[43.81rem] left-[2.5rem] flex flex-row items-start justify-start text-[0.88rem]">
          <div className="relative tracking-[0.01em] leading-[1.44rem]">
            © Copyright Team Inc.
          </div>
        </div>
        <div className="absolute top-[14.63rem] left-[2.5rem] w-[7rem] h-[8.69rem] text-soft-blue">
          <div className="absolute top-[0rem] left-[0rem] leading-[1.88rem]">
            Company
          </div>
          <div className="absolute top-[2.88rem] left-[0rem] flex flex-col items-start justify-start gap-[0.75rem] text-[0.88rem] text-off-white">
            <div className="relative tracking-[0.01em] leading-[1.44rem]">
              Product
            </div>
            <div className="relative tracking-[0.01em] leading-[1.44rem]">
              Blog
            </div>
            <div className="relative tracking-[0.01em] leading-[1.44rem]">
              Support
            </div>
            <div className="relative tracking-[0.01em] leading-[1.44rem] hidden">
              Support
            </div>
          </div>
        </div>
        <div className="absolute top-[14.63rem] left-[13.5rem] w-[8.5rem] h-[10.88rem] text-soft-blue">
          <div className="absolute top-[0rem] left-[0rem] leading-[1.88rem]">
            Features
          </div>
          <div className="absolute top-[2.88rem] left-[0rem] flex flex-col items-start justify-start gap-[0.75rem] text-[0.88rem] text-off-white">
            <div className="relative tracking-[0.01em] leading-[1.44rem]">
              Screen Sharing
            </div>
            <div className="relative tracking-[0.01em] leading-[1.44rem]">{`iOS & Android Apps`}</div>
            <div className="relative tracking-[0.01em] leading-[1.44rem]">
              File Sharing
            </div>
            <div className="relative tracking-[0.01em] leading-[1.44rem]">
              User Managment
            </div>
          </div>
        </div>
        <div className="absolute top-[14.63rem] left-[26rem] w-[8.63rem] h-[10rem] text-soft-blue">
          <div className="absolute top-[0rem] left-[0rem] leading-[1.88rem]">
            Contact Us
          </div>
          <div className="absolute top-[2.75rem] left-[0rem] flex flex-col items-start justify-center gap-[0.75rem] text-[0.88rem] text-off-white">
            <div className="relative tracking-[0.01em] leading-[1.44rem]">
              info@teamapp.com
            </div>
            <div className="relative tracking-[0.01em] leading-[1.44rem]">
              1-800-200-300
            </div>
            <div className="relative tracking-[0.01em] leading-[1.44rem]">
              <p className="m-0">1010 Sunset Blv.</p>
              <p className="m-0">Palo Alto, California</p>
            </div>
          </div>
        </div>
        <div className="absolute top-[28.5rem] left-[2.5rem] w-[16.75rem] h-[7.81rem] text-[0.88rem]">
          <div className="absolute top-[0rem] left-[0rem] text-[1.5rem] leading-[1.88rem] text-soft-blue">{`Stay up to date `}</div>
          <div className="absolute top-[2.88rem] left-[0rem] tracking-[0.01em] leading-[1.44rem]">
            Subscribe to our newseller
          </div>
          <div className="absolute top-[4.94rem] left-[0rem] rounded bg-whitesmoke-200 w-[16.75rem] overflow-hidden flex flex-row py-[0.69rem] px-[1rem] box-border items-start justify-between">
            <div className="relative tracking-[0.01em] leading-[160%]">
              Email
            </div>
            <img
              className="relative w-[1.5rem] h-[1.5rem]"
              alt=""
              src="/iconnavigationarrow-forward-24px1.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPostTemplateTablet;
