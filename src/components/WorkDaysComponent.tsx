import React from 'react';
import { DayData } from '../types';
import { WorkDaysDay, WorkDaysContainer, WorkDaysDayDate, WorkDaysStartEnd } from '../styles/WorkDays';

type Props = {
  days: DayData[];
};

export default ({ days }: Props) => {
  return (
    <WorkDaysContainer>
      <WorkDaysDay>
        <WorkDaysDayDate>Date</WorkDaysDayDate>: Hours <i>[start-end]</i>
      </WorkDaysDay>
      {days.map((day, index) => (
        <WorkDaysDay key={index}>
          <WorkDaysDayDate>{day.date}</WorkDaysDayDate>: {day.time.toFixed(2)}
          <WorkDaysStartEnd>
            [{day.start.h}:{day.start.m}:{day.start.s}-{day.end.h}:{day.end.m}:{day.end.s}]
          </WorkDaysStartEnd>
        </WorkDaysDay>
      ))}
    </WorkDaysContainer>
  );
};
