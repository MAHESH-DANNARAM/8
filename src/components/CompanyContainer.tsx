import { FunctionComponent, memo } from "react";

type CompanyContainerType = {
  productId?: string;
};

const CompanyContainer: FunctionComponent<CompanyContainerType> = memo(
  ({ productId }) => {
    return (
      <div className="absolute bottom-[0.19rem] left-[0rem] bg-dark-blue w-[20rem] h-[71.25rem] overflow-hidden text-left text-[1.5rem] text-off-white font-paragraph-mobile">
        <div className="absolute w-full top-[0rem] right-[0%] left-[0%] bg-dark-blue h-[71.25rem]" />
        <div className="absolute top-[3rem] left-[1.5rem] flex flex-col items-start justify-start gap-[1rem] text-[3.13rem]">
          <div className="relative w-[8.63rem] h-[3.25rem]">
            <div className="absolute top-[0rem] left-[0rem] tracking-[-0.02em] leading-[100%] font-semibold">
              <span>team</span>
              <span className="text-[3.25rem] text-soft-blue">.</span>
            </div>
          </div>
          <div className="relative text-[0.88rem] tracking-[0.01em] leading-[1.44rem] flex items-center w-[10.5rem]">{`Collaboration platform for mordern team `}</div>
        </div>
        <div className="absolute bottom-[2.31rem] left-[1.5rem] flex flex-row items-start justify-start text-[0.88rem]">
          <div className="relative tracking-[0.01em] leading-[1.44rem]">
            © Copyright Team Inc.
          </div>
        </div>
        <div className="absolute top-[24.44rem] left-[1.5rem] w-[7rem] h-[8.69rem] text-soft-blue">
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
        <div className="absolute top-[36.13rem] left-[1.5rem] w-[8.5rem] h-[10.88rem] text-soft-blue">
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
        <div className="absolute top-[50rem] left-[1.5rem] w-[8.63rem] h-[10rem] text-soft-blue">
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
        <div className="absolute top-[13.63rem] left-[1.5rem] w-[16.75rem] h-[7.81rem] text-[0.88rem]">
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
              src={productId}
            />
          </div>
        </div>
      </div>
    );
  }
);

export default CompanyContainer;
