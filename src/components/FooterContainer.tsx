import { FunctionComponent, memo, useMemo } from "react";
import CSS, { Property } from "csstype";

type FooterContainerType = {
  productIds?: string;

  /** Style props */
  propWidth?: Property.Width;
  propHeight?: Property.Height;
  propLeft?: Property.Left;
  propTop?: Property.Top;
  propTop1?: Property.Top;
  propLeft1?: Property.Left;
  propTop2?: Property.Top;
  propLeft2?: Property.Left;
  propTop3?: Property.Top;
  propLeft3?: Property.Left;
  propTop4?: Property.Top;
  propLeft4?: Property.Left;
  propTop5?: Property.Top;
  propLeft5?: Property.Left;
};

const FooterContainer: FunctionComponent<FooterContainerType> = memo(
  ({
    productIds,
    propWidth,
    propHeight,
    propLeft,
    propTop,
    propTop1,
    propLeft1,
    propTop2,
    propLeft2,
    propTop3,
    propLeft3,
    propTop4,
    propLeft4,
    propTop5,
    propLeft5,
  }) => {
    const footerStyle: CSS.Properties = useMemo(() => {
      return {
        width: propWidth,
        height: propHeight,
      };
    }, [propWidth, propHeight]);

    const logoFooterStyle: CSS.Properties = useMemo(() => {
      return {
        left: propLeft,
        top: propTop,
      };
    }, [propLeft, propTop]);

    const copyrightStyle: CSS.Properties = useMemo(() => {
      return {
        top: propTop1,
        left: propLeft1,
      };
    }, [propTop1, propLeft1]);

    const companyStyle: CSS.Properties = useMemo(() => {
      return {
        top: propTop2,
        left: propLeft2,
      };
    }, [propTop2, propLeft2]);

    const featuresStyle: CSS.Properties = useMemo(() => {
      return {
        top: propTop3,
        left: propLeft3,
      };
    }, [propTop3, propLeft3]);

    const contactUsStyle: CSS.Properties = useMemo(() => {
      return {
        top: propTop4,
        left: propLeft4,
      };
    }, [propTop4, propLeft4]);

    const stayUpToDateStyle: CSS.Properties = useMemo(() => {
      return {
        top: propTop5,
        left: propLeft5,
      };
    }, [propTop5, propLeft5]);

    return (
      <div
        className="absolute bottom-[0rem] left-[0rem] w-[90rem] h-[31.25rem] overflow-hidden text-left text-[1.5rem] text-off-white font-paragraph-mobile"
        style={footerStyle}
      >
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-dark-blue" />
        <div
          className="absolute top-[4.56rem] left-[8.75rem] flex flex-col items-start justify-start gap-[1rem] text-[3.13rem]"
          style={logoFooterStyle}
        >
          <div className="relative w-[8.63rem] h-[3.25rem]">
            <div className="absolute top-[0rem] left-[0rem] tracking-[-0.02em] leading-[100%] font-semibold">
              <span>team</span>
              <span className="text-[3.25rem] text-soft-blue">.</span>
            </div>
          </div>
          <div className="relative text-[0.88rem] tracking-[0.01em] leading-[1.44rem] flex items-center w-[10.5rem]">{`Collaboration platform for mordern team `}</div>
        </div>
        <div
          className="absolute top-[27.5rem] left-[8.75rem] flex flex-row items-start justify-start text-[0.88rem]"
          style={copyrightStyle}
        >
          <div className="relative tracking-[0.01em] leading-[1.44rem]">
            © Copyright Team Inc.
          </div>
        </div>
        <div
          className="absolute top-[5.94rem] left-[27.38rem] w-[7rem] h-[8.69rem] text-soft-blue"
          style={companyStyle}
        >
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
        <div
          className="absolute top-[5.94rem] left-[39.69rem] w-[8.5rem] h-[10.88rem] text-soft-blue"
          style={featuresStyle}
        >
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
        <div
          className="absolute top-[5.94rem] left-[52.13rem] w-[8.63rem] h-[10rem] text-soft-blue"
          style={contactUsStyle}
        >
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
        <div
          className="absolute top-[5.94rem] left-[64.56rem] w-[16.75rem] h-[7.81rem] text-[0.88rem]"
          style={stayUpToDateStyle}
        >
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
              src={productIds}
            />
          </div>
        </div>
      </div>
    );
  }
);

export default FooterContainer;
