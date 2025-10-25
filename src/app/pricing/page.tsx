"use client";
import { TimelineContent } from "@/components/ui/timeline-content";
import VerticalCutReveal from "@/components/ui/vertical-cut-reveal";
import { cn } from "@/lib/utils";
import { CheckCheck, Zap } from "lucide-react";
import { motion, animate } from "framer-motion";
import { useId, useRef, useState, useEffect } from "react";

const PricingSwitch = ({
  button1,
  button2,
  onSwitch,
  className,
  layoutId,
}: {
  button1: string;
  button2: string;
  onSwitch: (value: string) => void;
  className?: string;
  layoutId?: string;
}) => {
  const [selected, setSelected] = useState("0");
  const uniqueId = useId();
  const switchLayoutId = layoutId || `switch-${uniqueId}`;

  const handleSwitch = (value: string) => {
    setSelected(value);
    onSwitch(value);
  };

  return (
    <div
      className={cn(
        "relative z-10 w-full flex rounded-full bg-muted border border-border p-1",
        className,
      )}
    >
      <button
        onClick={() => handleSwitch("0")}
        className={cn(
          "relative z-10 w-full sm:h-14 h-10 rounded-full sm:px-6 px-3 sm:py-2 py-1 font-medium transition-colors",
          selected === "0"
            ? "text-primary-foreground"
            : "text-muted-foreground hover:text-foreground",
        )}
      >
        {selected === "0" && (
          <motion.span
            layoutId={switchLayoutId}
            className="absolute top-0 left-0 sm:h-14 h-10 w-full rounded-full border-2 shadow-sm border-primary bg-primary"
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
          />
        )}
        <span className="relative">{button1}</span>
      </button>

      <button
        onClick={() => handleSwitch("1")}
        className={cn(
          "relative z-10 w-full sm:h-14 h-10 flex-shrink-0 rounded-full sm:px-6 px-3 sm:py-2 py-1 font-medium transition-colors",
          selected === "1"
            ? "text-primary-foreground"
            : "text-muted-foreground hover:text-foreground",
        )}
      >
        {selected === "1" && (
          <motion.span
            layoutId={switchLayoutId}
            className="absolute top-0 left-0 sm:h-14 h-10 w-full rounded-full border-2 shadow-sm border-primary bg-primary"
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
          />
        )}
        <span className="relative flex justify-center items-center gap-2">
          {button2}
        </span>
      </button>
    </div>
  );
};

function AnimatedNumber({ value, className }: { value: number, className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const controls = animate(0, value, {
      duration: 1,
      onUpdate(latest) {
        node.textContent = Math.round(latest).toString();
      }
    });

    return () => controls.stop();
  }, [value]);

  return <span ref={ref} className={className} />;
}

