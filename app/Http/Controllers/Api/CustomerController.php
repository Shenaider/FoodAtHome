<?php


namespace App\Http\Controllers\Api;


use App\Http\Controllers\Controller;
use App\Http\Requests\StoreCustomerRequest;
use App\Http\Requests\UpdateCustomerRequest;
use App\Http\Resources\Customer as CustomerResource;
use App\Models\Customer;
use Illuminate\Http\Request;

class CustomerController extends Controller
{

    public function index(Request $request)
    {
        if ($request->has('page')) {
            return CustomerResource::collection(Customer::paginate(5));
        } else {
            return CustomerResource::collection(Customer::all());
        }
    }

    public function show(Customer $customer)
    {
        return new CustomerResource($customer);
    }

    public function store(StoreCustomerRequest $request)
    {
        $customer = new Customer();
        $customer->fill($request->validated());
        $customer->password = bcrypt($customer->password);
        $customer->save();
        return new CustomerResource($customer);
        //return response()->json(new TeacherResource($teacher), 201);
    }

    public function update(UpdateCustomerRequest $request, Customer $customer)
    {
        $customer->update($request->validated());
        return new CustomerResource($customer);
    }

    public function destroy(Customer $customer)
    {
        $customer->delete();
    }


    public function emailAvailable(Request $request)
    {
        $totalEmail = 1;
        if ($request->has('email') && $request->has('id')) {
            $totalEmail = Customer::where('email', '=', $request->email)->where('id', '<>', $request->id)->count();
        } else if ($request->has('email')) {
            $totalEmail = Customer::where('email', '=', $request->email)->count();
        }
        return response()->json($totalEmail == 0);
    }

}
