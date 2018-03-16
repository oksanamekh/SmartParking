package com.smartparking.repository.impl;

import com.smartparking.entity.Event;
import com.smartparking.repository.AbstractRepository;
import com.smartparking.repository.EventRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.Query;

@Repository
public class EventRepositoryImpl extends AbstractRepository<Event, Long> implements EventRepository {

    public EventRepositoryImpl(@Autowired EntityManager entityManager) {
        super(Event.class, entityManager);
    }

    @Override
    public Event findBySpotId(Long spotId) {
        Query query = getEntityManager().createQuery("SELECT event " +
                "FROM Event event " +
                "WHERE event.departureTime IS NULL AND " +
                "event.spot.id = :spotId");
        query.setParameter("spotId", spotId);
        return (Event) query.getSingleResult();
    }
}