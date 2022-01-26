import { useSelector, useDispatch } from 'react-redux';
import { updateTask } from '../redux/actions/taskActions';

function useUpdateTask () {
    const allMonths = useSelector((store) => store.taskReducer.months);
    const allActivities = useSelector((store) => store.taskReducer.tasks);
    const dispatch = useDispatch();

    const takingMonth = (code) => {
        const newTasks = allActivities.filter( ( element ) => {
            const getMonth = element.date.substring(5, 7);
            if ( getMonth === code ) {
                return element
            }
            return false;
        })
        dispatch(updateTask(newTasks))
    }

    return ({allMonths, takingMonth})
}

export { useUpdateTask };
