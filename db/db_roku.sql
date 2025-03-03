-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Mar 16, 2019 at 03:22 AM
-- Server version: 5.7.23
-- PHP Version: 7.2.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Database: `db_roku`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_audio`
--

CREATE TABLE `tbl_audio` (
  `audio_id` int(10) NOT NULL,
  `audio_cover` varchar(20) NOT NULL,
  `audio_title` varchar(50) NOT NULL,
  `audio_artist` varchar(50) NOT NULL,
  `audio_released` year(4) NOT NULL,
  `audio_runtime` varchar(10) NOT NULL,
  `audio_song` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_audio`
--

INSERT INTO `tbl_audio` (`audio_id`, `audio_cover`, `audio_title`, `audio_artist`, `audio_released`, `audio_runtime`, `audio_song`) VALUES
(1, 'dontbecruel.jpg', 'Don\'t Be Cruel', 'Elvis Presley', 1956, '3:09', 'DontBeCruel.mp3'),
(2, 'shout.jpg', 'Shout', 'The Isley Brothers', 1959, '4:18', 'Shout.mp3'),
(3, 'HouseRisingSun.jpg', 'The House of the Rising Sun', 'The Animals', 1964, '4:31', 'HouseRisingSun.mp3'),
(4, 'trueloveways.jpg', 'True Love Ways', 'Buddy Holly', 1958, '3:08', 'TrueLoveWays.mp3'),
(5, 'Satisfaction.jpg', 'Satisfaction', 'The Rolling Stones', 1965, '3:54', 'Satisfaction.mp3'),
(6, 'StayinAlive.jpg', 'Stayin\' Alive', 'Bee Gees', 1977, '4:02', 'StayinAlive.mp3'),
(7, 'LetItBe.jpg', 'Let It Be', 'The Beatles', 1970, '3:54', 'LetItBe.mp3'),
(8, 'BillieJean.jpg', 'Billie Jean', 'Michael Jackson', 1982, '4:53', 'BillieJean.mp3'),
(9, 'DontStopBelievin.jpg', 'Don\'t Stop Believin\'', 'Journey', 1981, '4:10', 'DontStopBelievin.mp3'),
(10, 'wannabe.jpg', 'Wannabe', 'Spice Girls', 1996, '2:56', 'Wannabe.mp3');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_audio_era`
--

CREATE TABLE `tbl_audio_era` (
  `audio_era_id` tinyint(4) NOT NULL,
  `audio_id` tinyint(4) NOT NULL,
  `era_id` tinyint(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_audio_era`
--

INSERT INTO `tbl_audio_era` (`audio_era_id`, `audio_id`, `era_id`) VALUES
(1, 1, 1),
(2, 2, 1),
(3, 3, 2),
(4, 4, 1),
(5, 5, 2),
(6, 6, 3),
(7, 7, 3),
(8, 8, 4),
(9, 9, 4),
(10, 10, 5);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_era`
--

CREATE TABLE `tbl_era` (
  `era_id` int(20) NOT NULL,
  `era_name` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_era`
--

INSERT INTO `tbl_era` (`era_id`, `era_name`) VALUES
(1, '1950'),
(2, '1960'),
(3, '1970'),
(4, '1980'),
(5, '1990');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_movies`
--

CREATE TABLE `tbl_movies` (
  `movie_id` int(20) NOT NULL,
  `movie_cover` varchar(50) NOT NULL,
  `movie_title` varchar(50) NOT NULL,
  `movie_director` varchar(30) NOT NULL,
  `movie_year` year(4) NOT NULL,
  `movie_runtime` varchar(20) NOT NULL,
  `movie_trailer` varchar(100) NOT NULL,
  `movie_rating` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_movies`
--

