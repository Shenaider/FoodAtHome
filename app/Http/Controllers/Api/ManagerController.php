<?php


namespace App\Http\Controllers\Api;


use App\Http\Controllers\Controller;
use App\Http\Requests\StoreManagerRequest;
use App\Http\Requests\UpdateManagerRequest;
use App\Http\Resources\Manager as ManagerResource;
use App\Models\Manager;
use Illuminate\Http\Request;

class ManagerController extends Controller
{

    public function index(Request $request)
    {
        if ($request->has('page')) {
            return ManagerResource::collection(Manager::paginate(5));
        } else {
            return ManagerResource::collection(Manager::all());
        }
    }

    public function show(Manager $manager)
    {
        return new ManagerResource($manager);
    }

    public function store(StoreManagerRequest $request)
    {
        $manager = new Manager();
        $manager->fill($request->validated());
        $manager->password = bcrypt($manager->password);
        $manager->save();
        return new ManagerResource($manager);
        //return response()->json(new TeacherResource($teacher), 201);
    }

    public function update(UpdateManagerRequest $request, Manager $manager)
    {
        $manager->update($request->validated());
        return new ManagerResource($manager);
    }

    public function destroy(Manager $manager)
    {
        $manager->delete();
    }


    public function emailAvailable(Request $request)
    {
        $totalEmail = 1;
        if ($request->has('email') && $request->has('id')) {
            $totalEmail = Manager::where('email', '=', $request->email)->where('id', '<>', $request->id)->count();
        } else if ($request->has('email')) {
            $totalEmail = Manager::where('email', '=', $request->email)->count();
        }
        return response()->json($totalEmail == 0);
    }

}
