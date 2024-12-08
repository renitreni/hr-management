<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Spatie\Activitylog\Models\Activity;

class LogsController extends Controller
{
    public function index()
    {
        return Inertia::render('Log/Logs', [
            'logs' => Activity::OrderByDesc('id')->paginate(config('constants.data.pagination_count')),
        ]);
    }
}
