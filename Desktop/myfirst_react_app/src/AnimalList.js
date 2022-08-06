export default function Animal() {
    const animallist = ['dog', 'cat', 'chicken', 'cow', 'sheep', 'horse']
    return (
    <div>
        <ul>
            {animallist.map(jeff => <li key={jeff.toString()}>{jeff}</li>)}
        </ul>
    </div>
    );
}