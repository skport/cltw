**NOTICE : This Document is Draft!**

## Dependencies
- PHP 7.4
    - Composer
    - Laravel 6 (Laravel Mix)
- JavaScript
    - Node.js(npm)
    - Vue, Bootstrap-Vue, Vue Router, BrowserSync
- Docker

## Installation

### 1. Setup Container
`$ docker-compose up -d`

#### Stop Container
`$ docker-compose stop`

### 2. Login Web Container
`$ docker-compose exec web bash`

### 3. Install Laravel inside web container
`$ composer create-project --prefer-dist laravel/laravel .`

### 4. Launch Development Server
`$ cd /var/www/html/cltw/laravel`

`$ php artisan serve --host 0.0.0.0 --port 8081`

open `http://0.0.0.0:8081` in your browser.

### 5. Setup npm, and install Vue + Bootstrap-Vue
`$ npm install`

`$ npm install -D vue bootstrap-vue`

### 6. Run BrowserSync

`$ npm run watch`

When it will finish, retype this command again.

After that, open `http://0.0.0.0:3000` with BrowserSync in your browser.

### 7. Install Vue Router

`$ npm install -D vue-router`

### 8. Install [laravel/socialite](https://github.com/laravel/socialite)
`$ cd /var/www/html/cltw/laravel`

`$ composer require laravel/socialite`