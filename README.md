# Adverse Event Explorer

![alt tag](https://user-images.githubusercontent.com/31038805/30923072-ee757b02-a378-11e7-91a5-dd2bb31f402c.gif)

## Overview
The AE Explorer is a JavaScript library that allows users to dynamically query adverse event (AE) data in real time. A typical AE Explorer looks like this: 



Users can click on any row in the table to create a listing like this: 



The AE Explorer is an open source project built using standard web technology and will run in any modern web browser. The displays created are all dynamically linked to coded adverse event data which allows the tool to work with data from any adverse event coding system, e.g. MedDRA. The charts are created using [D3](http://www.d3js.org "D3.js").

The AE Explorer contains all of the information available in standard listings, but we apply interactive elements common in website design to give users the ability to search the data. The default view is a single-screen display of AEs grouped by the MedDRA System Organ Class. Dot plots portray the incidence in the different treatment groups. 

## Usage
In the simplest case, using a dataset matching all default requirements, the chart can be created with a single line of code.

```javascript
aeTable('#chartLocation', {}).init(data);
```

The code to load a comma-delimited data set and initialize a customized chart, with filters and simple data mappings, looks like this: 

```javascript
   const settings = {
            'variables': {
                'group': 'group', //overwrite default value 'ARM'
                'filters': [
                    {'value_col': 'SITEID', 'label': 'Site ID', 'type': 'participant' },
                    {'value_col': 'AESER', 'label': 'Serious?', 'type': 'event' }, 
                    {'value_col': 'AESEV', 'label': 'Severity', 'type': 'event' }, 
                    {'value_col': 'AEREL', 'label': 'Relationship','type': 'event' }, 
                    {'value_col': 'AEOUT', 'label': 'Outcome','type': 'event' }, 
                 ]
             },
        };

        d3.csv('../data/ADAE.csv', function(data) {
            aeTable.createChart('#chartLocation', settings).init(data);
        });
```

## Links

More information is available in the project's [wiki](https://github.com/RhoInc/aeexplorer/wiki): 

- [Interactive Example](https://rhoinc.github.io/aeexplorer/test-page/)
- [Configuration](https://github.com/RhoInc/aeexplorer/wiki/Configuration) 
- [API](https://github.com/RhoInc/aeexplorer/wiki/API)
- [Technical Documentation](https://github.com/RhoInc/aeexplorer/wiki/Technical-Documentation) 
- [Data Guidelines](https://github.com/RhoInc/aeexplorer/wiki/Data-Guidelines)

## P004 nextgen functional requirements status

This section tracks the nextgen Chart.js spike against the legacy wiki requirements. The current spike is intentionally partial; unmet items become migration backlog before any replacement release.

| Requirement area | Legacy requirement summary | Spike status |
|---|---|---|
| AE grouping | Summarize AE categories by treatment group. | Partial: stacked treatment-group bar chart implemented with synthetic AE data. |
| Summary unit | Toggle between participant-level and event-level summaries. | Partial: participant/event summary mode implemented in the spike. |
| Search and prevalence | Search AE terms and filter by minimum prevalence with immediate updates. | Partial: search and minimum prevalence controls implemented. |
| Filtering | Support configured filters and no-results messaging. | Not started beyond search/prevalence controls. |
| Hover details | Show counts, percentages, group differences, and highlight hovered values. | Partial: Chart.js tooltips available; detailed group-difference behavior not implemented. |
| Linked listing | Clicking a category displays underlying AE records. | Partial: selected term listing implemented. |
| Regression coverage | Validate filtering, prevalence, summary mode, listing, bootstrap/no-bootstrap layout, and no-results state. | Not started; requires automated browser tests. |
