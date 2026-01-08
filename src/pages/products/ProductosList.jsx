import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useEffect } from 'react'
import Layout from '../../shared/layout/Layout';
import FiltrosCatalogos from '../../features/products/components/organisms/FiltrosCatalogos';
import ProductCard from '../../features/products/components/organisms/ProductCard';
import { useProductsStore } from '../../store/productsStore';
import Seo from '../../shared/seo/Seo';
import { Spin } from 'antd';

// import ProductCardWpp from '../components/ProductCardWpp';



const Productos = () => {
    const { products } = useProductsStore();

    const [searchParams, setSearchParams] = useSearchParams();

    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState([]);

    const [busqueda, setBusqueda] = useState("");


    // Leer de la URL al cargar
    useEffect(() => {
        const categoriasFromURL = searchParams.get("categorias")?.split(",") || [];
        setCategoriaSeleccionada(categoriasFromURL);
    }, [searchParams]);

    // Actualizar la URL cuando cambia el filtro
    useEffect(() => {
        const params = {};
        if (categoriaSeleccionada.length > 0) {
            params.categorias = categoriaSeleccionada.join(",");
        }
        setSearchParams(params);
    }, [categoriaSeleccionada, setSearchParams]);

    const productosFiltrados = products.filter(product => {
        const coincideCategoria = categoriaSeleccionada.length > 0 ? categoriaSeleccionada.includes(product.grupo) : true;
        const coincideBusqueda = busqueda
            ? [
                product.nombre,
                product.descripcion,
                product.marcaNombre,
                product.grupo
            ]
                .some(campo =>
                    campo?.toLowerCase().includes(busqueda.toLowerCase())
                )
            : true;

        return coincideCategoria && coincideBusqueda;
    });
    return (
        <>
            <Seo title="Catalogo" description="Catalogo web" />
            <Layout>
                <div className="p-4 md:p-6 min-h-screen">
                    <div className="grid grid-cols-1 md:grid-cols-8 gap-6">

                        {/* FILTROS */}
                        <div className="md:col-span-2">
                            <FiltrosCatalogos
                                categoriaSeleccionada={categoriaSeleccionada}
                                setCategoriaSeleccionada={setCategoriaSeleccionada}
                                onSearch={setBusqueda}
                            />
                        </div>

                        {/* PRODUCTOS */}
                        <div
                            className="
                    md:col-span-6
                    grid
                    grid-cols-1
                    sm:grid-cols-2
                    lg:grid-cols-3
                    xl:grid-cols-4
                    gap-4
                "
                        >
                            {productosFiltrados.length > 0 ? (
                                productosFiltrados.map(product => (
                                    <ProductCard key={product.id} product={product} />
                                ))
                            ) : (
                                <div className="col-span-full flex justify-center items-center min-h-[50vh]">
                                    <Spin size="large" />
                                </div>
                            )}
                        </div>

                    </div>
                </div>
            </Layout>

        </>
    )
}
export default Productos
