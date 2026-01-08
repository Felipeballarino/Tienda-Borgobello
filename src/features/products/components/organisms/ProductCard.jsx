import { formatearPrecio } from '../../../../utils/helpers'
import { useCartStore } from '../../../../store/cartStore'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import IconButton from "@mui/material/IconButton";
import { Image } from "antd";
import imgNoDisp from "../../../../assets/nodisp.jpg"

const ProductCard = ({ product }) => {

    const { addToCart } = useCartStore()


    const handleAddToCart = () => {
        addToCart(product, 1);
    };

    return (
        <div
            className="group bg-white rounded-2xl p-4 shadow-sm hover:shadow-xl transition-all duration-300 relative min-h-[320px]"
        >
            {/* DESCUENTO */}
            {product.descuento && product.descuento !== "0.00" && (
                <div className="absolute top-4 left-4 bg-gray-900 text-white text-xs font-semibold py-1 px-3 rounded-full z-10">
                    {product.descuento}% OFF
                </div>
            )}

            {/* IMAGEN */}
            <div className="overflow-hidden rounded-xl">
                {product.img1 ?
                    <Image
                        style={{ objectFit: "cover" }}
                        width="100%"
                        height="12rem"
                        src={product.img1}
                        alt={product.nombre}
                    />
                    :
                    <Image
                        style={{ objectFit: "cover" }}
                        width="100%"
                        height="12rem"
                        src={imgNoDisp}
                        alt={product.nombre}
                    />
                }
            </div>

            {/* INFO */}
            <div className="mt-4">
                <h3 className="text-base font-semibold leading-tight line-clamp-2">
                    {product.descripcion}
                </h3>
                <p className='text-xs font-medium   text-gray-400 h-3'>COD: {product.codproducto}</p>
                <div className="flex justify-between items-center mt-2">
                    <p className="text-sm text-gray-500 my-1 ">
                        {product.grupo}
                    </p>
                    <p className='text-gray-500'>{formatearPrecio(product.precio_final)}</p>

                </div>
                <button
                    onClick={handleAddToCart}
                    className="
        mt-4 w-full
        flex items-center justify-center gap-2
        rounded-xl
        bg-[#f09303d4] text-white
        py-2
        text-sm font-semibold
        transition-all duration-300
        hover:bg-[#d7880dd4] hover:shadow-md
        active:scale-95
        cursor-pointer
    "
                >
                    <AddShoppingCartIcon fontSize="small" />
                    Agregar al carrito
                </button>



            </div>
        </div>
    )
}

export default ProductCard
