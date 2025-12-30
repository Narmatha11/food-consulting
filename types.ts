
export interface Experience {
  period: string;
  company: string;
  location: string;
  position: string;
}

export interface ProductGroup {
  category: string;
  items: string[];
}

export interface ResumeData {
  name: string;
  summary: string;
  contact: {
    address: string;
    phone: string[];
    email: string;
    skype: string;
    location: string;
  };
  education: string[];
  skills: string[];
  experience: Experience[];
  responsibilities: string[];
  equipment: string[];
  products: ProductGroup[];
  handeling: string[];
  training: string[];
}
