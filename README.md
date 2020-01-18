## Installation

### Dependencies
- PHP 7.4
    - Composer
    - Laravel 6
- JavaScript
    - Node.js(npm)
    - Vue, Bootstrap-Vue, Browsersync
- Docker

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

open `http://0.0.0.0:8081` in your browser.

### Setup npm, and install Vue + Bootstrap-Vue
`$ npm install`

`$ npm install -D vue bootstrap-vue`

### Run Browsersync

`npm run watch`

When it will finish, retype this command again.

After that, open `http://0.0.0.0:3000` with Browsersync in your browser.

