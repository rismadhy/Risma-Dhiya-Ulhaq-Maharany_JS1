console.log("===== Program JavaScript Risma Dhiya =====");

// 1. if, else
console.log("\n1. if, else:");
let suhuTubuh = 38; //dalam derajat Celsius
if (suhuTubuh >= 38)
{
    console.log("Anda mungkin mengalami demam.");
} 
else if (suhuTubuh >= 37 && suhuTubuh < 38)
{
    console.log("Suhu tubuh sedikit tinggi.");
} 
else 
{
    console.log("Suhu tubuh normal.");
}


// 2. nested if
console.log("\n2. Nested if:");
let angka = 10;
if (angka > 0) 
{
    if (angka % 2 === 0) 
    {
        console.log("Angka adalah bilangan genap.");
    } 
    else 
    {
        console.log("Angka adalah bilangan ganjil.");
    }
} 
else 
{
    console.log("Angka harus lebih besar dari 0.");
}


// 3. switch case
console.log("\n3. Switch Case:");
let day = 3;
let dayName;
switch (day) 
{
    case 1:
        dayName = "Minggu";
        break;
    case 2:
        dayName = "Senin";
        break;
    case 3:
        dayName = "Selasa";
        break;
    case 4:
        dayName = "Rabu";
        break;
    case 5:
        dayName = "Kamis";
        break;
    case 6:
        dayName = "Jumat";
        break;
    case 7:
        dayName = "Sabtu";
        break;
    default:
        dayName = "Hari tidak valid";
}
console.log("Hari ini adalah " + dayName + ".");


// 4. for statement
console.log("\n4. For Statement:");
console.log("Tabel perkalian 5");
for (let i = 1; i <= 10; i++) 
{
    let hasil = i * 5;
    console.log(`5 x ${i} = ${hasil}`);
}


// 5. while
console.log("\n5. While Loop:");
console.log("Deret Fibonacci:");
let a = 0, b = 1;
console.log(a);
console.log(b);
while (a + b <= 1000) 
{
    let temp = a + b;
    console.log(temp);
    a = b;
    b = temp;
}


// 6. do while
console.log("\n6. Do-While Loop:");
console.log("Perulangan menggunakan do-while:");
let count = 1;
do 
{
    console.log(count);
    count++;
} 
while (count <= 5);


// 7. function
console.log("\n7. Penggunaan Function:");
function tambah(a, b) 
{
    return a + b;
}

let hasilTambah = tambah(3, 5);
console.log("Hasil penjumlahan: " + hasilTambah);
