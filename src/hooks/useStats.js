import { useSelector } from 'react-redux';

function useStats () {
    const allActivities = useSelector((store) => store.taskReducer.tasks);
    
    const allSum = allActivities.reduce( (collector, nextValue) => {

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
