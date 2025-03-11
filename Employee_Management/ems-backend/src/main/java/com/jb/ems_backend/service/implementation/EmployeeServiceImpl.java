package com.jb.ems_backend.service.implementation;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.jb.ems_backend.dto.EmployeeDto;
import com.jb.ems_backend.entity.Employee;
import com.jb.ems_backend.exception.ResourceNotFoundException;
import com.jb.ems_backend.mapper.EmployeeMapper;
import com.jb.ems_backend.repository.EmployeeRepository;
import com.jb.ems_backend.service.EmployeeService;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class EmployeeServiceImpl implements EmployeeService{
	
	private EmployeeRepository employeeRepository; 
	
	@Override
	public EmployeeDto createEmployee(EmployeeDto employeeDto) {
		
		Employee employee = EmployeeMapper.mapToEmployee(employeeDto);
		Employee saveEmployee = employeeRepository.save(employee);
		
		
		return EmployeeMapper.mapToEmployeeDto(saveEmployee);
	}

	@Override
	public EmployeeDto getEmployeeById(Long employeeId) {
		Employee employee = employeeRepository.findById(employeeId)
			.orElseThrow(()-> new ResourceNotFoundException("Employee is not exists with given id : "+employeeId));
		return EmployeeMapper.mapToEmployeeDto(employee);
	}

	@Override
	public List<EmployeeDto> getAllEMployee() {
		 List<Employee> employees = employeeRepository.findAll();
		return employees.stream().map((employee)->EmployeeMapper.mapToEmployeeDto(employee))
				.collect(Collectors.toList());
			
	}

	@Override
	public EmployeeDto updateEmployee(Long employeeId, EmployeeDto updatedEmployee) {
		Employee employee =  employeeRepository.findById(employeeId).orElseThrow(
				()-> new ResourceNotFoundException("Employee is not exists with given id : "+employeeId));
		
		employee.setFirstName(updatedEmployee.getFirstName());
		employee.setLastName(updatedEmployee.getLastName());
		employee.setEmail(updatedEmployee.getEmail());
		
		Employee updatedEmployeeObj = employeeRepository.save(employee);
		return EmployeeMapper.mapToEmployeeDto(updatedEmployeeObj);
	}

	@Override
	public void deleteEmployee(Long employeeId) {
		Employee employee =  employeeRepository.findById(employeeId).orElseThrow(
				()-> new ResourceNotFoundException("Employee is not exists with given id : "+employeeId));
		
		
		employeeRepository.deleteById(employeeId);
	}
	
}
