type FoterType = {
    titleForFoter : string
}

export const Foter = (props : FoterType) => {
    return (
        <div>{props.titleForFoter}</div>
    )
}