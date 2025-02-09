# AUSBIZ-CONSULTING-Basic-competency-Assessment

A simple single-page application built with Next.js 15.1, demonstrating the use of server actions and Shadcn UI components. This app allows users to input their name and receive a personalized greeting.

## Features

- Input field for user's name
- Submit button to process the input
- Server action to generate a greeting
- Display of the greeting message
- Explanation section detailing how the app works
- Responsive design for both desktop and mobile devices

## Technologies Used

- [Next.js 15.1](https://nextjs.org/)
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Shadcn UI](https://ui.shadcn.com/)
- [Tailwind CSS](https://tailwindcss.com/)

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (v18 or later)
- npm or yarn

## Installation and Setup

1. Clone the repository:
   \`\`\`
   git clone https://github.com/yourusername/nextjs-greeting-app.git
   cd nextjs-greeting-app
   \`\`\`

2. Install the dependencies:
   \`\`\`
   npm install
   # or
   yarn install
   \`\`\`

3. Set up Shadcn UI components:
   Follow the [Shadcn UI installation guide](https://ui.shadcn.com/docs/installation/next) to add the required components to your project.

4. Run the development server:
   \`\`\`
   npm run dev
   # or
   yarn dev
   \`\`\`

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Usage

1. Enter your name in the input field.
2. Click the "Submit" button or press Enter.
3. The app will process your input using a server action and display a greeting message.
4. Explore the "How it works" section to learn about the app's implementation details.

## Project Structure

\`\`\`
nextjs-greeting-app/
├── app/
│   ├── components/
│   │   ├── GreetingForm.tsx
│   │   └── ExplanationSection.tsx
│   ├── actions.ts
│   ├── globals.css
│   └── page.tsx
├── components/
│   └── ui/
│       ├── button.tsx
│       ├── input.tsx
│       ├── card.tsx
│       └── accordion.tsx
├── public/
├── .gitignore
├── next.config.js
├── package.json
├── README.md
├── tailwind.config.js
└── tsconfig.json
\`\`\`

## Key Components

- \`app/actions.ts\`: Contains the server action for processing the user's name.
- \`app/components/GreetingForm.tsx\`: Client component for the input form and greeting display.
- \`app/components/ExplanationSection.tsx\`: Component for the explanation accordion.
- \`app/page.tsx\`: Main page component that combines GreetingForm and ExplanationSection.
- \`app/globals.css\`: Global styles and Tailwind CSS configuration.


---
