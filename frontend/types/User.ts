
export type User = {
    firstName: string;
    lastName: string;
    phoneNumber: string;
    days: string[];
    time: {
      hour: string;
      minute: string;
      timeOfDay: string;
    };
    Messages: {
      Quotes: boolean;
      Questions: boolean;
      "Calls to Action": boolean;
    };
  };