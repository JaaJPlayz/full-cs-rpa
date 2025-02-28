# Login Game Project 🎮

Welcome to the **Login Game Project**! 🚀

This project consists of two main components: a **frontend** built with React and Vite, and a **backend** created with C# and Selenium. The goal of the game is simple: match randomly generated usernames, passwords, and emails to their respective fields, and submit the correct information to score points! 🎯

## Features ✨
- **Frontend**: 
  - Displays random usernames, passwords, and emails.
  - Players enter the details in the corresponding fields and submit them to score points. 🏆
  - Lose a point if any detail is entered incorrectly. 😅
- **Backend**:
  - An **RPA bot** (robotic process automation) built with C# and Selenium that plays the game automatically (currently limited to one playthrough while a bug is being fixed). 🤖
- **Python Script**: 
  - A simple Python script, `main.py`, to run the entire project and manage the frontend and backend processes. 🐍

## Requirements 📦

Before you run the project, make sure you have the following installed:
- **Node.js** (for frontend)
- **.NET SDK** (for backend)
- **Python 3.x** (for running the script)

## Getting Started 🚀

To start the project, simply follow these steps:

1. Clone this repository to your local machine:
   ```bash
   git clone //FIX ME HERE
   cd full-cs-rpa
   ```

2. Install dependencies and run the frontend:
   ```bash
   cd frontend
   npm install
   npm run dev
   ```

3. Open another terminal and navigate to the **backend** folder:
   ```bash
   cd backend
   dotnet run
   ```

4. Run the Python script `main.py` to manage the full project:
   ```bash
   python3 main.py
   ```

5. The script provides a simple interactive menu:
   ```bash
   1 - Run Frontend
   2 - Run Backend
   3 - Run Full
   0 - Exit
   ```

Choose the option you want, and let the game begin! 🎮

## Running the Game 🎮

- **Frontend**: You can play the game by entering the randomly generated login credentials into the fields and submitting them. Every correct submission adds a point, and every incorrect one subtracts a point.
- **Backend**: The backend's RPA bot can play the game for you (although it currently only plays once due to an ongoing bug). The backend automatically submits the correct credentials, mimicking user actions with Selenium.

### Example of Running the Game:
```bash
1 - Run Frontend
2 - Run Backend
3 - Run Full
0 - Exit
```

## Folder Structure 🗂️

Here’s a breakdown of the project structure:

```
login-game/
├── backend/            # Backend code (C# + Selenium)
├── frontend/           # Frontend code (React + Vite)
├── main.py             # Python script to run the project
└── README.md           # This file
```

## Contributing 👥

Feel free to contribute to this project! To contribute, follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-name`).
3. Make your changes.
4. Commit your changes (`git commit -am 'Add new feature'`).
5. Push to your branch (`git push origin feature-name`).
6. Create a pull request.

## Bug Fixes & Future Improvements 🔧

Currently, there's a known issue where the backend bot only plays the game once. The bug is being worked on, but contributions to help fix it are welcome! 🐛

### Possible Future Enhancements:
- Extend the backend bot to play multiple rounds.
- Add more complex user interactions.
- Improve frontend UI/UX with animations and styles.

## License 📄

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

**Enjoy playing the Login Game!** 🎮
