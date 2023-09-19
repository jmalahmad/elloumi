package tn.dksoft.convention.repository;
import tn.dksoft.convention.entity.Convention;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
@Repository
public interface ConventionRepository extends JpaRepository<Convention,Long>{

}
