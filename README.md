## Installation

### Setup Container
`$ docker-compose up -d`

#### Stop Container
`$ docker-compose stop`

### Login Container
`$ docker-compose exec web bash`

### Install Laravel inside container
`$ composer create-project --prefer-dist laravel/laravel .`

### Launch Development Server
`$ cd /var/www/html/cltw/laravel`

`$ php artisan serve --host 0.0.0.0 --port 8081`

### Setup npm, and install Vue + Bootstrap-Vue
`$ npm install`

`$ npm install -D vue bootstrap-vue`