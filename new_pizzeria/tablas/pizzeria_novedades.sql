-- MySQL dump 10.13  Distrib 8.0.42, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: pizzeria
-- ------------------------------------------------------
-- Server version	8.0.42

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `novedades`
--

DROP TABLE IF EXISTS `novedades`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `novedades` (
  `id` int NOT NULL AUTO_INCREMENT,
  `titulo` varchar(250) DEFAULT NULL,
  `subtitulo` longtext,
  `cuerpo` longtext,
  `img_id` varchar(250) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `novedades`
--

LOCK TABLES `novedades` WRITE;
/*!40000 ALTER TABLE `novedades` DISABLE KEYS */;
INSERT INTO `novedades` VALUES (1,'Argentina inicia negociaciones confidenciales con EEUU para aplacar los aranceles recíprocos impuestos por Donald Trump','Tras firmar un acuerdo de reserva con la administración republicana, el gobierno de la Libertad Avanza envió a Washington una delegación oficial que encabeza Luis María Kreckler','La administración republicana desató una guerra comercial contra China, y el incremento de los aranceles a los bienes nacionales que se exportan a Estados Unidos son un daño colateral en las profundas relaciones políticas y personales que unen a Javier Milei con Trump.',NULL),(2,'Franco Colapinto debutará con Alpine en la Fórmula 1 este fin de semana','El argentino comandará por primera vez el A525 en la séptima fecha del calendario de la Máxima en el Gran Premio de Emilia Romaña','El tiempo de espera para los fanáticos de la Fórmula 1 se terminó: Franco Colapinto debutará este fin de semana como piloto titular de Alpine en el Gran Premio de Emilia-Romaña que se celebra en el mítico Autódromo Enzo e Dino Ferrari de la ciudad de Imola. El argentino se sentará en la butaca del A525 que quedó disponible ante la destitución del australiano Jack Doohan.',NULL),(4,'prueba 55','prueba 55','prueba 55','u2jnjtoo2c88t8hqvabd'),(6,'prueba 4','prueba 4','prueba 4','lv9upridqawbtk0933w8'),(7,'prueba video','prueba video','prueba video','');
/*!40000 ALTER TABLE `novedades` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-05-16  0:39:24
