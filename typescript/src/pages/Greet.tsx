interface GreetProps {
    firstname: string,
    age: number
}

export const Greet = (props: GreetProps) => {
    return (
        <>
        <div>
            <h2>{props.firstname}</h2>
            <h2>{props.age}</h2>

            </div>
            </>
    )
}
