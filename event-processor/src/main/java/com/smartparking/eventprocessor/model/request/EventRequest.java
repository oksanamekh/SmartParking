package com.smartparking.eventprocessor.model.request;

import com.smartparking.eventprocessor.model.view.EventType;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class EventRequest {
    private Long spotId;
    private String parkingToken;
    private EventType eventType;
    private Long timestamp;
}