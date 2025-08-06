<?php

namespace App\Http\Controllers;

use App\Models\Fee;
use App\Models\PaymentProof;
use App\Models\Report;
use App\Models\VirtualAccount;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class HomeController extends Controller
{
    /**
     * Display the home page with role-based dashboard.
     */
    public function index(Request $request)
    {
        if (Auth::check()) {
            return $this->dashboard($request);
        }

        return Inertia::render('welcome');
    }

    /**
     * Display the user dashboard based on role.
     */
    protected function dashboard(Request $request)
    {
        $user = Auth::user();
        $primaryRole = $user->getPrimaryRole();
        
        $data = [
            'user' => $user,
            'role' => $primaryRole,
        ];

        // Add role-specific data
        if ($user->hasRole('user')) {
            $data = array_merge($data, $this->getUserDashboardData($user));
        } elseif ($user->hasRole('officer')) {
            $data = array_merge($data, $this->getOfficerDashboardData($user));
        } elseif ($user->hasRole('admin')) {
            $data = array_merge($data, $this->getAdminDashboardData($user));
        } elseif ($user->hasRole('manager')) {
            $data = array_merge($data, $this->getManagerDashboardData($user));
        }

        return Inertia::render('dashboard', $data);
    }

    /**
     * Get dashboard data for regular users.
     */
    protected function getUserDashboardData($user)
    {
        $virtualAccount = $user->virtualAccount;
        $pendingFees = $user->fees()->where('status', 'pending')->count();
        $recentReports = $user->reports()->latest()->take(5)->get();
        $pendingPayments = $user->paymentProofs()->where('status', 'pending')->count();

        return [
            'virtualAccount' => $virtualAccount,
            'stats' => [
                'pendingFees' => $pendingFees,
                'pendingPayments' => $pendingPayments,
                'totalReports' => $user->reports()->count(),
            ],
            'recentReports' => $recentReports,
        ];
    }

    /**
     * Get dashboard data for officers.
     */
    protected function getOfficerDashboardData($user)
    {
        $fieldReportsCount = $user->fieldReports()->count();
        $wasteCollectionsCount = $user->wasteCollections()->count();
        $recentFieldReports = $user->fieldReports()->latest()->take(5)->get();

        return [
            'stats' => [
                'fieldReports' => $fieldReportsCount,
                'wasteCollections' => $wasteCollectionsCount,
                'todayReports' => $user->fieldReports()->whereDate('report_date', today())->count(),
            ],
            'recentFieldReports' => $recentFieldReports,
        ];
    }

    /**
     * Get dashboard data for admins.
     */
    protected function getAdminDashboardData($user)
    {
        $pendingPayments = PaymentProof::where('status', 'pending')->count();
        $totalUsers = \App\Models\User::count();
        $monthlyRevenue = Fee::where('status', 'paid')
            ->whereMonth('created_at', now()->month)
            ->sum('amount');

        return [
            'stats' => [
                'pendingPayments' => $pendingPayments,
                'totalUsers' => $totalUsers,
                'monthlyRevenue' => $monthlyRevenue,
                'totalFees' => Fee::count(),
            ],
            'recentPayments' => PaymentProof::with(['user', 'fee'])
                ->latest()
                ->take(5)
                ->get(),
        ];
    }

    /**
     * Get dashboard data for managers.
     */
    protected function getManagerDashboardData($user)
    {
        $adminData = $this->getAdminDashboardData($user);
        
        $additionalStats = [
            'totalReports' => Report::count(),
            'resolvedReports' => Report::where('status', 'resolved')->count(),
            'activeOfficers' => \App\Models\User::whereHas('roles', function($q) {
                $q->where('slug', 'officer');
            })->count(),
        ];

        $adminData['stats'] = array_merge($adminData['stats'], $additionalStats);
        
        return $adminData;
    }
}