# Crop Monitoring System

## Overview
The Crop Monitoring System is a web application built with React and Redux that allows users to manage crops, staff, field data efficiently. It provides features for crop, staff and cultivation management, real-time monitoring, and easy updates. The application is designed to help users track and monitor their crops, staffs, fields and other relevant data.

## Features
- Add, update, and delete crop, field, staff, cultivate details.
- Real-time updates with Redux for state management.
- Keyboard shortcuts (e.g., `Esc` to close modals).

## Tech Stack
- **Frontend**: React, Tailwind CSS
- **State Management**: Redux
- **Styling**: Tailwind CSS for custom and reusable components

## Folder Structure
```
PCMS-f/
|-- public/
|-- src/
    |-- components/
        |-- CropForm.tsx
        |-- Modal.tsx
    |-- reducers/
        |-- CropSlice.ts
    |-- pages/
        |-- Crop.tsx
    |-- store/
        |-- Store.ts
    |-- index.css
    |-- main.tsx
    |-- App.tsx
|-- package.json
|-- tailwind.config.js
|-- README.md
```

The application will be available at `http://localhost:5173`.

## Key Functionalities

### Redux Integration
The application state is managed using Redux slices. Example for handling crop data:
```ts
import {Crop} from "../models/Crop.ts";
import {createSlice} from "@reduxjs/toolkit";

const initialState: Crop[] = []
const CropSlice = createSlice({
    name: 'crop',
    initialState: initialState,
    reducers: {
        add_crop: (state, action) => {
            state.push(action.payload)
        },
        update_crop: (state, action) => {
            const crop = state.find(crop => crop.cropCode === action.payload.cropCode);
            if (crop) Object.assign(crop, { ...action.payload })
        },
        delete_crop: (state, action) => {
            return state.filter(crop =>
                crop.cropCode !== action.payload.cropCode
            )
        }
    }
})

export const { add_crop, update_crop, delete_crop } = CropSlice.actions
export default CropSlice.reducer
```

### Keyboard Shortcut
Automatically close modals with the `Esc` key using React's `useEffect`:
```tsx
useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === 'Escape') {
            handleCloseModal();
        }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
        document.removeEventListener('keydown', handleKeyDown);
    };
}, []);
```

## Customization
You can customize the application by:
- Editing styles in `tailwind.config.js`.
- Modifying components in the `src/components` folder.
- Adding new features with Redux slices in the `src/reducers` folder.

## Future Improvements
- Integrate real-time weather data for better monitoring.
- Add support for notifications and reminders.

## Installation & Setup

### Prerequisites

#### Make sure you have the following installed:
- Node.js (Recommended: Latest LTS version)
- npm 

1. ### Clone the Repository
```bash
    git clone https://github.com/nuharaomesh/crop-monitoring-sys-react.git
    cd frontend-repo
```

2. ### Install Dependencies
```bash
    npm install
```

3. ### Run the Project
```bash
    npm run dev
```

## License
This project is licensed under the [MIT License](Licence).

---

