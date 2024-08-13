function calculateBMI() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value) / 100;
    const bmi = weight / (height * height);
    
    let category, description;
    if (bmi < 18.5) {
        category = "Kurang";
        description = "Anda berada dalam kategori underweight atau berat badan kurang.";
    } else if (bmi >= 18.5 && bmi < 25) {
        category = "Normal";
        description = "Anda berada dalam kategori normal.";
    } else if (bmi >= 25 && bmi < 30) {
        category = "Lebih";
        description = "Anda berada dalam kategori overweight atau berat badan berlebih.";
    } else {
        category = "Obesitas";
        description = "Anda berada dalam kategori obesitas.";
    }
    
    document.getElementById('bmi-result').textContent = bmi.toFixed(1);
    document.getElementById('category').textContent = category;
    document.getElementById('bmi-description').textContent = description;
}

function resetForm() {
    document.getElementById('weight').value = '';
    document.getElementById('age').value = '';
    document.getElementById('height').value = '';
    document.getElementById('bmi-result').textContent = '';
    document.getElementById('category').textContent = '';
    document.getElementById('bmi-description').textContent = '';
}

function downloadResult() {
    alert('Fungsi download hasil BMI akan diimplementasikan di sini.');
}

function consultNutrition() {
    alert('Fungsi konsultasi ahli gizi via aplikasi akan diimplementasikan di sini.');
}

function registerOnline() {
    alert('Fungsi registrasi online ahli gizi akan diimplementasikan di sini.');
}