INSERT INTO `tbl_movies` (`movie_id`, `movie_cover`, `movie_title`, `movie_director`, `movie_year`, `movie_runtime`, `movie_trailer`, `movie_rating`) VALUES
(1, 'RearWindow.jpg', 'Rear Window', 'Alfred Hitchcock', 1954, '112', 'RearWindow.mp4', 'PG'),
(2, 'SinginintheRain.jpg', 'Singin\' In The Rain', 'Gene Kelly & Stanley Donen', 1952, '103', 'SinginintheRain.mp4', 'G'),
(3, 'BonnieClyde.jpg', 'Bonnie and Clyde', 'Arthur Penn', 1967, '111', 'BonnieAndClyde.mp4', 'R'),
(4, 'SoundofMusic.jpg', 'The Sound of Music', 'Robert Wise', 1965, '172', 'TheSoundofMusic.mp4', 'G'),
(5, 'jaws.jpeg', 'Jaws', 'Steven Spielberg', 1975, '124', 'Jaws.mp4', 'PG'),
(6, 'Carrie.jpg', 'Carrie', 'Brian De Palma', 1976, '98', 'Carrie.mp4', 'R'),
(7, 'BacktotheFuture.jpg', 'Back to the Future', 'Robert Zemeckis', 1985, '116', 'BackToTheFuture.mp4', 'PG'),
(8, 'The_Breakfast_Club.jpg', 'The Breakfast Club', 'John Hughes', 1985, '97', 'TheBreakfastClub.mp4', 'R'),
(9, 'pulpfiction.jpg', 'Pulp Fiction', 'Quentin Tarantino', 1994, '154', 'PulpFiction.mp4', 'R'),
(10, 'Titanic.jpeg', 'Titanic', 'James Cameron', 1997, '194', 'Titanic.mp4', 'PG-13');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_movies_era`
--

CREATE TABLE `tbl_movies_era` (
  `movies_era_id` int(20) NOT NULL,
  `movie_id` int(20) NOT NULL,
  `era_id` int(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_movies_era`
--

INSERT INTO `tbl_movies_era` (`movies_era_id`, `movie_id`, `era_id`) VALUES
(1, 1, 1),
(2, 2, 1),
(3, 3, 2),
(4, 4, 2),
(5, 5, 3),
(6, 6, 3),
(7, 7, 4),
(8, 8, 4),
(9, 9, 5),
(10, 10, 5);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_tv`
--

CREATE TABLE `tbl_tv` (
  `tv_id` int(20) NOT NULL,
  `tv_cover` varchar(20) NOT NULL,
  `tv_title` varchar(30) NOT NULL,
  `tv_season` varchar(10) NOT NULL,
  `tv_released` date NOT NULL,
  `tv_runtime` varchar(10) NOT NULL,
  `tv_rating` varchar(10) NOT NULL,
  `tv_trailer` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_tv`
--

INSERT INTO `tbl_tv` (`tv_id`, `tv_cover`, `tv_title`, `tv_season`, `tv_released`, `tv_runtime`, `tv_rating`, `tv_trailer`) VALUES
(11, 'ILoveLucy.jpg', 'I Love Lucy ', '6', '1951-10-15', '30', 'G', 'ILoveLucy.mp4'),
(12, 'GilligansIsland.jpg', 'Gilligan\'s Island', '3', '1967-04-17', '30', 'PG', 'GilligansIsland.mp4'),
(13, 'TheBradyBunch.jpg', 'The Brady Bunch', '5', '1974-03-08', '30', 'G', 'TheBradyBunch.mp4'),
(14, 'HappyDays.jpg', 'Happy Days', '11', '1984-09-24', '30', 'PG', 'HappyDays.mp4'),
(15, 'Cheers.jpg', 'Cheers', '11', '1982-09-30', '30', 'PG', 'Cheers.mp4'),
(16, 'MiamiVice.jpg', 'Miami Vice', '5', '1990-01-25', '60', 'PG', 'MiamiVice.mp4'),
(17, 'GoldenGirls.jpeg', 'The Golden Girls', '7', '1985-09-14', '30', 'PG', 'TheGoldenGirls.mp4'),
(18, 'FreshPrince.jpeg', 'The Fresh Prince of Bel-Air', '6', '1990-09-10', '30', 'PG-14', 'FreshPrince.mp4'),
(19, 'FullHouse.jpg', 'Full House', '8', '1987-09-22', '30', 'G', 'FullHouse.mp4'),
(20, 'Friends.jpg', 'Friends', '10', '1994-09-22', '30', 'PG', 'Friends.mp4');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_tv_era`
--

CREATE TABLE `tbl_tv_era` (
  `tv_era_id` tinyint(4) NOT NULL,
  `tv_id` tinyint(4) NOT NULL,
  `era_id` tinyint(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_tv_era`
