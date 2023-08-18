-- phpMyAdmin SQL Dump
-- version 6.0.0-dev+20230817.2d750385c0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 18, 2023 at 10:15 AM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `blogging`
--

-- --------------------------------------------------------

--
-- Table structure for table `comments`
--

CREATE TABLE `comments` (
  `id` int(11) NOT NULL,
  `uid` int(11) NOT NULL,
  `postid` int(11) NOT NULL,
  `comment` varchar(1000) NOT NULL,
  `date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `comments`
--

INSERT INTO `comments` (`id`, `uid`, `postid`, `comment`, `date`) VALUES
(1, 31, 13, 'you are absolutly briliant', '2023-08-08'),
(3, 31, 12, 'post 12', '0000-00-00'),
(5, 28, 21, 'the photo of teg is so good', '0000-00-00'),
(6, 28, 21, 'the photo of teg is so good', '0000-00-00'),
(9, 28, 12, 'this is second comment i hope you get the good thing in the world that you want', '2023-08-06'),
(11, 28, 12, 'kalab its a greate job you did it', '0000-00-00'),
(12, 28, 13, 'donkey is the best', '0000-00-00'),
(13, 28, 20, 'omg i know many things by this post it is greate thing that i ever seen blohal kalab shiferaw he is stupid boy', '0000-00-00'),
(14, 28, 11, 'this is the first comment for this post', '0000-00-00'),
(15, 28, 11, 'what about this', '0000-00-00'),
(16, 28, 11, 'this is with date', '2023-08-12'),
(17, 28, 17, 'this is the best dorowot i ever seen', '2023-08-14'),
(18, 35, 11, 'This is panting page', '2023-08-15'),
(19, 35, 21, 'this is testy tej i have ever test', '2023-08-15'),
(20, 35, 17, 'doro is the best ethiopian cultural food', '2023-08-15'),
(21, 35, 12, 'this is comment\n', '2023-08-15'),
(22, 35, 11, 'this is the second comment', '2023-08-15'),
(23, 35, 25, 'bettisha', '2023-08-15'),
(24, 35, 12, 'this is to check message', '2023-08-16'),
(25, 35, 12, 'hellow', '2023-08-16'),
(26, 35, 12, 'hello', '2023-08-16'),
(27, 35, 12, 'post has been creted', '2023-08-16'),
(28, 35, 12, 'nbnb', '2023-08-16'),
(29, 35, 12, 'this is alert', '2023-08-16'),
(30, 35, 12, 'betty', '2023-08-16'),
(31, 35, 12, 'merry', '2023-08-16'),
(32, 35, 13, 'commnet add', '2023-08-16'),
(33, 35, 13, 'this is comment', '2023-08-16'),
(34, 35, 30, 'this is commnet', '2023-08-16'),
(35, 35, 30, 'bnvbnvbn', '2023-08-16'),
(36, 35, 30, 'button check', '2023-08-16'),
(37, 35, 30, 'button', '2023-08-16'),
(38, 35, 30, 'button', '2023-08-16'),
(39, 35, 30, 'check', '2023-08-16');

-- --------------------------------------------------------

--
-- Table structure for table `posts`
--

CREATE TABLE `posts` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `descr` varchar(10000) NOT NULL,
  `img` varchar(255) NOT NULL,
  `date` date NOT NULL,
  `uid` varchar(45) NOT NULL,
  `cat` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `posts`
--

INSERT INTO `posts` (`id`, `title`, `descr`, `img`, `date`, `uid`, `cat`) VALUES
(13, 'yebirhan enat', '<p><span style=\"background-color: rgb(255, 255, 255); color: rgb(119, 119, 119);\">What is Adam and Eve\'s fault? How much should it cost mankind to eat the fruit of a tree? Why did God create the tree in the first place? After he created it, why did he want to stop it? Why doesn\'t he destroy the tree that prevents them? If the tree is a tree that shows good and evil, does it mean that God wants human beings not to know good and evil? Why were Adam and Eve\'s eyes opened when they ate the fruit of the tree? Does that mean that the snake\'s idea was correct? Why didn\'t both of them die the day they ate the fruit of the tree? What was Eve\'s sin? Eve is misled and suffers a lot. Was Adams an innocent man?What is Adam and Eve\'s fault? How much should it cost mankind to eat the fruit of a tree? Why did God create the tree in the first place? After he created it, why did he want to stop it? Why doesn\'t he destroy the tree that prevents them? If the tree is a tree that shows good and evil, does it mean that God wants human beings not to know good and evil? Why were Adam and Eve\'s eyes opened when they ate the fruit of the tree? Does that mean that the snake\'s idea was correct? Why didn\'t both of them die the day they ate the fruit of the tree? What was Eve\'s sin? Eve is misled and suffers a lot. Was Adams an innocent man?What is Adam and Eve\'s fault? How much should it cost mankind to eat the fruit of a tree? Why did God create the tree in the first place? After he created it, why did he want to stop it? Why doesn\'t he destroy the tree that prevents them? If the tree is a tree that shows good and evil, does it mean that God wants human beings not to know good and evil? Why were Adam and Eve\'s eyes opened when they ate the fruit of the tree? Does that mean that the snake\'s idea was correct? Why didn\'t both of them die the day they ate the fruit of the tree? What was Eve\'s sin? Eve is misled and suffers a lot. Was Adams an innocent man?What is Adam and Eve\'s fault? How much should it cost mankind to eat the fruit of a tree? Why did God create the tree in the first place? After he created it, why did he want to stop it? Why doesn\'t he destroy the tree that prevents them? If the tree is a tree that shows good and evil, does it mean that God wants human beings not to know good and evil? Why were Adam and Eve\'s eyes opened when they ate the fruit of the tree? Does that mean that the snake\'s idea was correct? Why didn\'t both of them die the day they ate the fruit of the tree? What was Eve\'s sin? Eve is misled and suffers a lot. Was Adams an innocent man?</span></p>', '1691784823080ye-berhan-enat-diakon-henok-haile (1).jpg', '2023-08-10', '3', 'art'),
(14, 'Alem Cinema', '<h3 class=\"ql-align-justify\">Alem Cinema is a pioneer and leader in the cinema industry. It was the first privately owned cinema in Ethiopia opened in April 2004. Alem Cinema is committed to nurture the advancement of the cinema business. It is very reputable for creating opportunities to domestic filmmakers who produce films in local languages. For the past 15 years, Alem Cinema has been the preferred choice because they offer many attractive benefits such as refreshments, comfort seating, and clear screenings. The cinema operates two movie theaters with a combined seat capacity of over 700. We consistently offer new entertaining movies in Amharic on a regular basis (Monday to Sunday). We have three spots everyday scheduled in two hour intervals at each of the two theaters. Saturday and Sunday we screen children’s films as well. Alem Cinema’s staff will ensure our customers are well treated and that they enjoy themselves during their visit.</h3><h3 class=\"ql-align-justify\">Alem Cinema is a pioneer and leader in the cinema industry. It was the first privately owned cinema in Ethiopia opened in April 2004. Alem Cinema is committed to nurture the advancement of the cinema business. It is very reputable for creating opportunities to domestic filmmakers who produce films in local languages. For the past 15 years, Alem Cinema has been the preferred choice because they offer many attractive benefits such as refreshments, comfort seating, and clear screenings. The cinema operates two movie theaters with a combined seat capacity of over 700. We consistently offer new entertaining movies in Amharic on a regular basis (Monday to Sunday). We have three spots everyday scheduled in two hour intervals at each of the two theaters. Saturday and Sunday we screen children’s films as well. Alem Cinema’s staff will ensure our customers are well treated and that they enjoy themselves during their visit.</h3><p><br></p>', '1691747559223alem.jpg', '2023-08-10', '6', 'cinema'),
(17, 'doro wot', '<p>Doro WatDoro Wat is a spicy, delicious Ethiopian and Eritrean chicken stew. It is a part of a larger Ethiopian meal,&nbsp;</p><p>commonly served with other dishes like braised cabbage, carrots and potatoes, Misir Wat and Zilzil Tibs with injera,&nbsp;</p><p>a sour fermented pancake-like flatbread with a slightly spongy texture.</p><p>Doro Wat</p><p>Instructions</p><p>Traditionally in Ethiopian cooking, raw chicken is cleaned with vinegar or lemon or lime juice before it is used in cooking. To do so, place a large bowl in a clean sink. Put the chicken thighs and drumsticks in the bowl. Pour lemon juice or vinegar over the chicken followed by water until the chicken is completely submerged. Use your hands to gently massage the chicken for 30 seconds to 1 minute. Pour off the water. Submerge the chicken in more water, this time adding no lemon juice or vinegar. Massage for another 30 seconds to 1 minute, then pour off the water. Pierce the chicken a few times with a knife, then sprinkle salt over top to tenderize and season the chicken. Let chicken stand for 30 minutes.</p><p><br></p><p>In a saucepan, over medium-low heat, add the onions (without using any oil). Cook, stirring often, until the onions are caramelized. This should take at least an hour.</p><p><br></p><p>Add the oil to the onions and sauté, stirring often, for an additional 15 to 20 minutes until the onions darken further in colour.</p><p><br></p><p>Add the berbere, garlic, ginger, cardamom, and ghee to the onions.</p><p><br></p><p>Add the chicken; stir to combine everything. Cover and cook for 10 minutes.</p><p><br></p><p>Add 1 cup (250 mL) of water. Cover and cook for an additional 30 minutes.</p><p><br></p><p>Meanwhile, fill a separate pot with water; add the eggs. Bring the water to a boil and gently boil the eggs for about 10 minutes until hard-cooked. Drain the water, then submerge the eggs in an ice bath until they are cool enough to handle.</p><p><br></p><p>Peel the eggs, then cut into pieces and add them to the chicken mixture.</p><p><br></p><p>Adjust the seasoning adding mekelesha as desired, and salt to taste. Enjoy the Doro Wat with injera, rice or naan.</p><p><br></p><p>&nbsp;Notes</p><p>Created for eggs.ca by Nadia Boachie. Nadia is the creative mind behind Travelandmunchies, a media platform where she explores the world through global recipes she makes in her kitchen. You can find her on Instagram, TikTok or her site, Travelandmunchies.</p>', '1691747026085doro.jpg', '2023-08-10', '3', 'Food'),
(21, 'All you need to know about Ethiopian drink Tej', '<p><br></p><p>Often Tej is called Drink of the Kings. Tej is a national&nbsp;alcoholic&nbsp;<strong>drink</strong>&nbsp;of Ethiopia made by the fermentation of honey mixed with water and Gesho (Rhamnus prinoides), and flavored with a variety of spices. It is a type of mead or honey wine.</p><p>Nowadays anybody, irrespective of social rank, can undertake the preparations of Tej either for consumption or commercial purposes. But it seems that this was not possible in the past. A person of 87 years of age by the name of Mr. Welde Maryam said: “Particularly in the days of Emperor Menilek II and previously and for some time during Queen Zawditu’s reign, the only place where Tej can be prepared was only in the Royal Palace. The making of&nbsp;Tej was a privilege that was reserved for the Royal household. No other person could make it without special permission. The Ras and Deja Azmach( Governor and Generals) were granted permission to prepare Tej either for special occasions such as marriages, banquets, or for everyday use.</p><p><br></p><p>Often Tej is called Drink of the Kings. Tej is a national&nbsp;alcoholic&nbsp;<strong>drink</strong>&nbsp;of Ethiopia made by the fermentation of honey mixed with water and Gesho (Rhamnus prinoides), and flavored with a variety of spices. It is a type of mead or honey wine.</p><p>Nowadays anybody, irrespective of social rank, can undertake the preparations of Tej either for consumption or commercial purposes. But it seems that this was not possible in the past. A person of 87 years of age by the name of Mr. Welde Maryam said: “Particularly in the days of Emperor Menilek II and previously and for some time during Queen Zawditu’s reign, the only place where Tej can be prepared was only in the Royal Palace. The making of&nbsp;Tej was a privilege that was reserved for the Royal household. No other person could make it without special permission. The Ras and Deja Azmach( Governor and Generals) were granted permission to prepare Tej either for special occasions such as marriages, banquets, or for everyday use.</p><p><br></p>', '1691746968952teg.jpg', '2023-08-11', '7', 'Food'),
(24, 'this is to be delete', '<p>this is to be deletethis is to be deletethis is to be deletethis is to be deletethis is to be deletethis is to be deletethis is to be deletethis is to be deletethis is to be deletethis is to be deletethis is to be deletethis is to be deletethis is to be deletethis is to be deletethis is to be deletethis is to be deletethis is to be deletethis is to be deletethis is to be deletethis is to be deletethis is to be delete</p>', '1692020904446teg.jpg', '2023-08-14', '36', 'cinema'),
(25, 'to test delee account new', '<p>to test delee account newto test delee account newto test delee account newto test delee account newto test delee account newto test delee account new</p>', '1692022037882paintings.jpg', '2023-08-14', '37', 'art'),
(30, 'jkhjkfghdfkjhkj', '<p>fngksdhfgkjriuejhgrjtkhuyg this us betty i n post do you beleve thes</p>', '1692187942873yahunu.png', '2023-08-16', '35', 'science'),
(31, 'bettyndbfh', '<p>dbfhgh thiw whr u sSUD FO YOU BEKEVI DUTJU</p>', '1692188092664tech.jpg', '2023-08-16', '35', 'Technology');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(45) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `img` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `email`, `password`, `img`) VALUES
(3, 'merry', 'mar@gmail.com', '$2b$10$GGuIlwmiWDmfIx6XwyM0v.KFa0llUX6teb7VkgrTRuvu5wKLNjOLm', ''),
(13, 'richo', 'richo@gmail.com', '$2b$10$a0AEne.axPm3fxjJ8780nuKglZGeR1C3MqwIW0k83zxaV2B63rwsW', ''),
(28, 'sele', 'sele@gmail.com', '$2b$10$Zo7Db7Vjd7aIRviEm2ve3u023OKjExr08ZQ3DtaMXFi1Tq.7liXDm', ''),
(31, 'kid', 'kid@gmail.com', '$2b$10$8Awu2ygr9g7Du4oAKaWmHuP41ANLOC66XSTBxeWo6iyAyMBpbSyVq', ''),
(32, 'betty', 'betty@gmail.com', '$2b$10$3hgSxY/48/hwSV3ukh1Jq.kteTnJW/WAXKhyGn2s0GzZuHvhnWzuu', ''),
(35, 'abisha', 'abi@gmail.com', '$2b$10$.WsPHXTHNsfmiBBJ1YzQVuiCjJ4m3j55bE9INnrOpdpSt9.2nfi4q', '1692093572554pro.jpg'),
(42, 'baby', 'baby@gmail.com', '$2b$10$356jxiWtmPJ0i/7eQ2o7buekHS9isrCHKIiY9LdTRe.3LmGfjK/pS', ''),
(43, 'sebe', 'sebe@gmail.com', '$2b$10$iqiPDPivBeirG.uUHkNbq.TxMqwwacQAyrSjUJIWPPomtbBX.qMNS', '');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `comments`
--
ALTER TABLE `comments`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `comments`
--
ALTER TABLE `comments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=40;

--
-- AUTO_INCREMENT for table `posts`
--
ALTER TABLE `posts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=44;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
<br />
<b>Fatal error</b>:  Uncaught Laminas\HttpHandlerRunner\Exception\EmitterException: Unable to emit response; headers already sent in C:\xampp\phpMyAdmin\libraries\classes\Export\Export.php:213 in C:\xampp\phpMyAdmin\vendor\laminas\laminas-httphandlerrunner\src\Exception\EmitterException.php:15
Stack trace:
#0 C:\xampp\phpMyAdmin\vendor\laminas\laminas-httphandlerrunner\src\Emitter\SapiEmitterTrait.php(38): Laminas\HttpHandlerRunner\Exception\EmitterException::forHeadersSent('C:\\xampp\\phpMyA...', 213)
#1 C:\xampp\phpMyAdmin\vendor\laminas\laminas-httphandlerrunner\src\Emitter\SapiEmitter.php(21): Laminas\HttpHandlerRunner\Emitter\SapiEmitter-&gt;assertNoPreviousOutput()
#2 C:\xampp\phpMyAdmin\vendor\laminas\laminas-httphandlerrunner\src\RequestHandlerRunner.php(75): Laminas\HttpHandlerRunner\Emitter\SapiEmitter-&gt;emit(Object(PhpMyAdmin\Http\Response))
#3 C:\xampp\phpMyAdmin\libraries\classes\Application.php(138): Laminas\HttpHandlerRunner\RequestHandlerRunner-&gt;run()
#4 C:\xampp\phpMyAdmin\public\index.php(32): PhpMyAdmin\Application-&gt;run()
#5 {main}
  thrown in <b>C:\xampp\phpMyAdmin\vendor\laminas\laminas-httphandlerrunner\src\Exception\EmitterException.php</b> on line <b>15</b><br />
