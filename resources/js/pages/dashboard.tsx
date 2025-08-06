import React from 'react';
import { Head } from '@inertiajs/react';
import { AppShell } from '@/components/app-shell';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

interface User {
    id: number;
    name: string;
    email: string;
    [key: string]: unknown;
}

interface Role {
    id: number;
    name: string;
    slug: string;
    description: string;
    [key: string]: unknown;
}

interface VirtualAccount {
    id: number;
    account_number: string;
    bank_name: string;
    status: string;
    [key: string]: unknown;
}

interface Stats {
    [key: string]: number | undefined;
}

interface Props {
    user: User;
    role: Role;
    virtualAccount?: VirtualAccount;
    stats?: Stats;
    recentReports?: Array<unknown>;
    recentFieldReports?: Array<unknown>;
    recentPayments?: Array<unknown>;
    [key: string]: unknown;
}

export default function Dashboard({ user, role, virtualAccount, stats, recentReports, recentFieldReports, recentPayments }: Props) {
    return (
        <AppShell>
            <Head title="Dashboard" />
            
            <div className="space-y-6">
                {/* Header */}
                <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-lg p-6 text-white">
                    <h1 className="text-2xl font-bold mb-2">
                        Selamat datang, {user.name}! 👋
                    </h1>
                    <p className="text-green-100">
                        Anda login sebagai <span className="font-semibold">{role.name}</span> - {role.description}
                    </p>
                </div>

                {/* Role-based Dashboard Content */}
                {role.slug === 'user' && (
                    <UserDashboard 
                        virtualAccount={virtualAccount}
                        stats={stats}
                        recentReports={recentReports}
                    />
                )}

                {role.slug === 'officer' && (
                    <OfficerDashboard 
                        stats={stats}
                        recentFieldReports={recentFieldReports}
                    />
                )}

                {role.slug === 'admin' && (
                    <AdminDashboard 
                        stats={stats}
                        recentPayments={recentPayments}
                    />
                )}

                {role.slug === 'manager' && (
                    <ManagerDashboard 
                        stats={stats}
                        recentPayments={recentPayments}
                    />
                )}
            </div>
        </AppShell>
    );
}

interface UserDashboardProps {
    virtualAccount?: VirtualAccount;
    stats?: Stats;
    recentReports?: Array<unknown>;
}

function UserDashboard({ virtualAccount, stats }: UserDashboardProps) {
    return (
        <div className="space-y-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="p-6">
                    <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                            <span className="text-2xl">💳</span>
                        </div>
                        <div>
                            <p className="text-sm text-gray-600">Iuran Tertunggak</p>
                            <p className="text-2xl font-bold text-gray-900">{stats?.pendingFees || 0}</p>
                        </div>
                    </div>
                </Card>

                <Card className="p-6">
                    <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                            <span className="text-2xl">⏳</span>
                        </div>
                        <div>
                            <p className="text-sm text-gray-600">Pembayaran Pending</p>
                            <p className="text-2xl font-bold text-gray-900">{stats?.pendingPayments || 0}</p>
                        </div>
                    </div>
                </Card>

                <Card className="p-6">
                    <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                            <span className="text-2xl">📝</span>
                        </div>
                        <div>
                            <p className="text-sm text-gray-600">Total Laporan</p>
                            <p className="text-2xl font-bold text-gray-900">{stats?.totalReports || 0}</p>
                        </div>
                    </div>
                </Card>
            </div>

            {/* Virtual Account */}
            {virtualAccount && (
                <Card className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">💳 Virtual Account</h3>
                    <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg p-6 text-white">
                        <div className="flex justify-between items-start mb-4">
                            <div>
                                <p className="text-sm opacity-90">Bank</p>
                                <p className="text-xl font-bold">{virtualAccount.bank_name}</p>
                            </div>
                            <div className="text-right">
                                <p className="text-sm opacity-90">Status</p>
                                <span className="px-2 py-1 bg-white/20 rounded text-sm">
                                    {virtualAccount.status === 'active' ? '✅ Aktif' : '❌ Nonaktif'}
                                </span>
                            </div>
                        </div>
                        <div>
                            <p className="text-sm opacity-90">Nomor Virtual Account</p>
                            <p className="text-2xl font-mono font-bold tracking-wider">{virtualAccount.account_number}</p>
                        </div>
                    </div>
                </Card>
            )}

            {/* Quick Actions */}
            <Card className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">🚀 Aksi Cepat</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Button className="h-16 flex-col space-y-2 bg-blue-600 hover:bg-blue-700">
                        <span className="text-2xl">💰</span>
                        <span>Bayar Iuran</span>
                    </Button>
                    <Button className="h-16 flex-col space-y-2 bg-green-600 hover:bg-green-700">
                        <span className="text-2xl">📝</span>
                        <span>Buat Laporan</span>
                    </Button>
                    <Button className="h-16 flex-col space-y-2 bg-purple-600 hover:bg-purple-700">
                        <span className="text-2xl">📊</span>
                        <span>Riwayat</span>
                    </Button>
                </div>
            </Card>
        </div>
    );
}

