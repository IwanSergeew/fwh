import styled from 'styled-components';
import { FlexCol, FlexRow } from './General';

export const WorkDaysContainer = styled(FlexCol)`
  gap: 0.5rem;
  margin-top: 2rem;
`;

export const WorkDaysDay = styled(FlexRow)`
  gap: 0.5rem;
  flex-wrap: wrap;
`;

export const WorkDaysDayDate = styled.span`
  font-weight: 700;
  white-space: nowrap;
`;

export const WorkDaysStartEnd = styled.i`
  white-space: nowrap;
`;
