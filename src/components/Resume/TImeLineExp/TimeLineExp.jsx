import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";

const Time = () => {
  return (
    <Timeline>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <div>
            <h1>2019 - 2023</h1>
            <div>
              <h1>Jawaharlal Nehru Technological University, Kakinada</h1>
              <p>Electrical engineering</p>
            </div>
          </div>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <div>
            <h1>2017 - 2019</h1>
            <div>
              <h1>Sri Gayatri Junior College</h1>
              <p>MPC</p>
            </div>
          </div>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
        </TimelineSeparator>
        <TimelineContent>
          <div>
            <h1>2016 - 2017</h1>
            <div>
              <h1>Naveena High School</h1>
              <p>Class - X</p>
            </div>
          </div>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
};

export default Time;
