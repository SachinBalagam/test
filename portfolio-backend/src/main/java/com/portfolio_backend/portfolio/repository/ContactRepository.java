package com.portfolio_backend.portfolio.repository;

import com.portfolio_backend.portfolio.model.ContactSubmission;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ContactRepository extends JpaRepository<ContactSubmission, Long> {
}
