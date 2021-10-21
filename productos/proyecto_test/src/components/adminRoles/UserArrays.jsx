import LoginVendor from '../adminRoles/LoginVendor';
import LoginAdmin from '../adminRoles/LoginAdmin';
import MasterAdmin from '../adminRoles/MasterAdmin';
import RegistrarProducto from '../productos/RegistrarProducto';
import ActualizarProducto from '../productos/ActualizarProducto';
import RegistrarVenta from '../ventas/RegistrarVenta';
import ActualizarVenta from '../ventas/ActualizarVenta';

export const roles = () => {

    const AdminTools = [
        ["Home", [["", "Home", LoginAdmin]]],
        ["Productos", [["RegistrarProducto", "Registrar Producto",RegistrarProducto], ["ActualizarProducto", "Actualizar Producto",ActualizarProducto]]],
        ["Ventas", [["RegistrarVentas", "Registrar Ventas", RegistrarVenta], ["ActualizarVentas", "Actualizar Ventas", ActualizarVenta]]]
    ]
    
    const VendorTools = [
        ["Home", [["", "Home", LoginVendor]]],
        ["Ventas", [["RegistrarVentas", "Registrar Ventas", RegistrarVenta], ["ActualizarVentas", "Actualizar Ventas", ActualizarVenta]]]
    ]

    return [["Administrador", AdminTools], ["Vendedor", VendorTools]]
}



