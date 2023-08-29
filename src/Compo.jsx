const Compo = ({value}) => {

    const handleAdd = () => {
        console.log("xdxd")
    }
    
  return (
    <>    
    <h1> counter </h1>
    <span>{value}</span>
    <button onClick = {() => handleAdd()}> +1 </button>
    </>
  )
}
export default Compo

