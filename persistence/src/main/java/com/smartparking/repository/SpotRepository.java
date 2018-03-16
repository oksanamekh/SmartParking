package com.smartparking.repository;

import com.smartparking.entity.Spot;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface SpotRepository extends JpaRepository<Spot, Long> {

//    @Query("SELECT s FROM Parking p JOIN p.spots s JOIN s.events e WHERE p.id=?1 AND e.departureTime IS NOT NULL")
//    List<Spot> findAllAvailableSpotsByParkingId(Long id);
//
//    @Query("SELECT COUNT(s) FROM Parking p JOIN p.spots s JOIN s.events e WHERE p.id=?1 AND e.departureTime IS NOT NULL")
//    Long countAvailableSpotsByParkingId(Long id);
//
//    @Query("SELECT COUNT(s) FROM Parking p JOIN p.spots s WHERE p.id=?1")
//    Long countAllSpotsByParkingId(Long id);

    List<Spot> findAllByParkingId(Long id);

}