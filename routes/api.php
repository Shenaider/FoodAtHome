<?php

use App\Http\Controllers\Api\AuthController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\Api\ManagerController;
use App\Http\Controllers\Api\CustomerController;
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

Route::get('managers/emailavailable',  [ManagerController::class, 'emailAvailable']);
Route::get('managers/{manager}',          [ManagerController::class, 'show']);
Route::post('managers',                [ManagerController::class, 'store']);
Route::put('managers/{manager}',          [ManagerController::class, 'update']);
Route::delete('managers/{manager}',       [ManagerController::class, 'destroy']);

Route::get('customers/emailavailable',  [CustomerController::class, 'emailAvailable']);
Route::get('customers/{customer}',          [CustomerController::class, 'show']);
Route::post('customers',                [CustomerController::class, 'store']);
Route::put('customers/{customer}',          [CustomerController::class, 'update']);
Route::delete('customers/{customer}',       [CustomerController::class, 'destroy']);

Route::post('login', [AuthController::class, 'login']);
Route::middleware('auth:sanctum')->post('logout', [AuthController::class, 'logout']);
Route::middleware('auth:sanctum')->get('users/me', [UserController::class, 'me']);
Route::middleware('auth:sanctum')->get('managers/me', [ManagerController::class, 'index']);
Route::middleware('auth:sanctum')->get('customers/me', [CustomerController::class, 'index']);
