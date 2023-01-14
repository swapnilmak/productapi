package com.tsystems.model;

import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;

@Data
@Entity
public class Details {
    @Id
    @Column(name = "detailsId", nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @JoinColumn()
    private Long detailsId;

    private String specification;
    private String quantity;
    private double price;

}
