package com.smartparking.service;

import com.smartparking.entity.Parking;
import com.smartparking.model.response.ParkingResponse;
import com.smartparking.model.response.ParkingWithSpotsResponse;
import com.smartparking.repository.ParkingRepository;

import java.util.List;
import java.util.Optional;

public interface ParkingService extends Service<Parking, Long, ParkingRepository> {

    Optional<ParkingResponse> findByIdResponse(Long id);

    List<ParkingResponse> findAllByProviderIdResponse(Long id);

    List<ParkingResponse> findAllNearbyResponse(Double latitude, Double longitude, Double radius);

    List<ParkingWithSpotsResponse> findAllWithSpotsResponse();

    Boolean isFavorite(String email, Long parkingId);

    String findFavoriteNameByEmailAndParkingId(String email, Long parkingId);

    List<Parking> findParkingsByCity(String input);

    List<String> findParkingStreetByAnyMatch(String input);

    List<String> findParkingCitiesByAnyMatch(String input);
}
