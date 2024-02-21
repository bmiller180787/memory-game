import './SubHeader.css'

const SubHeader = ({players, grid}) => {
    return (
        <>
            {players < 1 && grid < 1 ? <h2 className="subHeaderText">Please select players</h2> :
                <p></p>}
            {players > 0 && grid < 1 ? <h2 className="subHeaderText">Please select number of tiles</h2> :
                <p></p>}
            {players > 0 && grid > 1 ? <p></p> : <p></p>}
        </>
    )
}

export default SubHeader