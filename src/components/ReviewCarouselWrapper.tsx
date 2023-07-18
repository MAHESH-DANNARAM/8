import { FunctionComponent, memo, useMemo } from "react";
import CSS, { Property } from "csstype";

type ReviewCarouselWrapperType = {
  productIds?: string;
  productImageIds?: string;
  productImageDimensions?: string;
  productImageIds32x32?: string;
  productImageIds32x32x?: string;
  productImageIds56x56x?: string;
  productImageIds32x32x2031?: string;
  productImageIds32x32x4157?: string;
  productImageIds32x32x2297?: string;
  productImageIds32x32x3410?: string;
  productImageIds32x32x3627?: string;
  productImageIds56x56x2?: string;
  productImageIds32x32x8048?: string;
  productImageIds32x32x3310?: string;
  productImageIds32x32x22972?: string;
  productImageIds32x32x34102?: string;
  productImageIds32x32x36272?: string;
  productImageIds56x56x3?: string;
  productImageIds32x32x80482?: string;
  productImageIds32x32x33102?: string;
  productImageIds32x32x22973?: string;
  productImageIds32x32x34103?: string;
  productImageIds32x32x36273?: string;
  productImageIds56x56x4?: string;
  productImageIds32x32x20312?: string;
  productImageIds32x32x2?: string;
  productImageIds32x32x22974?: string;
  productImageIds32x32x34104?: string;
  productImageIds32x32x36274?: string;
  productImageIds56x56x5?: string;

  /** Style props */
  propTop?: Property.Top;
  propLeft?: Property.Left;
  propLeft1?: Property.Left;
};

