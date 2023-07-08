
"use client"

import React, { useState } from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { TimePicker } from '@mui/x-date-pickers';

interface TimeFormProps {
  onSubmit: (time: string) => void;
}

export const TimeForm: React.FC<TimeFormProps> = ({ onSubmit }) => {
  const [value, setValue] = useState<Dayjs>(dayjs('2022-04-17T15:30'));

  const handleSubmit = () => {
    const timeString = value.format('HH:mm');
    onSubmit(timeString);
  };

  return (
    <>
        <div className="bg-gray-100 p-10 rounded form-size shadow-lg">
        <TimePicker
            label="Uncontrolled picker"
            defaultValue={dayjs('2022-04-17T15:30')}
        />
        <TimePicker
            label="Controlled picker"
            value={value}
            onChange={(newValue: dayjs.Dayjs) => setValue(newValue as Dayjs)}
        />
        <button onClick={handleSubmit}>Submit</button>
        </div>
    </>
  );
};

