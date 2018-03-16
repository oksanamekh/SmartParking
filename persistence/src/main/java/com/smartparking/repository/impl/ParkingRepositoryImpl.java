package com.smartparking.repository.impl;

import com.smartparking.entity.Parking;
import com.smartparking.repository.AbstractRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;

@Repository
public class ParkingRepositoryImpl extends AbstractRepository<Parking, Long> {

    public ParkingRepositoryImpl(@Autowired EntityManager entityManager) {
        super(Parking.class, entityManager);
    }
}