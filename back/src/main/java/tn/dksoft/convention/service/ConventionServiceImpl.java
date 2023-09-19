package tn.dksoft.convention.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import tn.dksoft.convention.entity.Convention;
import tn.dksoft.convention.repository.ConventionRepository;

import java.util.List;
import java.util.Optional;

@Service
public class ConventionServiceImpl implements ConventionService{
    @Autowired
    private ConventionRepository conventionRepository;
    @Override
    public Convention saveConvention(Convention convention){
        return conventionRepository.save(convention);
    }
    @Override
    public List<Convention> fetchAllConventions() {
        List<Convention> allConventions = conventionRepository.findAll();
        return allConventions;
    }
    @Override
    public Convention getConventionById(long id){
        Optional<Convention> convention = conventionRepository.findById(id);
        if (convention.isPresent()) {
            return convention.get();
        }
        return null;
    }




    @Override
    public Convention updateConventionById(Long id, Convention convention) {
        Optional<Convention> conventionOptional = conventionRepository.findById(id);

        if (conventionOptional.isPresent()) {
            Convention originalConvention = conventionOptional.get();

            if (convention.getSociete1() != null && !convention.getSociete1().isEmpty()) {
                originalConvention.setSociete1(convention.getSociete1());
            }
            if (convention.getSociete2() != null && !convention.getSociete2().isEmpty()) {
                originalConvention.setSociete2(convention.getSociete2());
            }
            if (convention.getDate_creation() != null) {
                originalConvention.setDate_creation(convention.getDate_creation());
            }
            if (convention.getDate_effet() != null) {
                originalConvention.setDate_effet(convention.getDate_effet());
            }
            if (convention.getEtat_signature1() != null) {
                originalConvention.setEtat_signature1(convention.getEtat_signature1());
            }
            if (convention.getEtat_signature2() != null) {
                originalConvention.setEtat_signature2(convention.getEtat_signature2());
            }
            if (convention.getCadre() != null && !convention.getCadre().isEmpty()) {
                originalConvention.setCadre(convention.getCadre());
            }

            return conventionRepository.save(originalConvention);
        } else {
            // Handle the case when the convention with the provided id doesn't exist
            throw new IllegalArgumentException("Convention with id " + id + " does not exist.");
        }
    }


    @Override
    public void deleteConventionById(Long id) {
        conventionRepository.deleteById(id);}



}
