import { useState } from 'react'
import { Link } from 'react-router-dom'
import Login from '../../features/auth/components/Login'
import { useAuthStore } from '../../store/authStore'
import LocalMallIcon from '@mui/icons-material/LocalMall';
import IconButton from '@mui/material/IconButton'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu'
import ListSubheader from '@mui/material/ListSubheader';
import MenuItem from '@mui/material/MenuItem'

import { styled } from '@mui/material/styles';

const StyledListHeader = styled(ListSubheader)({
    backgroundImage: 'var(--Paper-overlay)',
});

const Header = ({ showDrawer }) => {
    const [modalOpen, setModalOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const open = Boolean(anchorEl);

    const { user, logout } = useAuthStore()


    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const scrollTo = (id) => {
        const element = document.getElementById(id)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }
    return (
        <>
            <header
                className='
                border-b w-full flex justify-between items-center md:px-40 px-5 py-4 text-[#05bb2c]
                bg-white fixed top-0 z-100 min-h-[80px]'
            >
                <Link to={"/"}>
                    <h1 className='md:text-4xl text-2xl font-extrabold'>DEBORGO</h1>
                </Link>
                <nav className="hidden md:flex">
                    <ul className="flex gap-8 font-semibold">
                        <li>
                            <Link to="/" onClick={() => scrollTo('top')}>
                                INICIO
                            </Link>
                        </li>
                        <li>
                            <button onClick={() => scrollTo('nosotros')}>
                                NOSOTROS
                            </button>
                        </li>
                        <li>
                            <button onClick={() => scrollTo('contacto')}>
                                CONTACTO
                            </button>
                        </li>
                        <li>
                            <Link to="/productos">PRODUCTOS</Link>
                        </li>
                    </ul>
                </nav>
                <div className='flex'>
                    <IconButton onClick={showDrawer}>
                        <LocalMallIcon fontSize="large" sx={{ color: "#05bb2c" }} />
                    </IconButton>
                    <IconButton
                        onClick={handleClick}
                        aria-controls={open ? 'account-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                    >
                        <AccountCircleIcon fontSize="large" sx={{ color: "#05bb2c" }} />
                    </IconButton>
                    <div className="md:hidden">
                        <IconButton onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                            <MenuIcon fontSize="large" sx={{ color: "#05bb2c" }} />
                        </IconButton>
                    </div>
                    <Menu
                        anchorEl={anchorEl}
                        id="account-menu"
                        open={open}
                        onClose={handleClose}
                        onClick={handleClose}
                        slotProps={{
                            paper: {
                                elevation: 0,
                                sx: {
                                    overflow: 'visible',
                                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                    mt: 1.5,
                                    '& .MuiAvatar-root': {
                                        width: 32,
                                        height: 32,
                                        ml: -0.5,
                                        mr: 1,
                                    },
                                    '&::before': {
                                        content: '""',
                                        display: 'block',
                                        position: 'absolute',
                                        top: 0,
                                        right: 14,
                                        width: 10,
                                        height: 10,
                                        bgcolor: 'background.paper',
                                        transform: 'translateY(-50%) rotate(45deg)',
                                        zIndex: 0,
                                    },
                                },
                            },
                        }}
                        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                    >

                        {user?.codusuario != 0 ?
                            <>
                                <MenuItem onClick={logout}>
                                    Cerrar Sesion
                                </MenuItem>

                            </>
                            :
                            <MenuItem onClick={() => setModalOpen(true)}>
                                Iniciar Sesion
                            </MenuItem>
                        }
                    </Menu> 
                </div>
                <Login open={modalOpen} onClose={() => setModalOpen(false)} />
            </header >

            {mobileMenuOpen && (
                <div className="md:hidden bg-white border-b shadow-md fixed top-[80px] left-0 w-full z-100">
                    <ul className="flex flex-col items-center gap-6 py-6 text-[#05bb2c] font-semibold">
                        <li>
                            <button
                                onClick={() => {
                                    scrollTo('top')
                                    setMobileMenuOpen(false)
                                }}
                            >
                                INICIO
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => {
                                    scrollTo('nosotros')
                                    setMobileMenuOpen(false)
                                }}
                            >
                                NOSOTROS
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => {
                                    scrollTo('contacto')
                                    setMobileMenuOpen(false)
                                }}
                            >
                                CONTACTO
                            </button>
                        </li>
                        <li>
                            <Link
                                to="/productos"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                PRODUCTOS
                            </Link>
                        </li>
                    </ul>
                </div>
            )}

            {/* MODAL LOGIN */}
            <Login open={modalOpen} onClose={() => setModalOpen(false)} />
        </>
    )
}

export default Header
