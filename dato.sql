
--
-- Script de ccreaciòn de la base de datos pruebas
-- Autor: Ivan Dario Trujillo 
--

drop schema if exists pruebas;
create schema if not exists pruebas default character set utf8 ;

USE pruebas;



CREATE TABLE `productos` (
  `IdProducto` int(11) NOT NULL AUTO_INCREMENT,
  `Nombre` varchar(33) DEFAULT NULL,
  `Cantidad` int(11) DEFAULT NULL,
  `Estado` int(11) DEFAULT NULL,
  `Precio` int(11) DEFAULT NULL,
  `Lote` int(11) DEFAULT NULL,
  `proveedor` varchar(33) DEFAULT NULL,
  PRIMARY KEY (`IdProducto`)
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=utf8mb4

CREATE TABLE `lote` (
  `IdLote` int(11) NOT NULL AUTO_INCREMENT,
  `Nombre` varchar(33) DEFAULT NULL,
  `Tipo` varchar(33) DEFAULT NULL,
  PRIMARY KEY (`IdLote`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4


CREATE TABLE `estados` (
  `IdEstado` int(11) NOT NULL AUTO_INCREMENT,
  `Nombre` varchar(33) DEFAULT NULL,
  `Valor` varchar(1000) DEFAULT NULL,
  PRIMARY KEY (`IdEstado`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4