const ReviewCarouselWrapper: FunctionComponent<ReviewCarouselWrapperType> =
  memo(
    ({
      productIds,
      productImageIds,
      productImageDimensions,
      productImageIds32x32,
      productImageIds32x32x,
      productImageIds56x56x,
      productImageIds32x32x2031,
      productImageIds32x32x4157,
      productImageIds32x32x2297,
      productImageIds32x32x3410,
      productImageIds32x32x3627,
      productImageIds56x56x2,
      productImageIds32x32x8048,
      productImageIds32x32x3310,
      productImageIds32x32x22972,
      productImageIds32x32x34102,
      productImageIds32x32x36272,
      productImageIds56x56x3,
      productImageIds32x32x80482,
      productImageIds32x32x33102,
      productImageIds32x32x22973,
      productImageIds32x32x34103,
      productImageIds32x32x36273,
      productImageIds56x56x4,
      productImageIds32x32x20312,
      productImageIds32x32x2,
      productImageIds32x32x22974,
      productImageIds32x32x34104,
      productImageIds32x32x36274,
      productImageIds56x56x5,
      propTop,
      propLeft,
      propLeft1,
    }) => {
      const reviewCarouselStyle: CSS.Properties = useMemo(() => {
        return {
          top: propTop,
        };
      }, [propTop]);

      const reviewsStyle: CSS.Properties = useMemo(() => {
        return {
          left: propLeft,
        };
      }, [propLeft]);

      const arrowsStyle: CSS.Properties = useMemo(() => {
        return {
          left: propLeft1,
        };
      }, [propLeft1]);

      return (
        <div
          className="absolute top-[246.19rem] left-[0rem] w-[132.25rem] h-[32.31rem] overflow-hidden text-left text-[1.13rem] text-gray-500 font-paragraph-mobile"
          style={reviewCarouselStyle}
        >
          <div
            className="absolute top-[0rem] left-[3.69rem] flex flex-row flex-wrap items-start justify-start gap-[1.88rem]"
            style={reviewsStyle}
          >
            <div className="bg-primary-0 shadow-[0px_16px_24px_rgba(118,_118,_178,_0.24)] w-[22.94rem] flex flex-col py-[2.75rem] px-[2.06rem] box-border items-start justify-start gap-[2.5rem] min-w-[16.25rem] max-w-[22.94rem]">
              <div className="self-stretch flex flex-col items-start justify-start gap-[1.5rem]">
                <div className="flex flex-row items-start justify-start">
                  <img
                    className="relative w-[2.03rem] h-[2rem]"
                    alt=""
                    src={productIds}
                  />
                  <img
                    className="relative w-[2.03rem] h-[2rem]"
                    alt=""
                    src={productImageIds}
                  />
                  <img
                    className="relative w-[2.03rem] h-[2rem]"
                    alt=""
                    src={productImageDimensions}
                  />
                  <img
                    className="relative w-[2.03rem] h-[2rem]"
                    alt=""
                    src={productImageIds32x32}
                  />
                  <img
                    className="relative w-[2.03rem] h-[2rem]"
                    alt=""
                    src={productImageIds32x32x}
                  />
                </div>
                <div className="self-stretch flex flex-row items-start justify-start">
                  <div className="flex-1 relative leading-[1.69rem]">
                    Vestibulum eu quam nec neque pellentesque efficitur id eget
                    nisl. Proin porta est convallis lacus blandit pretium sed
                    non enim. Maecenas lacinia non orci at aliquam. Donec
                    finibus, urna bibendum ultricies laoreet.
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-start gap-[0.88rem] text-[1.5rem] text-dark-blue">
                <img
                  className="relative w-[3.5rem] h-[3.5rem] overflow-hidden shrink-0"
                  alt=""
                  src={productImageIds56x56x}
                />
                <div className="flex-1 flex flex-col items-start justify-start gap-[0.13rem]">
                  <div className="self-stretch relative leading-[1.88rem]">
                    Chealsea Morgan
                  </div>
                  <div className="self-stretch relative text-[0.88rem] tracking-[0.01em] leading-[1.44rem] text-desaturated-blue">
                    CEO ot Subway
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-primary-0 shadow-[0px_16px_24px_rgba(118,_118,_178,_0.24)] w-[22.94rem] flex flex-col py-[2.75rem] px-[2.06rem] box-border items-start justify-start gap-[2.5rem] min-w-[16.25rem] max-w-[22.94rem]">
              <div className="self-stretch flex flex-col items-start justify-start gap-[1.5rem]">
                <div className="flex flex-row items-start justify-start">
                  <img
                    className="relative w-[2.03rem] h-[2rem]"
                    alt=""
                    src={productImageIds32x32x2031}
                  />
                  <img
                    className="relative w-[2.03rem] h-[2rem]"
                    alt=""
                    src={productImageIds32x32x4157}
                  />
                  <img
                    className="relative w-[2.03rem] h-[2rem]"
                    alt=""
                    src={productImageIds32x32x2297}
                  />
                  <img
                    className="relative w-[2.03rem] h-[2rem]"
                    alt=""
                    src={productImageIds32x32x3410}
                  />
                  <img
                    className="relative w-[2.03rem] h-[2rem]"
                    alt=""
                    src={productImageIds32x32x3627}
                  />
                </div>
                <div className="self-stretch flex flex-row items-start justify-start">
                  <div className="flex-1 relative leading-[1.69rem]">
                    In a laoreet purus. Integer turpis quam, laoreet id orci
                    nec, ultrices lacinia nunc. Aliquam erat volutpat. Curabitur
                    fringilla in purus eget egestas. Etiam quis.
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-start gap-[0.88rem] text-[1.5rem] text-dark-blue">
                <img
                  className="relative w-[3.5rem] h-[3.5rem] overflow-hidden shrink-0"
                  alt=""
                  src={productImageIds56x56x2}
                />
                <div className="flex-1 flex flex-col items-start justify-start gap-[0.13rem]">
                  <div className="self-stretch relative leading-[1.88rem]">
                    Nick Cave
                  </div>
                  <div className="self-stretch relative text-[0.88rem] tracking-[0.01em] leading-[1.44rem] text-desaturated-blue">
                    CMO ot Nokia
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-primary-0 shadow-[0px_16px_24px_rgba(118,_118,_178,_0.24)] w-[22.94rem] flex flex-col py-[2.75rem] px-[2.06rem] box-border items-start justify-start gap-[2.5rem] min-w-[16.25rem] max-w-[22.94rem]">
              <div className="self-stretch flex flex-col items-start justify-start gap-[1.5rem]">
                <div className="flex flex-row items-start justify-start">
                  <img
                    className="relative w-[2.03rem] h-[2rem]"
                    alt=""
                    src={productImageIds32x32x8048}
                  />
                  <img
                    className="relative w-[2.03rem] h-[2rem]"
                    alt=""
                    src={productImageIds32x32x3310}
                  />
                  <img
                    className="relative w-[2.03rem] h-[2rem]"
                    alt=""
                    src={productImageIds32x32x22972}
                  />
                  <img
                    className="relative w-[2.03rem] h-[2rem]"
                    alt=""
                    src={productImageIds32x32x34102}
                  />
                  <img
                    className="relative w-[2.03rem] h-[2rem]"
                    alt=""
                    src={productImageIds32x32x36272}
                  />
                </div>
                <div className="self-stretch flex flex-row items-start justify-start">
                  <div className="flex-1 relative leading-[1.69rem]">
                    Aliquam pulvinar vestibulum blandit. Donec sed nisl libero.
                    Fusce dignissim luctus sem eu dapibus. Pellentesque
                    vulputate quam a quam volutpat, sed ullamcorper erat
                    commodo.
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-start gap-[0.88rem] text-[1.5rem] text-dark-blue">
                <img
                  className="relative w-[3.5rem] h-[3.5rem] overflow-hidden shrink-0"
                  alt=""
                  src={productImageIds56x56x3}
                />
                <div className="flex-1 flex flex-col items-start justify-start gap-[0.13rem]">
                  <div className="self-stretch relative leading-[1.88rem]">
                    Lana Rosenfeld
                  </div>
                  <div className="self-stretch relative text-[0.88rem] tracking-[0.01em] leading-[1.44rem] text-desaturated-blue">
                    Senior VP ot Pinterest
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-primary-0 shadow-[0px_16px_24px_rgba(118,_118,_178,_0.24)] w-[22.94rem] flex flex-col py-[2.75rem] px-[2.06rem] box-border items-start justify-start gap-[2.5rem] min-w-[16.25rem] max-w-[22.94rem]">
              <div className="self-stretch flex flex-col items-start justify-start gap-[1.5rem]">
                <div className="flex flex-row items-start justify-start">
                  <img
                    className="relative w-[2.03rem] h-[2rem]"
                    alt=""
                    src={productImageIds32x32x80482}
                  />
                  <img
                    className="relative w-[2.03rem] h-[2rem]"
                    alt=""
                    src={productImageIds32x32x33102}
                  />
                  <img
                    className="relative w-[2.03rem] h-[2rem]"
                    alt=""
                    src={productImageIds32x32x22973}
                  />
                  <img
                    className="relative w-[2.03rem] h-[2rem]"
                    alt=""
                    src={productImageIds32x32x34103}
                  />
                  <img
                    className="relative w-[2.03rem] h-[2rem]"
                    alt=""
                    src={productImageIds32x32x36273}
                  />
                </div>
                <div className="self-stretch flex flex-row items-start justify-start">
                  <div className="flex-1 relative leading-[1.69rem]">
                    Porta nisl dolor, molestie pellentesque elit molestie in.
                    Morbi metus neque, elementum ullamcorper hendrerit eget,
                    tincidunt et nisi. Sed magna nunc.
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-start gap-[0.88rem] text-[1.5rem] text-dark-blue">
                <img
                  className="relative w-[3.5rem] h-[3.5rem] overflow-hidden shrink-0"
                  alt=""
                  src={productImageIds56x56x4}
                />
                <div className="flex-1 flex flex-col items-start justify-start gap-[0.13rem]">
                  <div className="self-stretch relative leading-[1.88rem]">
                    Giorgio Moroder
                  </div>
                  <div className="self-stretch relative text-[0.88rem] tracking-[0.01em] leading-[1.44rem] text-desaturated-blue">
                    CTO ot Glovo
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-primary-0 shadow-[0px_16px_24px_rgba(118,_118,_178,_0.24)] w-[22.94rem] flex flex-col py-[2.75rem] px-[2.06rem] box-border items-start justify-start gap-[2.5rem] min-w-[16.25rem] max-w-[22.94rem]">
              <div className="self-stretch flex flex-col items-start justify-start gap-[1.5rem]">
                <div className="flex flex-row items-start justify-start">
                  <img
                    className="relative w-[2.03rem] h-[2rem]"
                    alt=""
                    src={productImageIds32x32x20312}
                  />
                  <img
                    className="relative w-[2.03rem] h-[2rem]"
                    alt=""
                    src={productImageIds32x32x2}
                  />
                  <img
                    className="relative w-[2.03rem] h-[2rem]"
                    alt=""
                    src={productImageIds32x32x22974}
                  />
                  <img
                    className="relative w-[2.03rem] h-[2rem]"
                    alt=""
                    src={productImageIds32x32x34104}
                  />
                  <img
                    className="relative w-[2.03rem] h-[2rem]"
                    alt=""
                    src={productImageIds32x32x36274}
                  />
                </div>
                <div className="self-stretch flex flex-row items-start justify-start">
                  <div className="flex-1 relative leading-[1.69rem]">
                    Integer turpis quam, laoreet id orci nec, ultrices lacinia
                    nunc. Aliquam erat volutpat. Curabitur fringilla in purus
                    eget egestas. Etiam quis. In a laoreet purus.
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-start gap-[0.88rem] text-[1.5rem] text-dark-blue">
                <img
                  className="relative w-[3.5rem] h-[3.5rem] overflow-hidden shrink-0"
                  alt=""
                  src={productImageIds56x56x5}
                />
                <div className="flex-1 flex flex-col items-start justify-start gap-[0.13rem]">
                  <div className="self-stretch relative leading-[1.88rem]">
                    Young Liu
                  </div>
                  <div className="self-stretch relative text-[0.88rem] tracking-[0.01em] leading-[1.44rem] text-desaturated-blue">
                    CAO ot Foxconn
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="absolute top-[29.81rem] left-[20.63rem] flex flex-row p-[0.25rem] items-start justify-start gap-[1.5rem]"
            style={arrowsStyle}
          >
            <img
              className="relative w-[2rem] h-[2rem] overflow-hidden shrink-0"
              alt=""
              src="/arrow2.svg"
            />
            <img
              className="relative w-[2rem] h-[2rem] overflow-hidden shrink-0"
              alt=""
              src="/arrow3.svg"
            />
          </div>
        </div>
      );
    }
  );

export default ReviewCarouselWrapper;
