import React from "react";
import Image from "next/image";
import { LocationIcon, CalenderIcon } from "@/assets/images";
import { educationData } from "@/utils/data";

interface EducationItem {
  id: string;
  institute: string;
  degree: string;
  duration: string;
  location: string;
  gpa: string;
}

interface TimelineItemProps {
  item: EducationItem;
  isLast: boolean;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ item, isLast }) => {
  return (
    <div className="relative mb-6 sm:mb-8">
      {!isLast && (
        <div className="absolute left-5.5 top-12 w-0.5 h-[calc(100%-2rem)] bg-gray-700" />
      )}

      <div className="absolute left-3.5 top-6 w-4 h-4 sm:w-5 sm:h-5 bg-gray-800 rounded-full border-2 border-gray-200 z-10" />
      <div className="ml-10 sm:ml-12">
        <div className="rounded-xl border border-gray-300 bg-white p-4 sm:p-6 shadow-sm hover:shadow-md transition-shadow">
          <h3 className="font-bold text-lg sm:text-xl text-gray-900 mb-1 sm:mb-2">
            {item.institute}
          </h3>
          <p className="text-gray-700 font-medium mb-2 sm:mb-4">
            {item.degree}
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-3 sm:gap-6 text-xs sm:text-sm text-gray-600">
            <div className="flex items-center gap-1 sm:gap-2">
              <Image
                src={CalenderIcon}
                alt="Calendar"
                width={14}
                height={14}
                className="text-gray-600"
              />
              <span>{item.duration}</span>
            </div>
            <div className="flex items-center gap-1 sm:gap-2">
              <Image
                src={LocationIcon}
                alt="Location"
                width={14}
                height={14}
                className="text-gray-600"
              />
              <span>{item.location}</span>
            </div>
            <div className="flex items-center gap-1 sm:gap-2">
              <span className="font-medium">GPA:</span>
              <span>{item.gpa}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Education: React.FC = () => {
  return (
    <div
      id="experience"
      className="max-w-3xl mx-auto py-10 sm:py-12 px-4 sm:px-6"
    >
      <div className="text-center mb-12 sm:mb-16">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 mb-2 sm:mb-3">
          Education
        </h1>
      </div>

      <div className="relative">
        {educationData.map((item, index) => (
          <TimelineItem
            key={item.id}
            item={item}
            isLast={index === educationData.length - 1}
          />
        ))}
      </div>
    </div>
  );
};
