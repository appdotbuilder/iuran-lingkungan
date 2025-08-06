<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreReportRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return $this->user()->hasRole('user');
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'title' => 'required|string|max:255',
            'description' => 'required|string|max:2000',
            'type' => 'required|in:complaint,suggestion,emergency,general',
            'priority' => 'required|in:low,medium,high,urgent',
            'location' => 'nullable|string|max:500',
            'attachments' => 'nullable|array|max:5',
            'attachments.*' => 'file|mimes:jpg,jpeg,png,pdf|max:2048',
        ];
    }

    /**
     * Get custom error messages for validator errors.
     *
     * @return array<string, string>
     */
    public function messages(): array
    {
        return [
            'title.required' => 'Judul laporan harus diisi.',
            'title.max' => 'Judul laporan maksimal 255 karakter.',
            'description.required' => 'Deskripsi laporan harus diisi.',
            'description.max' => 'Deskripsi laporan maksimal 2000 karakter.',
            'type.required' => 'Jenis laporan harus dipilih.',
            'type.in' => 'Jenis laporan tidak valid.',
            'priority.required' => 'Prioritas laporan harus dipilih.',
            'priority.in' => 'Prioritas laporan tidak valid.',
            'location.max' => 'Lokasi maksimal 500 karakter.',
            'attachments.max' => 'Maksimal 5 file lampiran.',
            'attachments.*.file' => 'Lampiran harus berupa file.',
            'attachments.*.mimes' => 'Lampiran harus berformat JPG, JPEG, PNG, atau PDF.',
            'attachments.*.max' => 'Ukuran file lampiran maksimal 2MB.',
        ];
    }
}