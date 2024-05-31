import './Progress.css';

function Progress({percentage}){
    return (
        <div className='progress'>
            <span style={{width: `${percentage}%`}}>
                <p>{percentage} %</p>
            </span>
        </div>
    )
}

export default Progress;