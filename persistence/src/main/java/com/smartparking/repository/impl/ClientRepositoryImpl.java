package com.smartparking.repository.impl;

import com.smartparking.entity.Client;
import com.smartparking.repository.AbstractRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;

@Repository
public class ClientRepositoryImpl extends AbstractRepository<Client, Long> {

    public ClientRepositoryImpl(@Autowired EntityManager entityManager) {
        super(Client.class, entityManager);
    }
}