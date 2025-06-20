package com.portfolio_backend.portfolio.controller;

import com.portfolio_backend.portfolio.dto.ContactForm;
import com.portfolio_backend.portfolio.model.ContactSubmission;
import com.portfolio_backend.portfolio.repository.ContactRepository;
import jakarta.validation.Valid;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/contact")
@CrossOrigin(origins = "http://localhost:3000")

public class ContactController {

    @Autowired
    private ContactRepository contactRepo;

    @PostMapping
    public ResponseEntity<String> submit(@RequestBody @Valid ContactForm form) {
        try {
            ContactSubmission submission = new ContactSubmission();
            BeanUtils.copyProperties(form, submission);
            contactRepo.save(submission);
            return ResponseEntity.ok("Message sent successfully!");
        } catch (DataIntegrityViolationException ex) {
            return ResponseEntity
                    .status(HttpStatus.CONFLICT)
                    .body("Email already exists");
        }
    }

    @GetMapping
    public ResponseEntity<List<ContactSubmission>> getAll() {
        return ResponseEntity.ok(contactRepo.findAll());
    }
}


