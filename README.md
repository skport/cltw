## Installation

### Setup Container
`$ docker-compose up -d`

#### Stop Container
`$ docker-compose stop`

### Login Container
`$ docker-compose exec cltw_web bash`

### Install Laravel inside container
`$ composer create-project --prefer-dist laravel/laravel .`

### Launch Developmet Server
`$ php artisan serve --host 0.0.0.0 --port 8081`

### Setup npm
`$ docker-compose exec cltw_web npm install`

`$ docker-compose exec cltw_web npm run watch`