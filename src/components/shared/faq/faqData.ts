export interface FaqItem {
  question: string;
  answer: string;
}

export const faqData: Record<string, FaqItem[]> = {
  all: [
    {
      question: "Q1. Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.",
    },
    {
      question: "Q2. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua?",
      answer:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.",
    },
    {
      question: "Q3. Ut enim ad minim veniam, quis nostrud ex ea commodo consequat?",
      answer:
        "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.",
    },
    {
      question: "Q4. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu pariatur?",
      answer:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      question: "Q5. Excepteur sint occaecat cupidatat non proident, sunt in culpa mollit anim id est laborum?",
      answer:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
  ],
  info: [],
  connect: [],
  product: [],
  buy: [],
  access: [],
  visit: [],
  contact: [],
  locations: [],
};


export const faqData2: Record<string, FaqItem[]> = {
  all: [
    { question: "General FAQ 1", answer: "Answer for general FAQ 1" },
    { question: "General FAQ 2", answer: "Answer for general FAQ 2" },
  ],
  info: [
    { question: "Info related FAQ 1", answer: "Answer for info 1" },
  ],
  connect: [
    { question: "Connect FAQ 1", answer: "Answer for connect 1" },
  ],
  product: [
    { question: "Product FAQ 1", answer: "Answer for product 1" },
  ],
  buy: [
    { question: "Buy FAQ 1", answer: "Answer for buy 1" },
  ],
  access: [],
  visit: [],
  contact: [],
  locations: [],
};