export default function Button2(){

    const showAlert = () => {
        alert("Button2");
      }
    return (
        <div>
          <button onClick={showAlert}>Button2</button>
        </div>
    );

}

