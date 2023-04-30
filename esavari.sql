-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 30, 2023 at 09:19 AM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `esavari`
--

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(256) NOT NULL,
  `email` varchar(256) NOT NULL,
  `phoneNumber` varchar(20) NOT NULL,
  `password` varchar(256) NOT NULL,
  `createdDate` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `phoneNumber`, `password`, `createdDate`) VALUES
(3, 'Shani Patel', 'xyz2@gmail.com', '7878787878', '$2y$10$PSZVjNtw56fh4kWFeoPj2eUodWqnKgXZj1d2PZ0BwFEHW75aG31om', '2023-04-28 19:33:16'),
(4, 'Shivam Pal', 'xyz3@gmail.com', '9898989898', '$2y$10$kRrG1E9Im0xtfyE0ETXe2O08pdo/zQ9UtC6utNZdk18yPIJyvbhAO', '2023-04-28 19:34:28'),
(6, 'Karm Patel', 'xyz@gmail.com', '7878787878', '$2y$10$l3dBqb0IFDixcWvv8U3leuwAvL0F/tSJvaZLqVUFWnO/A5/NilObS', '2023-04-28 19:54:36'),
(8, 'Krishna Tiwari', 'xyz4@gmail.com', '7878787878', '$2y$10$5KPN0w8vjS1AqgoWCenLGebRGQcf6ocpAVRhSFWRlyH2Cj9dGJ/Y.', '2023-04-28 21:51:49'),
(10, 'Nilesh Thakulla', 'jhahfu@gmai.com', '1212121212', '$2y$10$fz9esUitSSWQcoLC/gvVlu8qkJWTIBa2rocYcIPu57EZs1GFLoaf.', '2023-04-29 13:39:42');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
