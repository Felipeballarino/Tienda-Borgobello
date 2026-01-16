import { Link, useNavigate } from 'react-router-dom'
import Layout from '../../shared/layout/Layout'
import Seo from '../../shared/seo/Seo'
import Nosotros1 from "../../assets/nosotros1.webp"
import Nosotros2 from "../../assets/nosotros2.webp"
import banner from '../../assets/banner.png'
import bannerMobile from '../../assets/banner.png'

const Home = () => {
    const navigate = useNavigate()

    return (
        <>
            <Seo title="Home" description="Bienvenido a mi sitio web" />
            <Layout>
                {/* BANNER */}
                <div id='top' className="h-[50vh] md:h-[80vh] relative overflow-hidden">
                    {/* Desktop */}
                    <img
                        src={banner}
                        alt="banner desktop"
                        className="hidden md:block absolute inset-0 w-full h-full object-cover"
                    />

                    {/* Mobile */}
                    <img
                        src={bannerMobile}
                        alt="banner mobile"
                        className="block md:hidden absolute inset-0 w-full h-full object-cover"
                    />
                </div>
                {/* PRODUCTOS */}
                {/* <div className="py-16 px-6 md:px-20 flex flex-col items-center">
                    <h2 className="text-3xl md:text-4xl font-extrabold uppercase text-[#05bb2c] mb-10">
                        Productos
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 w-full gap-6">
                        {[1, 2, 3, 4, 5].map((product) => (
                            <ProductCard key={product} product={[]} />
                        ))}
                    </div>
                </div> */}
                {/* NOSOTROS */}
                <div id='nosotros' className="flex flex-col md:flex-row px-6 md:px-20 py-16 gap-12 items-center">

                    {/* Imágenes */}
                    <div className="md:w-1/2 flex gap-6">
                        <img
                            src={Nosotros1}
                            alt="Nuestro trabajo"
                            className="w-1/2  object-cover shadow-lg rounded-2xl"
                        />
                        <img
                            src={Nosotros2}
                            alt="Productos de limpieza"
                            className="w-1/2 rounded-2xl object-cover shadow-lg mt-8"
                        />
                    </div>

                    {/* Texto */}
                    <div className="md:w-1/2">
                        <h2 className="text-3xl font-semibold mb-6">
                            Sobre nosotros
                        </h2>

                        <p className="text-lg leading-relaxed text-gray-700 space-y-4">
                            Somos una empresa dedicada a la fabricación y venta de productos de limpieza y para el hogar.
                            <br />
                            Contamos con una amplia variedad de productos en todas sus gamas con el fin de satisfacer todas las necesidades de nuestros clientes.
                            <br />
                            Realizamos envíos a todo el país.
                            <br />
                            Nuestro centro de distribución está ubicado en Villa Nueva, Córdoba.
                            <br />
                            Será un agrado su visita.
                        </p>
                    </div>
                </div>
                {/* CATALOGO */}
                <div className=" flex flex-col gap-6 items-center justify-center py-24 bg-[#05bb2c] text-white text-center px-4">
                    <h2 className="text-3xl md:text-6xl font-extrabold">
                        ¡Descubrí nuestro catálogo!
                    </h2>
                    <p className="text-base md:text-2xl text-white/90">
                        Encontrá todos nuestros productos
                    </p>

                    <button
                        onClick={() => navigate("/productos")}
                        className="cursor-pointer mt-4 bg-white text-[#05bb2c] py-3 px-10 md:text-xl rounded-full font-semibold hover:bg-gray-100 transition">
                        Ver catálogo
                    </button>
                </div>


                {/* CONTACTO */}
                <div id='contacto' className="flex flex-col md:flex-row px-6 md:px-20 py-16 gap-12 items-start">

                    {/* MAPA */}
                    <div className="md:w-1/2 w-full">
                        <div className="rounded-2xl overflow-hidden shadow-lg h-[420px]">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3367.5622745667374!2d-63.25219322546375!3d-32.4308813460237!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95cc42ffc2d34b2f%3A0xbb2f2d8d08ca4b67!2sLima%20853%2C%20X5903%20Villa%20Nueva%2C%20C%C3%B3rdoba!5e0!3m2!1sen!2sar!4v1767625044484!5m2!1sen!2sar"
                                className="w-full h-full border-0"
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>
                    </div>

                    {/* CONTACTO */}
                    <div className="md:w-1/2 w-full">
                        <h2 className="text-3xl font-semibold mb-6">
                            Contacto
                        </h2>

                        {/* Info */}
                        <div className="mb-8 space-y-2 text-gray-700">
                            <p><strong>Dirección:</strong> Lima 853, Villa Nueva, Córdoba</p>
                            <p><strong>Teléfono:</strong> +54 9 351 123 4567</p>
                            <p><strong>Email:</strong> javierborgobello@gmail.com</p>
                            <p><strong>Horario:</strong> Lun a Vie · 8am - 12pm y 15:30pm - 19:30pm</p>
                        </div>

                        {/* Formulario */}
                        <form className="space-y-4">
                            <input
                                type="text"
                                placeholder="Nombre"
                                className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-900"
                            />

                            <input
                                type="email"
                                placeholder="Email"
                                className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-900"
                            />

                            <textarea
                                placeholder="Mensaje"
                                rows={4}
                                className="w-full px-4 py-3 border rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-gray-900"
                            />

                            <button
                                type="submit"
                                className="w-full bg-[#f09303d4] text-white py-3 rounded-xl font-medium hover:bg-[#d7880dd4] cursor-pointer transition"
                            >
                                Enviar mensaje
                            </button>
                        </form>
                    </div>

                </div>



            </Layout>
        </>
    )
}

export default Home
