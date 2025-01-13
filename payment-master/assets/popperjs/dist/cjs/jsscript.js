const scriptURL = 'https://script.google.com/macros/s/AKfycbzwXqzlNTSudGcXedJS0urM4ya2AbS948ujUgBa7IDnKqxuCX7RYmgytSUEcMPfS1Q/exec'

const form = document.forms['submit-to-google-sheet']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => alert("Confirm Your Payment!"))
    .then(() => { window.location.reload(); })
    .catch(error => console.error('error!', error.message))
})

// Redirect berdasarkan metode pembayaran yang dipilih
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('payment-form').addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent default form submission

        const paymentMethod = document.querySelector('input[name="payment-method"]:checked');
        let redirectUrl = ''; // Default redirect URL

        if (paymentMethod) {
            switch (paymentMethod.value) {
                case 'BRI':
                    redirectUrl = '../qr/brikgasdjhfdsjyhrweiohnfljkwehnohnefnlwenf.html'; // Redirect to tokocrp.html if BRl is selected
                    break;
                case 'Mandiri':
                    redirectUrl = '../qr/mandirijepgtoiewjtgpowejtpogfwej[okgkdwlg.html'; // Redirect to nicehash.html if Mandiri is selected
                    break;
                case 'BCA':
                    redirectUrl = '../qr/bcasdjlhweiofhkslefjweiofhnlwkefjwiejnifjwemnf.html'; // Redirect to tokocrp.html if BRl is selected
                    break;
                case 'DANA':
                    redirectUrl = '../qr/nicehash.html'; // Redirect to nicehash.html if Mandiri is selected
                    break;
                case 'allo-bank':
                    redirectUrl = '../qr/tokocrp.html'; // Redirect to tokocrp.html if BRl is selected
                    break;
                // Add more cases for other payment methods if necessary
            }
        }
        // Redirect user to the selected URL
        if (redirectUrl) {
            window.location.href = redirectUrl;
        }
    });
});

// Menghindari redirect lebih dari sekali
document.addEventListener('DOMContentLoaded', () => {
    // Periksa apakah halaman sudah pernah di-redirect
    if (!sessionStorage.getItem('redirected')) {
        // Jika belum pernah di-redirect, lakukan redirect dan simpan status di sessionStorage
        window.location.href = '../session_index.html'; // Sesuaikan URL tujuan redirect
        // Tandai bahwa redirect telah terjadi
        sessionStorage.setItem('redirected', 'true');
    }
});