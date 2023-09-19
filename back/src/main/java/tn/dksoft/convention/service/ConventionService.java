package tn.dksoft.convention.service;

import org.springframework.http.ResponseEntity;
import tn.dksoft.convention.entity.Convention;
import java.util.List;

public interface  ConventionService {

    Convention saveConvention(Convention convention);

    List<Convention> fetchAllConventions();


    Convention updateConventionById(Long id, Convention convention);

    void deleteConventionById(Long id);
    Convention getConventionById(long id);
}

