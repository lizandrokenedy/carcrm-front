import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaAngleDown, FaAngleUp, FaCar, FaCreditCard, FaLaptop, FaSignOutAlt, FaUsers, FaWhatsapp } from 'react-icons/fa'
import { AppBar, Collapse, Divider, Drawer, IconButton, List, ListItem, ListItemIcon, ListItemText, MenuItem, MenuList, Toolbar, Typography } from '@material-ui/core'
import { MdMenu } from 'react-icons/md'

export default function Header(props) {

    const [state, setState] = useState({
        open: false
    });

    const [collapse, setCollapse] = useState({
        site: false,
        financeiro: false
    });

    return (
        <>
            {(window.innerWidth < 577) ?

                <AppBar position="fixed">
                    <Toolbar>
                        <IconButton edge="start" color="inherit" aria-label="menu" onClick={() => setState({ open: true })}>
                            <MdMenu />
                        </IconButton>
                        <Typography variant="h6">
                            {props.title}
                        </Typography>
                    </Toolbar>
                </AppBar>

                :

                <nav className="header navbar navbar-expand-lg navbar-light bg-white p-0">
                    <div className="container">
                        <Link className="navbar-brand" to="/">
                            <img src="/logo.png" alt="CAR CRM" height="40" />
                        </Link>


                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" to="/vehicles">
                                    <FaCar className="icon-lg mr-2" size={22} /> Veiculos
                                </Link>
                            </li>
                            <li className="nav-item">
                                <button className="nav-link bg-white" to="/vehicles">
                                    <FaUsers className="icon-lg mr-2" size={22} /> Proprietários
                                </button>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="#" data-toggle="dropdown">
                                    <FaLaptop className="icon-lg mr-2" size={22} /> Site
                                </Link>

                                <MenuList className="dropdown-menu">
                                    <MenuItem className="dropdown-item">
                                        Otimização para o Google
                                    </MenuItem>
                                    <MenuItem className="dropdown-item">
                                        Unidades e Telefones
                                    </MenuItem>
                                    <MenuItem className="dropdown-item">
                                        Minha Logo
                                    </MenuItem>
                                    <MenuItem className="dropdown-item">
                                        Dominio
                                    </MenuItem>
                                    <MenuItem className="dropdown-item">
                                        Configurações
                                    </MenuItem>
                                </MenuList>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="#" data-toggle="dropdown">
                                    <FaCreditCard className="icon-lg mr-2" size={22} /> Financeiro
                                </Link>

                                <MenuList className="dropdown-menu">
                                    <MenuItem className="dropdown-item">
                                        Meu Plano
                                    </MenuItem>
                                    <MenuItem className="dropdown-item">
                                        Minhas Transações
                                    </MenuItem>
                                </MenuList>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/vehicles">
                                    <FaWhatsapp className="icon-lg mr-2" size={22} /> Ajuda
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/vehicles">
                                    <FaSignOutAlt className="icon-lg mr-2" size={22} /> Sair
                                </Link>
                            </li>

                        </ul>
                    </div>
                </nav>

            }

            <Drawer anchor="left" open={state.open} onClose={() => setState({ open: false })}>
                <div style={{ width: 320, maxWidth: window.innerWidth - 70 }}>
                    <List component="nav" className="menu-mobile">
                        <ListItem>
                            <img className="img-fluid logo-mobile" src="/logo.png" alt="CAR CRM" height="40" />
                        </ListItem>

                        <ListItem>
                            teste@gmail.com
                        </ListItem>

                        <Divider className="mt-2 mb-3" />

                        <ListItem>
                            <ListItemIcon>
                                <FaCar size={22} color="#444" />
                            </ListItemIcon>
                            <ListItemText primary="Veiculos" />
                        </ListItem>

                        <ListItem>
                            <ListItemIcon>
                                <FaUsers size={22} color="#444" />
                            </ListItemIcon>
                            <ListItemText primary="Proprietários" />
                        </ListItem>

                        <ListItem button onClick={() => setCollapse({ ...collapse, site: !collapse.site })}>
                            <ListItemIcon>
                                <FaLaptop size={22} color="#444" />
                            </ListItemIcon>
                            <ListItemText primary="Site" />
                            {(collapse.site) ? <FaAngleUp /> : <FaAngleDown />}
                        </ListItem>

                        <Collapse in={collapse.site} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItem>
                                    <ListItemText className="pl-5" primary="Otimização para o Google" />
                                </ListItem>
                                <ListItem>
                                    <ListItemText className="pl-5" primary="Unidades e Telefones" />
                                </ListItem>
                                <ListItem>
                                    <ListItemText className="pl-5" primary="Minha Logo" />
                                </ListItem>
                                <ListItem>
                                    <ListItemText className="pl-5" primary="Dominio" />
                                </ListItem>
                                <ListItem>
                                    <ListItemText className="pl-5" primary="Configurações" />
                                </ListItem>
                            </List>
                        </Collapse>

                        <Divider className="mt-2 mb-3" />

                        <ListItem button onClick={() => setCollapse({ ...collapse, financeiro: !collapse.financeiro })}>
                            <ListItemIcon>
                                <FaCreditCard size={22} color="#444" />
                            </ListItemIcon>
                            <ListItemText primary="Financeiro" />
                            {(collapse.financeiro) ? <FaAngleUp /> : <FaAngleDown />}
                        </ListItem>

                        <Collapse in={collapse.financeiro} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItem>
                                    <ListItemText className="pl-5" primary="Meu Plano" />
                                </ListItem>
                                <ListItem>
                                    <ListItemText className="pl-5" primary="Minhas Transações" />
                                </ListItem>
                            </List>
                        </Collapse>


                        <ListItem>
                            <ListItemIcon>
                                <FaWhatsapp size={22} color="#444" />
                            </ListItemIcon>
                            <ListItemText primary="Ajuda" />
                        </ListItem>

                        <Divider className="mt-2 mb-3" />

                        <ListItem>
                            <ListItemIcon>
                                <FaSignOutAlt size={22} color="#444" />
                            </ListItemIcon>
                            <ListItemText primary="Sair" />
                        </ListItem>

                    </List>
                </div>
            </Drawer>

        </>
    )
}
