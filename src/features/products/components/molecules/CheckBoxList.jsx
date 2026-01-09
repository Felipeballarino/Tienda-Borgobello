import { Checkbox } from "antd"

const CheckBoxList = ({ data, name, onChange, seleccionados }) => {
    return (
        // Checkbox filtros catalogos
        <div className="px-3 py-2 shadow-lg rounded-2xl bg-white w-full">
            <h1 className="font-bold text-xl mb-2">{name}</h1>
            <ul className="flex flex-col gap-1">
                {data?.grupos?.map(opcion => (
                    <Checkbox
                        key={opcion.codgrupo}
                        checked={seleccionados.includes(opcion.grupo)}
                        onChange={(e) => onChange(e.target.checked, opcion.grupo)}
                    >
                        {opcion.grupo}
                    </Checkbox>
                ))}
            </ul>
        </div>
    )
}

export default CheckBoxList
