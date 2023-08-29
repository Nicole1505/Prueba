const categorias = ["Manzana", "Blanco"]

export const ComponentApp = () => {

    return (
        <>
        <h1>Ejercicio con arreglo</h1>
        <ol>
            {
                categorias.map(
                    (categorias, key) =>
                    {
                        return <li key= {key}>{categorias}</li>
                    }
                )
            }
            </ol>
        </>
    )
}