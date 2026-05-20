# Stack LAMP Demo

Ce projet lance une stack LAMP simple avec trois services :

- `php` : `php:8.2-apache`, exposé sur `http://localhost:8080`
- `db` : `mysql:8`, avec persistance des données
- `phpmyadmin` : exposé sur `http://localhost:8081`

## Prérequis

- Docker
- Docker Compose

## Lancer le projet

Depuis le dossier `jour4/job07`, exécutez :

```bash
docker compose up -d
```

## Accès

- Application PHP : http://localhost:8080
- phpMyAdmin : http://localhost:8081

## Identifiants MySQL

- Base de données : `lamp_demo`
- Utilisateur : `dev`
- Mot de passe utilisateur : `devpassword`
- Mot de passe root : `rootpassword`

## Persistance

Les données MySQL sont stockées dans le volume Docker nommé `db_data`.

## Arrêter la stack

```bash
docker compose down
```
