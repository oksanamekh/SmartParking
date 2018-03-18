package com.smartparking.model.response;

import com.smartparking.entity.Client;
import com.smartparking.entity.Favorite;

import java.util.List;
import java.util.stream.Collectors;

public class ClientDetailResponse {
    private Long id;
    private String firstName;
    private String lastName;
    private String email;
    private String provider;
    private List<Long> favoritesId;

    public static ClientDetailResponse of(Client client) {
        ClientDetailResponse response = new ClientDetailResponse();
        response.setId(client.getId());
        response.setFirstName(client.getFirstName());
        response.setLastName(client.getLastName());
        response.setEmail(client.getEmail());
        response.setProvider(client.getProvider().getName());
        response.setFavoritesId(client.getFavorites()
                .stream().map(Favorite::getId)
                .collect(Collectors.toList()));
        return response;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getProvider() {
        return provider;
    }

    public void setProvider(String provider) {
        this.provider = provider;
    }

    public List<Long> getFavoritesId() {
        return favoritesId;
    }

    public void setFavoritesId(List<Long> favoritesId) {
        this.favoritesId = favoritesId;
    }
}