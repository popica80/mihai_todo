<?php

use Illuminate\Http\Request;

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user()->only('id', 'name', 'api_token');
});

Route::get('todos', 'TodoController@index');
Route::post('todos', 'TodoController@store')->middleware('auth:api');

Route::post('/auth/login', 'AuthController@login');
Route::post('/auth/register', 'AuthController@register');
