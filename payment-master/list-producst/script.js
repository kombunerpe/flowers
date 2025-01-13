const productData = [
            {
                imageUrl: 'img/output-onlinepngtools.png',
                price: 'Rp.25.000,00',
                fuelEfficiency: '8.5/7.1',
                engine: '1.4L MultiAir 16V I-4 Turbo',
                horsepower: '135 hp',
                options: {
                    '100': 'Rp.25.000,00',
                    '200': 'Rp.45.000,00',
                    '500': 'Rp.70.000,00',
                    '1000': 'Rp.500.000,00'
                }
            },
            {
                imageUrl: 'img/facebook.png',
                price: 'Rp.45.000,00',
                fuelEfficiency: '8.5/7.1',
                engine: '1.4L MultiAir 16V I-4 Turbo',
                horsepower: '135 hp',
                options: {
                    '100': 'Rp.45.000,00',
                    '200': 'Rp.80.000,00',
                    '500': 'Rp.100.000,00',
                    '1000': 'Rp.600.000,00'
                }
            },
            {
                imageUrl: 'img/youtube.png',
                price: 'Rp.70.000,00',
                fuelEfficiency: '',
                engine: '1.4L MultiAir 16V I-4 Turbo',
                horsepower: '135 hp',
                options: {
                    '100': 'Rp.70.000,00',
                    '200': 'Rp.90.000,00',
                    '500': 'Rp.120.000,00',
                    '1000': 'Rp.650.000,00'
                }
            },
        ];

        function generateCard(product) {
            return 
            <div class="col-sm-4 col-md-3 col-lg-2">
                <div class="card">
                    <img src="${product.imageUrl}" class="card-img-top">
                    <div class="card-body pt-0 px-0">
                        <div class="d-flex flex-row justify-content-between mb-0 px-3">
                            <small class="text-muted mt-1">PRICE</small>
                           
                            <input class="product-price" type="text" id="price" name="price" required>${product.price}</</input>
                        </div>
                        <hr class="mt-2 mx-3">
                        <div class="d-flex flex-row justify-content-between px-3 pb-4">
                            <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                    <label class="input-group-text" for="inputGroupSelect01">Options</label>
                                </div>
                                <select class="custom-select option-select" data-product-index="${productData.indexOf(product)}" id="inputGroupSelect01">
                                    <option selected>Choose...</option>
                                    <option value="100">100</option>
                                    <option value="200">200</option>
                                    <option value="500">500</option>
                                    <option value="1000">1000</option>
                                </select>
                            </div>
                        </div>
                        <small class="text-muted key pl-3">Standard key Features</small>
                        <div class="mx-3 mt-3 mb-2">
                            <button type="button" class="btn btn-warning btn-block btn-rounded"><small>PAY</small></button>
                        </div>
                        <small class="d-flex justify-content-center text-muted"></small>
                    </div>
                </div>
            </div>
            ;
        }

        // Inject product cards into the page
        const container = document.getElementById('product-cards-container');
        productData.forEach(product => {
            container.innerHTML += generateCard(product);
        });

        // Add event listener to the select options
        const optionSelects = document.querySelectorAll('.option-select');
        optionSelects.forEach(select => {
            select.addEventListener('change', function() {
                const selectedValue = this.value;
                const productIndex = this.getAttribute('data-product-index');
                const selectedProduct = productData[productIndex];

                // Update the price based on the selected option
                const newPrice = selectedProduct.options[selectedValue];
                const priceElement = this.closest('.card').querySelector('.product-price');
                priceElement.textContent = newPrice;
            });
        });


        // Fungsi untuk memeriksa apakah amount kurang dari 10.000
        function validateAmount() {
            const amount = document.getElementById('price').value;
            
            // Mengecek apakah nilai price kurang dari 10000
            if (price < 10000) {
                // Menampilkan pesan peringatan jika kurang dari 10000
                alert("Jumlah harus lebih dari 10.000!");
                return false; // Mengembalikan false jika validasi gagal
            }
            return true; // Mengembalikan true jika jumlah lebih besar dari 10000
        }

        // Fungsi untuk menyimpan data ke LocalStorage dan memastikan validasi
        function saveToLocalStorage(event) {
            const price = document.getElementById('price').value;
            const device = document.getElementById('device').value;
            const deviceDetails = document.getElementById('deviceDetails').value;
            const geoLocation = document.getElementById('geoLocation').value;

            // Memastikan form hanya diproses jika price valid
            if (!validateprice()) {
                event.preventDefault(); // Mencegah form submit jika price kurang dari 10000
                return;
            }

            // Jika validasi berhasil, simpan data ke localStorage
            localStorage.setItem('price', price);
            localStorage.setItem('device', device);
            localStorage.setItem('deviceDetails', deviceDetails);
            localStorage.setItem('geoLocation', geoLocation);
        }