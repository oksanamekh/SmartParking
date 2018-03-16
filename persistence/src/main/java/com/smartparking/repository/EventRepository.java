package com.smartparking.repository;

import com.smartparking.entity.Event;

public interface EventRepository extends Repository<Event, Long> {
    Event findBySpotId(Long spotId);

}