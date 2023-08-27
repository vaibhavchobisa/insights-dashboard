import './progress.styles.css';

const Progress = () => {
    const courses = ['course a', 'course b', 'course c', 'course d'];
    const workers = [23, 34, 69, 121];

    return (
        <div className="progress">
            <h3 className='progress-main-header'>monthly training activity</h3>
            <h4 className='progress-mini-header'>16% more enrollees this month</h4>
            {
                courses.map((course, index) => {
                    return (
                        <div className='progress-item' key={index}>
                            <ul>
                                <li>
                                    <h5 className='progress-header'>{course}</h5>
                                </li>
                                <p className='progress-info'>{workers[index]} Workers Took This Course This Week</p>
                            </ul>
                        </div>
                    );
                })
            }
        </div>
    )
}

export default Progress;