interface OfficerDashboardProps {
    stats?: Stats;
    recentFieldReports?: Array<unknown>;
}

function OfficerDashboard({ stats }: OfficerDashboardProps) {
    return (
        <div className="space-y-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="p-6">
                    <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                            <span className="text-2xl">📋</span>
                        </div>
                        <div>
                            <p className="text-sm text-gray-600">Laporan Lapangan</p>
                            <p className="text-2xl font-bold text-gray-900">{stats?.fieldReports || 0}</p>
                        </div>
                    </div>
                </Card>

                <Card className="p-6">
                    <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                            <span className="text-2xl">🚛</span>
                        </div>
                        <div>
                            <p className="text-sm text-gray-600">Pengambilan Sampah</p>
                            <p className="text-2xl font-bold text-gray-900">{stats?.wasteCollections || 0}</p>
                        </div>
                    </div>
                </Card>

                <Card className="p-6">
                    <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                            <span className="text-2xl">📅</span>
                        </div>
                        <div>
                            <p className="text-sm text-gray-600">Laporan Hari Ini</p>
                            <p className="text-2xl font-bold text-gray-900">{stats?.todayReports || 0}</p>
                        </div>
                    </div>
                </Card>
            </div>

            {/* Quick Actions */}
            <Card className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">🛠️ Tugas Lapangan</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Button className="h-16 flex-col space-y-2 bg-green-600 hover:bg-green-700">
                        <span className="text-2xl">📋</span>
                        <span>Laporan Kondisi</span>
                    </Button>
                    <Button className="h-16 flex-col space-y-2 bg-blue-600 hover:bg-blue-700">
                        <span className="text-2xl">🚛</span>
                        <span>Catat Sampah</span>
                    </Button>
                    <Button className="h-16 flex-col space-y-2 bg-purple-600 hover:bg-purple-700">
                        <span className="text-2xl">🌡️</span>
                        <span>Data Lingkungan</span>
                    </Button>
                </div>
            </Card>
        </div>
    );
}

interface AdminDashboardProps {
    stats?: Stats;
    recentPayments?: Array<unknown>;
}

function AdminDashboard({ stats }: AdminDashboardProps) {
    return (
        <div className="space-y-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <Card className="p-6">
                    <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                            <span className="text-2xl">⏳</span>
                        </div>
                        <div>
                            <p className="text-sm text-gray-600">Pembayaran Pending</p>
                            <p className="text-2xl font-bold text-gray-900">{stats?.pendingPayments || 0}</p>
                        </div>
                    </div>
                </Card>

                <Card className="p-6">
                    <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                            <span className="text-2xl">👥</span>
                        </div>
                        <div>
                            <p className="text-sm text-gray-600">Total Pengguna</p>
                            <p className="text-2xl font-bold text-gray-900">{stats?.totalUsers || 0}</p>
                        </div>
                    </div>
                </Card>

                <Card className="p-6">
                    <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                            <span className="text-2xl">💰</span>
                        </div>
                        <div>
                            <p className="text-sm text-gray-600">Pendapatan Bulan Ini</p>
                            <p className="text-xl font-bold text-gray-900">
                                Rp {stats?.monthlyRevenue?.toLocaleString('id-ID') || '0'}
                            </p>
                        </div>
                    </div>
                </Card>

                <Card className="p-6">
                    <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                            <span className="text-2xl">📄</span>
                        </div>
                        <div>
                            <p className="text-sm text-gray-600">Total Iuran</p>
                            <p className="text-2xl font-bold text-gray-900">{stats?.totalFees || 0}</p>
                        </div>
                    </div>
                </Card>
            </div>

            {/* Admin Actions */}
            <Card className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">⚙️ Fungsi Admin</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <Button className="h-16 flex-col space-y-2 bg-blue-600 hover:bg-blue-700">
                        <span className="text-2xl">💰</span>
                        <span>Input Iuran</span>
                    </Button>
                    <Button className="h-16 flex-col space-y-2 bg-green-600 hover:bg-green-700">
                        <span className="text-2xl">✅</span>
                        <span>Verifikasi Bayar</span>
                    </Button>
                    <Button className="h-16 flex-col space-y-2 bg-purple-600 hover:bg-purple-700">
                        <span className="text-2xl">📄</span>
                        <span>Buat Invoice</span>
                    </Button>
                    <Button className="h-16 flex-col space-y-2 bg-orange-600 hover:bg-orange-700">
                        <span className="text-2xl">🛒</span>
                        <span>Data Pembelian</span>
                    </Button>
                </div>
            </Card>
        </div>
    );
}

