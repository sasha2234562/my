import {topCars} from "./Cars";

type TopCarsType = {
    cars: Array<CarsType>
}
type CarsType = {
    manufacturer: string
    model: string
    id: number
}

export const TopCars = (props: TopCarsType) => {
    return (
        <div>
            {props.cars.map((item, index) => {
                // debugger
                return (
                    <div key={index}><span>{item.manufacturer}</span> <span>{item.model}</span> <span>{item.id}</span> </div>
                        //
                        // <tr key={item.id}>
                            // {/*<tr>*/}
                            // <td>{item.manufacturer}</td>
                            // <td>{item.model}</td>
                            // <td>{item.id}</td>
                            // {/*</tr>*/}
                            // </tr>
                        )
                        })}
                    </div>
                )
            }