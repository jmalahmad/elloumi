package tn.dksoft.convention.entity;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.util.Date;


@Entity
public class Convention {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    private String societe1;
    private String societe2;
    private Date date_creation;
    private Date date_effet;
    private Boolean etat_signature1;
    private Boolean etat_signature2;
    private String cadre;
    public Convention() {

    }

    public Convention(long id, String societe1, String societe2, Date date_creation, Date date_effet, Boolean etat_signature1,Boolean etat_signature2,String cadre) {
        this.id = id;
        this.societe1 = societe1;
        this.societe2 = societe2;
        this.date_creation = date_creation;
        this.date_effet = date_effet;
        this.etat_signature1 = etat_signature1;
        this.etat_signature2 = etat_signature2;
        this.cadre = cadre;
    }
    public long getId() {
        return id;
    }

    public String getCadre() {
        return cadre;
    }

    public void setCadre(String cadre) {
        this.cadre = cadre;
    }

    public String getSociete1() {
        return societe1;
    }

    public String getSociete2() {
        return societe2;
    }

    public Date getDate_creation() {
        return date_creation;
    }

    public Date getDate_effet() {
        return date_effet;
    }



    public void setId(long id) {
        this.id = id;
    }

    public void setSociete1(String societe1) {
        this.societe1 = societe1;
    }

    public void setSociete2(String societe2) {
        this.societe2 = societe2;
    }

    public void setDate_creation(Date date_creation) {
        this.date_creation = date_creation;
    }

    public void setDate_effet(Date date_effet) {
        this.date_effet = date_effet;
    }

    public Boolean getEtat_signature1() {
        return etat_signature1;
    }

    public void setEtat_signature1(Boolean etat_signature1) {
        this.etat_signature1 = etat_signature1;
    }

    public void setEtat_signature2(Boolean etat_signature2) {
        this.etat_signature2 = etat_signature2;
    }

    public Boolean getEtat_signature2() {
        return etat_signature2;
    }
}