interface ManagerDashboardProps {
    stats?: Stats;
    recentPayments?: Array<unknown>;
}

function ManagerDashboard({ stats }: ManagerDashboardProps) {
    return (
        <div className="space-y-6">
            {/* Comprehensive Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
                <Card className="p-4">
                    <div className="text-center">
                        <div className="text-2xl mb-2">⏳</div>
                        <div className="text-2xl font-bold text-gray-900">{stats?.pendingPayments || 0}</div>
                        <div className="text-xs text-gray-600">Pembayaran Pending</div>
                    </div>
                </Card>

                <Card className="p-4">
                    <div className="text-center">
                        <div className="text-2xl mb-2">👥</div>
                        <div className="text-2xl font-bold text-gray-900">{stats?.totalUsers || 0}</div>
                        <div className="text-xs text-gray-600">Total Pengguna</div>
                    </div>
                </Card>

                <Card className="p-4">
                    <div className="text-center">
                        <div className="text-2xl mb-2">💰</div>
                        <div className="text-lg font-bold text-gray-900">
                            {stats?.monthlyRevenue ? (stats.monthlyRevenue / 1000000).toFixed(1) : 0}M
                        </div>
                        <div className="text-xs text-gray-600">Pendapatan (jt)</div>
                    </div>
                </Card>

                <Card className="p-4">
                    <div className="text-center">
                        <div className="text-2xl mb-2">📄</div>
                        <div className="text-2xl font-bold text-gray-900">{stats?.totalFees || 0}</div>
                        <div className="text-xs text-gray-600">Total Iuran</div>
                    </div>
                </Card>

                <Card className="p-4">
                    <div className="text-center">
                        <div className="text-2xl mb-2">📝</div>
                        <div className="text-2xl font-bold text-gray-900">{stats?.totalReports || 0}</div>
                        <div className="text-xs text-gray-600">Total Laporan</div>
                    </div>
                </Card>

                <Card className="p-4">
                    <div className="text-center">
                        <div className="text-2xl mb-2">✅</div>
                        <div className="text-2xl font-bold text-gray-900">{stats?.resolvedReports || 0}</div>
                        <div className="text-xs text-gray-600">Laporan Selesai</div>
                    </div>
                </Card>

                <Card className="p-4">
                    <div className="text-center">
                        <div className="text-2xl mb-2">👷</div>
                        <div className="text-2xl font-bold text-gray-900">{stats?.activeOfficers || 0}</div>
                        <div className="text-xs text-gray-600">Petugas Aktif</div>
                    </div>
                </Card>
            </div>

            {/* Manager Actions */}
            <Card className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">👨‍💼 Kontrol Manajer</h3>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                    <Button className="h-16 flex-col space-y-2 bg-red-600 hover:bg-red-700">
                        <span className="text-2xl">📊</span>
                        <span>Analytics</span>
                    </Button>
                    <Button className="h-16 flex-col space-y-2 bg-blue-600 hover:bg-blue-700">
                        <span className="text-2xl">👥</span>
                        <span>Kelola User</span>
                    </Button>
                    <Button className="h-16 flex-col space-y-2 bg-green-600 hover:bg-green-700">
                        <span className="text-2xl">📈</span>
                        <span>Laporan</span>
                    </Button>
                    <Button className="h-16 flex-col space-y-2 bg-purple-600 hover:bg-purple-700">
                        <span className="text-2xl">⚙️</span>
                        <span>Pengaturan</span>
                    </Button>
                    <Button className="h-16 flex-col space-y-2 bg-orange-600 hover:bg-orange-700">
                        <span className="text-2xl">🎯</span>
                        <span>Target</span>
                    </Button>
                </div>
            </Card>
        </div>
    );
}