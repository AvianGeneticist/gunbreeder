var gunStatsBase = {
    //Raw gun characteristics
    gunType: 0,
    rawDamage: 0,
    rawROF: 0,
    rawSpread: 0,
    rawMagCap: 0,
    rawBlastRadius: 0,
    rawProjcount: 0,
    rawReSpeed: 0,
    rawMobility: 0,
    rawWeight: 0,

    //Multipliers added by guns
    multDamage: 0,
    multROF: 0,
    multSpread: 0,
    multMagCap: 0,
    multBlastRadius: 0,
    multProjCount: 0,
    multReSpeed: 0,
    multMobility: 0,
    multWeight: 0,
}

function createParentGun() {
    gunStatsBase.gunType = Math.floor(Math.random() * 14)
    switch(gunStatsBase.gunType) {
        case 0: //Jack of all trades assault rifle stats; middle of the road everywhere.
        document.getElementById("Parent1").innerHTML = "Weapon Class: Assault Rifle"
        gunStatsBase.rawDamage = Math.floor(Math.random() * (31 - 20) + 20);
        document.getElementById("Parent1Damage").innerHTML = gunStatsBase.rawDamage + " Damage Per Shot"
        gunStatsBase.rawROF = Math.floor(Math.random() * (601 - 500) + 500);
        document.getElementById("Parent1ROF").innerHTML = gunStatsBase.rawROF + " Rounds Per Minute"
        gunStatsBase.rawMagCap = Math.floor(Math.random() * (41 - 20) + 20);
        document.getElementById("Parent1MagCap").innerHTML = gunStatsBase.rawMagCap + " Rounds Per Magazine"
        gunStatsBase.rawReSpeed = Math.floor(Math.random() * (2001 - 1000) + 1000);
        document.getElementById("Parent1ReSpeed").innerHTML = gunStatsBase.rawReSpeed + " Millisecond Reload Speed"
        gunStatsBase.rawMobility = Math.floor(Math.random() * (91 - 85) + 85);
        document.getElementById("Parent1Mobility").innerHTML = gunStatsBase.rawMobility + "% Mobility"
        gunStatsBase.rawSpread = Math.floor(Math.random() * (6 - 4) + 4);
        document.getElementById("Parent1Spread").innerHTML = gunStatsBase.rawSpread + " Degrees Maximum Spread"
        gunStatsBase.rawProjcount = 1;
        document.getElementById("Parent1ProjCount").innerHTML = gunStatsBase.rawProjcount + " Projectile Per Shot"
        gunStatsBase.rawBlastRadius = 0;
        document.getElementById("Parent1BlastRad").innerHTML = "Direct Impact Only"
        //Weight. Determines if weapons can be single- or dual-wielded. If a weapon's weight is below 50, it can be dual-wielded.
        gunStatsBase.rawWeight = Math.floor(Math.random() * (71 - 45) + 45);
        if (gunStatsBase.rawWeight >= 50) {
            document.getElementById("Parent1Weight").innerHTML = "Single-Wield"
        } else {
            document.getElementById("Parent1Weight").innerHTML = "Dual-Wield"
        }
        //Additive multipliers. Bigger = Better.
        gunStatsBase.multDamage = 1.20
        gunStatsBase.multROF = 1.20
        gunStatsBase.multBlastRadius = 1.20
        gunStatsBase.multProjCount = 1.20
        gunStatsBase.multMagCap = 1.20
        gunStatsBase.multMobility = 1.00
        //Subtractive multipliers. Smaller = Better.
        gunStatsBase.multSpread = 0.90
        gunStatsBase.multReSpeed = 1.00
        gunStatsBase.multWeight = 1.00
        break;
        case 1: //Battle rifle; higher punch with lower ROF and greater potential inaccuracy.
        document.getElementById("Parent1").innerHTML = "Weapon Class: Battle Rifle"
        gunStatsBase.rawDamage = Math.floor(Math.random() * (41 - 28) + 28);
        document.getElementById("Parent1Damage").innerHTML = gunStatsBase.rawDamage + " Damage Per Shot"
        gunStatsBase.rawROF = Math.floor(Math.random() * (501 - 350) + 350);
        document.getElementById("Parent1ROF").innerHTML = gunStatsBase.rawROF + " Rounds Per Minute"
        gunStatsBase.rawMagCap = Math.floor(Math.random() * (31 - 15) + 15);
        document.getElementById("Parent1MagCap").innerHTML = gunStatsBase.rawMagCap + " Rounds Per Magazine"
        gunStatsBase.rawReSpeed = Math.floor(Math.random() * (3001 - 1800) + 1800);
        document.getElementById("Parent1ReSpeed").innerHTML = gunStatsBase.rawReSpeed + " Millisecond Reload Speed"
        gunStatsBase.rawMobility = Math.floor(Math.random() * (86 - 80) + 80);
        document.getElementById("Parent1Mobility").innerHTML = gunStatsBase.rawMobility + "% Mobility"
        gunStatsBase.rawSpread = Math.floor(Math.random() * (7 - 4) + 4);
        document.getElementById("Parent1Spread").innerHTML = gunStatsBase.rawSpread + " Degrees Maximum Spread"
        gunStatsBase.rawProjcount = 1;
        document.getElementById("Parent1ProjCount").innerHTML = gunStatsBase.rawProjcount + " Projectile Per Shot"
        gunStatsBase.rawBlastRadius = 0;
        document.getElementById("Parent1BlastRad").innerHTML = "Direct Impact Only"
        //Weight. Determines if weapons can be single- or dual-wielded. If a weapon's weight is below 50, it can be dual-wielded.
        gunStatsBase.rawWeight = Math.floor(Math.random() * (81 - 65) + 65);
        if (gunStatsBase.rawWeight >= 50) {
            document.getElementById("Parent1Weight").innerHTML = "Single-Wield"
        } else {
            document.getElementById("Parent1Weight").innerHTML = "Dual-Wield"
        }
        //Additive multipliers. Bigger = Better.
        gunStatsBase.multDamage = 1.35
        gunStatsBase.multROF = 1.15
        gunStatsBase.multBlastRadius = 1.25
        gunStatsBase.multProjCount = 1.25
        gunStatsBase.multMagCap = 1.10
        gunStatsBase.multMobility = 1.00
        //Subtractive multipliers. Smaller = Better.
        gunStatsBase.multSpread = 1.00
        gunStatsBase.multReSpeed = 1.10
        gunStatsBase.multWeight = 1.10
        break;
        case 2: //PDW; lesser accuracy and damage than either automatic rifle type, but very fast firing and wider magazine pool.
        document.getElementById("Parent1").innerHTML = "Weapon Class: Personal Defense Weapon"
        gunStatsBase.rawDamage = Math.floor(Math.random() * (18 - 12) + 12);
        document.getElementById("Parent1Damage").innerHTML = gunStatsBase.rawDamage + " Damage Per Shot"
        gunStatsBase.rawROF = Math.floor(Math.random() * (1201 - 800) + 800);
        document.getElementById("Parent1ROF").innerHTML = gunStatsBase.rawROF + " Rounds Per Minute"
        gunStatsBase.rawMagCap = Math.floor(Math.random() * (41 - 18) + 18);
        document.getElementById("Parent1MagCap").innerHTML = gunStatsBase.rawMagCap + " Rounds Per Magazine"
        gunStatsBase.rawReSpeed = Math.floor(Math.random() * (1601 - 800) + 800);
        document.getElementById("Parent1ReSpeed").innerHTML = gunStatsBase.rawReSpeed + " Millisecond Reload Speed"
        gunStatsBase.rawMobility = Math.floor(Math.random() * (101 - 90) + 90);
        document.getElementById("Parent1Mobility").innerHTML = gunStatsBase.rawMobility + "% Mobility"
        gunStatsBase.rawSpread = Math.floor(Math.random() * (8 - 5) + 5);
        document.getElementById("Parent1Spread").innerHTML = gunStatsBase.rawSpread + " Degrees Maximum Spread"
        gunStatsBase.rawProjcount = 1;
        document.getElementById("Parent1ProjCount").innerHTML = gunStatsBase.rawProjcount + " Projectile Per Shot"
        gunStatsBase.rawBlastRadius = 0;
        document.getElementById("Parent1BlastRad").innerHTML = "Direct Impact Only"
        //Weight. Determines if weapons can be single- or dual-wielded. If a weapon's weight is below 50, it can be dual-wielded.
        gunStatsBase.rawWeight = Math.floor(Math.random() * (61 - 35) + 35);
        if (gunStatsBase.rawWeight >= 50) {
            document.getElementById("Parent1Weight").innerHTML = "Single-Wield"
        } else {
            document.getElementById("Parent1Weight").innerHTML = "Dual-Wield"
        }
        //Additive multipliers. Bigger = Better.
        gunStatsBase.multDamage = 1.10
        gunStatsBase.multROF = 1.30
        gunStatsBase.multBlastRadius = 1.10
        gunStatsBase.multProjCount = 1.00
        gunStatsBase.multMagCap = 1.10
        gunStatsBase.multMobility = 1.1
        //Subtractive multipliers. Smaller = Better
        gunStatsBase.multSpread = 1.10
        gunStatsBase.multReSpeed = 0.85
        gunStatsBase.multWeight = 0.95
        break;
        case 3: //SAW; similar traits to the assault rifle, but with deeper reserves and worse handling.
        document.getElementById("Parent1").innerHTML = "Weapon Class: Squad Automatic Weapon"
        gunStatsBase.rawDamage = Math.floor(Math.random() * (29 - 18) + 18);
        document.getElementById("Parent1Damage").innerHTML = gunStatsBase.rawDamage + " Damage Per Shot"
        gunStatsBase.rawROF = Math.floor(Math.random() * (701 - 525) + 525);
        document.getElementById("Parent1ROF").innerHTML = gunStatsBase.rawROF + " Rounds Per Minute"
        gunStatsBase.rawMagCap = Math.floor(Math.random() * (101 - 40) + 40);
        document.getElementById("Parent1MagCap").innerHTML = gunStatsBase.rawMagCap + " Rounds Per Magazine"
        gunStatsBase.rawReSpeed = Math.floor(Math.random() * (5001 - 3500) + 3500);
        document.getElementById("Parent1ReSpeed").innerHTML = gunStatsBase.rawReSpeed + " Millisecond Reload Speed"
        gunStatsBase.rawMobility = Math.floor(Math.random() * (81 - 70) + 70);
        document.getElementById("Parent1Mobility").innerHTML = gunStatsBase.rawMobility + "% Mobility"
        gunStatsBase.rawSpread = Math.floor(Math.random() * (7 - 4) + 4);
        document.getElementById("Parent1Spread").innerHTML = gunStatsBase.rawSpread + " Degrees Maximum Spread"
        gunStatsBase.rawProjcount = 1;
        document.getElementById("Parent1ProjCount").innerHTML = gunStatsBase.rawProjcount + " Projectile Per Shot"
        gunStatsBase.rawBlastRadius = 0;
        document.getElementById("Parent1BlastRad").innerHTML = "Direct Impact Only"
        //Weight. Determines if weapons can be single- or dual-wielded. If a weapon's weight is below 50, it can be dual-wielded.
        gunStatsBase.rawWeight = Math.floor(Math.random() * (81 - 65) + 65);
        if (gunStatsBase.rawWeight >= 50) {
            document.getElementById("Parent1Weight").innerHTML = "Single-Wield"
        } else {
            document.getElementById("Parent1Weight").innerHTML = "Dual-Wield"
        }
        //Additive multipliers. Bigger = Better.
        gunStatsBase.multDamage = 1.20
        gunStatsBase.multROF = 1.25
        gunStatsBase.multBlastRadius = 1.10
        gunStatsBase.multProjCount = 1.10
        gunStatsBase.multMagCap = 1.40
        gunStatsBase.multMobility = 0.90
        //Subtractive multipliers. Smaller = Better.
        gunStatsBase.multSpread = 1.15
        gunStatsBase.multReSpeed = 1.10
        gunStatsBase.multWeight = 1.10
        break;
        case 4: //LMG; to a SAW what a Battle Rifle is to an Assault Rifle. Extremely slow, but with deep reserves and good punch.
        document.getElementById("Parent1").innerHTML = "Weapon Class: Light Machine Gun"
        gunStatsBase.rawDamage = Math.floor(Math.random() * (39 - 30) + 30);
        document.getElementById("Parent1Damage").innerHTML = gunStatsBase.rawDamage + " Damage Per Shot"
        gunStatsBase.rawROF = Math.floor(Math.random() * (651 - 450) + 450);
        document.getElementById("Parent1ROF").innerHTML = gunStatsBase.rawROF + " Rounds Per Minute"
        gunStatsBase.rawMagCap = Math.floor(Math.random() * (201 - 60) + 60);
        document.getElementById("Parent1MagCap").innerHTML = gunStatsBase.rawMagCap + " Rounds Per Magazine"
        gunStatsBase.rawReSpeed = Math.floor(Math.random() * (8001 - 6000) + 6000);
        document.getElementById("Parent1ReSpeed").innerHTML = gunStatsBase.rawReSpeed + " Millisecond Reload Speed"
        gunStatsBase.rawMobility = Math.floor(Math.random() * (71 - 60) + 60);
        document.getElementById("Parent1Mobility").innerHTML = gunStatsBase.rawMobility + "% Mobility"
        gunStatsBase.rawSpread = Math.floor(Math.random() * (6 - 4) + 4);
        document.getElementById("Parent1Spread").innerHTML = gunStatsBase.rawSpread + " Degrees Maximum Spread"
        gunStatsBase.rawProjcount = 1;
        document.getElementById("Parent1ProjCount").innerHTML = gunStatsBase.rawProjcount + " Projectile Per Shot"
        gunStatsBase.rawBlastRadius = 0;
        document.getElementById("Parent1BlastRad").innerHTML = "Direct Impact Only"
        //Weight. Determines if weapons can be single- or dual-wielded. If a weapon's weight is below 50, it can be dual-wielded.
        gunStatsBase.rawWeight = Math.floor(Math.random() * (86 - 75) + 75);
        if (gunStatsBase.rawWeight >= 50) {
            document.getElementById("Parent1Weight").innerHTML = "Single-Wield"
        } else {
            document.getElementById("Parent1Weight").innerHTML = "Dual-Wield"
        }
        //Additive multipliers. Bigger = Better.
        gunStatsBase.multDamage = 1.30
        gunStatsBase.multROF = 1.15
        gunStatsBase.multBlastRadius = 1.30
        gunStatsBase.multProjCount = 1.30
        gunStatsBase.multMagCap = 1.80
        gunStatsBase.multMobility = 1.00
        //Subtractive multipliers. Smaller = Better.
        gunStatsBase.multSpread = 1.20
        gunStatsBase.multReSpeed = 1.75
        gunStatsBase.multWeight = 1.40
        break;
        case 5: //Hunting Shotgun; remarkable power and generally better precision than its automatic counterpart.
        document.getElementById("Parent1").innerHTML = "Weapon Class: Hunting Shotgun"
        gunStatsBase.rawDamage = Math.floor(Math.random() * (111 - 90) + 90);
        document.getElementById("Parent1Damage").innerHTML = gunStatsBase.rawDamage + " Total Damage Per Shot"
        gunStatsBase.rawROF = Math.floor(Math.random() * (120 - 45) + 45);
        document.getElementById("Parent1ROF").innerHTML = gunStatsBase.rawROF + " Rounds Per Minute"
        gunStatsBase.rawMagCap = Math.floor(Math.random() * (13 - 6) + 6);
        document.getElementById("Parent1MagCap").innerHTML = gunStatsBase.rawMagCap + " Rounds Per Magazine"
        gunStatsBase.rawReSpeed = Math.floor(Math.random() * (2101 - 1300) + 1300);
        document.getElementById("Parent1ReSpeed").innerHTML = gunStatsBase.rawReSpeed + " Millisecond Reload Speed"
        gunStatsBase.rawMobility = Math.floor(Math.random() * (96 - 90) + 90);
        document.getElementById("Parent1Mobility").innerHTML = gunStatsBase.rawMobility + "% Mobility"
        gunStatsBase.rawSpread = Math.floor(Math.random() * (6 - 4) + 4);
        document.getElementById("Parent1Spread").innerHTML = gunStatsBase.rawSpread + " Degrees Maximum Spread"
        gunStatsBase.rawProjcount = Math.floor(Math.random() * (13 - 8) + 8);
        document.getElementById("Parent1ProjCount").innerHTML = gunStatsBase.rawProjcount + " Projectiles Per Shot"
        gunStatsBase.rawBlastRadius = 0;
        document.getElementById("Parent1BlastRad").innerHTML = "Direct Impact Only"
        //Weight. Determines if weapons can be single- or dual-wielded. If a weapon's weight is below 50, it can be dual-wielded.
        gunStatsBase.rawWeight = Math.floor(Math.random() * (71 - 55) + 55);
        if (gunStatsBase.rawWeight >= 50) {
            document.getElementById("Parent1Weight").innerHTML = "Single-Wield"
        } else {
            document.getElementById("Parent1Weight").innerHTML = "Dual-Wield"
        }
        //Additive multipliers. Bigger = Better.
        gunStatsBase.multDamage = 1.60
        gunStatsBase.multROF = 0.90
        gunStatsBase.multBlastRadius = 0.60
        gunStatsBase.multProjCount = 1.50
        gunStatsBase.multMagCap = 0.80
        gunStatsBase.multMobility = 1.15
        //Subtractive multipliers. Smaller = Better.
        gunStatsBase.multSpread = 1.10
        gunStatsBase.multReSpeed = 0.95
        gunStatsBase.multWeight = 1.00
        break;
        case 6: //Tactical Shotgun; great power at close-mid range due to its higher ROF with larger counts of projectiles.
        document.getElementById("Parent1").innerHTML = "Weapon Class: Tactical Shotgun"
        gunStatsBase.rawDamage = Math.floor(Math.random() * (86 - 65) + 65);
        document.getElementById("Parent1Damage").innerHTML = gunStatsBase.rawDamage + " Total Damage Per Shot"
        gunStatsBase.rawROF = Math.floor(Math.random() * (210 - 100) + 100);
        document.getElementById("Parent1ROF").innerHTML = gunStatsBase.rawROF + " Rounds Per Minute"
        gunStatsBase.rawMagCap = Math.floor(Math.random() * (21 - 12) + 12);
        document.getElementById("Parent1MagCap").innerHTML = gunStatsBase.rawMagCap + " Rounds Per Magazine"
        gunStatsBase.rawReSpeed = Math.floor(Math.random() * (2101 - 1300) + 800);
        document.getElementById("Parent1ReSpeed").innerHTML = gunStatsBase.rawReSpeed + " Millisecond Reload Speed"
        gunStatsBase.rawMobility = Math.floor(Math.random() * (96 - 85) + 85);
        document.getElementById("Parent1Mobility").innerHTML = gunStatsBase.rawMobility + "% Mobility"
        gunStatsBase.rawSpread = Math.floor(Math.random() * (8 - 5) + 5);
        document.getElementById("Parent1Spread").innerHTML = gunStatsBase.rawSpread + " Degrees Maximum Spread"
        gunStatsBase.rawProjcount = Math.floor(Math.random() * (9 - 4) + 4);
        document.getElementById("Parent1ProjCount").innerHTML = gunStatsBase.rawProjcount + " Projectiles Per Shot"
        gunStatsBase.rawBlastRadius = 0;
        document.getElementById("Parent1BlastRad").innerHTML = "Direct Impact Only"
        //Weight. Determines if weapons can be single- or dual-wielded. If a weapon's weight is below 50, it can be dual-wielded.
        gunStatsBase.rawWeight = Math.floor(Math.random() * (81 - 70) + 70);
        if (gunStatsBase.rawWeight >= 50) {
            document.getElementById("Parent1Weight").innerHTML = "Single-Wield"
        } else {
            document.getElementById("Parent1Weight").innerHTML = "Dual-Wield"
        }
        //Additive multipliers. Bigger = Better.
        gunStatsBase.multDamage = 1.30
        gunStatsBase.multROF = 1.00
        gunStatsBase.multBlastRadius = 0.40
        gunStatsBase.multProjCount = 1.25
        gunStatsBase.multMagCap = 1.10
        gunStatsBase.multMobility = 1.05
        //Subtractive multipliers. Smaller = Better.
        gunStatsBase.multSpread = 1.20
        gunStatsBase.multReSpeed = 1.05
        gunStatsBase.multWeight = 1.00
        break;
        case 7: //Sniper rifle; exceptional single shot damage and precision, but poor handling and close-range performance.
        document.getElementById("Parent1").innerHTML = "Weapon Class: Sniper Rifle"
        gunStatsBase.rawDamage = Math.floor(Math.random() * (151 - 95) + 95);
        document.getElementById("Parent1Damage").innerHTML = gunStatsBase.rawDamage + " Damage Per Shot"
        gunStatsBase.rawROF = Math.floor(Math.random() * (60 - 25) + 25);
        document.getElementById("Parent1ROF").innerHTML = gunStatsBase.rawROF + " Rounds Per Minute"
        gunStatsBase.rawMagCap = Math.floor(Math.random() * (11 - 4) + 4);
        document.getElementById("Parent1MagCap").innerHTML = gunStatsBase.rawMagCap + " Rounds Per Magazine"
        gunStatsBase.rawReSpeed = Math.floor(Math.random() * (2801 - 1900) + 1800);
        document.getElementById("Parent1ReSpeed").innerHTML = gunStatsBase.rawReSpeed + " Millisecond Reload Speed"
        gunStatsBase.rawMobility = Math.floor(Math.random() * (81 - 75) + 75);
        document.getElementById("Parent1Mobility").innerHTML = gunStatsBase.rawMobility + "% Mobility"
        gunStatsBase.rawSpread = Math.floor(Math.random() * (3 - 1) + 1);
        if (gunStatsBase.rawSpread != 1) {
            document.getElementById("Parent1Spread").innerHTML = gunStatsBase.rawSpread + " Degrees Maximum Spread"
        } else {
            document.getElementById("Parent1Spread").innerHTML = gunStatsBase.rawSpread + " Degree Maximum Spread"
        }
        gunStatsBase.rawProjcount = 1;
        document.getElementById("Parent1ProjCount").innerHTML = gunStatsBase.rawProjcount + " Projectile Per Shot"
        gunStatsBase.rawBlastRadius = 0;
        document.getElementById("Parent1BlastRad").innerHTML = "Direct Impact Only"
        //Weight. Determines if weapons can be single- or dual-wielded. If a weapon's weight is below 50, it can be dual-wielded.
        gunStatsBase.rawWeight = Math.floor(Math.random() * (91 - 70) + 70);
        if (gunStatsBase.rawWeight >= 50) {
            document.getElementById("Parent1Weight").innerHTML = "Single-Wield"
        } else {
            document.getElementById("Parent1Weight").innerHTML = "Dual-Wield"
        }
        //Additive multipliers. Bigger = Better.
        gunStatsBase.multDamage = 1.80
        gunStatsBase.multROF = 0.50
        gunStatsBase.multBlastRadius = 1.30
        gunStatsBase.multProjCount = 0.60
        gunStatsBase.multMagCap = 0.80
        gunStatsBase.multMobility = 1.0
        //Subtractive multipliers. Smaller = Better.
        gunStatsBase.multSpread = 0.40
        gunStatsBase.multReSpeed = 1.00
        gunStatsBase.multWeight = 1.10
        break;
        case 8: //Marksman rifle; still high single shot damage, but fast fire rate than a sniper rifle with slightly lower accuracy.
        document.getElementById("Parent1").innerHTML = "Weapon Class: Marksman Rifle"
        gunStatsBase.rawDamage = Math.floor(Math.random() * (106 - 65) + 65);
        document.getElementById("Parent1Damage").innerHTML = gunStatsBase.rawDamage + " Damage Per Shot"
        gunStatsBase.rawROF = Math.floor(Math.random() * (251 - 150) + 150);
        document.getElementById("Parent1ROF").innerHTML = gunStatsBase.rawROF + " Rounds Per Minute"
        gunStatsBase.rawMagCap = Math.floor(Math.random() * (21 - 10) + 10);
        document.getElementById("Parent1MagCap").innerHTML = gunStatsBase.rawMagCap + " Rounds Per Magazine"
        gunStatsBase.rawReSpeed = Math.floor(Math.random() * (2501 - 1600) + 1600);
        document.getElementById("Parent1ReSpeed").innerHTML = gunStatsBase.rawReSpeed + " Millisecond Reload Speed"
        gunStatsBase.rawMobility = Math.floor(Math.random() * (86 - 80) + 80);
        document.getElementById("Parent1Mobility").innerHTML = gunStatsBase.rawMobility + "% Mobility"
        gunStatsBase.rawSpread = Math.floor(Math.random() * (4 - 2) + 2);
        document.getElementById("Parent1Spread").innerHTML = gunStatsBase.rawSpread + " Degrees Maximum Spread"
        gunStatsBase.rawProjcount = 1;
        document.getElementById("Parent1ProjCount").innerHTML = gunStatsBase.rawProjcount + " Projectile Per Shot"
        gunStatsBase.rawBlastRadius = 0;
        document.getElementById("Parent1BlastRad").innerHTML = "Direct Impact Only"
        //Weight. Determines if weapons can be single- or dual-wielded. If a weapon's weight is below 50, it can be dual-wielded.
        gunStatsBase.rawWeight = Math.floor(Math.random() * (81 - 70) + 70);
        if (gunStatsBase.rawWeight >= 50) {
            document.getElementById("Parent1Weight").innerHTML = "Single-Wield"
        } else {
            document.getElementById("Parent1Weight").innerHTML = "Dual-Wield"
        }
        //Additive multipliers. Bigger = Better.
        gunStatsBase.multDamage = 1.50
        gunStatsBase.multROF = 1.05
        gunStatsBase.multBlastRadius = 1.30
        gunStatsBase.multProjCount = 0.90
        gunStatsBase.multMagCap = 1.10
        gunStatsBase.multMobility = 1.05
        //Subtractive multipliers. Smaller = Better.
        gunStatsBase.multSpread = 1.10
        gunStatsBase.multReSpeed = 0.95
        gunStatsBase.multWeight = 1.00
        break;
        case 9: //Anti-materiel rifle. Even less wieldly than the sniper rifle, but devastating on hit with a chance to have a blast radius.
        document.getElementById("Parent1").innerHTML = "Weapon Class: Anti-Materiel Rifle"
        gunStatsBase.rawDamage = Math.floor(Math.random() * (201 - 135) + 135);
        document.getElementById("Parent1Damage").innerHTML = gunStatsBase.rawDamage + " Damage Per Shot"
        gunStatsBase.rawROF = Math.floor(Math.random() * (50 - 15) + 15);
        document.getElementById("Parent1ROF").innerHTML = gunStatsBase.rawROF + " Rounds Per Minute"
        gunStatsBase.rawMagCap = Math.floor(Math.random() * (9 - 1) + 1);
        if (gunStatsBase.rawMagCap == 1) {
            document.getElementById("Parent1MagCap").innerHTML = "Single-Shot"
        } else {
            document.getElementById("Parent1MagCap").innerHTML = gunStatsBase.rawMagCap + " Rounds Per Magazine"
        }
        gunStatsBase.rawReSpeed = Math.floor(Math.random() * (3601 - 2200) + 2200);
        document.getElementById("Parent1ReSpeed").innerHTML = gunStatsBase.rawReSpeed + " Millisecond Reload Speed"
        gunStatsBase.rawMobility = Math.floor(Math.random() * (76 - 65) + 65);
        document.getElementById("Parent1Mobility").innerHTML = gunStatsBase.rawMobility + "% Mobility"
        gunStatsBase.rawSpread = Math.floor(Math.random() * (4 - 2) + 2);
        document.getElementById("Parent1Spread").innerHTML = gunStatsBase.rawSpread + " Degrees Maximum Spread"
        gunStatsBase.rawProjcount = 1;
        document.getElementById("Parent1ProjCount").innerHTML = gunStatsBase.rawProjcount + " Projectile Per Shot"
        gunStatsBase.rawBlastRadius = Math.floor(Math.random() * (3 - 0) + 0);
        if (gunStatsBase.rawBlastRadius == 0) {
            document.getElementById("Parent1BlastRad").innerHTML = "Direct Impact Only"
        } else {
            document.getElementById("Parent1BlastRad").innerHTML = gunStatsBase.rawBlastRadius + " Meter Blast Radius"
        }
        //Weight. Determines if weapons can be single- or dual-wielded. If a weapon's weight is below 50, it can be dual-wielded.
        gunStatsBase.rawWeight = Math.floor(Math.random() * (96 - 85) + 85);
        if (gunStatsBase.rawWeight >= 50) {
            document.getElementById("Parent1Weight").innerHTML = "Single-Wield"
        } else {
            document.getElementById("Parent1Weight").innerHTML = "Dual-Wield"
        }
        //Additive multipliers. Bigger = Better.
        gunStatsBase.multDamage = 2.20
        gunStatsBase.multROF = 0.70
        gunStatsBase.multBlastRadius = 1.80
        gunStatsBase.multProjCount = 0.50
        gunStatsBase.multMagCap = 0.50
        gunStatsBase.multMobility = 0.85
        //Subtractive multipliers. Smaller = Better.
        gunStatsBase.multSpread = 1.10
        gunStatsBase.multReSpeed = 0.95
        gunStatsBase.multWeight = 1.30
        break;
        case 10: //Grenade Launcher; not precise, but hee hoo big boom.
        document.getElementById("Parent1").innerHTML = "Weapon Class: Grenade Launcher"
        gunStatsBase.rawDamage = Math.floor(Math.random() * (226 - 170) + 170);
        document.getElementById("Parent1Damage").innerHTML = gunStatsBase.rawDamage + " Damage Per Shot"
        gunStatsBase.rawROF = Math.floor(Math.random() * (60 - 20) + 20);
        document.getElementById("Parent1ROF").innerHTML = gunStatsBase.rawROF + " Rounds Per Minute"
        gunStatsBase.rawMagCap = Math.floor(Math.random() * (7 - 1) + 1);
        if (gunStatsBase.rawMagCap == 1) {
            document.getElementById("Parent1MagCap").innerHTML = "Single-Shot"
        } else {
            document.getElementById("Parent1MagCap").innerHTML = gunStatsBase.rawMagCap + " Rounds Per Magazine"
        }
        gunStatsBase.rawReSpeed = Math.floor(Math.random() * (6001 - 4200) + 4200);
        document.getElementById("Parent1ReSpeed").innerHTML = gunStatsBase.rawReSpeed + " Millisecond Reload Speed"
        gunStatsBase.rawMobility = Math.floor(Math.random() * (71 - 65) + 65);
        document.getElementById("Parent1Mobility").innerHTML = gunStatsBase.rawMobility + "% Mobility"
        gunStatsBase.rawSpread = Math.floor(Math.random() * (6 - 3) + 3);
        document.getElementById("Parent1Spread").innerHTML = gunStatsBase.rawSpread + " Degrees Maximum Spread"
        gunStatsBase.rawProjcount = 1;
        document.getElementById("Parent1ProjCount").innerHTML = gunStatsBase.rawProjcount + " Projectile Per Shot"
        gunStatsBase.rawBlastRadius = Math.floor(Math.random() * (6 - 2) + 2);
        document.getElementById("Parent1BlastRad").innerHTML = gunStatsBase.rawBlastRadius + " Meter Blast Radius"
        //Weight. Determines if weapons can be single- or dual-wielded. If a weapon's weight is below 50, it can be dual-wielded.
        gunStatsBase.rawWeight = Math.floor(Math.random() * (86 - 80) + 80);
        if (gunStatsBase.rawWeight >= 50) {
            document.getElementById("Parent1Weight").innerHTML = "Single-Wield"
        } else {
            document.getElementById("Parent1Weight").innerHTML = "Dual-Wield"
        }
        //Additive multipliers. Bigger = Better.
        gunStatsBase.multDamage = 1.80
        gunStatsBase.multROF = 0.70
        gunStatsBase.multBlastRadius = 2.00
        gunStatsBase.multProjCount = 0.40
        gunStatsBase.multMagCap = 0.80
        gunStatsBase.multMobility = 0.85
        //Subtractive multipliers. Smaller = Better.
        gunStatsBase.multSpread = 1.05
        gunStatsBase.multReSpeed = 1.30
        gunStatsBase.multWeight = 1.10
        case 11: //Grenade Rifle; less powerful than the launcher, but better in most other stats.
        document.getElementById("Parent1").innerHTML = "Weapon Class: Grenade Rifle"
        gunStatsBase.rawDamage = Math.floor(Math.random() * (186 - 120) + 120);
        document.getElementById("Parent1Damage").innerHTML = gunStatsBase.rawDamage + " Damage Per Shot"
        gunStatsBase.rawROF = Math.floor(Math.random() * (121 - 70) + 70);
        document.getElementById("Parent1ROF").innerHTML = gunStatsBase.rawROF + " Rounds Per Minute"
        gunStatsBase.rawMagCap = Math.floor(Math.random() * (13 - 4) + 4);
        document.getElementById("Parent1MagCap").innerHTML = gunStatsBase.rawMagCap + " Rounds Per Magazine"
        gunStatsBase.rawReSpeed = Math.floor(Math.random() * (5201 - 3600) + 3600);
        document.getElementById("Parent1ReSpeed").innerHTML = gunStatsBase.rawReSpeed + " Millisecond Reload Speed"
        gunStatsBase.rawMobility = Math.floor(Math.random() * (76 - 65) + 65);
        document.getElementById("Parent1Mobility").innerHTML = gunStatsBase.rawMobility + "% Mobility"
        gunStatsBase.rawSpread = Math.floor(Math.random() * (6 - 3) + 3);
        document.getElementById("Parent1Spread").innerHTML = gunStatsBase.rawSpread + " Degrees Maximum Spread"
        gunStatsBase.rawProjcount = 1;
        document.getElementById("Parent1ProjCount").innerHTML = gunStatsBase.rawProjcount + " Projectile Per Shot"
        gunStatsBase.rawBlastRadius = Math.floor(Math.random() * (5 - 2) + 2);
        document.getElementById("Parent1BlastRad").innerHTML = gunStatsBase.rawBlastRadius + " Meter Blast Radius"
        //Weight. Determines if weapons can be single- or dual-wielded. If a weapon's weight is below 50, it can be dual-wielded.
        gunStatsBase.rawWeight = Math.floor(Math.random() * (86 - 80) + 80);
        if (gunStatsBase.rawWeight >= 50) {
            document.getElementById("Parent1Weight").innerHTML = "Single-Wield"
        } else {
            document.getElementById("Parent1Weight").innerHTML = "Dual-Wield"
        }
        //Additive multipliers. Bigger = Better.
        gunStatsBase.multDamage = 1.50
        gunStatsBase.multROF = 0.90
        gunStatsBase.multBlastRadius = 1.60
        gunStatsBase.multProjCount = 0.40
        gunStatsBase.multMagCap = 0.95
        gunStatsBase.multMobility = 0.95
        //Subtractive multipliers. Smaller = Better.
        gunStatsBase.multSpread = 1.00
        gunStatsBase.multReSpeed = 1.20
        gunStatsBase.multWeight = 1.05
        break;
        case 12: //GPMG; heavier than the LMG.
        document.getElementById("Parent1").innerHTML = "Weapon Class: General Purpose Machine Gun"
        gunStatsBase.rawDamage = Math.floor(Math.random() * (43 - 30) + 30);
        document.getElementById("Parent1Damage").innerHTML = gunStatsBase.rawDamage + " Damage Per Shot"
        gunStatsBase.rawROF = Math.floor(Math.random() * (901 - 450) + 450);
        document.getElementById("Parent1ROF").innerHTML = gunStatsBase.rawROF + " Rounds Per Minute"
        gunStatsBase.rawMagCap = Math.floor(Math.random() * (301 - 100) + 100);
        document.getElementById("Parent1MagCap").innerHTML = gunStatsBase.rawMagCap + " Rounds Per Magazine"
        gunStatsBase.rawReSpeed = Math.floor(Math.random() * (10001 - 6000) + 6000);
        document.getElementById("Parent1ReSpeed").innerHTML = gunStatsBase.rawReSpeed + " Millisecond Reload Speed"
        gunStatsBase.rawMobility = Math.floor(Math.random() * (61 - 50) + 50);
        document.getElementById("Parent1Mobility").innerHTML = gunStatsBase.rawMobility + "% Mobility"
        gunStatsBase.rawSpread = Math.floor(Math.random() * (9 - 5) + 5);
        document.getElementById("Parent1Spread").innerHTML = gunStatsBase.rawSpread + " Degrees Maximum Spread"
        gunStatsBase.rawProjcount = 1;
        document.getElementById("Parent1ProjCount").innerHTML = gunStatsBase.rawProjcount + " Projectile Per Shot"
        gunStatsBase.rawBlastRadius = 0;
        document.getElementById("Parent1BlastRad").innerHTML = "Direct Impact Only"
        //Weight. Determines if weapons can be single- or dual-wielded. If a weapon's weight is below 50, it can be dual-wielded.
        gunStatsBase.rawWeight = Math.floor(Math.random() * (101 - 85) + 85);
        if (gunStatsBase.rawWeight >= 50) {
            document.getElementById("Parent1Weight").innerHTML = "Single-Wield"
        } else {
            document.getElementById("Parent1Weight").innerHTML = "Dual-Wield"
        }
        //Additive multipliers. Bigger = Better.
        gunStatsBase.multDamage = 1.30
        gunStatsBase.multROF = 1.20
        gunStatsBase.multBlastRadius = 1.35
        gunStatsBase.multProjCount = 1.35
        gunStatsBase.multMagCap = 2.20
        gunStatsBase.multMobility = 0.70
        //Subtractive multipliers. Smaller = Better.
        gunStatsBase.multSpread = 1.35
        gunStatsBase.multReSpeed = 1.9
        gunStatsBase.multWeight = 1.6
        break;
        case 13: //Hand Cannons; fairly high-power, but frequently dual-wieldable.
        document.getElementById("Parent1").innerHTML = "Weapon Class: Hand Cannon"
        gunStatsBase.rawDamage = Math.floor(Math.random() * (53 - 40) + 40);
        document.getElementById("Parent1Damage").innerHTML = gunStatsBase.rawDamage + " Damage Per Shot"
        gunStatsBase.rawROF = Math.floor(Math.random() * (200 - 120) + 120);
        document.getElementById("Parent1ROF").innerHTML = gunStatsBase.rawROF + " Rounds Per Minute"
        gunStatsBase.rawMagCap = Math.floor(Math.random() * (10 - 6) + 6);
        document.getElementById("Parent1MagCap").innerHTML = gunStatsBase.rawMagCap + " Rounds Per Magazine"
        gunStatsBase.rawReSpeed = Math.floor(Math.random() * (2001 - 800) + 800);
        document.getElementById("Parent1ReSpeed").innerHTML = gunStatsBase.rawReSpeed + " Millisecond Reload Speed"
        gunStatsBase.rawMobility = Math.floor(Math.random() * (91 - 80) + 80);
        document.getElementById("Parent1Mobility").innerHTML = gunStatsBase.rawMobility + "% Mobility"
        gunStatsBase.rawSpread = Math.floor(Math.random() * (5 - 2) + 2);
        document.getElementById("Parent1Spread").innerHTML = gunStatsBase.rawSpread + " Degrees Maximum Spread"
        gunStatsBase.rawProjcount = 1;
        document.getElementById("Parent1ProjCount").innerHTML = gunStatsBase.rawProjcount + " Projectile Per Shot"
        gunStatsBase.rawBlastRadius = 0;
        document.getElementById("Parent1BlastRad").innerHTML = "Direct Impact Only"
        //Weight. Determines if weapons can be single- or dual-wielded. If a weapon's weight is below 50, it can be dual-wielded.
        gunStatsBase.rawWeight = Math.floor(Math.random() * (61 - 40) + 40);
        if (gunStatsBase.rawWeight >= 50) {
            document.getElementById("Parent1Weight").innerHTML = "Single-Wield"
        } else {
            document.getElementById("Parent1Weight").innerHTML = "Dual-Wield"
        }
        //Additive multipliers. Bigger = Better.
        gunStatsBase.multDamage = 1.50
        gunStatsBase.multROF = 1.00
        gunStatsBase.multBlastRadius = 1.20
        gunStatsBase.multProjCount = 1.20
        gunStatsBase.multMagCap = 1.00
        gunStatsBase.multMobility = 1.1
        //Subtractive multipliers. Smaller = Better
        gunStatsBase.multSpread = 0.95
        gunStatsBase.multReSpeed = 1.00
        gunStatsBase.multWeight = 1.00
        break;
    }
    breedGun()
}

