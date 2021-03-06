package com.smartparking.service;

import com.smartparking.entity.Favorite;
import com.smartparking.entity.Parking;
import com.smartparking.model.response.ParkingDetailResponse;
import com.smartparking.repository.FavoriteRepository;

import java.util.List;

public interface FavoriteService extends Service<Favorite, Long, FavoriteRepository> {

    Long getCountByClientId(Long id);

    Favorite findFavoriteByClientEmailAndParkingId(String email, Long parkingId);

    List<ParkingDetailResponse> findFavoritesDetailByClientEmail(String clientEmail);

    List<Parking> findFavoritesDetailByClientId(Long clientId);
}
