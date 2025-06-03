export interface LanguageData {
    language: string;
    nativeSpeakers: number;
    totalSpeakers: number;
  }
  
  export const languageData: LanguageData[] = [
    {
      language: 'English',
      nativeSpeakers: 375,
      totalSpeakers: 1500,
    },
    {
      language: 'Chinese',
      nativeSpeakers: 982,
      totalSpeakers: 1100,
    },
    {
      language: 'Hindi',
      nativeSpeakers: 460,
      totalSpeakers: 650,
    },
    {
      language: 'Spanish',
      nativeSpeakers: 330,
      totalSpeakers: 420,
    },
    {
      language: 'French',
      nativeSpeakers: 79,
      totalSpeakers: 370,
    },
  ];