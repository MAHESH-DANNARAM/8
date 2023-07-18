import { FunctionComponent, memo, useMemo } from "react";
import CSS, { Property } from "csstype";

type ReviewCarouselContainerType = {
  productIds?: string;
  productIdsArray?: string;
  selectedProductIds?: string;
  productIdsToCompare?: string;
  productIdsToCompare2?: string;

  /** Style props */
  propTop?: Property.Top;
  propGap?: Property.Gap;
};

const ReviewCarouselContainer: FunctionComponent<ReviewCarouselContainerType> =
  memo(
    ({
      productIds,
      productIdsArray,
      selectedProductIds,
      productIdsToCompare,
      productIdsToCompare2,
      propTop,
      propGap,
    }) => {
      const reviewCarousel1Style: CSS.Properties = useMemo(() => {
        return {
          top: propTop,
        };
      }, [propTop]);

      const reviews1Style: CSS.Properties = useMemo(() => {
        return {
          gap: propGap,
        };
      }, [propGap]);

      return (
        <div
          className="absolute top-[282.06rem] left-[0rem] w-[95rem] h-[38.75rem] overflow-hidden text-left text-[1rem] text-gray-500 font-paragraph-mobile"
          style={reviewCarousel1Style}
        >
          <div
            className="absolute top-[0rem] left-[1rem] flex flex-row flex-wrap items-start justify-start gap-[1.88rem]"
            style={reviews1Style}
          >
            <div className="bg-primary-0 shadow-[0px_16px_24px_rgba(118,_118,_178,_0.24)] w-[16.25rem] flex flex-col py-[2.75rem] px-[2.06rem] box-border items-start justify-start gap-[2.5rem] min-w-[16.25rem] max-w-[22.94rem]">
              <div className="self-stretch flex flex-col items-start justify-start gap-[1.5rem]">
                <div className="flex flex-row items-start justify-start">
                  <img
                    className="relative w-[2.03rem] h-[2rem]"
                    alt=""
                    src="/star.svg"
                  />
                  <img
                    className="relative w-[2.03rem] h-[2rem]"
                    alt=""
                    src="/star1.svg"
                  />
                  <img
                    className="relative w-[2.03rem] h-[2rem]"
                    alt=""
                    src="/star2.svg"
                  />
                  <img
                    className="relative w-[2.03rem] h-[2rem]"
                    alt=""
                    src="/star3.svg"
                  />
                  <img
                    className="relative w-[2.03rem] h-[2rem]"
                    alt=""
                    src="/star4.svg"
                  />
                </div>
                <div className="self-stretch flex flex-row items-start justify-start">
                  <div className="flex-1 relative leading-[1.5rem]">
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
                  src={productIds}
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
            <div className="bg-primary-0 shadow-[0px_16px_24px_rgba(118,_118,_178,_0.24)] w-[16.25rem] flex flex-col py-[2.75rem] px-[2.06rem] box-border items-start justify-start gap-[2.5rem] min-w-[16.25rem] max-w-[22.94rem]">
              <div className="self-stretch flex flex-col items-start justify-start gap-[1.5rem]">
                <div className="flex flex-row items-start justify-start">
                  <img
                    className="relative w-[2.03rem] h-[2rem]"
                    alt=""
                    src="/star.svg"
                  />
                  <img
                    className="relative w-[2.03rem] h-[2rem]"
                    alt=""
                    src="/star1.svg"
                  />
                  <img
                    className="relative w-[2.03rem] h-[2rem]"
                    alt=""
                    src="/star2.svg"
                  />
                  <img
                    className="relative w-[2.03rem] h-[2rem]"
                    alt=""
                    src="/star3.svg"
                  />
                  <img
                    className="relative w-[2.03rem] h-[2rem]"
                    alt=""
                    src="/star4.svg"
                  />
                </div>
                <div className="self-stretch flex flex-row items-start justify-start">
                  <div className="flex-1 relative leading-[1.5rem]">
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
                  src={productIdsArray}
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
            <div className="bg-primary-0 shadow-[0px_16px_24px_rgba(118,_118,_178,_0.24)] w-[16.25rem] flex flex-col py-[2.75rem] px-[2.06rem] box-border items-start justify-start gap-[2.5rem] min-w-[16.25rem] max-w-[22.94rem]">
              <div className="self-stretch flex flex-col items-start justify-start gap-[1.5rem]">
                <div className="flex flex-row items-start justify-start">
                  <img
                    className="relative w-[2.03rem] h-[2rem]"
                    alt=""
                    src="/star.svg"
                  />
                  <img
                    className="relative w-[2.03rem] h-[2rem]"
                    alt=""
                    src="/star1.svg"
                  />
                  <img
                    className="relative w-[2.03rem] h-[2rem]"
                    alt=""
                    src="/star2.svg"
                  />
                  <img
                    className="relative w-[2.03rem] h-[2rem]"
                    alt=""
                    src="/star3.svg"
                  />
                  <img
                    className="relative w-[2.03rem] h-[2rem]"
                    alt=""
                    src="/star4.svg"
                  />
                </div>
                <div className="self-stretch flex flex-row items-start justify-start">
                  <div className="flex-1 relative leading-[1.5rem]">
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
                  src={selectedProductIds}
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
            <div className="bg-primary-0 shadow-[0px_16px_24px_rgba(118,_118,_178,_0.24)] w-[16.25rem] flex flex-col py-[2.75rem] px-[2.06rem] box-border items-start justify-start gap-[2.5rem] min-w-[16.25rem] max-w-[22.94rem]">
              <div className="self-stretch flex flex-col items-start justify-start gap-[1.5rem]">
                <div className="flex flex-row items-start justify-start">
                  <img
                    className="relative w-[2.03rem] h-[2rem]"
                    alt=""
                    src="/star.svg"
                  />
                  <img
                    className="relative w-[2.03rem] h-[2rem]"
                    alt=""
                    src="/star1.svg"
                  />
                  <img
                    className="relative w-[2.03rem] h-[2rem]"
                    alt=""
                    src="/star2.svg"
                  />
                  <img
                    className="relative w-[2.03rem] h-[2rem]"
                    alt=""
                    src="/star3.svg"
                  />
                  <img
                    className="relative w-[2.03rem] h-[2rem]"
                    alt=""
                    src="/star4.svg"
                  />
                </div>
                <div className="self-stretch flex flex-row items-start justify-start">
                  <div className="flex-1 relative leading-[1.5rem]">
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
                  src={productIdsToCompare}
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
            <div className="bg-primary-0 shadow-[0px_16px_24px_rgba(118,_118,_178,_0.24)] w-[16.25rem] flex flex-col py-[2.75rem] px-[2.06rem] box-border items-start justify-start gap-[2.5rem] min-w-[16.25rem] max-w-[22.94rem]">
              <div className="self-stretch flex flex-col items-start justify-start gap-[1.5rem]">
                <div className="flex flex-row items-start justify-start">
                  <img
                    className="relative w-[2.03rem] h-[2rem]"
                    alt=""
                    src="/star.svg"
                  />
                  <img
                    className="relative w-[2.03rem] h-[2rem]"
                    alt=""
                    src="/star1.svg"
                  />
                  <img
                    className="relative w-[2.03rem] h-[2rem]"
                    alt=""
                    src="/star2.svg"
                  />
                  <img
                    className="relative w-[2.03rem] h-[2rem]"
                    alt=""
                    src="/star3.svg"
                  />
                  <img
                    className="relative w-[2.03rem] h-[2rem]"
                    alt=""
                    src="/star4.svg"
                  />
                </div>
                <div className="self-stretch flex flex-row items-start justify-start">
                  <div className="flex-1 relative leading-[1.5rem]">
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
                  src={productIdsToCompare2}
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
          <div className="absolute bottom-[2.94rem] left-[11.25rem] flex flex-row p-[0.25rem] items-start justify-start gap-[1.5rem]">
            <img
              className="relative w-[2rem] h-[2rem] overflow-hidden shrink-0"
              alt=""
              src="/arrow.svg"
            />
            <img
              className="relative w-[2rem] h-[2rem] overflow-hidden shrink-0"
              alt=""
              src="/arrow1.svg"
            />
          </div>
        </div>
      );
    }
  );

export default ReviewCarouselContainer;
