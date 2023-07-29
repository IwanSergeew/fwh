import React from 'react';
import { WorkData } from '../types';
import { WorkDataContainer } from '../styles/WorkData';
import { FlexRow } from '../styles/General';
import WorkDaysComponent from './WorkDaysComponent';

type Props = {
  workData: WorkData;
};

export default ({ workData }: Props) => {
  return Object.keys(workData).map((id) => (
    <WorkDataContainer key={id}>
      <FlexRow>ID: {id}</FlexRow>
      <FlexRow>Name: {workData[id].name}</FlexRow>
      <FlexRow>Days worked: {workData[id].totalDays}</FlexRow>
      <FlexRow>Hours worked: {workData[id].totalHours.toFixed(2)}</FlexRow>
      <FlexRow>
        <WorkDaysComponent days={workData[id].days} />
      </FlexRow>
    </WorkDataContainer>
  ));
};
