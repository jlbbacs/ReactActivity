export default function Button1(){

    const showAlert = () => {
        alert("Button1");
      }
    return (
        <div>
            <button onClick={showAlert}>Button1</button>
        </div>
    );

}

