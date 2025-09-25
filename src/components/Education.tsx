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
    <div className="relative mb-8">
      {!isLast && (
        <div className="absolute left-5.5 top-12 w-0.5 h-[calc(100%-2rem)] bg-gray-700" />
      )}

      <div className="absolute left-3.5 top-6 w-5 h-5 bg-gray-800 rounded-full border-2 border-gray-200 z-10" />
      <div className="ml-12">
        <div className="rounded-xl border border-gray-300 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
          <h3 className="font-bold text-xl text-gray-900 mb-2">
            {item.institute}
          </h3>
          <p className="text-gray-700 font-medium mb-4">{item.degree}</p>

          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <Image
                src={CalenderIcon}
                alt="Calendar"
                width={16}
                height={16}
                className="text-gray-600"
              />
              <span>{item.duration}</span>
            </div>
            <div className="flex items-center gap-2">
              <Image
                src={LocationIcon}
                alt="Location"
                width={16}
                height={16}
                className="text-gray-600"
              />
              <span>{item.location}</span>
            </div>
            <div className="flex items-center gap-2">
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
    <div id="experience" className="max-w-3xl mx-auto py-12 px-4 sm:px-6">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-3">
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
