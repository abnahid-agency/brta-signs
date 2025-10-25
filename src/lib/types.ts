
export type TrafficSign = {
  id: string;
  titleBangla: string;
  titleEnglish: string;
  category: 'Mandatory' | 'Warning' | 'Informatory';
  description: string;
  imageId: string;
};

export type Testimonial = {
  id: string;
  name: string;
  district: string;
  comment: string;
  avatarId: string;
};

export type User = {
  id: string;
  name: string;
  avatarId: string;
};

export type MCQ = {
  id: string;
  topic: string;
  question: string;
  options: {
    a: string;
    b: string;
    c: string;
    d: string;
  };
  correctOption: 'a' | 'b' | 'c' | 'd';
  explanation: string;
  imageId?: string;
};
