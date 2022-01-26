import { useSelector } from 'react-redux';

function useStats (choice) {
    const allActivities = useSelector((store) => store.taskReducer.tasks);

    const globalDate = new Date();
    const currentMonth = (globalDate.getMonth() + 1).toString().padStart(2, "0");
    const objWithoutIncludeCurrentMonth = [
      {
        'month': currentMonth > 1 ? (currentMonth - 1) : (currentMonth - 1) + 12,
      },
      {
        'month': currentMonth > 1 ? (currentMonth - 2) : (currentMonth - 2) + 12,
      },
      {
        'month': currentMonth > 1 ? (currentMonth - 3) : (currentMonth - 3) + 12,
      }
    ]
    
    const filteredActivities = allActivities.filter(el => {
      let getMonth = el.date.substring(5, 7);
        return objWithoutIncludeCurrentMonth.find(element => {
           return parseInt(element.month) === parseInt(getMonth);
        });
    });

    const finalActivities = choice === 'monthly' ? filteredActivities :
                            choice === 'global' ? allActivities : [] ; 

    const allSum = finalActivities.reduce( (collector, nextValue) => {

        return {
          distance: parseInt(collector.distance) + parseInt(nextValue.distance),
          time: parseInt(collector.time) + parseInt(nextValue.time),
          elevation_gain: parseInt(collector.elevation_gain) + parseInt(nextValue.elevation_gain),
        };
        
      }, {distance: 0, time: 0, elevation_gain: 0});

      const distanceAverage = (allSum.distance/allActivities.length).toFixed(2);
      const timeAverage = (allSum.time/allActivities.length).toFixed(2);
      const elevationAverage = (allSum.elevation_gain/allActivities.length).toFixed(2);

    return ( [distanceAverage, timeAverage, elevationAverage] )
}

export { useStats }
