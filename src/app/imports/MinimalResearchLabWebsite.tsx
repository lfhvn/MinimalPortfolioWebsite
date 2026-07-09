import svgPaths from "./svg-b25dda2rhp";
import clsx from "clsx";
type AsciiBoxProps = {
  additionalClassNames?: string;
};

function AsciiBox({ children, additionalClassNames = "" }: React.PropsWithChildren<AsciiBoxProps>) {
  return (
    <div className={clsx("absolute left-0 w-[659px]", additionalClassNames)}>
      <div className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[19.5px] left-0 not-italic text-[#555] text-[12px] top-[2px] w-[296px]">{children}</div>
    </div>
  );
}
type Wrapper4Props = {
  additionalClassNames?: string;
};

function Wrapper4({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper4Props>) {
  return (
    <div className={clsx("relative shrink-0", additionalClassNames)}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">{children}</div>
    </div>
  );
}
type Wrapper3Props = {
  additionalClassNames?: string;
};

function Wrapper3({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper3Props>) {
  return (
    <div className={additionalClassNames}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">{children}</div>
    </div>
  );
}
type Wrapper2Props = {
  additionalClassNames?: string;
};

function Wrapper2({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper2Props>) {
  return <Wrapper3 additionalClassNames={clsx("relative shrink-0", additionalClassNames)}>{children}</Wrapper3>;
}
type Wrapper1Props = {
  additionalClassNames?: string;
};

function Wrapper1({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper1Props>) {
  return (
    <div className={clsx("absolute left-0 w-[335.094px]", additionalClassNames)}>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#555] text-[14px] top-[0.5px] w-[333px]">{children}</p>
    </div>
  );
}

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="h-[16px] relative shrink-0 w-full">
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[16px] left-0 not-italic text-[#555] text-[12px] text-nowrap top-px">{children}</p>
    </div>
  );
}
type StarburstSigil2Vector2Props = {
  additionalClassNames?: string;
};

function StarburstSigil2Vector2({ children, additionalClassNames = "" }: React.PropsWithChildren<StarburstSigil2Vector2Props>) {
  return (
    <div className={clsx("absolute", additionalClassNames)}>
      <div className="absolute inset-[-0.68%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.6066 10.6066">
          {children}
        </svg>
      </div>
    </div>
  );
}
type StarburstSigil1Vector2Props = {
  additionalClassNames?: string;
};

function StarburstSigil1Vector2({ children, additionalClassNames = "" }: React.PropsWithChildren<StarburstSigil1Vector2Props>) {
  return (
    <div className={clsx("absolute", additionalClassNames)}>
      <div className="absolute inset-[-0.68%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.36396 6.36396">
          {children}
        </svg>
      </div>
    </div>
  );
}
type StarburstSigilVector2Props = {
  additionalClassNames?: string;
};

function StarburstSigilVector2({ children, additionalClassNames = "" }: React.PropsWithChildren<StarburstSigilVector2Props>) {
  return (
    <div className={clsx("absolute", additionalClassNames)}>
      <div className="absolute inset-[-0.68%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 53.033 53.033">
          {children}
        </svg>
      </div>
    </div>
  );
}
type ContainerText3Props = {
  text: string;
  additionalClassNames?: string;
};

function ContainerText3({ text, additionalClassNames = "" }: ContainerText3Props) {
  return (
    <div className={clsx("absolute h-[35.992px]", additionalClassNames)}>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[36px] left-0 not-italic text-[#0a0a0a] text-[28.8px] text-nowrap top-[0.5px] tracking-[1.44px] uppercase">{text}</p>
    </div>
  );
}
type StarburstSigil2Vector1Props = {
  additionalClassNames?: string;
};

function StarburstSigil2Vector1({ additionalClassNames = "" }: StarburstSigil2Vector1Props) {
  return (
    <div className={clsx("absolute left-1/2 right-1/2", additionalClassNames)}>
      <div className="absolute inset-[0_-0.1px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.2 14.8">
          <path d="M0.1 0V14.8" id="Vector" stroke="var(--stroke-0, #555555)" strokeDasharray="0.8 0.8" strokeWidth="0.2" />
        </svg>
      </div>
    </div>
  );
}
type StarburstSigil2VectorProps = {
  additionalClassNames?: string;
};

function StarburstSigil2Vector({ additionalClassNames = "" }: StarburstSigil2VectorProps) {
  return (
    <div className={clsx("absolute bottom-1/2 top-1/2", additionalClassNames)}>
      <div className="absolute inset-[-0.1px_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.8 0.2">
          <path d="M0 0.1H14.8" id="Vector" stroke="var(--stroke-0, #555555)" strokeDasharray="0.8 0.8" strokeWidth="0.2" />
        </svg>
      </div>
    </div>
  );
}
type FigcaptionText1Props = {
  text: string;
};

function FigcaptionText1({ text }: FigcaptionText1Props) {
  return (
    <div className="h-[16px] relative shrink-0 w-full">
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[16px] left-0 not-italic text-[#333] text-[12px] top-px w-[281px]">{text}</p>
    </div>
  );
}
type FigcaptionTextProps = {
  text: string;
};

function FigcaptionText({ text }: FigcaptionTextProps) {
  return (
    <div className="h-[16px] relative shrink-0 w-full">
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[16px] left-0 not-italic text-[#333] text-[12px] top-px w-[375px]">{text}</p>
    </div>
  );
}
type ContainerText2Props = {
  text: string;
};

function ContainerText2({ text }: ContainerText2Props) {
  return (
    <div className="h-[32px] relative shrink-0 w-full">
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[16px] left-0 not-italic text-[#555] text-[12px] top-px w-[627px]">{text}</p>
    </div>
  );
}

function ImageWithFallbackImage2() {
  return (
    <div className="h-[934.938px] relative shrink-0 w-full">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src="236738fc0010876d79202e07c551861413d12dd6.png" />
    </div>
  );
}
type ContainerText1Props = {
  text: string;
};

function ContainerText1({ text }: ContainerText1Props) {
  return (
    <div className="h-[32px] relative shrink-0 w-full">
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[16px] left-0 not-italic text-[#555] text-[12px] top-px w-[584px]">{text}</p>
    </div>
  );
}

function ImageWithFallbackImage1() {
  return (
    <div className="h-[852.633px] relative shrink-0 w-full">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src="67dcddf72dfb43f78c4372a1d824e78e3a24eed7.png" />
    </div>
  );
}
type ContainerTextProps = {
  text: string;
};

function ContainerText({ text }: ContainerTextProps) {
  return (
    <div className="h-[32px] relative shrink-0 w-full">
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[16px] left-0 not-italic text-[#555] text-[12px] top-px w-[649px]">{text}</p>
    </div>
  );
}
type Text2Props = {
  text: string;
};

function Text2({ text }: Text2Props) {
  return (
    <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[16px] left-0 not-italic text-[#555] text-[12px] text-nowrap top-px">{text}</p>
    </div>
  );
}
type Text1Props = {
  text: string;
  additionalClassNames?: string;
};

function Text1({ text, additionalClassNames = "" }: Text1Props) {
  return (
    <div className={clsx("absolute h-[16px] left-0", additionalClassNames)}>
      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[16px] left-0 not-italic text-[#555] text-[12px] text-nowrap top-px">{text}</p>
    </div>
  );
}
type TextProps = {
  text: string;
};

function Text({ text }: TextProps) {
  return <Wrapper>{text}</Wrapper>;
}
type HeadingText1Props = {
  text: string;
};

function HeadingText1({ text }: HeadingText1Props) {
  return (
    <div className="h-[21.281px] relative shrink-0 w-full">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21.28px] left-0 not-italic text-[#0a0a0a] text-[15.2px] text-nowrap top-[0.5px] tracking-[0.76px]">{text}</p>
    </div>
  );
}

function ImageWithFallbackImage() {
  return (
    <div className="h-[398.203px] relative shrink-0 w-full">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src="2f72d1712a5116791471abc1b7a3be141f87c12c.png" />
    </div>
  );
}
type DispatchesTextProps = {
  text: string;
};

function DispatchesText({ text }: DispatchesTextProps) {
  return <Wrapper1 additionalClassNames="h-[100px] top-[166.83px]">{text}</Wrapper1>;
}
type TextTextProps = {
  text: string;
  additionalClassNames?: string;
};

function TextText({ text, additionalClassNames = "" }: TextTextProps) {
  return (
    <div className={clsx("absolute content-stretch flex h-[13.5px] items-start top-[8px]", additionalClassNames)}>
      <p className="font-['IBM_Plex_Mono:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#555] text-[12px] text-nowrap">{text}</p>
    </div>
  );
}
type HeadingTextProps = {
  text: string;
  additionalClassNames?: string;
};

function HeadingText({ text, additionalClassNames = "" }: HeadingTextProps) {
  return (
    <Wrapper3 additionalClassNames={clsx("h-[20.797px] relative shrink-0", additionalClassNames)}>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20.8px] left-0 not-italic text-[#0a0a0a] text-[16px] text-nowrap top-[-0.5px] tracking-[1.28px] uppercase">{text}</p>
    </Wrapper3>
  );
}
type StarburstSigil1Vector1Props = {
  additionalClassNames?: string;
};

function StarburstSigil1Vector1({ additionalClassNames = "" }: StarburstSigil1Vector1Props) {
  return (
    <div className={clsx("absolute left-1/2 right-1/2", additionalClassNames)}>
      <div className="absolute inset-[0_-0.06px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.12 8.88">
          <path d="M0.06 0V8.88" id="Vector" stroke="var(--stroke-0, #555555)" strokeDasharray="0.48 0.48" strokeWidth="0.12" />
        </svg>
      </div>
    </div>
  );
}
type StarburstSigil1VectorProps = {
  additionalClassNames?: string;
};

function StarburstSigil1Vector({ additionalClassNames = "" }: StarburstSigil1VectorProps) {
  return (
    <div className={clsx("absolute bottom-1/2 top-1/2", additionalClassNames)}>
      <div className="absolute inset-[-0.06px_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.88 0.12">
          <path d="M0 0.06H8.88" id="Vector" stroke="var(--stroke-0, #555555)" strokeDasharray="0.48 0.48" strokeWidth="0.12" />
        </svg>
      </div>
    </div>
  );
}
type StarburstSigilVector1Props = {
  additionalClassNames?: string;
};

function StarburstSigilVector1({ additionalClassNames = "" }: StarburstSigilVector1Props) {
  return (
    <div className={clsx("absolute left-1/2 right-1/2", additionalClassNames)}>
      <div className="absolute inset-[0_-0.5px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 74">
          <path d="M0.5 0V74" id="Vector" stroke="var(--stroke-0, #555555)" strokeDasharray="4 4" />
        </svg>
      </div>
    </div>
  );
}
type StarburstSigilVectorProps = {
  additionalClassNames?: string;
};

function StarburstSigilVector({ additionalClassNames = "" }: StarburstSigilVectorProps) {
  return (
    <div className={clsx("absolute bottom-1/2 top-1/2", additionalClassNames)}>
      <div className="absolute inset-[-0.5px_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 74 1">
          <path d="M0 0.5H74" id="Vector" stroke="var(--stroke-0, #555555)" strokeDasharray="4 4" />
        </svg>
      </div>
    </div>
  );
}

function StarburstSigil() {
  return (
    <div className="opacity-60 relative shrink-0 size-[40px]" data-name="StarburstSigil">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[38%_45.5%_47%_47%] leading-[normal] not-italic text-[#555] text-[4.8px] text-center text-nowrap">*</p>
        <StarburstSigil2Vector additionalClassNames="left-[58%] right-[5%]" />
        <StarburstSigil2Vector2 additionalClassNames="inset-[55.66%_18.18%_18.18%_55.66%]">
          <path d={svgPaths.p40d4200} id="Vector" stroke="var(--stroke-0, #555555)" strokeDasharray="0.8 0.8" strokeWidth="0.2" />
        </StarburstSigil2Vector2>
        <StarburstSigil2Vector1 additionalClassNames="bottom-[5%] top-[58%]" />
        <StarburstSigil2Vector2 additionalClassNames="inset-[55.66%_55.66%_18.18%_18.18%]">
          <path d={svgPaths.pdb8b3e8} id="Vector" stroke="var(--stroke-0, #555555)" strokeDasharray="0.8 0.8" strokeWidth="0.2" />
        </StarburstSigil2Vector2>
        <StarburstSigil2Vector additionalClassNames="left-[5%] right-[58%]" />
        <StarburstSigil2Vector2 additionalClassNames="inset-[18.18%_55.66%_55.66%_18.18%]">
          <path d={svgPaths.p23f57a00} id="Vector" stroke="var(--stroke-0, #555555)" strokeDasharray="0.8 0.8" strokeWidth="0.2" />
        </StarburstSigil2Vector2>
        <StarburstSigil2Vector1 additionalClassNames="bottom-[58%] top-[5%]" />
        <StarburstSigil2Vector2 additionalClassNames="inset-[18.18%_18.18%_55.66%_55.66%]">
          <path d={svgPaths.p12ea8200} id="Vector" stroke="var(--stroke-0, #555555)" strokeDasharray="0.8 0.8" strokeWidth="0.2" />
        </StarburstSigil2Vector2>
      </div>
    </div>
  );
}

export default function MinimalResearchLabWebsite() {
  return (
    <div className="bg-[#f9f9f7] relative size-full" data-name="Minimal Research Lab Website">
      <div className="absolute content-stretch flex flex-col h-[15642.859px] items-start left-0 pb-0 pt-[120.484px] px-0 top-0 w-[755px]" data-name="App">
        <div className="content-stretch flex flex-col h-[15441.875px] items-start relative shrink-0 w-full" data-name="Main Content">
          <div className="content-stretch flex h-[861px] items-center justify-center pb-[0.5px] pt-0 px-0 relative shrink-0 w-full" data-name="Hero">
            <div aria-hidden="true" className="absolute border-[#0a0a0a] border-[0px_0px_0.5px] border-solid inset-0 pointer-events-none" />
            <Wrapper4 additionalClassNames="size-[200px]">
              <div className="h-[200px] opacity-60 overflow-clip relative shrink-0 w-full" data-name="StarburstSigil">
                <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[38%_47%_47.5%_47%] leading-[normal] not-italic text-[#555] text-[24px] text-center text-nowrap">*</p>
                <StarburstSigilVector additionalClassNames="left-[58%] right-[5%]" />
                <StarburstSigilVector2 additionalClassNames="inset-[55.66%_18.18%_18.18%_55.66%]">
                  <path d={svgPaths.p9fbf200} id="Vector" stroke="var(--stroke-0, #555555)" strokeDasharray="4 4" />
                </StarburstSigilVector2>
                <StarburstSigilVector1 additionalClassNames="bottom-[5%] top-[58%]" />
                <StarburstSigilVector2 additionalClassNames="inset-[55.66%_55.66%_18.18%_18.18%]">
                  <path d={svgPaths.p15362680} id="Vector" stroke="var(--stroke-0, #555555)" strokeDasharray="4 4" />
                </StarburstSigilVector2>
                <StarburstSigilVector additionalClassNames="left-[5%] right-[58%]" />
                <StarburstSigilVector2 additionalClassNames="inset-[18.18%_55.66%_55.66%_18.18%]">
                  <path d={svgPaths.p224bcf00} id="Vector" stroke="var(--stroke-0, #555555)" strokeDasharray="4 4" />
                </StarburstSigilVector2>
                <StarburstSigilVector1 additionalClassNames="bottom-[58%] top-[5%]" />
                <StarburstSigilVector2 additionalClassNames="inset-[18.18%_18.18%_55.66%_55.66%]">
                  <path d={svgPaths.p9cc0c00} id="Vector" stroke="var(--stroke-0, #555555)" strokeDasharray="4 4" />
                </StarburstSigilVector2>
              </div>
            </Wrapper4>
          </div>
          <div className="h-[14351.078px] relative shrink-0 w-full" data-name="Dispatches">
            <div aria-hidden="true" className="absolute border-[0px_0px_0.5px] border-black border-solid inset-0 pointer-events-none" />
            <div className="absolute h-[60px] left-[48px] top-[48px] w-[483.75px]" data-name="Container">
              <div className="absolute content-stretch flex flex-col items-start left-0 size-[24px] top-[4px]" data-name="Container">
                <div className="h-[24px] opacity-60 overflow-clip relative shrink-0 w-full" data-name="StarburstSigil">
                  <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[38%_48.83%_49.5%_42.83%] leading-[normal] not-italic text-[#555] text-[2.88px] text-center text-nowrap">*</p>
                  <StarburstSigil1Vector additionalClassNames="left-[58%] right-[5%]" />
                  <StarburstSigil1Vector2 additionalClassNames="inset-[55.66%_18.18%_18.18%_55.66%]">
                    <path d={svgPaths.p1df7af00} id="Vector" stroke="var(--stroke-0, #555555)" strokeDasharray="0.48 0.48" strokeWidth="0.12" />
                  </StarburstSigil1Vector2>
                  <StarburstSigil1Vector1 additionalClassNames="bottom-[5%] top-[58%]" />
                  <StarburstSigil1Vector2 additionalClassNames="inset-[55.66%_55.66%_18.18%_18.18%]">
                    <path d={svgPaths.p251ba100} id="Vector" stroke="var(--stroke-0, #555555)" strokeDasharray="0.48 0.48" strokeWidth="0.12" />
                  </StarburstSigil1Vector2>
                  <StarburstSigil1Vector additionalClassNames="left-[5%] right-[58%]" />
                  <StarburstSigil1Vector2 additionalClassNames="inset-[18.18%_55.66%_55.66%_18.18%]">
                    <path d={svgPaths.p33dda780} id="Vector" stroke="var(--stroke-0, #555555)" strokeDasharray="0.48 0.48" strokeWidth="0.12" />
                  </StarburstSigil1Vector2>
                  <StarburstSigil1Vector1 additionalClassNames="bottom-[58%] top-[5%]" />
                  <StarburstSigil1Vector2 additionalClassNames="inset-[18.18%_18.18%_55.66%_55.66%]">
                    <path d={svgPaths.p2fb68a00} id="Vector" stroke="var(--stroke-0, #555555)" strokeDasharray="0.48 0.48" strokeWidth="0.12" />
                  </StarburstSigil1Vector2>
                </div>
              </div>
              <div className="absolute h-[60px] left-[40px] top-0 w-[443.75px]" data-name="Paragraph">
                <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#555] text-[14px] top-[0.5px] w-[418px]">Fresh updates, field notes, and informal thoughts from the lab. Updated irregularly. This is our least formal publishing channel — rough edges welcome.</p>
              </div>
            </div>
            <div className="absolute border-[#0a0a0a] border-[0px_0px_0.5px] border-solid h-[1415.375px] left-[48px] top-[156px] w-[659px]" data-name="Container">
              <div className="absolute h-[887.031px] left-0 top-0 w-[659px]" data-name="Section">
                <div className="absolute content-stretch flex h-[25.297px] items-center left-0 pb-0 pt-[0.5px] px-0 top-0 w-[659px]" data-name="Container">
                  <div aria-hidden="true" className="absolute border-[#0a0a0a] border-[0.5px_0px_0px] border-solid inset-0 pointer-events-none" />
                  <HeadingText text="Issue 008 — Steering Without Breaking" additionalClassNames="w-[382.602px]" />
                </div>
                <div className="absolute h-[24px] left-0 top-[33.3px] w-[659px]" data-name="Dispatches">
                  <TextText text="2025.03.12" additionalClassNames="left-0 w-[72.016px]" />
                  <TextText text="11 min read" additionalClassNames="left-[88.02px] w-[79.219px]" />
                </div>
                <div className="absolute h-[77.531px] left-0 top-[73.3px] w-[363.82px]" data-name="Dispatches">
                  <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[25.84px] left-0 not-italic text-[#0a0a0a] text-[15.2px] top-px w-[352px]">{`Early results from steerability experiments. How do we control model behavior without degrading capabilities? Spoiler: it's harder than it looks.`}</p>
                </div>
                <DispatchesText text="We extracted steering vectors from concept pairs (honest/deceptive, cautious/bold) and applied them at inference time. Models steered successfully but often lost fluency or coherence. The tradeoff space is complex." />
                <div className="absolute h-[117px] left-0 top-[290.83px] w-[659px]" data-name="ASCIIBox">
                  <div className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[19.5px] left-0 not-italic text-[#555] text-[12px] top-[2px] w-[404px]">
                    <p className="mb-0">┌─ Key Findings ─────────────────────────────────────┐</p>
                    <p className="mb-0">{`│ Steering strength threshold: ~0.3-0.7 optimal        │`}</p>
                    <p className="mb-0">{`│ Layer selection matters: middle layers > early/late  │`}</p>
                    <p className="mb-0">{`│ Capability preservation: 15-25% degradation typical  │`}</p>
                    <p className="mb-0">│ Future: Adaptive steering based on adherence metrics │</p>
                    <p>└──────────────────────────────────────────────────────┘</p>
                  </div>
                </div>
                <div className="absolute bg-white content-stretch flex flex-col gap-[8px] h-[455.203px] items-start left-0 pb-[0.5px] pt-[16.5px] px-[16.5px] top-[431.83px] w-[659px]" data-name="Figure">
                  <div aria-hidden="true" className="absolute border-[#0a0a0a] border-[0.5px] border-solid inset-0 pointer-events-none" />
                  <ImageWithFallbackImage />
                  <div className="h-[16px] relative shrink-0 w-full" data-name="Figcaption">
                    <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[16px] left-0 not-italic text-[#333] text-[12px] top-px w-[310px]">Fig. 1 — Activation Steering Tradeoff Space</p>
                  </div>
                </div>
              </div>
              <div className="absolute content-stretch flex flex-col gap-[32px] h-[351.844px] items-start left-0 top-[999.03px] w-[659px]" data-name="Container">
                <div className="content-stretch flex flex-col gap-[16px] h-[93.281px] items-start relative shrink-0 w-full" data-name="Container">
                  <HeadingText1 text="Metadata" />
                  <div className="content-stretch flex flex-col gap-[4px] h-[56px] items-start relative shrink-0 w-full" data-name="Container">
                    <Text text="Path: /dispatches/008" />
                    <Text text="Updated: 2025-03-12" />
                    <Text text="Commit: a4f8e" />
                  </div>
                </div>
                <div className="content-stretch flex flex-col gap-[16px] h-[117.281px] items-start relative shrink-0 w-full" data-name="Container">
                  <HeadingText1 text="References" />
                  <div className="content-stretch flex flex-col gap-[8px] h-[80px] items-start relative shrink-0 w-full" data-name="Container">
                    <Text text="Representation Engineering: A Top-Down Approach to AI Transparency — Zou et al., 2023" />
                    <ContainerText text="Inference-Time Intervention: Eliciting Truthful Answers from a Language Model — Li et al., 2023" />
                    <Text text="Activation Addition: Steering Language Models Without Optimization — Turner et al., 2023" />
                  </div>
                </div>
                <div className="content-stretch flex flex-col gap-[16px] h-[77.281px] items-start relative shrink-0 w-full" data-name="Container">
                  <HeadingText1 text="Next" />
                  <div className="content-stretch flex flex-col gap-[8px] h-[40px] items-start relative shrink-0 w-full" data-name="Container">
                    <Text text="→ Steerability Project" />
                    <Text text="→ Adherence Metrics" />
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute border-[#0a0a0a] border-[0px_0px_0.5px] border-solid h-[1891.648px] left-[48px] top-[1635.38px] w-[659px]" data-name="Container">
              <div className="absolute h-[1347.305px] left-0 top-0 w-[659px]" data-name="Section">
                <div className="absolute content-stretch flex h-[25.297px] items-center left-0 pb-0 pt-[0.5px] px-0 top-0 w-[659px]" data-name="Container">
                  <div aria-hidden="true" className="absolute border-[#0a0a0a] border-[0.5px_0px_0px] border-solid inset-0 pointer-events-none" />
                  <Wrapper2 additionalClassNames="h-[20.797px] w-[524.883px]">
                    <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20.8px] left-0 not-italic text-[#0a0a0a] text-[16px] text-nowrap top-[-0.5px] tracking-[1.28px] uppercase">{`Issue 007 — Can Models Know What They Don't Know?`}</p>
                  </Wrapper2>
                </div>
                <div className="absolute h-[24px] left-0 top-[33.3px] w-[659px]" data-name="Dispatches">
                  <TextText text="2025.02.28" additionalClassNames="left-0 w-[72.016px]" />
                  <TextText text="13 min read" additionalClassNames="left-[88.02px] w-[79.219px]" />
                </div>
                <div className="absolute h-[103.375px] left-0 top-[73.3px] w-[363.82px]" data-name="Dispatches">
                  <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[25.84px] left-0 not-italic text-[#0a0a0a] text-[15.2px] top-px w-[346px]">{`Introspection experiments inspired by Anthropic's interpretability work. We asked models to report their internal states and compared against ground truth from SAEs.`}</p>
                </div>
                <div className="absolute h-[80px] left-0 top-[192.67px] w-[335.094px]" data-name="Dispatches">
                  <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#555] text-[14px] top-[0.5px] w-[325px]">The results are... complicated. Models can sometimes accurately report active concepts, but often confabulate or rationalize. Self-knowledge is not the same as self-reporting.</p>
                </div>
                <div className="absolute h-[117px] left-0 top-[296.67px] w-[659px]" data-name="ASCIIBox">
                  <div className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[19.5px] left-0 not-italic text-[#555] text-[12px] top-[2px] w-[418px]">
                    <p className="mb-0">┌────────────────────────────────────────────────────────┐</p>
                    <p className="mb-0">{`│ Accuracy: 62% for high-activation features             │`}</p>
                    <p className="mb-0">{`│ False positives: 31% claim inactive concepts           │`}</p>
                    <p className="mb-0">{`│ Calibration: Poor — high confidence on wrong answers   │`}</p>
                    <p className="mb-0">│ Implication: Introspection ≠ reliable alignment signal │</p>
                    <p>└────────────────────────────────────────────────────────┘</p>
                  </div>
                </div>
                <div className="absolute bg-white content-stretch flex flex-col gap-[8px] h-[909.633px] items-start left-0 pb-[0.5px] pt-[16.5px] px-[16.5px] top-[437.67px] w-[659px]" data-name="Figure">
                  <div aria-hidden="true" className="absolute border-[#0a0a0a] border-[0.5px] border-solid inset-0 pointer-events-none" />
                  <ImageWithFallbackImage1 />
                  <div className="h-[16px] relative shrink-0 w-full" data-name="Figcaption">
                    <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[16px] left-0 not-italic text-[#333] text-[12px] top-px w-[339px]">Fig. 2 — Self-Report vs Ground Truth Comparison</p>
                  </div>
                </div>
              </div>
              <div className="absolute content-stretch flex flex-col gap-[32px] h-[367.844px] items-start left-0 top-[1459.3px] w-[659px]" data-name="Container">
                <div className="content-stretch flex flex-col gap-[16px] h-[93.281px] items-start relative shrink-0 w-full" data-name="Container">
                  <HeadingText1 text="Metadata" />
                  <div className="content-stretch flex flex-col gap-[4px] h-[56px] items-start relative shrink-0 w-full" data-name="Container">
                    <Text text="Path: /dispatches/007" />
                    <Text text="Updated: 2025-02-28" />
                    <Text text="Commit: c7d2a" />
                  </div>
                </div>
                <div className="content-stretch flex flex-col gap-[16px] h-[133.281px] items-start relative shrink-0 w-full" data-name="Container">
                  <HeadingText1 text="References" />
                  <div className="content-stretch flex flex-col gap-[8px] h-[96px] items-start relative shrink-0 w-full" data-name="Container">
                    <ContainerText text="Towards Monosemanticity: Decomposing Language Models With Dictionary Learning — Anthropic, 2023" />
                    <ContainerText1 text="Scaling Monosemanticity: Extracting Interpretable Features from Claude 3 Sonnet — Anthropic, 2024" />
                    <Text text="Language Models (Mostly) Know What They Know — Kadavath et al., 2022" />
                  </div>
                </div>
                <div className="content-stretch flex flex-col gap-[16px] h-[77.281px] items-start relative shrink-0 w-full" data-name="Container">
                  <HeadingText1 text="Next" />
                  <div className="content-stretch flex flex-col gap-[8px] h-[40px] items-start relative shrink-0 w-full" data-name="Container">
                    <Text text="→ Introspection Project" />
                    <Text text="→ Concept Vectors" />
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute border-[#0a0a0a] border-[0px_0px_0.5px] border-solid h-[1977.953px] left-[48px] top-[3591.02px] w-[659px]" data-name="Container">
              <div className="absolute h-[1449.609px] left-0 top-0 w-[659px]" data-name="Section">
                <div className="absolute content-stretch flex h-[25.297px] items-center left-0 pb-0 pt-[0.5px] px-0 top-0 w-[659px]" data-name="Container">
                  <div aria-hidden="true" className="absolute border-[#0a0a0a] border-[0.5px_0px_0px] border-solid inset-0 pointer-events-none" />
                  <HeadingText text="Issue 006 — Multi-Agent Debate: When Does It Help?" additionalClassNames="w-[504.836px]" />
                </div>
                <div className="absolute h-[24px] left-0 top-[33.3px] w-[659px]" data-name="Dispatches">
                  <TextText text="2025.02.14" additionalClassNames="left-0 w-[72.016px]" />
                  <TextText text="9 min read" additionalClassNames="left-[88.02px] w-[72.016px]" />
                </div>
                <div className="absolute h-[103.375px] left-0 top-[73.3px] w-[363.82px]" data-name="Dispatches">
                  <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[25.84px] left-0 not-italic text-[#0a0a0a] text-[15.2px] top-px w-[356px]">Results from multi-agent coordination experiments. We tested debate, CRIT, and consensus mechanisms across different task types. Surprising findings.</p>
                </div>
                <div className="absolute h-[100px] left-0 top-[192.67px] w-[335.094px]" data-name="Dispatches">
                  <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#555] text-[14px] top-[0.5px] w-[328px]">{`Multi-agent doesn't always win. On factual tasks, debate helped (15-20% improvement). On creative tasks, it often made things worse — agents converged to boring solutions. Coordination overhead matters.`}</p>
                </div>
                <div className="absolute h-[117px] left-0 top-[316.67px] w-[659px]" data-name="ASCIIBox">
                  <div className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[19.5px] left-0 not-italic text-[#555] text-[12px] top-[2px] w-[317px]">
                    <p className="mb-0">┌─ Task Performance ─────────────────────┐</p>
                    <p className="mb-0">{`│ Factual Q&A: +18% with debate            │`}</p>
                    <p className="mb-0">{`│ Creative writing: -12% with consensus    │`}</p>
                    <p className="mb-0">{`│ Code review: +22% with CRIT protocol     │`}</p>
                    <p className="mb-0">│ Math problems: No significant difference │</p>
                    <p>└──────────────────────────────────────────┘</p>
                  </div>
                </div>
                <div className="absolute bg-white content-stretch flex flex-col gap-[8px] h-[991.938px] items-start left-0 pb-[0.5px] pt-[16.5px] px-[16.5px] top-[457.67px] w-[659px]" data-name="Figure">
                  <div aria-hidden="true" className="absolute border-[#0a0a0a] border-[0.5px] border-solid inset-0 pointer-events-none" />
                  <ImageWithFallbackImage2 />
                  <div className="h-[16px] relative shrink-0 w-full" data-name="Figcaption">
                    <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[16px] left-0 not-italic text-[#333] text-[12px] top-px w-[411px]">Fig. 3 — Coordination Strategy Effectiveness by Task Type</p>
                  </div>
                </div>
              </div>
              <div className="absolute content-stretch flex flex-col gap-[32px] h-[351.844px] items-start left-0 top-[1561.61px] w-[659px]" data-name="Container">
                <div className="content-stretch flex flex-col gap-[16px] h-[93.281px] items-start relative shrink-0 w-full" data-name="Container">
                  <HeadingText1 text="Metadata" />
                  <div className="content-stretch flex flex-col gap-[4px] h-[56px] items-start relative shrink-0 w-full" data-name="Container">
                    <Text text="Path: /dispatches/006" />
                    <Text text="Updated: 2025-02-14" />
                    <Text text="Commit: d9f3e" />
                  </div>
                </div>
                <div className="content-stretch flex flex-col gap-[16px] h-[117.281px] items-start relative shrink-0 w-full" data-name="Container">
                  <HeadingText1 text="References" />
                  <div className="content-stretch flex flex-col gap-[8px] h-[80px] items-start relative shrink-0 w-full" data-name="Container">
                    <ContainerText2 text="Improving Factuality and Reasoning in Language Models through Multiagent Debate — Du et al., 2023" />
                    <Text text="MetaGPT: Meta Programming for Multi-Agent Collaborative Framework — Hong et al., 2023" />
                    <Text text="Communicative Agents for Software Development — Qian et al., 2023" />
                  </div>
                </div>
                <div className="content-stretch flex flex-col gap-[16px] h-[77.281px] items-start relative shrink-0 w-full" data-name="Container">
                  <HeadingText1 text="Next" />
                  <div className="content-stretch flex flex-col gap-[8px] h-[40px] items-start relative shrink-0 w-full" data-name="Container">
                    <Text text="→ Multi-Agent Project" />
                    <Text text="→ Coordination Patterns" />
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute border-[#0a0a0a] border-[0px_0px_0.5px] border-solid h-[1953.953px] left-[48px] top-[5632.98px] w-[659px]" data-name="Container">
              <div className="absolute h-[1441.609px] left-0 top-0 w-[659px]" data-name="Section">
                <div className="absolute content-stretch flex h-[25.297px] items-center left-0 pb-0 pt-[0.5px] px-0 top-0 w-[659px]" data-name="Container">
                  <div aria-hidden="true" className="absolute border-[#0a0a0a] border-[0.5px_0px_0px] border-solid inset-0 pointer-events-none" />
                  <HeadingText text="Issue 005 — Latent Space as Interface" additionalClassNames="w-[371.023px]" />
                </div>
                <div className="absolute h-[24px] left-0 top-[33.3px] w-[659px]" data-name="Dispatches">
                  <TextText text="2025.01.28" additionalClassNames="left-0 w-[72.016px]" />
                  <TextText text="12 min read" additionalClassNames="left-[88.02px] w-[79.219px]" />
                </div>
                <div className="absolute h-[103.375px] left-0 top-[73.3px] w-[363.82px]" data-name="Dispatches">
                  <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[25.84px] left-0 not-italic text-[#0a0a0a] text-[15.2px] top-px w-[349px]">Early prototype of Latent Topologies — mobile app for navigating latent space through embodied interaction. Visual, audio, haptic feedback make high-dimensional representations tangible.</p>
                </div>
                <Wrapper1 additionalClassNames="h-[100px] top-[192.67px]">{`We're building a tool to "fly through" latent space using phone orientation and gestures. Different regions trigger different sounds and vibrations. Can you navigate to a target concept without seeing coordinates?`}</Wrapper1>
                <div className="absolute bg-white content-stretch flex flex-col gap-[8px] h-[991.938px] items-start left-0 pb-[0.5px] pt-[16.5px] px-[16.5px] top-[308.67px] w-[659px]" data-name="Figure">
                  <div aria-hidden="true" className="absolute border-[#0a0a0a] border-[0.5px] border-solid inset-0 pointer-events-none" />
                  <ImageWithFallbackImage2 />
                  <FigcaptionText text="Fig. 4 — Embodied Latent Space Exploration Interface" />
                </div>
                <div className="absolute h-[117px] left-0 top-[1324.61px] w-[659px]" data-name="ASCIIBox">
                  <div className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[19.5px] left-0 not-italic text-[#555] text-[12px] top-[2px] w-[346px]">
                    <p className="mb-0">┌──────────────────────────────────────────────┐</p>
                    <p className="mb-0">{`│ Input: Phone orientation, gestures, touch    │`}</p>
                    <p className="mb-0">│ Output: Visual (3D), audio (spatial), haptic │</p>
                    <p className="mb-0">{`│ Goal: Intuitive navigation of 768-dim space  │`}</p>
                    <p className="mb-0">│ Status: Prototype working, user studies next │</p>
                    <p>└──────────────────────────────────────────────┘</p>
                  </div>
                </div>
              </div>
              <div className="absolute content-stretch flex flex-col gap-[32px] h-[335.844px] items-start left-0 top-[1553.61px] w-[659px]" data-name="Container">
                <div className="content-stretch flex flex-col gap-[16px] h-[93.281px] items-start relative shrink-0 w-full" data-name="Container">
                  <HeadingText1 text="Metadata" />
                  <div className="content-stretch flex flex-col gap-[4px] h-[56px] items-start relative shrink-0 w-full" data-name="Container">
                    <Text text="Path: /dispatches/005" />
                    <Text text="Updated: 2025-01-28" />
                    <Text text="Commit: a7b2c" />
                  </div>
                </div>
                <div className="content-stretch flex flex-col gap-[16px] h-[101.281px] items-start relative shrink-0 w-full" data-name="Container">
                  <HeadingText1 text="References" />
                  <div className="content-stretch flex flex-col gap-[8px] h-[64px] items-start relative shrink-0 w-full" data-name="Container">
                    <Text text="UMAP: Uniform Manifold Approximation and Projection — McInnes et al., 2018" />
                    <Wrapper>{`Visualizing Data using t-SNE — van der Maaten & Hinton, 2008`}</Wrapper>
                    <Text text="Embodied Cognition — Wilson, 2002" />
                  </div>
                </div>
                <div className="content-stretch flex flex-col gap-[16px] h-[77.281px] items-start relative shrink-0 w-full" data-name="Container">
                  <HeadingText1 text="Next" />
                  <div className="h-[40px] relative shrink-0 w-full" data-name="Container">
                    <Text1 text="→ Latent Lens Tool" additionalClassNames="top-0 w-[129.625px]" />
                    <Text1 text="→ Visualization Research" additionalClassNames="top-[24px] w-[659px]" />
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute gap-[64px] grid grid-cols-[repeat(1,_minmax(0px,_1fr))] grid-rows-[minmax(0px,_960.88fr)_minmax(0px,_1fr)] h-[1425.219px] left-[48px] pb-[64.5px] pt-0 px-0 top-[7650.93px] w-[659px]" data-name="Container">
              <div aria-hidden="true" className="absolute border-[#0a0a0a] border-[0px_0px_0.5px] border-solid inset-0 pointer-events-none" />
              <div className="[grid-area:1_/_1] h-[912.875px] justify-self-stretch relative shrink-0" data-name="Section">
                <div className="absolute content-stretch flex h-[25.297px] items-center left-0 pb-0 pt-[0.5px] px-0 top-0 w-[659px]" data-name="Container">
                  <div aria-hidden="true" className="absolute border-[#0a0a0a] border-[0.5px_0px_0px] border-solid inset-0 pointer-events-none" />
                  <HeadingText text="Issue 004 — SELPHI: Theory of Mind Benchmarks" additionalClassNames="w-[463.953px]" />
                </div>
                <div className="absolute h-[24px] left-0 top-[33.3px] w-[659px]" data-name="Dispatches">
                  <TextText text="2024.12.19" additionalClassNames="left-0 w-[72.016px]" />
                  <TextText text="10 min read" additionalClassNames="left-[88.02px] w-[79.219px]" />
                </div>
                <div className="absolute h-[103.375px] left-0 top-[73.3px] w-[363.82px]" data-name="Dispatches">
                  <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[25.84px] left-0 not-italic text-[#0a0a0a] text-[15.2px] top-px w-[353px]">Building evaluation framework for theory of mind in LLMs. Can models understand what others know, believe, or intend? Implications for alignment and deception detection.</p>
                </div>
                <div className="absolute h-[100px] left-0 top-[192.67px] w-[335.094px]" data-name="Dispatches">
                  <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#555] text-[14px] top-[0.5px] w-[321px]">Started with classic false belief tasks, then added recursive belief modeling and perspective-taking scenarios. Models surprisingly good at first-order ToM (what does Alice believe?), worse at second-order (what does Bob think Alice believes?).</p>
                </div>
                <div className="absolute h-[117px] left-0 top-[316.67px] w-[659px]" data-name="ASCIIBox">
                  <div className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[19.5px] left-0 not-italic text-[#555] text-[12px] top-[2px] w-[339px]">
                    <p className="mb-0">┌─ Benchmark Results (GPT-4, Claude 3.5) ───┐</p>
                    <p className="mb-0">{`│ First-order ToM: 87% accuracy               │`}</p>
                    <p className="mb-0">{`│ Second-order ToM: 64% accuracy              │`}</p>
                    <p className="mb-0">{`│ Deception detection: 71% accuracy           │`}</p>
                    <p className="mb-0">{`│ Perspective-taking: 78% accuracy            │`}</p>
                    <p>└─────────────────────────────────────────────┘</p>
                  </div>
                </div>
                <div className="absolute bg-white content-stretch flex flex-col gap-[8px] h-[455.203px] items-start left-0 pb-[0.5px] pt-[16.5px] px-[16.5px] top-[457.67px] w-[659px]" data-name="Figure">
                  <div aria-hidden="true" className="absolute border-[#0a0a0a] border-[0.5px] border-solid inset-0 pointer-events-none" />
                  <ImageWithFallbackImage />
                  <FigcaptionText1 text="Fig. 5 — SELPHI Evaluation Architecture" />
                </div>
              </div>
              <div className="[grid-area:2_/_1] content-stretch flex flex-col gap-[32px] h-[335.844px] items-start justify-self-stretch relative shrink-0" data-name="Container">
                <div className="content-stretch flex flex-col gap-[16px] h-[93.281px] items-start relative shrink-0 w-full" data-name="Container">
                  <HeadingText1 text="Metadata" />
                  <div className="content-stretch flex flex-col gap-[4px] h-[56px] items-start relative shrink-0 w-full" data-name="Container">
                    <Text text="Path: /dispatches/004" />
                    <Text text="Updated: 2024-12-19" />
                    <Text text="Commit: e3c9d" />
                  </div>
                </div>
                <div className="content-stretch flex flex-col gap-[16px] h-[101.281px] items-start relative shrink-0 w-full" data-name="Container">
                  <HeadingText1 text="References" />
                  <div className="content-stretch flex flex-col gap-[8px] h-[64px] items-start relative shrink-0 w-full" data-name="Container">
                    <Text text="Theory of Mind May Have Spontaneously Emerged in Large Language Models — Kosinski, 2023" />
                    <Text text="Testing Theory of Mind in Large Language Models and Humans — Strachan et al., 2024" />
                    <Wrapper>{`Mind's Eye: Grounded Language Model Reasoning through Simulation — Gandhi et al., 2023`}</Wrapper>
                  </div>
                </div>
                <div className="content-stretch flex flex-col gap-[16px] h-[77.281px] items-start relative shrink-0 w-full" data-name="Container">
                  <HeadingText1 text="Next" />
                  <div className="content-stretch flex flex-col gap-[8px] h-[40px] items-start relative shrink-0 w-full" data-name="Container">
                    <Text text="→ SELPHI Project" />
                    <Text text="→ ToM Benchmarks" />
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute border-[#0a0a0a] border-[0px_0px_0.5px] border-solid h-[1877.805px] left-[48px] top-[9140.15px] w-[659px]" data-name="Container">
              <div className="absolute h-[1333.461px] left-0 top-0 w-[659px]" data-name="Section">
                <div className="absolute content-stretch flex h-[25.297px] items-center left-0 pb-0 pt-[0.5px] px-0 top-0 w-[659px]" data-name="Container">
                  <div aria-hidden="true" className="absolute border-[#0a0a0a] border-[0.5px_0px_0px] border-solid inset-0 pointer-events-none" />
                  <HeadingText text="Issue 003 — AI-to-AI Communication Experiments" additionalClassNames="w-[472.508px]" />
                </div>
                <div className="absolute h-[24px] left-0 top-[33.3px] w-[659px]" data-name="Dispatches">
                  <TextText text="2024.11.03" additionalClassNames="left-0 w-[72.016px]" />
                  <TextText text="8 min read" additionalClassNames="left-[88.02px] w-[72.016px]" />
                </div>
                <div className="absolute h-[77.531px] left-0 top-[73.3px] w-[363.82px]" data-name="Dispatches">
                  <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[25.84px] left-0 not-italic text-[#0a0a0a] text-[15.2px] top-px w-[348px]">What if agents could communicate via latent representations instead of language? Initial experiments on non-linguistic AI-to-AI messaging.</p>
                </div>
                <DispatchesText text="We built a simple protocol: Agent A encodes a concept as activation vector, Agent B receives it and decodes. Surprisingly efficient for certain tasks — ~10x compression vs natural language, with minimal information loss." />
                <div className="absolute bg-white content-stretch flex flex-col gap-[8px] h-[909.633px] items-start left-0 pb-[0.5px] pt-[16.5px] px-[16.5px] top-[282.83px] w-[659px]" data-name="Figure">
                  <div aria-hidden="true" className="absolute border-[#0a0a0a] border-[0.5px] border-solid inset-0 pointer-events-none" />
                  <ImageWithFallbackImage1 />
                  <FigcaptionText text="Fig. 6 — Latent Representation Exchange Architecture" />
                </div>
                <div className="absolute h-[117px] left-0 top-[1216.46px] w-[659px]" data-name="ASCIIBox">
                  <div className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[19.5px] left-0 not-italic text-[#555] text-[12px] top-[2px] w-[411px]">
                    <p className="mb-0">┌─ Preliminary Results ───────────────────────────────┐</p>
                    <p className="mb-0">{`│ Compression: 10x vs language (concept-level)          │`}</p>
                    <p className="mb-0">{`│ Accuracy: 82% reconstruction fidelity                 │`}</p>
                    <p className="mb-0">│ Cross-architecture: Limited (needs translation layer) │</p>
                    <p className="mb-0">{`│ Use case: High-bandwidth agent coordination           │`}</p>
                    <p>└───────────────────────────────────────────────────────┘</p>
                  </div>
                </div>
              </div>
              <div className="absolute content-stretch flex flex-col gap-[32px] h-[367.844px] items-start left-0 top-[1445.46px] w-[659px]" data-name="Container">
                <div className="content-stretch flex flex-col gap-[16px] h-[93.281px] items-start relative shrink-0 w-full" data-name="Container">
                  <HeadingText1 text="Metadata" />
                  <div className="content-stretch flex flex-col gap-[4px] h-[56px] items-start relative shrink-0 w-full" data-name="Container">
                    <Text text="Path: /dispatches/003" />
                    <Text text="Updated: 2024-11-03" />
                    <Text text="Commit: f8a1b" />
                  </div>
                </div>
                <div className="content-stretch flex flex-col gap-[16px] h-[133.281px] items-start relative shrink-0 w-full" data-name="Container">
                  <HeadingText1 text="References" />
                  <div className="content-stretch flex flex-col gap-[8px] h-[96px] items-start relative shrink-0 w-full" data-name="Container">
                    <Text text="Emergent Communication Through Negotiation — Cao et al., 2018" />
                    <div className="h-[32px] relative shrink-0 w-full" data-name="Container">
                      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[16px] left-0 not-italic text-[#555] text-[12px] top-px w-[634px]">Language as a Cognitive Tool to Imagine Goals in Curiosity-Driven Exploration — Colas et al., 2020</p>
                    </div>
                    <ContainerText2 text="Learning to Communicate with Deep Multi-Agent Reinforcement Learning — Foerster et al., 2016" />
                  </div>
                </div>
                <div className="content-stretch flex flex-col gap-[16px] h-[77.281px] items-start relative shrink-0 w-full" data-name="Container">
                  <HeadingText1 text="Next" />
                  <div className="content-stretch flex flex-col gap-[8px] h-[40px] items-start relative shrink-0 w-full" data-name="Container">
                    <Text text="→ AI-to-AI Communication" />
                    <Text text="→ Multi-Agent Synergy" />
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute border-[#0a0a0a] border-[0px_0px_0.5px] border-solid h-[1984.109px] left-[48px] top-[11081.95px] w-[659px]" data-name="Container">
              <div className="absolute h-[1423.766px] left-0 top-0 w-[659px]" data-name="Section">
                <div className="absolute content-stretch flex h-[25.297px] items-center left-0 pb-0 pt-[0.5px] px-0 top-0 w-[659px]" data-name="Container">
                  <div aria-hidden="true" className="absolute border-[#0a0a0a] border-[0.5px_0px_0px] border-solid inset-0 pointer-events-none" />
                  <HeadingText text="Issue 002 — Building Latent Lens: SAE Interpretability" additionalClassNames="w-[529.938px]" />
                </div>
                <div className="absolute h-[24px] left-0 top-[33.3px] w-[659px]" data-name="Dispatches">
                  <TextText text="2024.09.22" additionalClassNames="left-0 w-[72.016px]" />
                  <TextText text="11 min read" additionalClassNames="left-[88.02px] w-[79.219px]" />
                </div>
                <div className="absolute h-[77.531px] left-0 top-[73.3px] w-[363.82px]" data-name="Dispatches">
                  <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[25.84px] left-0 not-italic text-[#0a0a0a] text-[15.2px] top-px w-[362px]">Web application for exploring Sparse Autoencoder features. Making internal representations visible and inspectable. Early prototype now live.</p>
                </div>
                <div className="absolute h-[100px] left-0 top-[166.83px] w-[335.094px]" data-name="Dispatches">
                  <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#555] text-[14px] top-[0.5px] w-[316px]">{`Inspired by Anthropic's interpretability work, we built a tool to visualize SAE features interactively. Upload a model, extract features, explore what individual neurons and clusters represent. Open source soon.`}</p>
                </div>
                <AsciiBox additionalClassNames="h-[117px] top-[290.83px]">
                  <p className="mb-0">┌─ Features ──────────────────────────┐</p>
                  <p className="mb-0">│ Interactive SAE feature visualization │</p>
                  <p className="mb-0">{`│ Activation pattern analysis           │`}</p>
                  <p className="mb-0">{`│ Concept clustering and exploration    │`}</p>
                  <p className="mb-0">{`│ Export analysis for further research  │`}</p>
                  <p>└───────────────────────────────────────┘</p>
                </AsciiBox>
                <div className="absolute bg-white content-stretch flex flex-col gap-[8px] h-[991.938px] items-start left-0 pb-[0.5px] pt-[16.5px] px-[16.5px] top-[431.83px] w-[659px]" data-name="Figure">
                  <div aria-hidden="true" className="absolute border-[#0a0a0a] border-[0.5px] border-solid inset-0 pointer-events-none" />
                  <ImageWithFallbackImage2 />
                  <FigcaptionText1 text="Fig. 7 — SAE Feature Visualization Tool" />
                </div>
              </div>
              <div className="absolute content-stretch flex flex-col gap-[32px] h-[383.844px] items-start left-0 top-[1535.77px] w-[659px]" data-name="Container">
                <div className="content-stretch flex flex-col gap-[16px] h-[93.281px] items-start relative shrink-0 w-full" data-name="Container">
                  <HeadingText1 text="Metadata" />
                  <div className="content-stretch flex flex-col gap-[4px] h-[56px] items-start relative shrink-0 w-full" data-name="Container">
                    <Text text="Path: /dispatches/002" />
                    <Text text="Updated: 2024-09-22" />
                    <Text text="Commit: c5d7e" />
                  </div>
                </div>
                <div className="content-stretch flex flex-col gap-[16px] h-[149.281px] items-start relative shrink-0 w-full" data-name="Container">
                  <HeadingText1 text="References" />
                  <div className="content-stretch flex flex-col gap-[8px] h-[112px] items-start relative shrink-0 w-full" data-name="Container">
                    <ContainerText text="Towards Monosemanticity: Decomposing Language Models With Dictionary Learning — Anthropic, 2023" />
                    <ContainerText1 text="Scaling Monosemanticity: Extracting Interpretable Features from Claude 3 Sonnet — Anthropic, 2024" />
                    <div className="h-[32px] relative shrink-0 w-full" data-name="Container">
                      <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[16px] left-0 not-italic text-[#555] text-[12px] top-px w-[641px]">Sparse Autoencoders Find Highly Interpretable Features in Language Models — Cunningham et al., 2023</p>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-col gap-[16px] h-[77.281px] items-start relative shrink-0 w-full" data-name="Container">
                  <HeadingText1 text="Next" />
                  <div className="h-[40px] relative shrink-0 w-full" data-name="Container">
                    <Text1 text="→ Latent Lens Tool" additionalClassNames="top-0 w-[129.625px]" />
                    <Text1 text="→ Interpretability Research" additionalClassNames="top-[24px] w-[659px]" />
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute h-[1005.016px] left-[48px] top-[13130.06px] w-[659px]" data-name="Container">
              <div className="absolute h-[557.172px] left-0 top-0 w-[659px]" data-name="Section">
                <div className="absolute content-stretch flex h-[25.297px] items-center left-0 pb-0 pt-[0.5px] px-0 top-0 w-[659px]" data-name="Container">
                  <div aria-hidden="true" className="absolute border-[#0a0a0a] border-[0.5px_0px_0px] border-solid inset-0 pointer-events-none" />
                  <HeadingText text="Issue 001 — Lab Infrastructure: The Harness" additionalClassNames="w-[439.875px]" />
                </div>
                <div className="absolute h-[24px] left-0 top-[33.3px] w-[659px]" data-name="Dispatches">
                  <TextText text="2024.08.15" additionalClassNames="left-0 w-[72.016px]" />
                  <TextText text="9 min read" additionalClassNames="left-[88.02px] w-[72.016px]" />
                </div>
                <div className="absolute h-[103.375px] left-0 top-[73.3px] w-[363.82px]" data-name="Dispatches">
                  <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[25.84px] left-0 not-italic text-[#0a0a0a] text-[15.2px] top-px w-[338px]">Building provider-agnostic infrastructure for LLM experiments. The harness supports local models (Ollama, MLX) and API providers (Claude, GPT) seamlessly.</p>
                </div>
                <div className="absolute h-[100px] left-0 top-[192.67px] w-[335.094px]" data-name="Dispatches">
                  <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#555] text-[14px] top-[0.5px] w-[330px]">Every project shares the same core infrastructure: unified LLM abstraction, experiment tracking, reproducibility tools, and benchmark loading. Switch between local and API models with one line. Plan to open source as standalone library.</p>
                </div>
                <AsciiBox additionalClassNames="h-[136.5px] top-[316.67px]">
                  <p className="mb-0">┌─ Core Components ───────────────────┐</p>
                  <p className="mb-0">{`│ Unified LLM provider abstraction      │`}</p>
                  <p className="mb-0">{`│ Experiment tracking & reproducibility │`}</p>
                  <p className="mb-0">{`│ Benchmark dataset loading             │`}</p>
                  <p className="mb-0">{`│ Model config management               │`}</p>
                  <p className="mb-0">{`│ System prompt management              │`}</p>
                  <p>└───────────────────────────────────────┘</p>
                </AsciiBox>
                <Wrapper1 additionalClassNames="h-[80px] top-[477.17px]">{`Philosophy: Provider-agnostic. Use local models for rapid iteration and full control. Use API models for frontier capabilities. Don't lock yourself into one approach.`}</Wrapper1>
              </div>
              <div className="absolute content-stretch flex flex-col gap-[32px] h-[335.844px] items-start left-0 top-[669.17px] w-[659px]" data-name="Container">
                <div className="content-stretch flex flex-col gap-[16px] h-[93.281px] items-start relative shrink-0 w-full" data-name="Container">
                  <HeadingText1 text="Metadata" />
                  <div className="content-stretch flex flex-col gap-[4px] h-[56px] items-start relative shrink-0 w-full" data-name="Container">
                    <Text text="Path: /dispatches/001" />
                    <Text text="Updated: 2024-08-15" />
                    <Text text="Commit: b2e4f" />
                  </div>
                </div>
                <div className="content-stretch flex flex-col gap-[16px] h-[101.281px] items-start relative shrink-0 w-full" data-name="Container">
                  <HeadingText1 text="References" />
                  <div className="content-stretch flex flex-col gap-[8px] h-[64px] items-start relative shrink-0 w-full" data-name="Container">
                    <Text text="Ollama — Open source LLM runtime, 2024" />
                    <Text text="MLX — Apple machine learning framework, 2024" />
                    <Text text="LangChain — Multi-provider LLM framework, 2023" />
                  </div>
                </div>
                <div className="content-stretch flex flex-col gap-[16px] h-[77.281px] items-start relative shrink-0 w-full" data-name="Container">
                  <HeadingText1 text="Next" />
                  <div className="content-stretch flex flex-col gap-[8px] h-[40px] items-start relative shrink-0 w-full" data-name="Container">
                    <Text text="→ Infrastructure Docs" />
                    <Text text="→ Research Methodology" />
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute content-stretch flex gap-[16px] h-[40px] items-center left-[260.29px] top-[14199.08px] w-[234.422px]" data-name="Container">
              <StarburstSigil />
              <div className="basis-0 grow h-[16px] min-h-px min-w-px relative shrink-0" data-name="Text">
                <Text2 text="End of Dispatches" />
              </div>
              <StarburstSigil />
            </div>
          </div>
          <div className="h-[229.297px] relative shrink-0 w-full" data-name="Section">
            <div aria-hidden="true" className="absolute border-[#0a0a0a] border-[0px_0px_0.5px] border-solid inset-0 pointer-events-none" />
            <div className="size-full">
              <div className="content-stretch flex flex-col items-start pb-[0.5px] pt-[48px] px-[48px] relative size-full">
                <div className="content-stretch flex flex-col gap-[24px] h-[132.797px] items-start relative shrink-0 w-full" data-name="Container">
                  <div className="h-[20.797px] relative shrink-0 w-full" data-name="Heading 2">
                    <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20.8px] left-0 not-italic text-[#0a0a0a] text-[16px] text-nowrap top-[-0.5px] tracking-[1.28px] uppercase">Contact</p>
                  </div>
                  <div className="content-stretch flex flex-col gap-[8px] h-[88px] items-start relative shrink-0 w-full" data-name="Container">
                    <Text text="Email: hello@hiddenlayer.research" />
                    <Text text="Twitter/X: @hiddenlayer_lab" />
                    <Text text="GitHub: github.com/lfhvn/hidden-layer" />
                    <Text text="Location: Brooklyn, NY / Distributed" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[80.5px] relative shrink-0 w-full" data-name="Footer">
          <div aria-hidden="true" className="absolute border-[#0a0a0a] border-[0.5px_0px_0px] border-solid inset-0 pointer-events-none" />
          <div className="size-full">
            <div className="content-stretch flex flex-col items-start pb-0 pt-[16.5px] px-[48px] relative size-full">
              <div className="content-stretch flex flex-col h-[48px] items-start justify-between relative shrink-0 w-full" data-name="Container">
                <Wrapper2 additionalClassNames="h-[16px] w-[659px]">
                  <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[16px] left-0 not-italic text-[#0a0a0a] text-[12px] text-nowrap top-px">© 2025 Hidden Layer · All rights reserved.</p>
                </Wrapper2>
                <div className="h-[16px] relative shrink-0 w-[659px]" data-name="Container">
                  <Text2 text="Experimental publication layout inspired by Form magazine (1966–68) and patent schematics." />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bg-[#f9f9f7] content-stretch flex h-[120.484px] items-end justify-between left-0 pb-[16.5px] pt-0 px-[48px] top-0 w-[755px]" data-name="Header">
        <div aria-hidden="true" className="absolute border-[#0a0a0a] border-[0px_0px_0.5px] border-solid inset-0 pointer-events-none" />
        <Wrapper2 additionalClassNames="h-[71.984px] w-[185.055px]">
          <div className="absolute content-stretch flex flex-col h-[71.984px] items-start left-0 top-0 w-[138.805px]" data-name="Button">
            <div className="h-[71.984px] relative shrink-0 w-full" data-name="Heading 1">
              <ContainerText3 text="Hidden" additionalClassNames="left-0 top-0 w-[138.805px]" />
              <ContainerText3 text="Layer" additionalClassNames="left-[48px] top-[35.99px] w-[90.805px]" />
            </div>
          </div>
          <div className="absolute content-stretch flex flex-col h-[43px] items-start left-[147.24px] pb-0 pt-[8px] px-[12px] top-[18.49px] w-[45.375px]" data-name="Button">
            <div className="h-[24px] relative shrink-0 w-full" data-name="Text">
              <p className="absolute font-['Inter:Regular','Noto_Sans:Regular',sans-serif] font-normal leading-[24px] left-[11px] not-italic text-[#0a0a0a] text-[24px] text-center text-nowrap top-0 translate-x-[-50%]">∨</p>
            </div>
          </div>
        </Wrapper2>
        <Wrapper4 additionalClassNames="h-[58.5px] w-[172.828px]">
          <div className="h-[19.5px] relative shrink-0 w-full" data-name="Container">
            <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[19.5px] left-[173.41px] not-italic text-[#0a0a0a] text-[12px] text-nowrap text-right top-[2px] translate-x-[-100%]">Fig. 0 — Overview</p>
          </div>
          <div className="h-[19.5px] relative shrink-0 w-full" data-name="Container">
            <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[19.5px] left-[173px] not-italic text-[#0a0a0a] text-[12px] text-nowrap text-right top-[2px] translate-x-[-100%]">hlr.hiddenlayer.research</p>
          </div>
          <div className="h-[19.5px] relative shrink-0 w-full" data-name="Container">
            <p className="absolute font-['IBM_Plex_Mono:Regular',sans-serif] leading-[19.5px] left-[173.8px] not-italic text-[#0a0a0a] text-[12px] text-right top-[2px] translate-x-[-100%] w-[109px]">rev. 2025-12-19</p>
          </div>
        </Wrapper4>
      </div>
    </div>
  );
}