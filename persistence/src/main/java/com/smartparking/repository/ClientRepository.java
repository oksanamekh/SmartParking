package com.smartparking.repository;

import com.smartparking.entity.Client;
import com.smartparking.entity.Role;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

import java.util.Optional;

public interface ClientRepository extends JpaRepository<Client, Long> {
    Optional<Client> findClientByEmail(String email);

    @Query("SELECT c from Client c where c.firstName like %?1% or c.lastName like %?1%" +
            " or c.email like %?1% or c.role like %?1% or c.provider.name like %?1%")
    List<Client> findClientsByAnyMatch(String input);

    @Query("SELECT c from Client c")
    List<Client> findLimitNumberOfClients(Pageable pageable);

}