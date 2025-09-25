import React, { useState } from "react";
import {
  LocationIcon,
  CalenderIcon,
  ChevronDownIcon,
  BuildingIcon,
} from "@/assets/images";
import Image, { StaticImageData } from "next/image";
import { workExperienceData } from "@/utils/data";

const clsx = (...classes: (string | undefined | false)[]): string =>
  classes.filter(Boolean).join(" ");

interface WorkExperienceItem {
  id: string;
  logo: StaticImageData;
  company: string;
  role: string;
  location: string;
  duration: string;
  responsibilities: string[];
  technologies?: string[];
}

interface TimelineItemProps {
  item: WorkExperienceItem;
  isExpanded: boolean;
  onToggle: () => void;
  isLast: boolean;
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  item,
  isExpanded,
  onToggle,
  isLast,
}) => {
  return (
    <div className="relative">
      {!isLast && (
        <div
          className="absolute left-6 top-16 w-0.5 h-[calc(100%-4rem)] bg-[#252525] border-dashed border-l-2"
          style={{ borderColor: "#252525" }}
        />
      )}

      <div className="absolute left-0 top-4 w-12 h-12 rounded-full overflow-hidden z-10 bg-white shadow flex justify-center items-center">
        <Image
          src={item.logo}
          alt={`${item.company} logo`}
          width={35}
          height={35}
          className="object-cover"
        />
      </div>

      <div className="ml-16 sm:ml-20 pb-8">
        <div
          onClick={onToggle}
          className={clsx(
            "cursor-pointer rounded-lg border bg-timeline-card p-4 sm:p-6 transition-all duration-300",
            "hover:bg-timeline-card-hover hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5",
            isExpanded && "border-primary/30 bg-timeline-card-hover"
          )}
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-0">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <Image src={BuildingIcon} alt="" width={20} height={20} />
                <h3 className="font-semibold text-base sm:text-lg text-foreground">
                  {item.company}
                </h3>
              </div>
              <p className="text-primary font-medium text-sm sm:text-base mb-2">
                {item.role}
              </p>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 text-xs sm:text-sm text-timeline-text-muted">
                <div className="flex items-center gap-1">
                  <Image src={CalenderIcon} alt="" width={15} height={15} />
                  <span>{item.duration}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Image src={LocationIcon} alt="" width={15} height={15} />
                  <span>{item.location}</span>
                </div>
              </div>
            </div>

            <button
              className={clsx(
                "flex-shrink-0 p-1 rounded-full transition-transform duration-300 hover:bg-muted",
                isExpanded && "rotate-90"
              )}
            >
              <Image
                src={ChevronDownIcon}
                alt=""
                width={20}
                height={20}
                className={`text-muted_foreground ${
                  isExpanded ? "rotate-270" : "rotate-180"
                }`}
              />
            </button>
          </div>

          <div
            className={clsx(
              "overflow-hidden transition-all duration-300 ease-in-out",
              isExpanded
                ? "max-h-96 opacity-100 mt-4 sm:mt-6"
                : "max-h-0 opacity-0"
            )}
          >
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-foreground mb-2 sm:mb-3">
                  Key Responsibilities:
                </h4>
                <ul className="space-y-1 sm:space-y-2">
                  {item.responsibilities.map((resp, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 text-xs sm:text-sm text-muted-foreground"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                      <span>&bull; {resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {item.technologies && (
                <div>
                  <h4 className="font-medium text-foreground mb-1 sm:mb-2">
                    Technologies:
                  </h4>
                  <div className="flex flex-wrap gap-1 sm:gap-2">
                    {item.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 text-[10px] sm:text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const WorkExperience: React.FC = () => {
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());

  const toggleItem = (id: string) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(id)) newExpanded.delete(id);
    else newExpanded.add(id);
    setExpandedItems(newExpanded);
  };

  return (
    <div id="experience" className="max-w-4xl mx-auto p-4 sm:p-6">
      <div className="text-center mb-8 sm:mb-12">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-2 sm:mb-4">
          Work Experience
        </h1>
      </div>

      <div className="relative">
        {workExperienceData.map((item, idx) => (
          <TimelineItem
            key={item.id}
            item={item}
            isExpanded={expandedItems.has(item.id)}
            onToggle={() => toggleItem(item.id)}
            isLast={idx === workExperienceData.length - 1}
          />
        ))}
      </div>
    </div>
  );
};