var gun2StatsBase = {
    //Raw gun characteristics
    guntype: 0,
    rawDamage: 0,
    rawROF: 0,
    rawSpread: 0,
    rawMagCap: 0,
    rawBlastRadius: 0,
    rawProjcount: 0,
    rawReSpeed: 0,
    rawMobility: 0,
    rawWeight: 0,

    //Multipliers added by guns
    multDamage: 0,
    multROF: 0,
    multSpread: 0,
    multMagCap: 0,
    multBlastRadius: 0,
    multProjCount: 0,
    multReSpeed: 0,
    multMobility: 0,
    multWeight: 0,
}

function createParentGun2() {
    gun2StatsBase.gunType = Math.floor(Math.random() * 14)
    switch(gun2StatsBase.gunType) {
        case 0: //Jack of all trades assault rifle stats; middle of the road everywhere.
        document.getElementById("Parent2").innerHTML = "Weapon Class: Assault Rifle"
        gun2StatsBase.rawDamage = Math.floor(Math.random() * (31 - 20) + 20);
        document.getElementById("Parent2Damage").innerHTML = gun2StatsBase.rawDamage + " Damage Per Shot"
        gun2StatsBase.rawROF = Math.floor(Math.random() * (601 - 500) + 500);
        document.getElementById("Parent2ROF").innerHTML = gun2StatsBase.rawROF + " Rounds Per Minute"
        gun2StatsBase.rawMagCap = Math.floor(Math.random() * (41 - 20) + 20);
        document.getElementById("Parent2MagCap").innerHTML = gun2StatsBase.rawMagCap + " Rounds Per Magazine"
        gun2StatsBase.rawReSpeed = Math.floor(Math.random() * (2001 - 1000) + 1000);
        document.getElementById("Parent2ReSpeed").innerHTML = gun2StatsBase.rawReSpeed + " Millisecond Reload Speed"
        gun2StatsBase.rawMobility = Math.floor(Math.random() * (91 - 85) + 85);
        document.getElementById("Parent2Mobility").innerHTML = gun2StatsBase.rawMobility + "% Mobility"
        gun2StatsBase.rawSpread = Math.floor(Math.random() * (6 - 4) + 4);
        document.getElementById("Parent2Spread").innerHTML = gun2StatsBase.rawSpread + " Degrees Maximum Spread"
        gun2StatsBase.rawProjcount = 1;
        document.getElementById("Parent2ProjCount").innerHTML = gun2StatsBase.rawProjcount + " Projectile Per Shot"
        gun2StatsBase.rawBlastRadius = 0;
        document.getElementById("Parent2BlastRad").innerHTML = "Direct Impact Only"
        //Weight. Determines if weapons can be single- or dual-wielded. If a weapon's weight is below 50, it can be dual-wielded.
        gun2StatsBase.rawWeight = Math.floor(Math.random() * (71 - 45) + 45);
        if (gun2StatsBase.rawWeight >= 50) {
            document.getElementById("Parent2Weight").innerHTML = "Single-Wield"
        } else {
            document.getElementById("Parent2Weight").innerHTML = "Dual-Wield"
        }
        //Additive multipliers. Bigger = Better.
        gun2StatsBase.multDamage = 1.20
        gun2StatsBase.multROF = 1.20
        gun2StatsBase.multBlastRadius = 1.20
        gun2StatsBase.multProjCount = 1.20
        gun2StatsBase.multMagCap = 1.20
        gun2StatsBase.multMobility = 1.00
        //Subtractive multipliers. Smaller = Better.
        gun2StatsBase.multSpread = 0.90
        gun2StatsBase.multReSpeed = 1.00
        gun2StatsBase.multWeight = 1.00
        break;
        case 1: //Battle rifle; higher punch with lower ROF and greater potential inaccuracy.
        document.getElementById("Parent2").innerHTML = "Weapon Class: Battle Rifle"
        gun2StatsBase.rawDamage = Math.floor(Math.random() * (41 - 28) + 28);
        document.getElementById("Parent2Damage").innerHTML = gun2StatsBase.rawDamage + " Damage Per Shot"
        gun2StatsBase.rawROF = Math.floor(Math.random() * (501 - 350) + 350);
        document.getElementById("Parent2ROF").innerHTML = gun2StatsBase.rawROF + " Rounds Per Minute"
        gun2StatsBase.rawMagCap = Math.floor(Math.random() * (31 - 15) + 15);
        document.getElementById("Parent2MagCap").innerHTML = gun2StatsBase.rawMagCap + " Rounds Per Magazine"
        gun2StatsBase.rawReSpeed = Math.floor(Math.random() * (3001 - 1800) + 1800);
        document.getElementById("Parent2ReSpeed").innerHTML = gun2StatsBase.rawReSpeed + " Millisecond Reload Speed"
        gun2StatsBase.rawMobility = Math.floor(Math.random() * (86 - 80) + 80);
        document.getElementById("Parent2Mobility").innerHTML = gun2StatsBase.rawMobility + "% Mobility"
        gun2StatsBase.rawSpread = Math.floor(Math.random() * (7 - 4) + 4);
        document.getElementById("Parent2Spread").innerHTML = gun2StatsBase.rawSpread + " Degrees Maximum Spread"
        gun2StatsBase.rawProjcount = 1;
        document.getElementById("Parent2ProjCount").innerHTML = gun2StatsBase.rawProjcount + " Projectile Per Shot"
        gun2StatsBase.rawBlastRadius = 0;
        document.getElementById("Parent2BlastRad").innerHTML = "Direct Impact Only"
        //Weight. Determines if weapons can be single- or dual-wielded. If a weapon's weight is below 50, it can be dual-wielded.
        gun2StatsBase.rawWeight = Math.floor(Math.random() * (81 - 65) + 65);
        if (gun2StatsBase.rawWeight >= 50) {
            document.getElementById("Parent2Weight").innerHTML = "Single-Wield"
        } else {
            document.getElementById("Parent2Weight").innerHTML = "Dual-Wield"
        }
        //Additive multipliers. Bigger = Better.
        gun2StatsBase.multDamage = 1.35
        gun2StatsBase.multROF = 1.15
        gun2StatsBase.multBlastRadius = 1.25
        gun2StatsBase.multProjCount = 1.25
        gun2StatsBase.multMagCap = 1.10
        gun2StatsBase.multMobility = 1.00
        //Subtractive multipliers. Smaller = Better.
        gun2StatsBase.multSpread = 1.00
        gun2StatsBase.multReSpeed = 1.10
        gun2StatsBase.multWeight = 1.10
        break;
        case 2: //PDW; lesser accuracy and damage than either automatic rifle type, but very fast firing and wider magazine pool.
        document.getElementById("Parent2").innerHTML = "Weapon Class: Personal Defense Weapon"
        gun2StatsBase.rawDamage = Math.floor(Math.random() * (18 - 12) + 12);
        document.getElementById("Parent2Damage").innerHTML = gun2StatsBase.rawDamage + " Damage Per Shot"
        gun2StatsBase.rawROF = Math.floor(Math.random() * (1201 - 800) + 800);
        document.getElementById("Parent2ROF").innerHTML = gun2StatsBase.rawROF + " Rounds Per Minute"
        gun2StatsBase.rawMagCap = Math.floor(Math.random() * (41 - 18) + 18);
        document.getElementById("Parent2MagCap").innerHTML = gun2StatsBase.rawMagCap + " Rounds Per Magazine"
        gun2StatsBase.rawReSpeed = Math.floor(Math.random() * (1601 - 800) + 800);
        document.getElementById("Parent2ReSpeed").innerHTML = gun2StatsBase.rawReSpeed + " Millisecond Reload Speed"
        gun2StatsBase.rawMobility = Math.floor(Math.random() * (101 - 90) + 90);
        document.getElementById("Parent2Mobility").innerHTML = gun2StatsBase.rawMobility + "% Mobility"
        gun2StatsBase.rawSpread = Math.floor(Math.random() * (8 - 5) + 5);
        document.getElementById("Parent2Spread").innerHTML = gun2StatsBase.rawSpread + " Degrees Maximum Spread"
        gun2StatsBase.rawProjcount = 1;
        document.getElementById("Parent2ProjCount").innerHTML = gun2StatsBase.rawProjcount + " Projectile Per Shot"
        gun2StatsBase.rawBlastRadius = 0;
        document.getElementById("Parent2BlastRad").innerHTML = "Direct Impact Only"
        //Weight. Determines if weapons can be single- or dual-wielded. If a weapon's weight is below 50, it can be dual-wielded.
        gun2StatsBase.rawWeight = Math.floor(Math.random() * (61 - 35) + 35);
        if (gun2StatsBase.rawWeight >= 50) {
            document.getElementById("Parent2Weight").innerHTML = "Single-Wield"
        } else {
            document.getElementById("Parent2Weight").innerHTML = "Dual-Wield"
        }
        //Additive multipliers. Bigger = Better.
        gun2StatsBase.multDamage = 1.10
        gun2StatsBase.multROF = 1.30
        gun2StatsBase.multBlastRadius = 1.10
        gun2StatsBase.multProjCount = 1.00
        gun2StatsBase.multMagCap = 1.10
        gun2StatsBase.multMobility = 1.1
        //Subtractive multipliers. Smaller = Better
        gun2StatsBase.multSpread = 1.10
        gun2StatsBase.multReSpeed = 0.85
        gun2StatsBase.multWeight = 0.95
        break;
        case 3: //SAW; similar traits to the assault rifle, but with deeper reserves and worse handling.
        document.getElementById("Parent2").innerHTML = "Weapon Class: Squad Automatic Weapon"
        gun2StatsBase.rawDamage = Math.floor(Math.random() * (29 - 18) + 18);
        document.getElementById("Parent2Damage").innerHTML = gun2StatsBase.rawDamage + " Damage Per Shot"
        gun2StatsBase.rawROF = Math.floor(Math.random() * (701 - 525) + 525);
        document.getElementById("Parent2ROF").innerHTML = gun2StatsBase.rawROF + " Rounds Per Minute"
        gun2StatsBase.rawMagCap = Math.floor(Math.random() * (101 - 40) + 40);
        document.getElementById("Parent2MagCap").innerHTML = gun2StatsBase.rawMagCap + " Rounds Per Magazine"
        gun2StatsBase.rawReSpeed = Math.floor(Math.random() * (5001 - 3500) + 3500);
        document.getElementById("Parent2ReSpeed").innerHTML = gun2StatsBase.rawReSpeed + " Millisecond Reload Speed"
        gun2StatsBase.rawMobility = Math.floor(Math.random() * (81 - 70) + 70);
        document.getElementById("Parent2Mobility").innerHTML = gun2StatsBase.rawMobility + "% Mobility"
        gun2StatsBase.rawSpread = Math.floor(Math.random() * (7 - 4) + 4);
        document.getElementById("Parent2Spread").innerHTML = gun2StatsBase.rawSpread + " Degrees Maximum Spread"
        gun2StatsBase.rawProjcount = 1;
        document.getElementById("Parent2ProjCount").innerHTML = gun2StatsBase.rawProjcount + " Projectile Per Shot"
        gun2StatsBase.rawBlastRadius = 0;
        document.getElementById("Parent2BlastRad").innerHTML = "Direct Impact Only"
        //Weight. Determines if weapons can be single- or dual-wielded. If a weapon's weight is below 50, it can be dual-wielded.
        gun2StatsBase.rawWeight = Math.floor(Math.random() * (81 - 65) + 65);
        if (gun2StatsBase.rawWeight >= 50) {
            document.getElementById("Parent2Weight").innerHTML = "Single-Wield"
        } else {
            document.getElementById("Parent2Weight").innerHTML = "Dual-Wield"
        }
        //Additive multipliers. Bigger = Better.
        gun2StatsBase.multDamage = 1.20
        gun2StatsBase.multROF = 1.25
        gun2StatsBase.multBlastRadius = 1.10
        gun2StatsBase.multProjCount = 1.10
        gun2StatsBase.multMagCap = 1.40
        gun2StatsBase.multMobility = 0.90
        //Subtractive multipliers. Smaller = Better.
        gun2StatsBase.multSpread = 1.15
        gun2StatsBase.multReSpeed = 1.10
        gun2StatsBase.multWeight = 1.10
        break;
        case 4: //LMG; to a SAW what a Battle Rifle is to an Assault Rifle. Extremely slow, but with deep reserves and good punch.
        document.getElementById("Parent2").innerHTML = "Weapon Class: Light Machine Gun"
        gun2StatsBase.rawDamage = Math.floor(Math.random() * (39 - 30) + 30);
        document.getElementById("Parent2Damage").innerHTML = gun2StatsBase.rawDamage + " Damage Per Shot"
        gun2StatsBase.rawROF = Math.floor(Math.random() * (651 - 450) + 450);
        document.getElementById("Parent2ROF").innerHTML = gun2StatsBase.rawROF + " Rounds Per Minute"
        gun2StatsBase.rawMagCap = Math.floor(Math.random() * (201 - 60) + 60);
        document.getElementById("Parent2MagCap").innerHTML = gun2StatsBase.rawMagCap + " Rounds Per Magazine"
        gun2StatsBase.rawReSpeed = Math.floor(Math.random() * (8001 - 6000) + 6000);
        document.getElementById("Parent2ReSpeed").innerHTML = gun2StatsBase.rawReSpeed + " Millisecond Reload Speed"
        gun2StatsBase.rawMobility = Math.floor(Math.random() * (71 - 60) + 60);
        document.getElementById("Parent2Mobility").innerHTML = gun2StatsBase.rawMobility + "% Mobility"
        gun2StatsBase.rawSpread = Math.floor(Math.random() * (6 - 4) + 4);
        document.getElementById("Parent2Spread").innerHTML = gun2StatsBase.rawSpread + " Degrees Maximum Spread"
        gun2StatsBase.rawProjcount = 1;
        document.getElementById("Parent2ProjCount").innerHTML = gun2StatsBase.rawProjcount + " Projectile Per Shot"
        gun2StatsBase.rawBlastRadius = 0;
        document.getElementById("Parent2BlastRad").innerHTML = "Direct Impact Only"
        //Weight. Determines if weapons can be single- or dual-wielded. If a weapon's weight is below 50, it can be dual-wielded.
        gun2StatsBase.rawWeight = Math.floor(Math.random() * (86 - 75) + 75);
        if (gun2StatsBase.rawWeight >= 50) {
            document.getElementById("Parent2Weight").innerHTML = "Single-Wield"
        } else {
            document.getElementById("Parent2Weight").innerHTML = "Dual-Wield"
        }
        //Additive multipliers. Bigger = Better.
        gun2StatsBase.multDamage = 1.30
        gun2StatsBase.multROF = 1.15
        gun2StatsBase.multBlastRadius = 1.30
        gun2StatsBase.multProjCount = 1.30
        gun2StatsBase.multMagCap = 1.80
        gun2StatsBase.multMobility = 1.00
        //Subtractive multipliers. Smaller = Better.
        gun2StatsBase.multSpread = 1.20
        gun2StatsBase.multReSpeed = 1.75
        gun2StatsBase.multWeight = 1.40
        break;
        case 5: //Hunting Shotgun; remarkable power and generally better precision than its automatic counterpart.
        document.getElementById("Parent2").innerHTML = "Weapon Class: Hunting Shotgun"
        gun2StatsBase.rawDamage = Math.floor(Math.random() * (111 - 90) + 90);
        document.getElementById("Parent2Damage").innerHTML = gun2StatsBase.rawDamage + " Total Damage Per Shot"
        gun2StatsBase.rawROF = Math.floor(Math.random() * (120 - 45) + 45);
        document.getElementById("Parent2ROF").innerHTML = gun2StatsBase.rawROF + " Rounds Per Minute"
        gun2StatsBase.rawMagCap = Math.floor(Math.random() * (13 - 6) + 6);
        document.getElementById("Parent2MagCap").innerHTML = gun2StatsBase.rawMagCap + " Rounds Per Magazine"
        gun2StatsBase.rawReSpeed = Math.floor(Math.random() * (2101 - 1300) + 1300);
        document.getElementById("Parent2ReSpeed").innerHTML = gun2StatsBase.rawReSpeed + " Millisecond Reload Speed"
        gun2StatsBase.rawMobility = Math.floor(Math.random() * (96 - 90) + 90);
        document.getElementById("Parent2Mobility").innerHTML = gun2StatsBase.rawMobility + "% Mobility"
        gun2StatsBase.rawSpread = Math.floor(Math.random() * (6 - 4) + 4);
        document.getElementById("Parent2Spread").innerHTML = gun2StatsBase.rawSpread + " Degrees Maximum Spread"
        gun2StatsBase.rawProjcount = Math.floor(Math.random() * (13 - 8) + 8);
        document.getElementById("Parent2ProjCount").innerHTML = gun2StatsBase.rawProjcount + " Projectiles Per Shot"
        gun2StatsBase.rawBlastRadius = 0;
        document.getElementById("Parent2BlastRad").innerHTML = "Direct Impact Only"
        //Weight. Determines if weapons can be single- or dual-wielded. If a weapon's weight is below 50, it can be dual-wielded.
        gun2StatsBase.rawWeight = Math.floor(Math.random() * (71 - 55) + 55);
        if (gun2StatsBase.rawWeight >= 50) {
            document.getElementById("Parent2Weight").innerHTML = "Single-Wield"
        } else {
            document.getElementById("Parent2Weight").innerHTML = "Dual-Wield"
        }
        //Additive multipliers. Bigger = Better.
        gun2StatsBase.multDamage = 1.60
        gun2StatsBase.multROF = 0.90
        gun2StatsBase.multBlastRadius = 0.60
        gun2StatsBase.multProjCount = 1.50
        gun2StatsBase.multMagCap = 0.80
        gun2StatsBase.multMobility = 1.15
        //Subtractive multipliers. Smaller = Better.
        gun2StatsBase.multSpread = 1.10
        gun2StatsBase.multReSpeed = 0.95
        gun2StatsBase.multWeight = 1.00
        break;
        case 6: //Tactical Shotgun; great power at close-mid range due to its higher ROF with larger counts of projectiles.
        document.getElementById("Parent2").innerHTML = "Weapon Class: Tactical Shotgun"
        gun2StatsBase.rawDamage = Math.floor(Math.random() * (86 - 65) + 65);
        document.getElementById("Parent2Damage").innerHTML = gun2StatsBase.rawDamage + " Total Damage Per Shot"
        gun2StatsBase.rawROF = Math.floor(Math.random() * (210 - 100) + 100);
        document.getElementById("Parent2ROF").innerHTML = gun2StatsBase.rawROF + " Rounds Per Minute"
        gun2StatsBase.rawMagCap = Math.floor(Math.random() * (21 - 12) + 12);
        document.getElementById("Parent2MagCap").innerHTML = gun2StatsBase.rawMagCap + " Rounds Per Magazine"
        gun2StatsBase.rawReSpeed = Math.floor(Math.random() * (2101 - 1300) + 800);
        document.getElementById("Parent2ReSpeed").innerHTML = gun2StatsBase.rawReSpeed + " Millisecond Reload Speed"
        gun2StatsBase.rawMobility = Math.floor(Math.random() * (96 - 85) + 85);
        document.getElementById("Parent2Mobility").innerHTML = gun2StatsBase.rawMobility + "% Mobility"
        gun2StatsBase.rawSpread = Math.floor(Math.random() * (8 - 5) + 5);
        document.getElementById("Parent2Spread").innerHTML = gun2StatsBase.rawSpread + " Degrees Maximum Spread"
        gun2StatsBase.rawProjcount = Math.floor(Math.random() * (9 - 4) + 4);
        document.getElementById("Parent2ProjCount").innerHTML = gun2StatsBase.rawProjcount + " Projectiles Per Shot"
        gun2StatsBase.rawBlastRadius = 0;
        document.getElementById("Parent2BlastRad").innerHTML = "Direct Impact Only"
        //Weight. Determines if weapons can be single- or dual-wielded. If a weapon's weight is below 50, it can be dual-wielded.
        gun2StatsBase.rawWeight = Math.floor(Math.random() * (81 - 70) + 70);
        if (gun2StatsBase.rawWeight >= 50) {
            document.getElementById("Parent2Weight").innerHTML = "Single-Wield"
        } else {
            document.getElementById("Parent2Weight").innerHTML = "Dual-Wield"
        }
        //Additive multipliers. Bigger = Better.
        gun2StatsBase.multDamage = 1.30
        gun2StatsBase.multROF = 1.00
        gun2StatsBase.multBlastRadius = 0.40
        gun2StatsBase.multProjCount = 1.25
        gun2StatsBase.multMagCap = 1.10
        gun2StatsBase.multMobility = 1.05
        //Subtractive multipliers. Smaller = Better.
        gun2StatsBase.multSpread = 1.20
        gun2StatsBase.multReSpeed = 1.05
        gun2StatsBase.multWeight = 1.00
        break;
        case 7: //Sniper rifle; exceptional single shot damage and precision, but poor handling and close-range performance.
        document.getElementById("Parent2").innerHTML = "Weapon Class: Sniper Rifle"
        gun2StatsBase.rawDamage = Math.floor(Math.random() * (151 - 95) + 95);
        document.getElementById("Parent2Damage").innerHTML = gun2StatsBase.rawDamage + " Damage Per Shot"
        gun2StatsBase.rawROF = Math.floor(Math.random() * (60 - 25) + 25);
        document.getElementById("Parent2ROF").innerHTML = gun2StatsBase.rawROF + " Rounds Per Minute"
        gun2StatsBase.rawMagCap = Math.floor(Math.random() * (11 - 4) + 4);
        document.getElementById("Parent2MagCap").innerHTML = gun2StatsBase.rawMagCap + " Rounds Per Magazine"
        gun2StatsBase.rawReSpeed = Math.floor(Math.random() * (2801 - 1900) + 1800);
        document.getElementById("Parent2ReSpeed").innerHTML = gun2StatsBase.rawReSpeed + " Millisecond Reload Speed"
        gun2StatsBase.rawMobility = Math.floor(Math.random() * (81 - 75) + 75);
        document.getElementById("Parent2Mobility").innerHTML = gun2StatsBase.rawMobility + "% Mobility"
        gun2StatsBase.rawSpread = Math.floor(Math.random() * (3 - 1) + 1);
        if (gun2StatsBase.rawSpread != 1) {
            document.getElementById("Parent2Spread").innerHTML = gun2StatsBase.rawSpread + " Degrees Maximum Spread"
        } else {
            document.getElementById("Parent2Spread").innerHTML = gun2StatsBase.rawSpread + " Degree Maximum Spread"
        }
        gun2StatsBase.rawProjcount = 1;
        document.getElementById("Parent2ProjCount").innerHTML = gun2StatsBase.rawProjcount + " Projectile Per Shot"
        gun2StatsBase.rawBlastRadius = 0;
        document.getElementById("Parent2BlastRad").innerHTML = "Direct Impact Only"
        //Weight. Determines if weapons can be single- or dual-wielded. If a weapon's weight is below 50, it can be dual-wielded.
        gun2StatsBase.rawWeight = Math.floor(Math.random() * (91 - 70) + 70);
        if (gun2StatsBase.rawWeight >= 50) {
            document.getElementById("Parent2Weight").innerHTML = "Single-Wield"
        } else {
            document.getElementById("Parent2Weight").innerHTML = "Dual-Wield"
        }
        //Additive multipliers. Bigger = Better.
        gun2StatsBase.multDamage = 1.80
        gun2StatsBase.multROF = 0.50
        gun2StatsBase.multBlastRadius = 1.30
        gun2StatsBase.multProjCount = 0.60
        gun2StatsBase.multMagCap = 0.80
        gun2StatsBase.multMobility = 1.0
        //Subtractive multipliers. Smaller = Better.
        gun2StatsBase.multSpread = 0.40
        gun2StatsBase.multReSpeed = 1.00
        gun2StatsBase.multWeight = 1.10
        break;
        case 8: //Marksman rifle; still high single shot damage, but fast fire rate than a sniper rifle with slightly lower accuracy.
        document.getElementById("Parent2").innerHTML = "Weapon Class: Marksman Rifle"
        gun2StatsBase.rawDamage = Math.floor(Math.random() * (106 - 65) + 65);
        document.getElementById("Parent2Damage").innerHTML = gun2StatsBase.rawDamage + " Damage Per Shot"
        gun2StatsBase.rawROF = Math.floor(Math.random() * (251 - 150) + 150);
        document.getElementById("Parent2ROF").innerHTML = gun2StatsBase.rawROF + " Rounds Per Minute"
        gun2StatsBase.rawMagCap = Math.floor(Math.random() * (21 - 10) + 10);
        document.getElementById("Parent2MagCap").innerHTML = gun2StatsBase.rawMagCap + " Rounds Per Magazine"
        gun2StatsBase.rawReSpeed = Math.floor(Math.random() * (2501 - 1600) + 1600);
        document.getElementById("Parent2ReSpeed").innerHTML = gun2StatsBase.rawReSpeed + " Millisecond Reload Speed"
        gun2StatsBase.rawMobility = Math.floor(Math.random() * (86 - 80) + 80);
        document.getElementById("Parent2Mobility").innerHTML = gun2StatsBase.rawMobility + "% Mobility"
        gun2StatsBase.rawSpread = Math.floor(Math.random() * (4 - 2) + 2);
        document.getElementById("Parent2Spread").innerHTML = gun2StatsBase.rawSpread + " Degrees Maximum Spread"
        gun2StatsBase.rawProjcount = 1;
        document.getElementById("Parent2ProjCount").innerHTML = gun2StatsBase.rawProjcount + " Projectile Per Shot"
        gun2StatsBase.rawBlastRadius = 0;
        document.getElementById("Parent2BlastRad").innerHTML = "Direct Impact Only"
        //Weight. Determines if weapons can be single- or dual-wielded. If a weapon's weight is below 50, it can be dual-wielded.
        gun2StatsBase.rawWeight = Math.floor(Math.random() * (81 - 70) + 70);
        if (gun2StatsBase.rawWeight >= 50) {
            document.getElementById("Parent2Weight").innerHTML = "Single-Wield"
        } else {
            document.getElementById("Parent2Weight").innerHTML = "Dual-Wield"
        }
        //Additive multipliers. Bigger = Better.
        gun2StatsBase.multDamage = 1.50
        gun2StatsBase.multROF = 1.05
        gun2StatsBase.multBlastRadius = 1.30
        gun2StatsBase.multProjCount = 0.90
        gun2StatsBase.multMagCap = 1.10
        gun2StatsBase.multMobility = 1.05
        //Subtractive multipliers. Smaller = Better.
        gun2StatsBase.multSpread = 1.10
        gun2StatsBase.multReSpeed = 0.95
        gun2StatsBase.multWeight = 1.00
        break;
        case 9: //Anti-materiel rifle. Even less wieldly than the sniper rifle, but devastating on hit with a chance to have a blast radius.
        document.getElementById("Parent2").innerHTML = "Weapon Class: Anti-Materiel Rifle"
        gun2StatsBase.rawDamage = Math.floor(Math.random() * (201 - 135) + 135);
        document.getElementById("Parent2Damage").innerHTML = gun2StatsBase.rawDamage + " Damage Per Shot"
        gun2StatsBase.rawROF = Math.floor(Math.random() * (50 - 15) + 15);
        document.getElementById("Parent2ROF").innerHTML = gun2StatsBase.rawROF + " Rounds Per Minute"
        gun2StatsBase.rawMagCap = Math.floor(Math.random() * (9 - 1) + 1);
        if (gun2StatsBase.rawMagCap == 1) {
            document.getElementById("Parent2MagCap").innerHTML = "Single-Shot"
        } else {
            document.getElementById("Parent2MagCap").innerHTML = gun2StatsBase.rawMagCap + " Rounds Per Magazine"
        }
        gun2StatsBase.rawReSpeed = Math.floor(Math.random() * (3601 - 2200) + 2200);
        document.getElementById("Parent2ReSpeed").innerHTML = gun2StatsBase.rawReSpeed + " Millisecond Reload Speed"
        gun2StatsBase.rawMobility = Math.floor(Math.random() * (76 - 65) + 65);
        document.getElementById("Parent2Mobility").innerHTML = gun2StatsBase.rawMobility + "% Mobility"
        gun2StatsBase.rawSpread = Math.floor(Math.random() * (4 - 2) + 2);
        document.getElementById("Parent2Spread").innerHTML = gun2StatsBase.rawSpread + " Degrees Maximum Spread"
        gun2StatsBase.rawProjcount = 1;
        document.getElementById("Parent2ProjCount").innerHTML = gun2StatsBase.rawProjcount + " Projectile Per Shot"
        gun2StatsBase.rawBlastRadius = Math.floor(Math.random() * (3 - 0) + 0);
        if (gun2StatsBase.rawBlastRadius == 0) {
            document.getElementById("Parent2BlastRad").innerHTML = "Direct Impact Only"
        } else {
            document.getElementById("Parent2BlastRad").innerHTML = gun2StatsBase.rawBlastRadius + " Meter Blast Radius"
        }
        //Weight. Determines if weapons can be single- or dual-wielded. If a weapon's weight is below 50, it can be dual-wielded.
        gun2StatsBase.rawWeight = Math.floor(Math.random() * (96 - 85) + 85);
        if (gun2StatsBase.rawWeight >= 50) {
            document.getElementById("Parent2Weight").innerHTML = "Single-Wield"
        } else {
            document.getElementById("Parent2Weight").innerHTML = "Dual-Wield"
        }
        //Additive multipliers. Bigger = Better.
        gun2StatsBase.multDamage = 2.20
        gun2StatsBase.multROF = 0.70
        gun2StatsBase.multBlastRadius = 1.80
        gun2StatsBase.multProjCount = 0.50
        gun2StatsBase.multMagCap = 0.50
        gun2StatsBase.multMobility = 0.85
        //Subtractive multipliers. Smaller = Better.
        gun2StatsBase.multSpread = 1.10
        gun2StatsBase.multReSpeed = 0.95
        gun2StatsBase.multWeight = 1.30
        break;
        case 10: //Grenade Launcher; not precise, but hee hoo big boom.
        document.getElementById("Parent2").innerHTML = "Weapon Class: Grenade Launcher"
        gun2StatsBase.rawDamage = Math.floor(Math.random() * (226 - 170) + 170);
        document.getElementById("Parent2Damage").innerHTML = gun2StatsBase.rawDamage + " Damage Per Shot"
        gun2StatsBase.rawROF = Math.floor(Math.random() * (60 - 20) + 20);
        document.getElementById("Parent2ROF").innerHTML = gun2StatsBase.rawROF + " Rounds Per Minute"
        gun2StatsBase.rawMagCap = Math.floor(Math.random() * (7 - 1) + 1);
        if (gun2StatsBase.rawMagCap == 1) {
            document.getElementById("Parent2MagCap").innerHTML = "Single-Shot"
        } else {
            document.getElementById("Parent2MagCap").innerHTML = gun2StatsBase.rawMagCap + " Rounds Per Magazine"
        }
        gun2StatsBase.rawReSpeed = Math.floor(Math.random() * (6001 - 4200) + 4200);
        document.getElementById("Parent2ReSpeed").innerHTML = gun2StatsBase.rawReSpeed + " Millisecond Reload Speed"
        gun2StatsBase.rawMobility = Math.floor(Math.random() * (71 - 65) + 65);
        document.getElementById("Parent2Mobility").innerHTML = gun2StatsBase.rawMobility + "% Mobility"
        gun2StatsBase.rawSpread = Math.floor(Math.random() * (6 - 3) + 3);
        document.getElementById("Parent2Spread").innerHTML = gun2StatsBase.rawSpread + " Degrees Maximum Spread"
        gun2StatsBase.rawProjcount = 1;
        document.getElementById("Parent2ProjCount").innerHTML = gun2StatsBase.rawProjcount + " Projectile Per Shot"
        gun2StatsBase.rawBlastRadius = Math.floor(Math.random() * (6 - 2) + 2);
        document.getElementById("Parent2BlastRad").innerHTML = gun2StatsBase.rawBlastRadius + " Meter Blast Radius"
        //Weight. Determines if weapons can be single- or dual-wielded. If a weapon's weight is below 50, it can be dual-wielded.
        gun2StatsBase.rawWeight = Math.floor(Math.random() * (86 - 80) + 80);
        if (gun2StatsBase.rawWeight >= 50) {
            document.getElementById("Parent2Weight").innerHTML = "Single-Wield"
        } else {
            document.getElementById("Parent2Weight").innerHTML = "Dual-Wield"
        }
        //Additive multipliers. Bigger = Better.
        gun2StatsBase.multDamage = 1.80
        gun2StatsBase.multROF = 0.70
        gun2StatsBase.multBlastRadius = 2.00
        gun2StatsBase.multProjCount = 0.40
        gun2StatsBase.multMagCap = 0.80
        gun2StatsBase.multMobility = 0.85
        //Subtractive multipliers. Smaller = Better.
        gun2StatsBase.multSpread = 1.05
        gun2StatsBase.multReSpeed = 1.30
        gun2StatsBase.multWeight = 1.10
        case 11: //Grenade Rifle; less powerful than the launcher, but better in most other stats.
        document.getElementById("Parent2").innerHTML = "Weapon Class: Grenade Rifle"
        gun2StatsBase.rawDamage = Math.floor(Math.random() * (186 - 120) + 120);
        document.getElementById("Parent2Damage").innerHTML = gun2StatsBase.rawDamage + " Damage Per Shot"
        gun2StatsBase.rawROF = Math.floor(Math.random() * (121 - 70) + 70);
        document.getElementById("Parent2ROF").innerHTML = gun2StatsBase.rawROF + " Rounds Per Minute"
        gun2StatsBase.rawMagCap = Math.floor(Math.random() * (13 - 4) + 4);
        document.getElementById("Parent2MagCap").innerHTML = gun2StatsBase.rawMagCap + " Rounds Per Magazine"
        gun2StatsBase.rawReSpeed = Math.floor(Math.random() * (5201 - 3600) + 3600);
        document.getElementById("Parent2ReSpeed").innerHTML = gun2StatsBase.rawReSpeed + " Millisecond Reload Speed"
        gun2StatsBase.rawMobility = Math.floor(Math.random() * (76 - 65) + 65);
        document.getElementById("Parent2Mobility").innerHTML = gun2StatsBase.rawMobility + "% Mobility"
        gun2StatsBase.rawSpread = Math.floor(Math.random() * (6 - 3) + 3);
        document.getElementById("Parent2Spread").innerHTML = gun2StatsBase.rawSpread + " Degrees Maximum Spread"
        gun2StatsBase.rawProjcount = 1;
        document.getElementById("Parent2ProjCount").innerHTML = gun2StatsBase.rawProjcount + " Projectile Per Shot"
        gun2StatsBase.rawBlastRadius = Math.floor(Math.random() * (5 - 2) + 2);
        document.getElementById("Parent2BlastRad").innerHTML = gun2StatsBase.rawBlastRadius + " Meter Blast Radius"
        //Weight. Determines if weapons can be single- or dual-wielded. If a weapon's weight is below 50, it can be dual-wielded.
        gun2StatsBase.rawWeight = Math.floor(Math.random() * (86 - 80) + 80);
        if (gun2StatsBase.rawWeight >= 50) {
            document.getElementById("Parent2Weight").innerHTML = "Single-Wield"
        } else {
            document.getElementById("Parent2Weight").innerHTML = "Dual-Wield"
        }
        //Additive multipliers. Bigger = Better.
        gun2StatsBase.multDamage = 1.50
        gun2StatsBase.multROF = 0.90
        gun2StatsBase.multBlastRadius = 1.60
        gun2StatsBase.multProjCount = 0.40
        gun2StatsBase.multMagCap = 0.95
        gun2StatsBase.multMobility = 0.95
        //Subtractive multipliers. Smaller = Better.
        gun2StatsBase.multSpread = 1.00
        gun2StatsBase.multReSpeed = 1.20
        gun2StatsBase.multWeight = 1.05
        break;
        case 12: //GPMG; heavier than the LMG.
        document.getElementById("Parent2").innerHTML = "Weapon Class: General Purpose Machine Gun"
        gun2StatsBase.rawDamage = Math.floor(Math.random() * (43 - 30) + 30);
        document.getElementById("Parent2Damage").innerHTML = gun2StatsBase.rawDamage + " Damage Per Shot"
        gun2StatsBase.rawROF = Math.floor(Math.random() * (901 - 450) + 450);
        document.getElementById("Parent2ROF").innerHTML = gun2StatsBase.rawROF + " Rounds Per Minute"
        gun2StatsBase.rawMagCap = Math.floor(Math.random() * (301 - 100) + 100);
        document.getElementById("Parent2MagCap").innerHTML = gun2StatsBase.rawMagCap + " Rounds Per Magazine"
        gun2StatsBase.rawReSpeed = Math.floor(Math.random() * (10001 - 6000) + 6000);
        document.getElementById("Parent2ReSpeed").innerHTML = gun2StatsBase.rawReSpeed + " Millisecond Reload Speed"
        gun2StatsBase.rawMobility = Math.floor(Math.random() * (61 - 50) + 50);
        document.getElementById("Parent2Mobility").innerHTML = gun2StatsBase.rawMobility + "% Mobility"
        gun2StatsBase.rawSpread = Math.floor(Math.random() * (9 - 5) + 5);
        document.getElementById("Parent2Spread").innerHTML = gun2StatsBase.rawSpread + " Degrees Maximum Spread"
        gun2StatsBase.rawProjcount = 1;
        document.getElementById("Parent2ProjCount").innerHTML = gun2StatsBase.rawProjcount + " Projectile Per Shot"
        gun2StatsBase.rawBlastRadius = 0;
        document.getElementById("Parent2BlastRad").innerHTML = "Direct Impact Only"
        //Weight. Determines if weapons can be single- or dual-wielded. If a weapon's weight is below 50, it can be dual-wielded.
        gun2StatsBase.rawWeight = Math.floor(Math.random() * (101 - 85) + 85);
        if (gun2StatsBase.rawWeight >= 50) {
            document.getElementById("Parent2Weight").innerHTML = "Single-Wield"
        } else {
            document.getElementById("Parent2Weight").innerHTML = "Dual-Wield"
        }
        //Additive multipliers. Bigger = Better.
        gun2StatsBase.multDamage = 1.30
        gun2StatsBase.multROF = 1.20
        gun2StatsBase.multBlastRadius = 1.35
        gun2StatsBase.multProjCount = 1.35
        gun2StatsBase.multMagCap = 2.20
        gun2StatsBase.multMobility = 0.70
        //Subtractive multipliers. Smaller = Better.
        gun2StatsBase.multSpread = 1.35
        gun2StatsBase.multReSpeed = 1.9
        gun2StatsBase.multWeight = 1.6
        break;
        case 13: //Hand Cannons; fairly high-power, but frequently dual-wieldable.
        document.getElementById("Parent2").innerHTML = "Weapon Class: Hand Cannon"
        gun2StatsBase.rawDamage = Math.floor(Math.random() * (53 - 40) + 40);
        document.getElementById("Parent2Damage").innerHTML = gun2StatsBase.rawDamage + " Damage Per Shot"
        gun2StatsBase.rawROF = Math.floor(Math.random() * (200 - 120) + 120);
        document.getElementById("Parent2ROF").innerHTML = gun2StatsBase.rawROF + " Rounds Per Minute"
        gun2StatsBase.rawMagCap = Math.floor(Math.random() * (10 - 6) + 6);
        document.getElementById("Parent2MagCap").innerHTML = gun2StatsBase.rawMagCap + " Rounds Per Magazine"
        gun2StatsBase.rawReSpeed = Math.floor(Math.random() * (2001 - 800) + 800);
        document.getElementById("Parent2ReSpeed").innerHTML = gun2StatsBase.rawReSpeed + " Millisecond Reload Speed"
        gun2StatsBase.rawMobility = Math.floor(Math.random() * (91 - 80) + 80);
        document.getElementById("Parent2Mobility").innerHTML = gun2StatsBase.rawMobility + "% Mobility"
        gun2StatsBase.rawSpread = Math.floor(Math.random() * (5 - 2) + 2);
        document.getElementById("Parent2Spread").innerHTML = gun2StatsBase.rawSpread + " Degrees Maximum Spread"
        gun2StatsBase.rawProjcount = 1;
        document.getElementById("Parent2ProjCount").innerHTML = gun2StatsBase.rawProjcount + " Projectile Per Shot"
        gun2StatsBase.rawBlastRadius = 0;
        document.getElementById("Parent2BlastRad").innerHTML = "Direct Impact Only"
        //Weight. Determines if weapons can be single- or dual-wielded. If a weapon's weight is below 50, it can be dual-wielded.
        gun2StatsBase.rawWeight = Math.floor(Math.random() * (61 - 40) + 40);
        if (gun2StatsBase.rawWeight >= 50) {
            document.getElementById("Parent2Weight").innerHTML = "Single-Wield"
        } else {
            document.getElementById("Parent2Weight").innerHTML = "Dual-Wield"
        }
        //Additive multipliers. Bigger = Better.
        gun2StatsBase.multDamage = 1.50
        gun2StatsBase.multROF = 1.00
        gun2StatsBase.multBlastRadius = 1.20
        gun2StatsBase.multProjCount = 1.20
        gun2StatsBase.multMagCap = 1.00
        gun2StatsBase.multMobility = 1.1
        //Subtractive multipliers. Smaller = Better
        gun2StatsBase.multSpread = 0.95
        gun2StatsBase.multReSpeed = 1.00
        gun2StatsBase.multWeight = 1.00
        break;
    }
    breedGun()
}

