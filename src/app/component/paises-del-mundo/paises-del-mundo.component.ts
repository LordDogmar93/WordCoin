import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CountryService } from '../../service/country.service';

@Component({
  selector: 'app-paises-del-mundo',
  standalone: true,
  templateUrl: './paises-del-mundo.component.html',
  imports: [
    CommonModule,
    FormsModule
  ],
  styleUrls: ['./paises-del-mundo.component.css']
})
export class PaisesDelMundoComponent implements OnInit {
  countries: any[] = [];
  filteredCountries: any[] = [];
  searchQuery: string = '';
  selectedContinent: string = '';

  continents: string[] = ['Africa', 'Asia', 'Europe', 'North America', 'Oceania', 'South America'];

  constructor(private countryService: CountryService) {}

  ngOnInit(): void {
    this.countryService.getCountries().subscribe(data => {
      this.countries = data;
      this.filteredCountries = data;
    });
  }

  filterCountries(): void {
    this.filteredCountries = this.countries.filter(country => {
      const matchesSearchQuery = country.name.common.toLowerCase().includes(this.searchQuery.toLowerCase());
      const matchesContinent = this.selectedContinent ? country.continents.includes(this.selectedContinent) : true;
      return matchesSearchQuery && matchesContinent;
    });
  }
}