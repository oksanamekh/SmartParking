import {Component, OnInit} from '@angular/core';
import {StatisticsService} from "../statistics.service";
import {Parking} from "../../model/view/parking";
import {MatSnackBar} from "@angular/material";
import {PagerService} from "../../_services/pager.service";

@Component({
    selector: 'app-parking-statistic',
    templateUrl: './parking-statistic.component.html',
    styleUrls: ['./parking-statistic.component.css']
})
export class ParkingStatisticComponent implements OnInit {

    parkings: Parking[] = [];
    parkingsStreets: string[];
    parkingsCities: string[];
    selectedCity: string = 'Lviv';
    selectedStreet: string = '';
    selectedNumberOfDays: number = 7;
    days = [7, 14, 30, 365];

    pager: any = {};
    pagedParkingItems: Parking[];
    allParkings: number;

    constructor(private statisticService: StatisticsService,
                private snackBar: MatSnackBar,
                private pagerService: PagerService) {
    }

    ngOnInit() {
        this.findAllParkingsCities();
        this.findBestParkingsInTheCity();
    }

    setPage(page: number) {
        if (page < 1 || page > this.pager.totalPages) {
            return;
        }

        if (this.parkings.length > 0) {
            // get pager object from service
            this.pager = this.pagerService.getPager(this.parkings.length, page);

            // get current page of items
            this.pagedParkingItems = this.parkings.slice(this.pager.startIndex, this.pager.endIndex + 1);
        }
        else {
            this.pagedParkingItems = this.parkings;
        }
        this.allParkings = this.parkings.length;
    }

    findBestParkings() {
        if (this.selectedStreet != '') {

            this.statisticService.getBestParkingsByCityStreetDate(this.selectedCity, this.selectedStreet, this.selectedNumberOfDays)
                .subscribe(parkings => {
                    this.parkings = parkings;
                    this.setPage(1);
                })
        } else {
            this.findBestParkingsInTheCity();
        }
    }

    findBestParkingsInTheCity() {
        this.statisticService.getBestParkingsInTheCityByDate(this.selectedCity, this.selectedNumberOfDays)
            .subscribe(parkings => {
                this.parkings = parkings;
                this.setPage(1);
            });
    }

    findParkingsStreetsFromInput(input: string) {
        this.statisticService.getParkingsStreetsByAnyMatching(this.selectedCity, input)
            .subscribe(parkingsStreets => {
                this.parkingsStreets = parkingsStreets;
            });
        if (this.parkingsStreets.length < 1) {
            this.snackBar.open('There is no parkings with such street', null, {
                duration: 4000
            });
        }
    }

    findAllParkingsCities() {
        this.statisticService.getAllParkingsCities()
            .subscribe(parkingsCities => {
                this.parkingsCities = parkingsCities;
            });
    }

    clearStreetAndFindTheBestParkingsInTheCity() {
        this.selectedStreet = '';
        this.findBestParkingsInTheCity();
    }

    selectStreet(street: string) {
        this.selectedStreet = street;
    }

    findBestParkingsByLocation(latitude: number, longitude: number, radius: number, days: number) {
        this.statisticService.getBestParkingsByLocation(latitude, longitude, radius, days)
            .subscribe(parkings => {
                this.parkings = parkings;
                this.setPage(1);
            });
    }


}
