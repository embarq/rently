export interface NeighborhoodVibes {
  showQuestions: boolean;
  stats: {
    minimumResponseCount: number;
    attributes: PropertyStatsAttribute[];
  };
  totalReviewCount: number;
  defaultCategoryId: string;
}

export interface PropertyReviewCategory {
  id: string;
  displayName: string;
  reviewCount: number;
}

export interface PropertyReview {
  category: {
    id: string;
    displayName: string;
  };
  helpfulCount: number;
  reviewId: string;
  textReview: string;
  timeStamp: string;
  userIconUrl: string;
  userName: string;
  userType: string;
}

export interface PropertyStatsAttribute {
  attributeId: number;
  name: string;
  score: number;
}

export interface LabeledData {
  lbl: string;
  data: any;
}

export interface PropertyMortgage {
  downPaymentPercent: number;
  insurance: number;
  insuranceRate: number;
  interestRate: number;
  listPrice: number;
  paymentEstimate: number;
  principalAndInterest: number;
  tax: number;
  taxRate: number;
  termYears: number;
  hoaFee: {
    type: string;
    period: string;
    amount: string;
  };
}

export interface PropertyScoop {
  type: string;
  title: string;
  text?: string;
  level?: number;
}

export interface PropertyAgent {
  id: any;
  broker: {
    logo: string;
    name: string;
    phone: string;
    show_logo: boolean;
  };
  badgeStatus: string;
  checked: number;
  encodedZuid: string;
  isFpa: boolean;
  isListingAgent?: number;
  phone: string;
  profileImage: string;
  profileURL?: string;
  ratingAverage?: number;
  recentSales: number;
  reviewCount: number;
  showReviewBar: boolean;
  ty: string;
  type: string;
  userName: string;
  visibility: boolean;
}

export interface Property {
  areaSizeSquares: number;
  bathrooms: number;
  beds: number;
  brokerage: string;
  city: string;
  description: string;
  id?: any;
  identifier: string;
  latitude: number;
  listedBy: string;
  longitude: number;
  lotAreaSize: string;
  mortgage: PropertyMortgage;
  neighborhood: string;
  originalUrl: string;
  picturesCollection: string[];
  publicResponseCount: number;
  previewBannerImageUrl?: string;
  previewImageUrl: string;
  price: number;
  pricePerSquare: number;
  propertyType: string;
  sellingType: string;
  state: string;
  street: string;
  streetNumber: string;
  yearOfBuilding: number;
  zipCode: string;
}

export type ExtendedProperty = Property & {
  features?: LabeledData[];
  taxesAndAssessments?: LabeledData[];
  records?: LabeledData[];
  provider?: LabeledData[];
  attr?: LabeledData[];
  stats?: LabeledData[]
  agents?: PropertyAgent[];
  scoop?: PropertyScoop[];
  reviews?: PropertyReview[];
}
