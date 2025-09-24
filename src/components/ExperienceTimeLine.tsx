import React, { useState } from "react";
import {
  ChevronDown,
  ChevronRight,
  MapPin,
  Calendar,
  Building,
} from "lucide-react";
import {
  LocationIcon,
  CalenderIcon,
  KlubStackIcon,
  FlyingFoxLabsIcon,
  SkyteXIcon,
} from "@/assets/images";
import Image, { StaticImageData } from "next/image";

const clsx = (...classes: (string | undefined | false)[]): string => {
  return classes.filter(Boolean).join(" ");
};

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

const workExperienceData: WorkExperienceItem[] = [
  {
    id: "1",
    logo: SkyteXIcon,
    company: "Skytex Unmanned Aerial Solutions ",
    role: "Software Developer Engineer 1",
    location: "Bengaluru, Karnataka",
    duration: "Mar 2025 - Present",
    responsibilities: [
      "Designed Offline Map System with OSM & Google Maps tile caching, improving large-area load speed by 25%.",
      "Built real-time AMSL graph for drone telemetry with automated terrain-collision detection, enhancing flight safety.",
      "Developed Drone Parameter CRUD APIs with Redis caching, reducing response times by 50%.",
    ],
    technologies: [
      "React.js",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "Redis",
      "Redux",
      "PostgreSQL",
      "Docker",
    ],
  },
  {
    id: "2",
    logo: FlyingFoxLabsIcon,
    company: "FlyingFox Labs Pvt Ltd",
    role: "Software Developer",
    location: "Hyderabad, Telangana",
    duration: "Feb 2024 - Feb 2025",
    responsibilities: [
      "Customized Keycloak themes & SSO integration, cutting onboarding time by 30%.",
      "Built Meeting Scheduling App with real-time availability, reducing the booking time by 30%.",
      "Developed a real-time multiplayer game with Socket.io, boosting interactivity & engagement.",
    ],
    technologies: [
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Zustand",
      "Tamagui",
      "Node.js",
      "Nest.js",
      "MongoDB",
      "Docker",
    ],
  },
  {
    id: "3",
    logo: KlubStackIcon,
    company: "KLUBSTACK",
    role: "Frontend Developer",
    location: "Chennai, TamilNadu",
    duration: "Jun 2023 - Jan 2024",
    responsibilities: [
      "Built Email Automation App using Next.js, improving interactivity by 25%.",
      "Migrated large codebase to Next.js + TypeScript, increasing maintainability by 30%.",
      "Optimized performance with 15% faster page load times.",
    ],
    technologies: [
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Redux",
      "MaterislUI",
      "shadcn/ui",
      "TailwindCSS",
      "Node.js",
      "Nest.js",
      "MongoDB",
    ],
  },
];

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
      {/* Timeline line */}
      {!isLast && (
        <div className="absolute left-6 top-12 w-0.5 h-full bg-gray-300"></div>
      )}

      {/* Timeline dot */}
      <div className="absolute left-4 top-8 w-4 h-4 bg-gray-300 rounded-full bg-background z-10"></div>

      {/* Content */}
      <div className="ml-12 pb-8">
        <div
          onClick={onToggle}
          className={clsx(
            "cursor-pointer rounded-lg border bg-timeline-card p-6 transition-all duration-300",
            "hover:bg-timeline-card-hover hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5",
            isExpanded && "border-primary/30 bg-timeline-card-hover"
          )}
        >
          {/* Header */}
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <Image
                  src={item.logo}
                  alt=""
                  width={35}
                  height={35}
                  className="w-[1rem] h-[1rem]"
                />
                <h3 className="font-semibold text-lg text-foreground">
                  {item.company}
                </h3>
              </div>
              <p className="text-primary font-medium mb-2">{item.role}</p>
              <div className="flex items-center gap-4 text-sm text-timeline-text-muted">
                <div className="flex items-center gap-1">
                  <Calendar className="h-3 w-3" />
                  <span>{item.duration}</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="h-3 w-3" />
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
              {isExpanded ? (
                <ChevronDown className="h-5 w-5 text-muted-foreground" />
              ) : (
                <ChevronRight className="h-5 w-5 text-muted-foreground" />
              )}
            </button>
          </div>

          {/* Expanded content */}
          <div
            className={clsx(
              "overflow-hidden transition-all duration-300 ease-in-out",
              isExpanded ? "max-h-96 opacity-100 mt-6" : "max-h-0 opacity-0"
            )}
          >
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-foreground mb-3">
                  Key Responsibilities:
                </h4>
                <ul className="space-y-2">
                  {item.responsibilities.map((responsibility, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                      <span>{responsibility}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {item.technologies && (
                <div>
                  <h4 className="font-medium text-foreground mb-2">
                    Technologies:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {item.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/20"
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

const WorkExperience: React.FC = () => {
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());

  const toggleItem = (id: string) => {
    const newExpandedItems = new Set(expandedItems);
    if (newExpandedItems.has(id)) {
      newExpandedItems.delete(id);
    } else {
      newExpandedItems.add(id);
    }
    setExpandedItems(newExpandedItems);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-foreground mb-4">
          Work Experience
        </h1>
        <p className="text-timeline-text-muted text-lg">
          Click on any position to explore detailed responsibilities and
          achievements
        </p>
      </div>

      <div className="relative">
        {workExperienceData.map((item, index) => (
          <TimelineItem
            key={item.id}
            item={item}
            isExpanded={expandedItems.has(item.id)}
            onToggle={() => toggleItem(item.id)}
            isLast={index === workExperienceData.length - 1}
          />
        ))}
      </div>
    </div>
  );
};

export default WorkExperience;
