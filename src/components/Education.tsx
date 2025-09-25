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
    <div className="relative mb-4 sm:mb-6 md:mb-8">
      {!isLast && (
        <div className="absolute left-4 sm:left-5.5 top-8 sm:top-12 w-0.5 h-[calc(100%-1.5rem)] sm:h-[calc(100%-2rem)] bg-gray-700" />
      )}

      <div className="absolute left-2 sm:left-3.5 top-4 sm:top-6 w-3 sm:w-4 md:w-5 h-3 sm:h-4 md:h-5 bg-gray-800 rounded-full border-2 border-gray-200 z-10" />
      <div className="ml-8 sm:ml-10 md:ml-12">
        <div className="rounded-xl border border-gray-300 bg-white p-3 sm:p-4 md:p-6 shadow-sm hover:shadow-md transition-shadow">
          <h3 className="font-bold text-base sm:text-lg md:text-xl text-gray-900 mb-1 sm:mb-2">
            {item.institute}
          </h3>
          <p className="text-gray-700 font-medium text-sm sm:text-base mb-2 sm:mb-3 md:mb-4">
            {item.degree}
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-2 sm:gap-4 md:gap-6 text-[10px] sm:text-xs md:text-sm text-gray-600">
            <div className="flex items-center gap-1 sm:gap-2">
              <Image
                src={CalenderIcon}
                alt="Calendar"
                width={12}
                height={12}
                className="sm:w-[14px] sm:h-[14px] text-gray-600"
              />
              <span>{item.duration}</span>
            </div>
            <div className="flex items-center gap-1 sm:gap-2">
              <Image
                src={LocationIcon}
                alt="Location"
                width={12}
                height={12}
                className="sm:w-[14px] sm:h-[14px] text-gray-600"
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
    <div id="education" className="max-w-3xl mx-auto px-4 sm:px-6">
      <div className="text-center mb-6 sm:mb-8 md:mb-12 lg:mb-16">
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-gray-900 mb-2 sm:mb-3">
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
