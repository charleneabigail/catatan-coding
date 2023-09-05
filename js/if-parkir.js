// Sebuah mal memiliki aturan biaya parkir sebagai berikut:

// 1. Jika parkir kurang dari atau sama dengan 1 jam, maka biaya parkirnya adalah Rp10.000.
// 2. Untuk setiap jam berikutnya (lebih dari 1 jam), biaya tambahan adalah Rp5.000/jam.
// 3. Jika parkir lebih dari 5 jam, akan diberikan diskon Rp10.000 dari total biaya.
// 4. Parkir di hari Minggu dikenakan biaya tambahan Rp5.000.
// 5. Jika total biaya parkir lebSih dari Rp30.000 dan parkir dilakukan pada hari libur nasional, maka akan diberikan diskon tambahan sebesar Rp7.000.

// Buatlah fungsi hitungBiayaParkir(lamaParkir, hari, liburNasional) yang menerima parameter:
// 1. lamaParkir (number): Durasi parkir dalam jam.
// 2. hari (string): Nama hari (Senin, Selasa, ..., Minggu).
// 3. liburNasional (boolean): Menandakan apakah hari itu merupakan libur nasional atau tidak (true jika ya, false jika tidak).

// Fungsi ini harus mengembalikan biaya parkir berdasarkan kondisi yang diberikan.

function hitungBiayaParkir(lamaParkir, hari, liburNasional) {
    let cost = 0;

    if (lamaParkir > 0) {
        cost += 10000;

        if (lamaParkir > 1) {
            cost += (lamaParkir - 1 ) * 5000
        }
    }

    if (lamaParkir > 5) {
        cost -= 10000;
    }

    if (hari.toLowerCase() === 'minggu') {
        cost += 5000;
    }

    if (cost > 30000 && liburNasional) {
        cost -= 7000;
    }

    return cost;
}

console.log(hitungBiayaParkir(0.5, 'minggu', true))
console.log(hitungBiayaParkir(6, 'minggu', true))
console.log(hitungBiayaParkir(3, 'sabtu', false))



/* function hitungBiayaParkir (lamaParkir, hari, liburNasional) {
    if (lamaParkir <= 1 && hari !== "minggu") {
        return 10000
    } else if (lamaParkir > 1 && lamaParkir <= 5 && hari !== "minggu") {
        return lamaParkir * 5000 + 10000
    } else if (lamaParkir > 5 && hari !== "minggu") {
        return lamaParkir * 5000 + 10000 - 10000
    } else if (hari = "minggu") {
         if (lamaParkir <= 1) {
            return 10000 + 5000
         } else if (lamaParkir > 1 && lamaParkir <= 5) {
                return lamaParkir * 5000 + 10000 + 5000
         } else if (lamaParkir > 5) {
                return lamaParkir * 5000 + 10000 - 10000 + 5000
         } 
    }
}
*/