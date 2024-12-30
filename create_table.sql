CREATE TABLE `user` (
    `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'Primary Key',
    `create_time` datetime DEFAULT CURRENT_TIMESTAMP COMMENT 'Create Time',
    `email` varchar(255) NOT NULL,
    `password` varchar(255) NOT NULL,
    PRIMARY KEY (`id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_general_ci