import React, { useEffect, useState } from "react";
import { deleteEmployee, listEmployee } from "../services/EmployeeService";
import { useNavigate } from "react-router-dom";

const ListEmployee = () => {
  const [employees, setEmployees] = useState([]);

  const navigator = useNavigate();

  useEffect(() => {
    getAllEmployees();
  }, []);

  function getAllEmployees(){
    listEmployee()
      .then((response) => {
        setEmployees(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  function addNewEmployee() {
    navigator("/add-employee");
  }

  function updateEmployee(id){
    navigator(`/update-employee/${id}`)
  }

  function showEmployee(id){
    navigator(`/show-employee/${id}`)
  }

  function removeEmployee(id){
    console.log(id);

    deleteEmployee(id).then(()=>{
      setEmployees(employees.filter(employee => employee.id !== id));

    }).catch(error=>{
      console.error(error);
    })
  }

  return (
    <div className="container">
      <h2 className="text-center">List of Employees</h2>

      <button
        type="button"
        className="btn btn-primary"
        onClick={addNewEmployee}
        style={{marginBottom:"10px"}}
      >
        Add Employee
      </button>

      <table className="table table-striped table-bordered text-center">
        <thead>
          <tr>
            <th>Employee Id</th>
            <th>Employee First Name</th>
            <th>Employee Last Name</th>
            <th>Employee Email Id</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.email}</td>
              <td className="d-flex gap-4 justify-content-center">
                <button type="button" className="btn btn-info" onClick={()=>updateEmployee(employee.id)}>
                  Update
                </button>

                <button type="button" className="btn btn-danger" onClick={()=>removeEmployee(employee.id)}>
                  Delete
                </button>

                <button type="button" className="btn btn-secondary" onClick={()=>showEmployee(employee.id)}>
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListEmployee;
