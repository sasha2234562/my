import {ExampleTitle} from "./example-title";


export const ExampleAccardion = () => {

    const hide = ()=> {
        console.log('Dasha')
    }


    return (
        <div>
            <ExampleTitle hide={hide}/>
        </div>
    )
}