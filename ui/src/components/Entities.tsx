import React from 'react';
import { useTaskQuery } from '../hooks/useFilterEntities';
import SingleEntite from './SingleEntite';


const Entities = () => {
    const { error, loading, data, refetch } = useTaskQuery({})

    type TaskName = "All" | "Trending" | "Open Tasks" | "Closed Tasks"
    const refetchTasks = (taskName: TaskName) => {
        switch (taskName) {
            case 'All': return refetch({})
            case 'Open Tasks': return refetch({ status: 'OPEN' })
            case 'Closed Tasks': return refetch({ status: 'CLOSED' })
            case 'Trending': return refetch({ isTrending: true })
        }
    }

    const TASK_NAMES = ["All", "Trending", "Open Tasks", "Closed Tasks"]


    return (
        <div className='w-[60%] mx-auto mt-[50px]'>

            <div className="w-full mb-[50px] flex justify-between">
                {TASK_NAMES.map(taskName => (<button key={taskName} onClick={() => refetchTasks(taskName as TaskName)} className='button'>{taskName}</button>))}
            </div>

            {error?.message ?
                <div>something went wrong</div>
                : loading ?
                    <div>loading...</div> : <>
                        {data.getEntities.result.map((entitie: any) => (
                            <SingleEntite
                                key={entitie.title}
                                entitie={entitie}
                            />
                        ))}</>}
        </div>
    );
}

export default Entities;