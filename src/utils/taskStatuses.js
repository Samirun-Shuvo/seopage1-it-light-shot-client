export const taskStatuses = [
  {
    id: "status-incomplete",
    title: "Incomplete",
    color: "bg-green-500",
    cardCount: 4,
    tasks: [
      {
        statusId: "status-complete",
        id: "task-1",
        clientName: "Alice Johnson",
        assigneeName: "John Doe",
        taskDescription: "Complete the design for the homepage.",
        taskProgress: "2/5",
        commentsCount: 10,
        dueDate: "2024-12-05",
        avatarUrl:
          "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
        title: "Finish designing homepage",
        priority: "High",
        status: "Incomplete",
      },
      {
        statusId: "status-complete",
        id: "task-2",
        clientName: "Bob Smith",
        assigneeName: "Jane Doe",
        taskDescription: "Start coding the landing page.",
        taskProgress: "1/3",
        commentsCount: 5,
        dueDate: "2024-12-10",
        avatarUrl:
          "https://img.daisyui.com/images/stock/photo-1534528641775-53994a69daeb.webp",
        title: "Develop landing page",
        priority: "Medium",
        status: "Incomplete",
      },
      {
        statusId: "status-complete",
        id: "task-3",
        clientName: "Charlie Brown",
        assigneeName: "Sam Green",
        taskDescription: "Initialize the repository for the new project.",
        taskProgress: "0/3",
        commentsCount: 8,
        dueDate: "2024-12-08",
        avatarUrl:
          "https://img.daisyui.com/images/stock/photo-1534528541775-53994a69daeb.webp",
        title: "Setup project repository",
        priority: "Low",
        status: "Incomplete",
      },
      {
        statusId: "status-complete",
        id: "task-4",
        clientName: "Dana White",
        assigneeName: "Lucy Gray",
        taskDescription: "Implement basic API endpoints for the app.",
        taskProgress: "1/5",
        commentsCount: 12,
        dueDate: "2024-12-15",
        avatarUrl:
          "https://img.daisyui.com/images/stock/photo-1534528441775-53994a69daeb.webp",
        title: "Create API endpoints",
        priority: "High",
        status: "Incomplete",
      },
    ],
  },
  {
    id: "status-to-do",
    title: "To-Do",
    color: "bg-blue-500",
    cardCount: 5,
    tasks: [
      {
        statusId: "status-to-do",
        id: "task-5",
        clientName: "Oscar Blue",
        assigneeName: "Evan Taylor",
        taskDescription: "Write unit tests for the user authentication module.",
        taskProgress: "0/3",
        commentsCount: 6,
        dueDate: "2024-12-10",
        avatarUrl:
          "https://img.daisyui.com/images/stock/photo-1534528341775-53994a69daeb.webp",
        title: "Write unit tests",
        priority: "Medium",
        status: "To-Do",
      },
      {
        statusId: "status-to-do",
        id: "task-6",
        clientName: "Lucy Gray",
        assigneeName: "John Doe",
        taskDescription: "Design the schema for the new database.",
        taskProgress: "1/3",
        commentsCount: 4,
        dueDate: "2024-12-12",
        avatarUrl:
          "https://img.daisyui.com/images/stock/photo-1534528541775-53994a69daeb.webp",
        title: "Design database schema",
        priority: "High",
        status: "To-Do",
      },
      {
        statusId: "status-to-do",
        id: "task-7",
        clientName: "Dana White",
        assigneeName: "Sam Green",
        taskDescription: "Write documentation for the backend API.",
        taskProgress: "0/5",
        commentsCount: 8,
        dueDate: "2024-12-18",
        avatarUrl:
          "https://img.daisyui.com/images/stock/photo-1534528441775-53994a69daeb.webp",
        title: "Create documentation",
        priority: "Low",
        status: "To-Do",
      },
      {
        statusId: "status-to-do",
        id: "task-8",
        clientName: "Oscar Blue",
        assigneeName: "Lucy Gray",
        taskDescription:
          "Configure the CI/CD pipeline for automatic deployment.",
        taskProgress: "2/4",
        commentsCount: 3,
        dueDate: "2024-12-14",
        avatarUrl:
          "https://img.daisyui.com/images/stock/photo-1534528341775-53994a69daeb.webp",
        title: "Setup CI/CD pipeline",
        priority: "Medium",
        status: "To-Do",
      },
      {
        statusId: "status-to-do",
        id: "task-9",
        clientName: "Bob Smith",
        assigneeName: "John Doe",
        taskDescription: "Develop the new feature for the app.",
        taskProgress: "0/2",
        commentsCount: 7,
        dueDate: "2024-12-20",
        avatarUrl:
          "https://img.daisyui.com/images/stock/photo-1534528641775-53994a69daeb.webp",
        title: "Implement feature X",
        priority: "High",
        status: "To-Do",
      },
    ],
  },
  {
    id: "status-doing",
    title: "Doing",
    color: "bg-[#d6d640]",
    cardCount: 6,
    tasks: [
      {
        statusId: "status-doing",
        id: "task-10",
        clientName: "Alice Johnson",
        assigneeName: "Oscar Blue",
        taskDescription:
          "Improve the load speed and overall performance of the website.",
        taskProgress: "3/5",
        commentsCount: 12,
        dueDate: "2024-12-10",
        avatarUrl:
          "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
        title: "Optimize website performance",
        priority: "High",
        status: "Doing",
      },
      {
        statusId: "status-doing",
        id: "task-11",
        clientName: "Bob Smith",
        assigneeName: "Dana White",
        taskDescription: "Implement a search bar on the website.",
        taskProgress: "2/4",
        commentsCount: 10,
        dueDate: "2024-12-15",
        avatarUrl:
          "https://img.daisyui.com/images/stock/photo-1534528641775-53994a69daeb.webp",
        title: "Add search functionality",
        priority: "Medium",
        status: "Doing",
      },
      {
        statusId: "status-doing",
        id: "task-12",
        clientName: "Charlie Brown",
        assigneeName: "Sam Green",
        taskDescription: "Resolve issues with the login form.",
        taskProgress: "1/3",
        commentsCount: 5,
        dueDate: "2024-12-12",
        avatarUrl:
          "https://img.daisyui.com/images/stock/photo-1534528541775-53994a69daeb.webp",
        title: "Fix login bugs",
        priority: "High",
        status: "Doing",
      },
      {
        statusId: "status-doing",
        id: "task-13",
        clientName: "Lucy Gray",
        assigneeName: "Oscar Blue",
        taskDescription: "Test API endpoints to ensure correct responses.",
        taskProgress: "2/3",
        commentsCount: 7,
        dueDate: "2024-12-18",
        avatarUrl:
          "https://img.daisyui.com/images/stock/photo-1534528441775-53994a69daeb.webp",
        title: "Test API responses",
        priority: "Medium",
        status: "Doing",
      },
      {
        statusId: "status-doing",
        id: "task-14",
        clientName: "Dana White",
        assigneeName: "Lucy Gray",
        taskDescription: "Review the code for the newly implemented feature Y.",
        taskProgress: "4/5",
        commentsCount: 8,
        dueDate: "2024-12-25",
        avatarUrl:
          "https://img.daisyui.com/images/stock/photo-1534528341775-53994a69daeb.webp",
        title: "Code review for feature Y",
        priority: "Low",
        status: "Doing",
      },
      {
        statusId: "status-doing",
        id: "task-15",
        clientName: "John Doe",
        assigneeName: "Oscar Blue",
        taskDescription: "Refactor and update the user profile page design.",
        taskProgress: "3/4",
        commentsCount: 4,
        dueDate: "2024-12-25",
        avatarUrl:
          "https://img.daisyui.com/images/stock/photo-1534528641775-53994a69daeb.webp",
        title: "Update user profile page",
        priority: "Medium",
        status: "Doing",
      },
    ],
  },
  {
    id: "status-under-review",
    title: "Under Review",
    color: "bg-[#d6d685]",
    cardCount: 7,
    tasks: [
      {
        statusId: "status-under-review",
        id: "task-16",
        clientName: "Lucy Gray",
        assigneeName: "Oscar Blue",
        taskDescription: "Refactor homepage code for better performance.",
        taskProgress: "4/5",
        commentsCount: 6,
        dueDate: "2024-12-22",
        avatarUrl:
          "https://img.daisyui.com/images/stock/photo-1534528641775-53994a69daeb.webp",
        title: "Refactor homepage code",
        priority: "High",
        status: "Under Review",
      },
      {
        statusId: "status-under-review",
        id: "task-17",
        clientName: "Oscar Blue",
        assigneeName: "John Doe",
        taskDescription: "Add documentation to the backend.",
        taskProgress: "3/4",
        commentsCount: 3,
        dueDate: "2024-12-30",
        avatarUrl:
          "https://img.daisyui.com/images/stock/photo-1534528341775-53994a69daeb.webp",
        title: "Add backend documentation",
        priority: "Medium",
        status: "Under Review",
      },
      {
        statusId: "status-under-review",
        id: "task-18",
        clientName: "Alice Johnson",
        assigneeName: "Sam Green",
        taskDescription: "Implement user authentication with JWT.",
        taskProgress: "2/3",
        commentsCount: 10,
        dueDate: "2024-12-28",
        avatarUrl:
          "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
        title: "Setup JWT authentication",
        priority: "High",
        status: "Under Review",
      },
      {
        statusId: "status-under-review",
        id: "task-19",
        clientName: "Dana White",
        assigneeName: "Lucy Gray",
        taskDescription: "Write end-to-end tests for the new feature.",
        taskProgress: "3/5",
        commentsCount: 8,
        dueDate: "2024-12-25",
        avatarUrl:
          "https://img.daisyui.com/images/stock/photo-1534528441775-53994a69daeb.webp",
        title: "Write end-to-end tests",
        priority: "Low",
        status: "Under Review",
      },
      {
        statusId: "status-under-review",
        id: "task-20",
        clientName: "John Doe",
        assigneeName: "Oscar Blue",
        taskDescription: "Review API code for potential improvements.",
        taskProgress: "4/5",
        commentsCount: 6,
        dueDate: "2024-12-22",
        avatarUrl:
          "https://img.daisyui.com/images/stock/photo-1534528641775-53994a69daeb.webp",
        title: "API code review",
        priority: "Medium",
        status: "Under Review",
      },
      {
        statusId: "status-under-review",
        id: "task-21",
        clientName: "Charlie Brown",
        assigneeName: "Sam Green",
        taskDescription: "Refactor the payment system integration code.",
        taskProgress: "2/4",
        commentsCount: 9,
        dueDate: "2024-12-30",
        avatarUrl:
          "https://img.daisyui.com/images/stock/photo-1534528541775-53994a69daeb.webp",
        title: "Refactor payment system",
        priority: "High",
        status: "Under Review",
      },
      {
        statusId: "status-under-review",
        id: "task-22",
        clientName: "Dana White",
        assigneeName: "Lucy Gray",
        taskDescription: "Write API documentation for new endpoints.",
        taskProgress: "1/5",
        commentsCount: 11,
        dueDate: "2024-12-25",
        avatarUrl:
          "https://img.daisyui.com/images/stock/photo-1534528441775-53994a69daeb.webp",
        title: "Write API documentation",
        priority: "Low",
        status: "Under Review",
      },
    ],
  },
  {
    id: "status-complete",
    title: "Complete",
    color: "bg-green-400",
    cardCount: 5,
    tasks: [
      {
        statusId: "status-complete",
        id: "task-23",
        clientName: "Evan Taylor",
        assigneeName: "Oscar Blue",
        taskDescription: "Finish optimizing homepage images.",
        taskProgress: "5/5",
        commentsCount: 15,
        dueDate: "2024-11-01",
        avatarUrl:
          "https://img.daisyui.com/images/stock/photo-1534528641775-53994a69daeb.webp",
        title: "Optimize homepage images",
        priority: "High",
        status: "Complete",
      },
      {
        statusId: "status-complete",
        id: "task-24",
        clientName: "Lucy Gray",
        assigneeName: "Sam Green",
        taskDescription:
          "Complete the implementation of the dashboard features.",
        taskProgress: "5/5",
        commentsCount: 10,
        dueDate: "2024-11-05",
        avatarUrl:
          "https://img.daisyui.com/images/stock/photo-1534528541775-53994a69daeb.webp",
        title: "Implement dashboard features",
        priority: "High",
        status: "Complete",
      },
      {
        statusId: "status-complete",
        id: "task-25",
        clientName: "Charlie Brown",
        assigneeName: "Dana White",
        taskDescription: "Deploy the new version to production.",
        taskProgress: "5/5",
        commentsCount: 8,
        dueDate: "2024-11-10",
        avatarUrl:
          "https://img.daisyui.com/images/stock/photo-1534528441775-53994a69daeb.webp",
        title: "Deploy new version",
        priority: "Medium",
        status: "Complete",
      },
      {
        statusId: "status-complete",
        id: "task-26",
        clientName: "Oscar Blue",
        assigneeName: "Lucy Gray",
        taskDescription: "Fix bugs reported from user feedback.",
        taskProgress: "5/5",
        commentsCount: 5,
        dueDate: "2024-11-15",
        avatarUrl:
          "https://img.daisyui.com/images/stock/photo-1534528341775-53994a69daeb.webp",
        title: "Fix user feedback bugs",
        priority: "Low",
        status: "Complete",
      },
      {
        statusId: "status-complete",
        id: "task-27",
        clientName: "John Doe",
        assigneeName: "Oscar Blue",
        taskDescription: "Finalize and document API integration.",
        taskProgress: "5/5",
        commentsCount: 12,
        dueDate: "2024-11-20",
        avatarUrl:
          "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
        title: "Document API integration",
        priority: "Medium",
        status: "Complete",
      },
    ],
  },
  {
    id: "status-over-due",
    title: "Overdue",
    color: "bg-red-500",
    cardCount: 5,
    tasks: [
      {
        statusId: "status-over-due",
        id: "task-28",
        clientName: "Dana White",
        assigneeName: "Sam Green",
        taskDescription: "Implement SSL certificate for secure connections.",
        taskProgress: "0/5",
        commentsCount: 6,
        dueDate: "2024-10-25",
        avatarUrl:
          "https://img.daisyui.com/images/stock/photo-1534528441775-53994a69daeb.webp",
        title: "Setup SSL certificate",
        priority: "High",
        status: "Overdue",
      },
      {
        statusId: "status-over-due",
        id: "task-29",
        clientName: "Lucy Gray",
        assigneeName: "John Doe",
        taskDescription: "Finalize project plan and milestones.",
        taskProgress: "2/5",
        commentsCount: 8,
        dueDate: "2024-10-30",
        avatarUrl:
          "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
        title: "Finalize project milestones",
        priority: "Medium",
        status: "Overdue",
      },
      {
        statusId: "status-over-due",
        id: "task-30",
        clientName: "Bob Smith",
        assigneeName: "Oscar Blue",
        taskDescription: "Complete migration to new database.",
        taskProgress: "1/5",
        commentsCount: 7,
        dueDate: "2024-10-18",
        avatarUrl:
          "https://img.daisyui.com/images/stock/photo-1534528641775-53994a69daeb.webp",
        title: "Migrate to new database",
        priority: "High",
        status: "Overdue",
      },
      {
        statusId: "status-over-due",
        id: "task-31",
        clientName: "Alice Johnson",
        assigneeName: "Evan Taylor",
        taskDescription: "Fix broken links and page routing.",
        taskProgress: "3/5",
        commentsCount: 5,
        dueDate: "2024-10-20",
        avatarUrl:
          "https://img.daisyui.com/images/stock/photo-1534528541775-53994a69daeb.webp",
        title: "Fix broken links",
        priority: "Low",
        status: "Overdue",
      },
      {
        statusId: "status-over-due",
        id: "task-32",
        clientName: "Charlie Brown",
        assigneeName: "Sam Green",
        taskDescription: "Implement pagination for product listings.",
        taskProgress: "2/5",
        commentsCount: 4,
        dueDate: "2024-10-15",
        avatarUrl:
          "https://img.daisyui.com/images/stock/photo-1534528341775-53994a69daeb.webp",
        title: "Implement pagination",
        priority: "Medium",
        status: "Overdue",
      },
    ],
  },
];
