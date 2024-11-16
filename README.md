# 🌍 Van Life - Travel Van Rental Website 🚐
Welcome to the Van Life project! This is a travel van rental muitipage web application where users can browse various types of vans, view details, and rent them for their adventures. The app features authentication for secure user access, a search functionality for filtering van options, and uses a mock API with Mirage.js to simulate real-time data.

## 📝 Table of Contents
- Features 
- Tech Stack
- Installation
- Usage
- Authentication
- Contributing
- License
## 🎯 Features
- Van Search: Filter through different van options based on search parameters such as type, price, etc.
- Van Details: Each van comes with a description, pricing, and images.
- Authentication: Secure login to access protected routes and rent vans.
- Mock API: Mirage.js is used to simulate an API for the app's data, including van listings, user data, etc.
  
## 💻 Tech Stack
This project is built with the following technologies:

- React: For building the UI and handling the app state.
- React Router v6: For routing and navigating between pages.
- Firebase / Firestore: For user authentication and storing user data.
- CSS: For styling the components.
- Mirage.js: For mocking the API to simulate backend data.
  
## 🛠️ Installation
To run this project locally:
1. Clone the repository:
   
        git clone https://github.com/your-username/van-life.git
3. Navigate to the project folder:
   
   Copy code

       cd van-life
3. Install dependencies:

   Copy code
                
        npm install
4. Set up Firebase:

- Create a Firebase project in the Firebase Console.
- Enable Firebase Authentication and Firestore for user data storage.
Copy code

          REACT_APP_FIREBASE_API_KEY=your-api-key
          REACT_APP_FIREBASE_AUTH_DOMAIN=your-auth-domain
          REACT_APP_FIREBASE_PROJECT_ID=your-project-id
          REACT_APP_FIREBASE_STORAGE_BUCKET=your-storage-bucket
          REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your-sender-id
          REACT_APP_FIREBASE_APP_ID=your-app-id
5. Start the development server:

Copy code
          
    npm start
    
The app will be running at http://localhost:3000.



## 🚀 Usage

Login: To access protected routes (such as viewing available vans and renting them), you will need to log in. Use the following credentials to access the app:

Username: odun@vanlife.com

Password: odun406

Once logged in, you will be able to view the list of vans, filter by search parameters, and navigate through the available options.

## 🔐 Authentication

This app uses Firebase Authentication for secure login and registration. The login page requires you to enter your credentials. Once logged in, you will be redirected to the page where you can view and rent vans.

For testing, use the following credentials:

Username: odun@vanlife.com

Password: odun406

# 📸 Screenshots
- ## ScreenShot 1
![Screenshot Capture - 2024-11-16 - 12-29-03](https://github.com/user-attachments/assets/6470137e-e7e7-4a9b-b38d-b351b9cc5f2d)
- ## ScreenShot 3
![Screenshot Capture - 2024-11-16 - 12-30-47](https://github.com/user-attachments/assets/c7fd9d9f-e1cd-4e2d-a0bf-066253f34cd1)

# 🌐 Deployment

The app is deployed on Netlify, providing fast and reliable hosting for seamless user access.

You can check out the live version of the project here:

🔗 [Van Life on Netlify](https://verdant-malabi-1b8b1b.netlify.app/)
