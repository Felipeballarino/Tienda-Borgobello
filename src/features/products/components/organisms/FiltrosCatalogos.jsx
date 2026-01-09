import { Checkbox, Collapse, Input } from 'antd';
import CheckBoxList from "../molecules/CheckBoxList";
import { useCategoriesStore } from '../../../../store/categoriesStore';
const { Search } = Input;
const { Panel } = Collapse;

const FiltrosCatalogos = ({
    categoriaSeleccionada,
    setCategoriaSeleccionada,
    onSearch
}) => {
    const { categories } = useCategoriesStore();


    const handleCategoriaChange = (checked, nombreCategoria) => {
        if (checked) {
            setCategoriaSeleccionada([...categoriaSeleccionada, nombreCategoria])
        } else {
            setCategoriaSeleccionada(categoriaSeleccionada.filter(c => c !== nombreCategoria))
        }
    }

    return (
        <div className="flex flex-col gap-4 mb-6 col-span-2">
            <div className="px-3 py-2 shadow-lg rounded-2xl bg-white">
                <h1 className="font-bold text-xl mb-2">Buscar productos</h1>  
                <Search
                    placeholder="Buscar productos"
                    onSearch={onSearch}
                    className="w-full custom-search"
                    size="large" />
            </div>
            {/* Desktop: filtros fijos visibles */}
            <div className="hidden md:flex w-full ">
            <CheckBoxList
                name={"Categorías"}
                data={categories}
                seleccionados={categoriaSeleccionada}
                onChange={handleCategoriaChange}
            />

            </div>
            {/* Mobile: filtros en acordeón */}
            <div className="md:hidden  w-full z-50  ">
                <div className=" w-full rounded h-fit">
                    <Collapse ghost >
                        <Panel header="Categorías" key="1" className="uppercase font-bold bg-white">
                            <ul className="flex flex-col gap-1">
                                {categories?.grupos?.map((cat) => (
                                    <Checkbox
                                        key={cat.id}
                                        checked={categoriaSeleccionada.includes(cat.grupo)}
                                        onChange={(e) =>
                                            handleCategoriaChange(e.target.checked, cat.grupo)
                                        }
                                    >
                                        {cat.grupo}
                                    </Checkbox>
                                ))}
                            </ul>
                        </Panel>
                    </Collapse>
                </div>
            </div>
        </div>
    )
}

export default FiltrosCatalogos
