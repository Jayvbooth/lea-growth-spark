
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Filter } from 'lucide-react';

interface FilterOption {
  label: string;
  value: string;
}

interface FilterBarProps {
  industries: FilterOption[];
  services: FilterOption[];
  metrics: FilterOption[];
  onFilterChange: (filters: {
    industry?: string;
    service?: string;
    metric?: string;
    search?: string;
  }) => void;
}

const FilterBar: React.FC<FilterBarProps> = ({
  industries,
  services,
  metrics,
  onFilterChange,
}) => {
  const [selectedIndustry, setSelectedIndustry] = useState<string>('');
  const [selectedService, setSelectedService] = useState<string>('');
  const [selectedMetric, setSelectedMetric] = useState<string>('');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [filtersVisible, setFiltersVisible] = useState(true);

  const handleIndustryChange = (value: string) => {
    setSelectedIndustry(value === selectedIndustry ? '' : value);
    onFilterChange({
      industry: value === selectedIndustry ? undefined : value,
      service: selectedService,
      metric: selectedMetric,
      search: searchQuery,
    });
  };

  const handleServiceChange = (value: string) => {
    setSelectedService(value === selectedService ? '' : value);
    onFilterChange({
      industry: selectedIndustry,
      service: value === selectedService ? undefined : value,
      metric: selectedMetric,
      search: searchQuery,
    });
  };

  const handleMetricChange = (value: string) => {
    setSelectedMetric(value === selectedMetric ? '' : value);
    onFilterChange({
      industry: selectedIndustry,
      service: selectedService,
      metric: value === selectedMetric ? undefined : value,
      search: searchQuery,
    });
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    onFilterChange({
      industry: selectedIndustry,
      service: selectedService,
      metric: selectedMetric,
      search: e.target.value,
    });
  };

  const toggleFilters = () => {
    setFiltersVisible(!filtersVisible);
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-monochrome-100 p-4 mb-8">
      <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between mb-4">
        <div className="relative w-full md:w-64">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-monochrome-400" />
          <Input
            type="text"
            placeholder="Search case studies..."
            className="pl-9"
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </div>
        
        <Button 
          variant="outline" 
          size="sm"
          onClick={toggleFilters}
          className="md:hidden w-full flex justify-between"
        >
          <span>{filtersVisible ? 'Hide Filters' : 'Show Filters'}</span>
          <Filter className="h-4 w-4" />
        </Button>
      </div>
      
      <div className={`${filtersVisible ? 'block' : 'hidden'} md:block space-y-4 md:space-y-0`}>
        <div className="mb-2">
          <p className="text-sm font-medium text-monochrome-700 mb-2">Industry</p>
          <div className="flex flex-wrap gap-2">
            {industries.map((industry) => (
              <Button
                key={industry.value}
                variant={selectedIndustry === industry.value ? "default" : "outline"}
                size="sm"
                onClick={() => handleIndustryChange(industry.value)}
                className="text-xs h-7"
              >
                {industry.label}
              </Button>
            ))}
          </div>
        </div>
        
        <div className="mb-2">
          <p className="text-sm font-medium text-monochrome-700 mb-2">Service</p>
          <div className="flex flex-wrap gap-2">
            {services.map((service) => (
              <Button
                key={service.value}
                variant={selectedService === service.value ? "default" : "outline"}
                size="sm"
                onClick={() => handleServiceChange(service.value)}
                className="text-xs h-7"
              >
                {service.label}
              </Button>
            ))}
          </div>
        </div>
        
        <div>
          <p className="text-sm font-medium text-monochrome-700 mb-2">Results</p>
          <div className="flex flex-wrap gap-2">
            {metrics.map((metric) => (
              <Button
                key={metric.value}
                variant={selectedMetric === metric.value ? "default" : "outline"}
                size="sm"
                onClick={() => handleMetricChange(metric.value)}
                className="text-xs h-7"
              >
                {metric.label}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
