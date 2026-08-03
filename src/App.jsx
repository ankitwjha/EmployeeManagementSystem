
import React, { useContext, useEffect, useState } from 'react';
import Login from './components/Auth/Login';
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard';
import AdminDashboard from './components/Dashboard/AdminDashboard';
import { getLocalStorage, setLocalStorage } from './utils/localStorage';
import { AuthContext } from './context/AuthProvider';

const App = () => {
  // useEffect(() => {
  //   // setLocalStorage();
  //   getLocalStorage();
  // }, []);

  const[user,setUser]=useState(null)
  const[loggedInUserData,setloggedInUserData]=useState(null)
  const [userData,setUserData]=useContext(AuthContext)

  useEffect(()=>{
    const loggedInUser=localStorage.getItem("loggedInUser")
    if(loggedInUser){
      const parsedUser=JSON.parse(loggedInUser)
      setUser(parsedUser.role)
      if(parsedUser.role === 'employee' && userData){
        const currentEmployee = userData.find(emp => emp.email === parsedUser.email)
        if(currentEmployee){
          setloggedInUserData(currentEmployee)
        }
      }
    }
  },[userData])

  const updateTaskStatus = (employeeId, taskTitle, newStatus) => {
    if (!userData) return;

    const updatedUserData = userData.map(emp => {
      if (emp.id === employeeId) {
        const updatedTasks = emp.tasks.map(task => {
          if (task.taskTitle === taskTitle) {
            // Decrement old count
            if (task.active) emp.taskCounts.active = Math.max(0, emp.taskCounts.active - 1);
            if (task.newTask) emp.taskCounts.newTask = Math.max(0, emp.taskCounts.newTask - 1);
            if (task.completed) emp.taskCounts.completed = Math.max(0, emp.taskCounts.completed - 1);
            if (task.failed) emp.taskCounts.failed = Math.max(0, emp.taskCounts.failed - 1);

            // Configure new flags
            const updatedTask = {
              ...task,
              active: false,
              newTask: false,
              completed: false,
              failed: false
            };

            if (newStatus === 'active') {
              updatedTask.active = true;
              emp.taskCounts.active += 1;
            } else if (newStatus === 'completed') {
              updatedTask.completed = true;
              emp.taskCounts.completed += 1;
            } else if (newStatus === 'failed') {
              updatedTask.failed = true;
              emp.taskCounts.failed += 1;
            }

            return updatedTask;
          }
          return task;
        });

        const updatedEmp = {
          ...emp,
          tasks: updatedTasks
        };

        if (loggedInUserData && loggedInUserData.id === employeeId) {
          setloggedInUserData(updatedEmp);
        }

        return updatedEmp;
      }
      return emp;
    });

    setUserData(updatedUserData);
    localStorage.setItem('employees', JSON.stringify(updatedUserData));
  };

  const handleLogin=(email,password)=>{
    if(email=='admin@me.com'&&password =='123'){
      setUser('admin')
      localStorage.setItem('loggedInUser',JSON.stringify({role:'admin'}))
    }else if(userData) {
      const employee= userData.find((e)=>email==e.email && e.password ==password)
      if(employee){
        setUser('employee')
        setloggedInUserData(employee)
        localStorage.setItem('loggedInUser',JSON.stringify({role:'employee', email: email}))
      }
    }
    else{
      alert("Invalid credentials")
    }
  }

  const data=useContext(AuthContext)
  console.log(data)

  return (
    <>
      {!user?<Login handleLogin={handleLogin}/>:''}
      {user=='admin'?<AdminDashboard changeUser={setUser}/>:(user=='employee'?<EmployeeDashboard changeUser={setUser} data={loggedInUserData} updateTaskStatus={updateTaskStatus}/>:null)}
    </>
  );
};

export default App;
