import React, { useState } from 'react';
import AnimeSchedule from './layouts/AnimeSchedule';

function Schedule() {
    const [schedule, setSchedule] = useState('monday');

    return (
        <div>
            <div className="schedule-container">
                <div className="container">
                    <h1>Anime <span className="yellow"> Schedule</span></h1>
                    <p>List of Anime airing on different days.</p>
                    <div class="text-center"><a href="#Top"><i class="fas fa-chevron-down down-icon"></i></a></div>
                </div>
            </div>

            <div className="schedule container">
                <ul>
                    <li className={schedule === 'monday' ? 'yellow' : ' '} onClick={() => setSchedule('monday')}>Monday</li>
                    <li className={schedule === 'tuesday' ? 'yellow' : ' '} onClick={() => setSchedule('tuesday')}>Tuesday</li>
                    <li className={schedule === 'wednesday' ? 'yellow' : ' '} onClick={() => setSchedule('wednesday')}>Wednesday</li>
                    <li className={schedule === 'thursday' ? 'yellow' : ' '} onClick={() => setSchedule('thursday')}>Thursday</li>
                    <li className={schedule === 'friday' ? 'yellow' : ' '} onClick={() => setSchedule('friday')}>Friday</li>
                    <li className={schedule === 'saturday' ? 'yellow' : ' '} onClick={() => setSchedule('saturday')}>Saturday</li>
                    <li className={schedule === 'sunday' ? 'yellow' : ' '} onClick={() => setSchedule('sunday')}>Sunday</li>
                </ul>

                <AnimeSchedule schedule={schedule} />
            </div>
        </div>
    )
}

export default Schedule;