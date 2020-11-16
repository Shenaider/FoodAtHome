<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\Api\DepartmentController;
use App\Http\Controllers\Api\UserController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('departments',           [DepartmentController::class, 'index']);

Route::get('users',                 [UserController::class, 'index']);
Route::get('users/emailavailable',  [UserController::class, 'emailAvailable']);
Route::get('users/{user}',          [UserController::class, 'show']);
Route::post('users',                [UserController::class, 'store']);
Route::put('users/{user}',          [UserController::class, 'update']);
Route::delete('users/{user}',       [UserController::class, 'destroy']);
