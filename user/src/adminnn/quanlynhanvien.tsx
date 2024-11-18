import React, { useState, useEffect } from 'react';
import "../css/admin.css";
const QuanLyNhanVien: React.FC = () => {
    const [employees, setEmployees] = useState<Employee[]>(() => {
        // Retrieve data from localStorage if available
        const savedEmployees = localStorage.getItem('employees');
        return savedEmployees ? JSON.parse(savedEmployees) : [];
    });

    useEffect(() => {
        // Save data to localStorage whenever 'employees' state changes
        localStorage.setItem('employees', JSON.stringify(employees));
    }, [employees]);

    const addEmployee = (newEmployee: Employee) => {
        setEmployees((prevEmployees) => [...prevEmployees, newEmployee]);
    };

    return (
        <div>
            <h1>Quản Lý Nhân Viên</h1>
            <button onClick={() => addEmployee({ id: 1, name: 'John Doe', role: 'Developer' })}>
                Thêm Nhân Viên
            </button>
            <ul>
                {employees.map((employee) => (
                    <li key={employee.id}>
                        {employee.name} - {employee.role}
                    </li>
                ))}
            </ul>
        </div>
    );
};

interface Employee {
    id: number;
    name: string;
    role: string;
}

export default QuanLyNhanVien;
    