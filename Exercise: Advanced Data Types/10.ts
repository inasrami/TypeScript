
type TaskStatus = 'Logged' | 'Started' | 'InProgress' | 'Done';


interface User {
    username: string;
    signupDate: Date;
}


interface Task {
    status: TaskStatus;
    title: string;
    daysRequired: number;
    assignedTo?: User; 
    changeStatus(newStatus: TaskStatus): void;
}