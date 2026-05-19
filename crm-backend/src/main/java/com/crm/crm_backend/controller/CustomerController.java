package com.crm.crm_backend.controller;

import com.crm.crm_backend.model.Customer;
import com.crm.crm_backend.repository.CustomerRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/customers")
@CrossOrigin("*")
public class CustomerController {

  @Autowired
  private CustomerRepository customerRepository;

  // Add Customer
  @PostMapping
  public Customer addCustomer(
      @RequestBody Customer customer) {

    return customerRepository.save(customer);
  }

  // Get All Customers
  @GetMapping
  public List<Customer> getAllCustomers() {

    return customerRepository.findAll();
  }

  // Delete Customer
  @DeleteMapping("/{id}")
  public String deleteCustomer(
      @PathVariable Long id) {

    customerRepository.deleteById(id);

    return "Customer Deleted";
  }

  // Update Customer
  @PutMapping("/{id}")
  public Customer updateCustomer(
      @PathVariable Long id,
      @RequestBody Customer updatedCustomer) {

    Customer customer = customerRepository.findById(id)
        .orElseThrow();

    customer.setName(updatedCustomer.getName());
    customer.setEmail(updatedCustomer.getEmail());
    customer.setPhone(updatedCustomer.getPhone());
    customer.setCompany(updatedCustomer.getCompany());
    customer.setAddress(updatedCustomer.getAddress());
    customer.setNotes(updatedCustomer.getNotes());

    return customerRepository.save(customer);
  }
}
