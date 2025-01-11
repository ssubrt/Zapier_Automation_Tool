# Zapier Automation Tool

Zapier Automation Tool is a workflow automation tool inspired by Zapier. It enables users to create Zaps that integrate triggers and actions to automate various processes efficiently. The project leverages modern web technologies to provide a seamless experience for users.

---

## System Design

![System Design Diagram]
<img src="screenshots/WhatsApp Image 2025-01-09 at 20.21.14_9e694721.jpg" alt="Try Again" width="700" />


The system architecture includes multiple components:
- **Frontend:** Built using Next.js for a responsive and dynamic UI.
- **Backend:** Manages authentication, Zap logic, triggers, and actions.
- **Hooks:** Handles webhook logic, currently supporting webhooks.
- **Processor:** Processes actions like Gmail and Solana using Apache Kafka to handle and store requests.
- **Worker:** Consumes requests and resumes tasks in case of failure, supporting SMTP email sending and Solana transactions.
- **Database:** Uses PostgreSQL for robust and scalable data storage.

---

## Features

- User Authentication (Signup, Signin)
- Dashboard for managing Zaps
- Create Zaps with triggers and actions
- Webhook logic
- Actions supported:
  - Gmail: Sending emails
  - Solana: Processing Solana transactions
- Fault-tolerant worker implementation with Apache Kafka

---

## Technologies Used

- **Frontend:** Next.js, React.js
- **Backend:** Node.js, Express.js, Zod, TypeScript
- **Message Queue:** Apache Kafka
- **Database:** PostgreSQL

---


## ScreenShots

-  First  Page 
<img src="screenshots/WhatsApp Image 2025-01-09 at 17.54.52_34f24a67.jpg" alt="TryAgain" width="700"/>

-  Signup   Page 
<img src="screenshots/WhatsApp Image 2025-01-09 at 17.54.53_52462d40.jpg" alt="TryAgain" width="700"/>

-  Dashboard 
<img src="screenshots/WhatsApp Image 2025-01-09 at 17.54.52_85b8a449.jpg" alt="TryAgain" width="700" />

-  WebHook
<img src="screenshots/WhatsApp Image 2025-01-09 at 17.54.55_0f17b73d.jpg" alt="TryAgain" width="700" />

-  Trigger & Action 
<img src="screenshots/WhatsApp Image 2025-01-09 at 17.54.52_535e4201.jpg" alt="TryAgain" width="700" />

-  Zaps and Actions
<img src="screenshots/WhatsApp Image 2025-01-09 at 17.54.53_ded0bce1.jpg" alt="TryAgain" width="700" />


<img src="screenshots/WhatsApp Image 2025-01-09 at 17.54.53_e25fbad7.jpg" alt="TryAgain" width="700"/>

---


## Folder Structure

1. **Backend Folder**
   - Contains all backend logic, including authentication, Zaps, triggers, and actions.
2. **Frontend Folder**
   - Built with Next.js to handle all frontend endpoints, such as signup, signin, dashboard, Zap creation, and UI components.
3. **Hooks Folder**
   - Contains webhook logic.
4. **Processor Folder**
   - Handles processing of actions, currently supporting:
     - Gmail actions
     - Solana transactions
   - Uses Apache Kafka for storing and producing requests.
5. **Worker Folder**
   - Implements consumer logic with Apache Kafka for fault tolerance.
   - SMTP email sending and Solana transaction handling logic.

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/ssubrt/Zapier_Automation_Tool.git
   ```

2. Navigate to the repository:
   ```bash
   cd Zapier_Automation_Tool
   ```

3. Install dependencies for both frontend and backend:
   ```bash
   cd frontend && npm install
   cd ../backend && npm install
   ```

4. Set up the environment variables for both frontend and backend:
   - Refer to `.env.example` files in the respective folders and create `.env` files.

5. Start the development servers:
   ```bash
   cd frontend && npm run dev
   cd ../backend && npm run start
   ```

---

## Usage

1. Navigate to the frontend in your browser (e.g., `http://localhost:3000`).
2. Sign up or log in to access the dashboard.
3. Create Zaps by defining triggers and actions.
4. Manage Zaps and monitor their execution in the dashboard.

---



## Contribution

Contributions are welcome! Please follow these steps:
1. Fork the repository.
2. Create a feature branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Description of changes"
   ```
4. Push to the branch:
   ```bash
   git push origin feature-name
   ```
5. Open a Pull Request.

---


## License

This project is licensed under the [MIT License](LICENSE).

---

## Contact

For any queries or collaboration, feel free to reach out:
- Email: subratgangwar03@gmail.com


---

Thank you for checking out the Zapier Automation Tool! Feel free to explore, use, and contribute to the project.

