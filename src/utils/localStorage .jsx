const employees = [
  {
    id: 1,
    firstName: "Ali",
    email: "employee1@example.com",
    password: "123",
    taskCount: { active: 1, newTask: 1, completed: 1, failed: 0 },
    tasks: [
      {
        taskTitle: "Prepare Monthly Report",
        date: "2024-11-20",
        description: "Compile and analyze the monthly financial report.",
        category: "Finance",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Team Meeting Preparation",
        date: "2024-11-22",
        description: "Prepare slides and agenda for the upcoming team meeting.",
        category: "Management",
        active: false,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Inventory Check",
        date: "2024-11-25",
        description: "Conduct a complete inventory check of the storage units.",
        category: "Operations",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
    ],
  },
  {
    id: 2,
    firstName: "Fatima",
    email: "employee2@example.com",
    password: "123",
    taskCount: { active: 2, newTask: 1, completed: 1, failed: 0 },
    tasks: [
      {
        taskTitle: "Customer Feedback Review",
        date: "2024-11-19",
        description: "Analyze customer feedback for the last quarter.",
        category: "Customer Service",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Update Website Content",
        date: "2024-11-28",
        description: "Revise and update the About Us section of the website.",
        category: "Marketing",
        active: false,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Fix Bug #10234",
        date: "2024-11-22",
        description: "Resolve the issue in the order processing script.",
        category: "Development",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Onboarding New Hire",
        date: "2024-11-23",
        description:
          "Complete onboarding process for the new software developer.",
        category: "HR",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
    ],
  },
  {
    id: 3,
    firstName: "Hassan",
    email: "employee3@example.com",
    password: "123",
    taskCount: { active: 1, newTask: 1, completed: 1, failed: 0 },
    tasks: [
      {
        taskTitle: "Marketing Campaign Plan",
        date: "2024-11-18",
        description:
          "Develop a comprehensive plan for the holiday season marketing campaign.",
        category: "Marketing",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        taskTitle: "Conduct Training Session",
        date: "2024-11-20",
        description: "Deliver a training session on new software features.",
        category: "Training",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Security Audit",
        date: "2024-11-26",
        description: "Perform a thorough security audit of internal systems.",
        category: "IT",
        active: false,
        newTask: true,
        completed: false,
        failed: false,
      },
    ],
  },
  {
    id: 4,
    firstName: "Zainab",
    email: "employee4@example.com",
    password: "123",
    taskCount: { active: 2, newTask: 0, completed: 1, failed: 1 },
    tasks: [
      {
        taskTitle: "Organize Office Supplies",
        date: "2024-11-19",
        description:
          "Reorganize and categorize all office supplies in storage.",
        category: "Administration",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
      },
      {
        taskTitle: "Draft Policy Update",
        date: "2024-11-22",
        description:
          "Update the company policy document to reflect recent changes.",
        category: "HR",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Run System Backup",
        date: "2024-11-21",
        description: "Perform a complete backup of all internal systems.",
        category: "IT",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Prepare Sales Report",
        date: "2024-11-23",
        description:
          "Generate a detailed report of sales data for the last quarter.",
        category: "Sales",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
    ],
  },
  {
    id: 5,
    firstName: "Ayesha",
    email: "employee5@example.com",
    password: "123",
    taskCount: { active: 2, newTask: 1, completed: 1, failed: 0 },
    tasks: [
      {
        taskTitle: "Fix Printer Issue",
        date: "2024-11-20",
        description:
          "Resolve the printing error affecting the shared office printer.",
        category: "Maintenance",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Host Workshop",
        date: "2024-11-25",
        description: "Organize and lead a workshop on time management.",
        category: "Training",
        active: false,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Prepare Holiday Schedule",
        date: "2024-11-22",
        description: "Plan the staff holiday schedule for the upcoming season.",
        category: "HR",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Inspect Fire Safety",
        date: "2024-11-28",
        description: "Inspect and report on fire safety equipment status.",
        category: "Compliance",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
    ],
  },
];

const admin = [
  {
    id: 101,
    email: "Admin@gmail.com",
    password: "123",
  },
];

export const setlocalStorage = () => {
localStorage.setItem("employees", JSON.stringify(employees));
localStorage.setItem('admin' , JSON.stringify(admin))
};

export const getlocalStorage = () => {
  let employees = JSON.parse(localStorage.getItem('employees'))
  let admin = JSON.parse(localStorage.getItem('admin'))
  return{ admin , employees}
}; 