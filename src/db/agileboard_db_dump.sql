CREATE DATABASE  IF NOT EXISTS `agileboard_db` /*!40100 DEFAULT CHARACTER SET utf8 */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `agileboard_db`;
-- MySQL dump 10.13  Distrib 8.0.20, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: agileboard_db
-- ------------------------------------------------------
-- Server version	8.0.20

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
-- Table structure for table `lists`
--

DROP TABLE IF EXISTS `lists`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `lists` (
  `id_list` int NOT NULL AUTO_INCREMENT,
  `id_project` int NOT NULL,
  `list_name` varchar(100) NOT NULL,
  PRIMARY KEY (`id_list`),
  KEY `id_project_idx` (`id_project`),
  CONSTRAINT `id_project` FOREIGN KEY (`id_project`) REFERENCES `projects` (`id_project`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `lists`
--

LOCK TABLES `lists` WRITE;
/*!40000 ALTER TABLE `lists` DISABLE KEYS */;
INSERT INTO `lists` VALUES (1,1,'TO-DO-1'),(2,1,'IN-PROGRESS-1'),(3,1,'DONE-1'),(4,2,'TO-DO-2'),(5,2,'IN-PROGRESS-2'),(6,2,'DONE-2'),(7,3,'TO-DO-3'),(8,3,'IN-PROGRESS-3'),(9,3,'DONE-3'),(10,4,'TO-DO-4'),(11,4,'IN-PROGRESS-4'),(12,4,'DONE-4');
/*!40000 ALTER TABLE `lists` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `projects`
--

DROP TABLE IF EXISTS `projects`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `projects` (
  `id_project` int NOT NULL AUTO_INCREMENT,
  `id_admin` varchar(45) NOT NULL,
  `project_name` varchar(100) NOT NULL,
  PRIMARY KEY (`id_project`,`id_admin`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `projects`
--

LOCK TABLES `projects` WRITE;
/*!40000 ALTER TABLE `projects` DISABLE KEYS */;
INSERT INTO `projects` VALUES (1,'abc123','Proyecto_1'),(2,'def456','Proyecto_2'),(3,'ghi789','Proyecto_3'),(4,'jkl012','Proyecto_4');
/*!40000 ALTER TABLE `projects` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tasks`
--

DROP TABLE IF EXISTS `tasks`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tasks` (
  `id_task` int NOT NULL AUTO_INCREMENT,
  `id_list` int NOT NULL,
  `task_name` varchar(100) NOT NULL,
  `task_description` varchar(1000) DEFAULT NULL,
  `task_created_at` timestamp(2) NOT NULL,
  PRIMARY KEY (`id_task`),
  KEY `id_list_idx` (`id_list`),
  CONSTRAINT `id_list` FOREIGN KEY (`id_list`) REFERENCES `lists` (`id_list`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tasks`
--

LOCK TABLES `tasks` WRITE;
/*!40000 ALTER TABLE `tasks` DISABLE KEYS */;
INSERT INTO `tasks` VALUES (1,1,'task-1','Test 1: Esto es una tarea de prueba','2020-06-19 18:29:12.66'),(2,1,'task-2','Test 2: Esto es una tarea de prueba','2020-06-19 18:29:12.91'),(3,1,'task-3','Test 3: Esto es una tarea de prueba','2020-06-19 18:29:13.02'),(4,1,'task-4','Test 4: Esto es una tarea de prueba','2020-06-19 18:29:13.15'),(5,2,'task-1','Test 1: Esto es una tarea de prueba','2020-06-19 18:42:07.15'),(6,2,'task-2','Test 2: Esto es una tarea de prueba','2020-06-19 18:42:07.24'),(7,2,'task-3','Test 3: Esto es una tarea de prueba','2020-06-19 18:42:07.41'),(8,2,'task-4','Test 4: Esto es una tarea de prueba','2020-06-19 18:42:07.60'),(9,3,'task-1','Test 1: Esto es una tarea de prueba','2020-06-19 18:42:17.83'),(10,3,'task-2','Test 2: Esto es una tarea de prueba','2020-06-19 18:42:17.93'),(11,3,'task-3','Test 3: Esto es una tarea de prueba','2020-06-19 18:42:18.15'),(12,3,'task-4','Test 4: Esto es una tarea de prueba','2020-06-19 18:42:18.50'),(13,4,'task-1','Test 1: Esto es una tarea de prueba','2020-06-19 18:42:23.42'),(14,4,'task-2','Test 2: Esto es una tarea de prueba','2020-06-19 18:42:23.57'),(15,4,'task-3','Test 3: Esto es una tarea de prueba','2020-06-19 18:42:23.66'),(16,4,'task-4','Test 4: Esto es una tarea de prueba','2020-06-19 18:42:23.77');
/*!40000 ALTER TABLE `tasks` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-06-19 15:45:23