var childStatsBase = {
    //Raw gun characteristics
    rawDamage: 0,
    rawROF: 0,
    rawSpread: 0,
    rawMagCap: 0,
    rawBlastRadius: 0,
    rawProjcount: 0,
    rawReSpeed: 0,
    rawMobility: 0,
    rawWeight: 0,
}

var childType = {
    //Determines weapon class for the child
    prefix: "",
    suffix: "",
}

function breedGun() {
    switch(gunStatsBase.gunType) {
        case 0:
            childType.prefix = "Assault"
        break;
        case 1:
            childType.prefix = "Battle"
        break;
        case 2:
            childType.prefix = "Squad Automatic"
        break;
        case 3:
            childType.prefix = "Personal Defense"
        break;
        case 4:
            childType.prefix = "Suppressive"
        break;
        case 5:
            childType.prefix = "Hunter's"
        break;
        case 6:
            childType.prefix = "Tactical"
        break;
        case 7:
            childType.prefix = "Precision"
        break;
        case 8:
            childType.prefix = "Marksman's"
        break;
        case 9:
            childType.prefix = "Anti-Materiel"
        break;
        case 10:
            childType.prefix = "High-Explosive"
        break;
        case 11:
            childType.prefix = "Ballistic"
        break;
        case 12:
            childType.prefix = "General Purpose"
        break;
        case 13:
            childType.prefix = "Heavy"
        break;
    }
    switch(gun2StatsBase.gunType) {
        case 0:
            childType.suffix = "Rifle"
        break;
        case 1:
            childType.suffix = "Rifle"
        break;
        case 2:
            childType.suffix = "Weapon"
        break;
        case 3:
            childType.suffix = "Weapon"
        break;
        case 4:
            childType.suffix = "Machine Gun"
        break;
        case 5:
            childType.suffix = "Shotgun"
        break;
        case 6:
            childType.suffix = "Shotgun"
        break;
        case 7:
            childType.suffix = "Sniper Rifle"
        break;
        case 8:
            childType.suffix = "Rifle"
        break;
        case 9:
            childType.suffix = "Rifle"
        break;
        case 10:
            childType.suffix = "Grenade Launcher"
        break;
        case 11:
            childType.suffix = "Grenade Rifle"
        break;
        case 12:
            childType.suffix = "Machine Gun"
        break;
        case 13:
            childType.suffix = "Hand Cannon"
        break;
    }
    document.getElementById("Child").innerHTML = "Weapon Class: " + childType.prefix + " " + childType.suffix
    childStatsBase.rawDamage = (((gunStatsBase.rawDamage + gun2StatsBase.rawDamage) / 2) * ((gunStatsBase.multDamage + gun2StatsBase.multDamage) / 2));
    childStatsBase.rawDamage = Math.ceil(childStatsBase.rawDamage)
    document.getElementById("ChildDamage").innerHTML = childStatsBase.rawDamage + " Damage Per Shot"
    childStatsBase.rawROF = (((gunStatsBase.rawROF + gun2StatsBase.rawROF) / 2) * ((gunStatsBase.multROF + gun2StatsBase.multROF) / 2));
    childStatsBase.rawROF = Math.ceil(childStatsBase.rawROF)
    document.getElementById("ChildROF").innerHTML = childStatsBase.rawROF + " Rounds Per Minute"
    childStatsBase.rawSpread = (((gunStatsBase.rawSpread + gun2StatsBase.rawSpread) / 2) * ((gunStatsBase.multSpread + gun2StatsBase.multSpread) / 2));
    childStatsBase.rawSpread = Math.ceil(childStatsBase.rawSpread)
    document.getElementById("ChildSpread").innerHTML = childStatsBase.rawSpread + " Degrees Spread"
    childStatsBase.rawMagCap = (((gunStatsBase.rawMagCap + gun2StatsBase.rawMagCap) / 2) * ((gunStatsBase.multMagCap + gun2StatsBase.multMagCap) / 2));
    childStatsBase.rawMagCap = Math.ceil(childStatsBase.rawMagCap)
    document.getElementById("ChildMagCap").innerHTML = childStatsBase.rawMagCap + " Rounds Per Magazine"
    childStatsBase.rawBlastRadius = (((gunStatsBase.rawBlastRadius + gun2StatsBase.rawBlastRadius) / 2) * ((gunStatsBase.multBlastRadius + gun2StatsBase.multBlastRadius) / 2));
    childStatsBase.rawBlastRadius = Math.floor(childStatsBase.rawBlastRadius)
    if (childStatsBase.rawBlastRadius == 0) {
        document.getElementById("ChildBlastRad").innerHTML = "Direct Impact Only"
    } else {
        document.getElementById("ChildBlastRad").innerHTML = childStatsBase.rawBlastRadius + " Meter Blast Radius"
    }
    childStatsBase.rawProjcount = (((gunStatsBase.rawProjcount + gun2StatsBase.rawProjcount) / 2) * ((gunStatsBase.multProjCount + gun2StatsBase.multProjCount) / 2));
    childStatsBase.rawProjcount = Math.floor(childStatsBase.rawProjcount)
    if (childStatsBase.rawProjcount <= 1) {
        childStatsBase.rawProjcount = 1
    }
    if (childStatsBase.rawProjcount == 1) {
        document.getElementById("ChildProjCount").innerHTML = childStatsBase.rawProjcount + " Projectile Per Shot"
    } else {
        document.getElementById("ChildProjCount").innerHTML = childStatsBase.rawProjcount + " Projectiles Per Shot"
    }
    childStatsBase.rawReSpeed = (((gunStatsBase.rawReSpeed + gun2StatsBase.rawReSpeed) / 2) * ((gunStatsBase.multReSpeed + gun2StatsBase.multReSpeed) / 2));
    childStatsBase.rawReSpeed = Math.ceil(childStatsBase.rawReSpeed)
    document.getElementById("ChildReSpeed").innerHTML = childStatsBase.rawReSpeed + " Millisecond Reload Speed"
    childStatsBase.rawMobility = (((gunStatsBase.rawMobility + gun2StatsBase.rawMobility) / 2) * ((gunStatsBase.multMobility + gun2StatsBase.multMobility) / 2));
    childStatsBase.rawMobility = Math.ceil(childStatsBase.rawMobility)
    document.getElementById("ChildMobility").innerHTML = childStatsBase.rawMobility + "% Mobility"
    childStatsBase.rawWeight = (((gunStatsBase.rawWeight + gun2StatsBase.rawWeight) / 2) * ((gunStatsBase.multWeight + gun2StatsBase.multWeight) / 2));
    childStatsBase.rawWeight = Math.ceil(childStatsBase.rawWeight)
        if (gun2StatsBase.rawWeight >= 50) {
            document.getElementById("ChildWeight").innerHTML = "Single-Wield"
        } else {
            document.getElementById("ChildWeight").innerHTML = "Dual-Wield"
        }
}