--

INSERT INTO `tbl_tv_era` (`tv_era_id`, `tv_id`, `era_id`) VALUES
(1, 11, 1),
(2, 12, 2),
(3, 13, 3),
(4, 14, 3),
(5, 15, 4),
(6, 16, 4),
(7, 17, 4),
(8, 18, 5),
(9, 19, 5),
(10, 20, 5);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_user`
--

CREATE TABLE `tbl_user` (
  `user_id` int(20) NOT NULL,
  `user_fname` varchar(30) NOT NULL,
  `user_name` varchar(20) NOT NULL,
  `user_pass` varchar(30) NOT NULL,
  `user_email` varchar(30) NOT NULL,
  `user_access` tinyint(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_user`
--

INSERT INTO `tbl_user` (`user_id`, `user_fname`, `user_name`, `user_pass`, `user_email`, `user_access`) VALUES
(1, 'admin', 'admin', '123', 'admin@admin.com', 1),
(2, 'Jaclyn', 'Jaclyn', 'jrf', 'jaclynflomen@hotmail.com', 2),
(3, 'Ethan', 'Ethan', 'mara', 'ethan@mara.com', 3);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_audio`
--
ALTER TABLE `tbl_audio`
  ADD PRIMARY KEY (`audio_id`);

--
-- Indexes for table `tbl_audio_era`
--
ALTER TABLE `tbl_audio_era`
  ADD PRIMARY KEY (`audio_era_id`,`era_id`);

--
-- Indexes for table `tbl_era`
--
ALTER TABLE `tbl_era`
  ADD PRIMARY KEY (`era_id`);

--
-- Indexes for table `tbl_movies`
--
ALTER TABLE `tbl_movies`
  ADD PRIMARY KEY (`movie_id`);

--
-- Indexes for table `tbl_movies_era`
--
ALTER TABLE `tbl_movies_era`
  ADD PRIMARY KEY (`movies_era_id`,`movie_id`,`era_id`);

--
-- Indexes for table `tbl_tv`
--
ALTER TABLE `tbl_tv`
  ADD PRIMARY KEY (`tv_id`);

--
-- Indexes for table `tbl_tv_era`
--
ALTER TABLE `tbl_tv_era`
  ADD PRIMARY KEY (`tv_era_id`,`tv_id`,`era_id`);

--
-- Indexes for table `tbl_user`
--
ALTER TABLE `tbl_user`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbl_audio`
--
ALTER TABLE `tbl_audio`
  MODIFY `audio_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `tbl_audio_era`
--
ALTER TABLE `tbl_audio_era`
  MODIFY `audio_era_id` tinyint(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `tbl_era`
--
ALTER TABLE `tbl_era`
  MODIFY `era_id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `tbl_movies`
--
ALTER TABLE `tbl_movies`
  MODIFY `movie_id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `tbl_movies_era`
--
ALTER TABLE `tbl_movies_era`
  MODIFY `movies_era_id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `tbl_tv`
--
ALTER TABLE `tbl_tv`
  MODIFY `tv_id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `tbl_tv_era`
--
ALTER TABLE `tbl_tv_era`
  MODIFY `tv_era_id` tinyint(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `tbl_user`
--
ALTER TABLE `tbl_user`
  MODIFY `user_id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
