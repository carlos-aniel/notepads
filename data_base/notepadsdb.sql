DROP DATABASE IF EXISTS notepads;
CREATE DATABASE IF NOT EXISTS notepads
DEFAULT CHARACTER SET utf8
DEFAULT COLLATE utf8_general_ci;

USE notepads;

CREATE TABLE usu(
idU INT NOT NULL AUTO_INCREMENT,
email VARCHAR(100) NOT NULL,
usuario VARCHAR(50),
senha BLOB,
notesU INT,
foldersU INT,
publicnotesU INT,
PRIMARY KEY(idU)
)DEFAULT CHARSET = utf8;

CREATE TABLE notes(
idN INT NOT NULL UNIQUE AUTO_INCREMENT,
tituloN VARCHAR(70) DEFAULT 'SEM TITULO',
conteudo BLOB DEFAULT 'Sem Conteudo',
usuN INT,
PRIMARY KEY(idN)
)DEFAULT CHARSET = utf8;

CREATE TABLE publicnotes(
idP INT NOT NULL UNIQUE AUTO_INCREMENT,
tituloP VARCHAR(70) DEFAULT 'SEM TITULO',
conteudo BLOB DEFAULT 'Sem Conteudo',
usuP INT,
notesP INT,
PRIMARY KEY(idP)
)DEFAULT CHARSET = utf8;

CREATE TABLE folders(
idF INT NOT NULL UNIQUE AUTO_INCREMENT,
tituloF VARCHAR(20) DEFAULT 'SEM TITULO',
notesF INT,
usuF INT,
PRIMARY KEY(idF)
)DEFAULT CHARSET = utf8;

ALTER TABLE usu ADD FOREIGN KEY(notesU) REFERENCES notes(idN);
ALTER TABLE usu ADD FOREIGN KEY(foldersU) REFERENCES folders(idF);
ALTER TABLE usu ADD FOREIGN KEY(publicnotesU) REFERENCES publicnotes(idP);

ALTER TABLE notes ADD FOREIGN KEY(usuN) REFERENCES usu(idU);

ALTER TABLE publicnotes ADD FOREIGN KEY(usuP) REFERENCES usu(idU);
ALTER TABLE publicnotes ADD FOREIGN KEY(notesP) REFERENCES notes(idN);

ALTER TABLE folders ADD FOREIGN KEY(notesF) REFERENCES notes(idN);
ALTER TABLE folders ADD FOREIGN KEY(usuF) REFERENCES usu(idU);

