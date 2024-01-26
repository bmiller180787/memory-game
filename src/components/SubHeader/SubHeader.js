import './SubHeader.css'

const SubHeader = ({players}) => {
    return (
        <>
            {players > 1 ? <p className="subheadertext">{players} players selected</p> :
                <p className="subheadertext">Please Select number of players</p>}
        </>
    )
}

export default SubHeader