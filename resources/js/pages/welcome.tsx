import React from 'react';
import { Head, Link } from '@inertiajs/react';
import { Button } from '@/components/ui/button';

export default function Welcome() {
    return (
        <>
            <Head title="EcoFee - Sistem Iuran Pengelolaan Lingkungan" />
            
            <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
                {/* Navigation */}
                <nav className="bg-white/80 backdrop-blur-sm border-b border-green-200/50 sticky top-0 z-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex justify-between items-center h-16">
                            <div className="flex items-center space-x-2">
                                <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
                                    <span className="text-white font-bold text-lg">🌿</span>
                                </div>
                                <span className="text-xl font-bold text-gray-900">EcoFee</span>
                            </div>
                            <div className="flex space-x-4">
                                <Link href={route('login')}>
                                    <Button variant="outline" className="border-green-300 text-green-700 hover:bg-green-50">
                                        Masuk
                                    </Button>
                                </Link>
                                <Link href={route('register')}>
                                    <Button className="bg-green-600 hover:bg-green-700 text-white">
                                        Daftar
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </nav>

                {/* Hero Section */}
                <section className="py-20 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto text-center">
                        <div className="mb-8">
                            <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
                                <span className="text-4xl">🏘️</span>
                            </div>
                            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                                🌱 <span className="text-green-600">EcoFee</span>
                            </h1>
                            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
                                Sistem Iuran Pengelolaan Lingkungan yang Modern dan Terintegrasi
                            </p>
                            <p className="text-lg text-gray-500 mb-8 max-w-2xl mx-auto">
                                Kelola iuran lingkungan, laporan kondisi, dan data sampah dengan mudah. 
                                Sistem pembayaran digital dengan bukti upload yang aman.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                            <Link href={route('register')}>
                                <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg">
                                    🚀 Mulai Sekarang
                                </Button>
                            </Link>
                            <Link href={route('login')}>
                                <Button size="lg" variant="outline" className="border-green-300 text-green-700 hover:bg-green-50 px-8 py-4 text-lg">
                                    📱 Demo System
                                </Button>
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Features Section */}
                <section className="py-20 bg-white/50 backdrop-blur-sm">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                ✨ Fitur Unggulan
                            </h2>
                            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                                Solusi lengkap untuk pengelolaan iuran lingkungan dengan 4 peran pengguna
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {/* User Features */}
                            <div className="bg-white rounded-xl p-6 shadow-lg border border-green-100 hover:shadow-xl transition-shadow">
                                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                                    <span className="text-2xl">👤</span>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">Pengguna</h3>
                                <ul className="text-gray-600 space-y-2">
                                    <li>💳 Virtual Account</li>
                                    <li>📸 Upload Bukti Bayar</li>
                                    <li>📝 Buat Laporan</li>
                                    <li>📊 Riwayat Pembayaran</li>
                                </ul>
                            </div>

                            {/* Officer Features */}
                            <div className="bg-white rounded-xl p-6 shadow-lg border border-green-100 hover:shadow-xl transition-shadow">
                                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                                    <span className="text-2xl">👷</span>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">Petugas</h3>
                                <ul className="text-gray-600 space-y-2">
                                    <li>📋 Laporan Lapangan</li>
                                    <li>🚛 Catat Pengambilan Sampah</li>
                                    <li>🌡️ Data Kondisi Lingkungan</li>
                                    <li>📷 Dokumentasi Visual</li>
                                </ul>
                            </div>

                            {/* Admin Features */}
                            <div className="bg-white rounded-xl p-6 shadow-lg border border-green-100 hover:shadow-xl transition-shadow">
                                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                                    <span className="text-2xl">⚙️</span>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">Admin</h3>
                                <ul className="text-gray-600 space-y-2">
                                    <li>💰 Input Data Iuran</li>
                                    <li>🛒 Data Pembelian</li>
                                    <li>📄 Buat Invoice</li>
                                    <li>✅ Verifikasi Pembayaran</li>
                                </ul>
                            </div>

                            {/* Manager Features */}
                            <div className="bg-white rounded-xl p-6 shadow-lg border border-green-100 hover:shadow-xl transition-shadow">
                                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                                    <span className="text-2xl">👨‍💼</span>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">Manajer</h3>
                                <ul className="text-gray-600 space-y-2">
                                    <li>📊 Dashboard Lengkap</li>
                                    <li>🔧 Akses Penuh</li>
                                    <li>📈 Analisis Data</li>
                                    <li>👥 Kelola Tim</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Process Section */}
                <section className="py-20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                🔄 Proses Pembayaran
                            </h2>
                            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                                Pembayaran manual dengan verifikasi admin yang aman dan terpercaya
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="text-center">
                                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-3xl">1️⃣</span>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">Upload Bukti</h3>
                                <p className="text-gray-600">
                                    Pengguna upload bukti pembayaran melalui virtual account
                                </p>
                            </div>

                            <div className="text-center">
                                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-3xl">2️⃣</span>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">Verifikasi Admin</h3>
                                <p className="text-gray-600">
                                    Admin memverifikasi dan menyetujui bukti pembayaran
                                </p>
                            </div>

                            <div className="text-center">
                                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-3xl">3️⃣</span>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">Invoice Terbit</h3>
                                <p className="text-gray-600">
                                    System otomatis menerbitkan invoice setelah verifikasi
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-20 bg-green-600">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            🎯 Siap untuk Digitalisasi Iuran Lingkungan?
                        </h2>
                        <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
                            Bergabung dengan komunitas yang peduli lingkungan dan kelola iuran dengan lebih efisien
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href={route('register')}>
                                <Button size="lg" variant="secondary" className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 text-lg">
                                    🌟 Daftar Gratis
                                </Button>
                            </Link>
                            <Link href={route('login')}>
                                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-4 text-lg">
                                    📞 Hubungi Kami
                                </Button>
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Footer */}
                <footer className="bg-gray-900 text-white py-12">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <div className="flex items-center justify-center space-x-2 mb-4">
                            <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold text-lg">🌿</span>
                            </div>
                            <span className="text-xl font-bold">EcoFee</span>
                        </div>
                        <p className="text-gray-400 mb-4">
                            Sistem Iuran Pengelolaan Lingkungan - Menuju Lingkungan yang Lebih Bersih dan Terorganisir
                        </p>
                        <p className="text-sm text-gray-500">
                            © 2024 EcoFee. Semua hak dilindungi. 🌍 Untuk Bumi yang Lebih Baik.
                        </p>
                    </div>
                </footer>
            </div>
        </>
    );
}