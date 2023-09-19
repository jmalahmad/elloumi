package tn.dksoft.convention.controller;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import tn.dksoft.convention.entity.Convention;
import tn.dksoft.convention.service.ConventionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin(origins = "http://192.168.0.186", maxAge = 3600)
@RestController
public class ConventionController {

    @Autowired
    private ConventionService conventionService;

    @PostMapping("/convention")
    @PreAuthorize("hasAuthority('SCOPE_ADMIN')")
    public Convention saveConvention(@RequestBody Convention convention) {

        return conventionService.saveConvention(convention);
    }
    @GetMapping("/convention/{id}")
    @PreAuthorize("hasAuthority('SCOPE_USER')")
    public Convention getConventionById(@PathVariable("id") Long id) {
        return conventionService.getConventionById(id);
    }

    @GetMapping("/convention")
    @PreAuthorize("hasAuthority('SCOPE_USER')")
    public List<Convention> getAllConventions() {
        return conventionService.fetchAllConventions();
    }


    @PutMapping("/convention/{id}")
    @PreAuthorize("hasAuthority('SCOPE_ADMIN')")
    public Convention updateConvention(@PathVariable("id") Long id, @RequestBody Convention convention) {
        return conventionService.updateConventionById(id, convention);
    }

    @DeleteMapping("/convention/{id}")
    @PreAuthorize("hasAuthority('SCOPE_ADMIN')")
    public void deleteConvention(@PathVariable("id") Long id) {
        conventionService.deleteConventionById(id);
    }
}
