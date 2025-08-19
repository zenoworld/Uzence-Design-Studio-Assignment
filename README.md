# 📘 React Component Library – InputField & DataTable
👉 [Live Storybook Preview](https://uzence-design-studio-assignment-reg.vercel.app/)

## UI Preview
Here’s how the actual UI looks:
![UI Screenshot](/public/InputField.png)
![UI Screenshot](/public/DataTable.png)

This project is a **mini React component library** showcasing two reusable UI components built with **React, TypeScript, and Tailwind CSS**:

1. **InputField** – a customizable form input with label, validation, and error states.  
2. **DataTable** – a responsive and accessible data table with customizable columns and rows.  

The project also integrates **Storybook** for interactive component documentation and testing.

---

## 🚀 Features
- ⚛️ **React + TypeScript** for strongly typed components
- 🎨 **Tailwind CSS** for styling
- 📚 **Storybook** for UI documentation and isolated component testing
- ♿ **Accessibility-first** (ARIA labels, semantic markup)
- 🧩 **Variants & Props** to customize components
- 🛠️ Ready to extend into a full design system

---

## 📂 Folder Structure
src/
├── components/
│ ├── InputField/
│ │ ├── InputField.tsx
│ │ ├── variants.ts # Different styles (outlined, filled, error, etc.)
│ │ └── InputField.stories.tsx
│ ├── DataTable/
│ │ ├── DataTable.tsx
│ │ └── DataTable.stories.tsx
│ └── index.ts # Export all components
├── App.tsx # Demo usage
├── main.tsx # Entry point
└── index.css # Tailwind CSS imports
.storybook/
├── main.ts # Storybook config
└── preview.ts # Tailwind & global styles


---

## 🧩 Components

### 🔹 InputField
A reusable input component with support for labels, error messages, and multiple variants.

**Props:**
- `label: string` – field label  
- `placeholder?: string` – placeholder text  
- `error?: string` – error message  
- `type?: 'text' | 'email' | 'password'` – input type  
- `variant?: 'outlined' | 'filled' | 'standard'` – visual style  

**Example Usage:**
```tsx
<InputField 
  label="Email" 
  placeholder="Enter your email" 
  type="email" 
  error="Invalid email address" 
  variant="outlined"
/>


Tech Stack : 
React
TypeScript
Tailwind CSS
Storybook
Vite


📚 Storybook Documentation
Each component has dedicated Storybook stories to preview props and variants.
Run Storybook: npm run storybook
Storybook will be available at 👉 http://localhost:6006

Getting Started :
1️⃣ Clone the repo
git clone https://github.com/your-username/react-component-library.git
cd react-component-library

2️⃣ Install dependencies
npm install

3️⃣ Run the development server
npm run dev
Open http://localhost:5173/ in your browser.

4️⃣ Run Storybook
npm run storybook

