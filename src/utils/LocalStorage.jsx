
const employees = [
    {
        "id": 1,
        "name": "Aarav Mehta",
        "email": "employee1@example.com",
        "password": "123",
        "taskCount": {
            "active": 2,
            "newTask": 1,
            "completed": 1,
            "failed": 0
        },
        "tasks": [
            {
                "title": "Prepare Sales Report",
                "description": "Compile and submit the monthly sales report.",
                "date": "2025-10-12",
                "category": "Reporting",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "title": "Client Meeting",
                "description": "Attend the meeting with ABC Corp regarding Q4 targets.",
                "date": "2025-10-15",
                "category": "Meeting",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            },
            {
                "title": "Update CRM",
                "description": "Update client contact information in CRM system.",
                "date": "2025-10-10",
                "category": "Data Entry",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false
            }
        ]
    },
    {
        "id": 2,
        "name": "Neha Sharma",
        "email": "employee2@example.com",
        "password": "123",
        "taskCount": {
            "active": 2,
            "newTask": 1,
            "completed": 1,
            "failed": 1
        },
        "tasks": [
            {
                "title": "Website Bug Fix",
                "description": "Resolve login page UI issues.",
                "date": "2025-10-11",
                "category": "Development",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "title": "Team Presentation",
                "description": "Prepare a slide deck for sprint review.",
                "date": "2025-10-14",
                "category": "Presentation",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            },
            {
                "title": "API Testing",
                "description": "Test payment gateway API for errors.",
                "date": "2025-10-13",
                "category": "Testing",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false
            },
            {
                "title": "Security Audit",
                "description": "Run security checks for authentication module.",
                "date": "2025-10-20",
                "category": "Security",
                "active": false,
                "newTask": false,
                "completed": false,
                "failed": true
            }
        ]
    },
    {
        "id": 3,
        "name": "Rohit Verma",
        "email": "employee3@example.com",
        "password": "123",
        "taskCount": {
            "active": 2,
            "newTask": 1,
            "completed": 1,
            "failed": 0
        },
        "tasks": [
            {
                "title": "Data Backup",
                "description": "Backup all project files to secure server.",
                "date": "2025-10-09",
                "category": "Maintenance",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            },
            {
                "title": "Onboarding Training",
                "description": "Conduct training session for new interns.",
                "date": "2025-10-16",
                "category": "Training",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "title": "Code Review",
                "description": "Review pull requests from frontend team.",
                "date": "2025-10-13",
                "category": "Review",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false
            }
        ]
    },
    {
        "id": 4,
        "name": "Simran Kaur",
        "email": "employee4@example.com",
        "password": "123",
        "taskCount": {
            "active": 2,
            "newTask": 1,
            "completed": 1,
            "failed": 0
        },
        "tasks": [
            {
                "title": "Market Research",
                "description": "Collect competitor product analysis data.",
                "date": "2025-10-11",
                "category": "Research",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "title": "Ad Campaign",
                "description": "Launch social media campaign for Diwali.",
                "date": "2025-10-18",
                "category": "Marketing",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false
            },
            {
                "title": "Survey Feedback",
                "description": "Analyze customer satisfaction survey responses.",
                "date": "2025-10-19",
                "category": "Analysis",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            }
        ]
    },
    {
        "id": 5,
        "name": "Aditya Singh",
        "email": "employee5@example.com",
        "password": "123",
        "taskCount": {
            "active": 2,
            "newTask": 1,
            "completed": 1,
            "failed": 1
        },
        "tasks": [
            {
                "title": "Inventory Check",
                "description": "Verify stock levels in warehouse.",
                "date": "2025-10-12",
                "category": "Operations",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "title": "Vendor Payment",
                "description": "Clear pending invoices for vendor partners.",
                "date": "2025-10-17",
                "category": "Finance",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            },
            {
                "title": "Product Demo",
                "description": "Present demo of new feature to client.",
                "date": "2025-10-15",
                "category": "Client",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false
            },
            {
                "title": "System Upgrade",
                "description": "Upgrade software to the latest version.",
                "date": "2025-10-20",
                "category": "IT",
                "active": false,
                "newTask": false,
                "completed": false,
                "failed": true
            }
        ]
    }
]




const Admin = [

    {
        "id": 1,
        "email": "admin@example.com",
        "password": "123"
    }


]


export const setLocalStorage = () => {
    localStorage.setItem("employees", JSON.stringify(employees))
    localStorage.setItem("Admin", JSON.stringify(Admin))


}
export const getLocalStorage = () => {

    const employees = JSON.parse(localStorage.getItem("employees"))
    const Admin = JSON.parse(localStorage.getItem("Admin"))

    return { employees, Admin }


}

export const deleteEmployee = (employeeId) => {
    const { employees, Admin } = getLocalStorage()
    const updatedEmployees = employees.filter(emp => emp.id !== employeeId)
    localStorage.setItem("employees", JSON.stringify(updatedEmployees))
    return { employees: updatedEmployees, Admin }
}
