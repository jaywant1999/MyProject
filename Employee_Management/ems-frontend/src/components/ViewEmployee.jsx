import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getEmployee } from "../services/EmployeeService";

const ViewEmployee = () => {
  const { id } = useParams();
  const [employee, setEmployee] = useState(null);

  useEffect(() => {
    getEmployee(id)
      .then((response) => {
        setEmployee(response.data);
      })
      .catch((error) => {
        console.error("Error fetching employee:", error);
      });
  }, [id]);

  if (!employee) {
    return <h2 className="text-center mt-5">Loading employee details...</h2>;
  }

  return (
    <div>
      <div className="card col-md-6 offset-md-3 mt-4 border-secondary rounded-5">
        <div className="card-body text-center m-2 ">
          <h3 className="card-title mb-4 ">Employee Details</h3>
          <ul className="list-group list-group-flush text-start ">
            <li className="list-group-item"><strong>ID:</strong> {employee.id}</li>
            <li className="list-group-item"><strong>First Name:</strong> {employee.firstName}</li>
            <li className="list-group-item"><strong>Last Name:</strong> {employee.lastName}</li>
            <li className="list-group-item"><strong>Email:</strong> {employee.email}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ViewEmployee;
