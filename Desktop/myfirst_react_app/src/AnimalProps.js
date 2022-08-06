export default function Danica(props) {

    return (
        <div>
            <ul>
            {props.name.map(jeff => <li key={jeff.toString()}>{jeff.value} {jeff.name}</li>)}
            </ul>
          </div>
    )
}