export default function PricingSection2() {
  const [isAnnual, setIsAnnual] = useState(false);
  const pricingRef = useRef<HTMLDivElement>(null);

  const revealVariants = {
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        delay: i * 0.3,
        duration: 0.5,
      },
    }),
    hidden: {
      filter: "blur(10px)",
      y: -20,
      opacity: 0,
    },
  };
  const timelineVaraints = {
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
    hidden: {
      filter: "blur(10px)",
      y: -20,
      opacity: 0,
    },
  };

  const toggleBillingCycle = (value: string) =>
    setIsAnnual(Number.parseInt(value) === 1);

  const price = isAnnual ? 299 : 29;
  const originalPrice = isAnnual ? 348 : 39;

  const features = [
    "500+ Official BRTA Questions",
    "Complete Traffic Sign Library",
    "Topic-wise Practice Tests",
    "Unlimited Mock Exams",
    "Performance Analytics & Weak Topic Focus",
    "Ad-Free Experience",
    "Priority Support",
  ];

  return (
    <div className="px-4 pt-10 min-h-screen mx-auto relative" ref={pricingRef}>
      <div className="bg-background py-16 px-4 ">
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "radial-gradient(125% 125% at 50% 90%, hsl(var(--background)) 40%, hsl(var(--primary) / 0.2) 100%)",
          }}
        />
        <div className="max-w-4xl mx-auto text-center">
          <TimelineContent
            as="div"
            animationNum={0}
            timelineRef={pricingRef}
            customVariants={revealVariants}
            className="flex items-center justify-center mb-4"
          >
            <Zap className="h-5 w-5 text-primary fill-primary mr-2" />
            <span className="text-primary font-medium">Go Premium</span>
          </TimelineContent>

          <h1 className="md:text-5xl sm:text-4xl text-3xl font-semibold text-gray-900 mb-4 leading-[120%]">
            <VerticalCutReveal
              splitBy="words"
              staggerDuration={0.15}
              staggerFrom="first"
              reverse={true}
              containerClassName="justify-center"
              transition={{
                type: "spring",
                stiffness: 250,
                damping: 40,
                delay: 0.4,
              }}
            >
              Unlock Your Full Potential
            </VerticalCutReveal>
          </h1>

          <TimelineContent
            as="p"
            animationNum={1}
            timelineRef={pricingRef}
            customVariants={revealVariants}
            className="text-xl text-gray-600"
          >
            Get unlimited access to all features and pass your exam with confidence.
          </TimelineContent>
        </div>
      </div>

      {/* Product Features */}
      <div className="px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <TimelineContent
                as="h3"
                animationNum={2}
                timelineRef={pricingRef}
                customVariants={revealVariants}
                className="text-3xl font-medium text-foreground mb-2"
              >
                What&apos;s Included in Premium
              </TimelineContent>

              <div className="space-y-4">
                {features.map((feature, index) => (
                  <TimelineContent
                    key={index}
                    as="div"
                    animationNum={3 + index}
                    timelineRef={pricingRef}
                    customVariants={timelineVaraints}
                    className="flex items-center"
                  >
                    <div className="w-6 h-6 bg-primary shadow-md shadow-primary/50 rounded-full flex items-center justify-center mr-3">
                      <CheckCheck className="h-4 w-4 text-primary-foreground" />
                    </div>
                    <span className="text-muted-foreground">{feature}</span>
                  </TimelineContent>
                ))}
              </div>
            </div>

            <div className="space-y-8">
              <TimelineContent
                as="div"
                animationNum={3}
                timelineRef={pricingRef}
                customVariants={revealVariants}
              >
                <h4 className="font-semibold text-foreground mb-2">
                  Billing Cycle
                </h4>
                <p className="text-sm text-muted-foreground mb-2">
                  Save with an annual plan.
                </p>
                <PricingSwitch
                  button1="Monthly"
                  button2="Annual (Save 15%)"
                  onSwitch={toggleBillingCycle}
                  className="grid grid-cols-2 w-full"
                />
              </TimelineContent>


              <TimelineContent
                as="div"
                animationNum={5}
                timelineRef={pricingRef}
                customVariants={revealVariants}
                className="text-center grid grid-cols-2 items-center gap-2 px-2"
              >
                <div className="flex items-center mb-4">
                  <span className="text-5xl font-semibold text-foreground">
                    ৳
                    <AnimatedNumber
                      value={price}
                      className="text-5xl font-semibold"
                    />
                  </span>
                  <span className="text-xl text-muted-foreground line-through ml-2 relative before:content-[''] before:absolute before:left-0 before:top-3.5 before:w-full before:h-0.5 before:bg-muted-foreground before:z-10">
                    ৳
                    <AnimatedNumber
                      value={originalPrice}
                      className="text-xl font-semibold line-through"
                    />
                  </span>
                </div>
                <TimelineContent
                  as="button"
                  animationNum={6}
                  timelineRef={pricingRef}
                  customVariants={revealVariants}
                  className="text-white text-xl font-semibold h-10 sm:h-16 w-full rounded-full border-2 shadow-sm shadow-primary/50 border-primary bg-primary"
                >
                  Get Premium
                </TimelineContent>
              </TimelineContent>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
