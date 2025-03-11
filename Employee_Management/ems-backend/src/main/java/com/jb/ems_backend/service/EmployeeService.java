package com.jb.ems_backend.service;

import java.util.List;

import com.jb.ems_backend.dto.EmployeeDto;

public interface EmployeeService {
	EmployeeDto createEmployee(EmployeeDto employeeDto);
	
	EmployeeDto getEmployeeById(Long employeeId);

	List<EmployeeDto> getAllEMployee();
	
	EmployeeDto updateEmployee(Long employeeId, EmployeeDto updateEmployee);
	
	void deleteEmployee(Long employeeId);
}
