import './SubHeader.css'

const SubHeader = ({players, grid}) => {
    return (
        <>
            {players < 1 && grid < 1 ? <p className="subHeaderText">Please select players</p> :
                <p></p>}
            {players > 0 && grid < 1 ? <p className="subHeaderText">Please select number of tiles</p> :
                <p></p>}
            {players > 0 && grid > 1 ? <p></p> : <p></p>}
        </>
    )
}

export default SubHeader